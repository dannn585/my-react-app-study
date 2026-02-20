import {useState, useEffect} from 'react';

function UserList(){
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // --- ここにuseEffect(データ取得)が入る予定 ---
    useEffect(() => {
        // 1. データの取得を開始
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => {
            if(!response.ok){
                throw new Error('データの取得に失敗しました');
            }
            return response.json();
        })
        .then((data) => {
            // 2. 成功時の処理
            setUsers(data)
            setLoading(false)
        })
        .catch((err) => {
            // 3. 失敗時の処理
            setError(err.message)
        })
        .finally(() => {
            // 4. すべての処理が終わった時の処理
        });
    }, []); //1回だけ実行の空配列

    // 1. ローディング中の早期リターン
    if (loading){
        return <p>読み込み中…</p>;
    }

    // 2. エラー発生時の早期リターン
    if (error){
        return <p>エラーが発生しました: {error}</p>;
    }

    // 3. 正常にデータが取得できた時の表示
    return (
        <ul className = "flex flex-wrap gap-4">
            {/* ここで users を map して表示する */}
            {users.map((user: any) => (
                <li key ={user.id} 
                className = "bg-white p-4 rounded-lg shadow-md font-bold text-gray-800 hover:text-blue-600 hover:shadow-xl">
                    {user.name}
                </li>
            ))}
        </ul>
    );
}

export default UserList;

