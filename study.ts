// データ構造の定義
interface Investmenttask {
    name: string;
    value: number;
    risklevel: "low" | "medium" | "high";
}

// サンプルデータ
const investmentlist: Investmenttask[] = [{
    name: "A",
    value: 100,
    risklevel: "low"
},
{
    name: "B",
    value: 200,
    risklevel: "medium"
},
{
    name: "C",
    value: 300,
    risklevel: "high"
}];


// 非同期取得のシミュレート
const getTasks = async (): Promise<Investmenttask[]> => {
    console.log("サーバーから取得中…");
    await new Promise((resolve) => setTimeout(resolve, 2000));
    return investmentlist;
};


// データを画面に表示
const displayTasks = async () => {
    try{
        const tasks = await getTasks();
        console.log("---現在の投資タスク一覧---");

        tasks.forEach((task) => {
            console.log(`[${task.risklevel}] ${task.name}: ${task.value}円`);
        });
    }
    catch(error){
        console.error("データの取得に失敗しました…", error);
    }
};

// 実行！
displayTasks();



interface Box<T> {
    content: T;
}

const numberBox: Box<number> = {
    content: 100
};
