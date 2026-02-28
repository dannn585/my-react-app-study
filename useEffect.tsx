useEffect(() => {
    // ここに実行したい「副作用」を書く（例：API通信）
    console.log("画面が表示されました！");
}, []); //この「第二引数」が非常に重要！


// APIからデータを取得する
import {useState, useEffect} from 'react'

function UserList(){
    const [users, setUsers] = useState([]) //データを保存するState

    useEffect(() => {
        // 1. APIからデータを取得
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => {
            // 2. 取得したデータをStateに保存
            setUsers(data)
        })
    }, []) // 最初に1回だけ実行したいので空の配列

return(
    <ul>
        {users.map(user => (
            <li key = {user.id}>{user.name}</li>
        ))}
    </ul>
)
}