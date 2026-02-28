async function getUsers(){
    // 1. サーバーにデータをリクエストする
    const response = await fetch('https:// ');

    // 2. 受け取ったデータを「JSON形式」に変換する
    const data = await response.json();

    // 3. 取得したデータを利用する
    console.log(data);
}