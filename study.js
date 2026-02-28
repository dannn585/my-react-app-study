var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// サンプルデータ
const investmentlist = [{
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
const getTasks = () => __awaiter(this, void 0, void 0, function* () {
    console.log("サーバーから取得中…");
    yield new Promise((resolve) => setTimeout(resolve, 2000));
    return investmentlist;
});
// データを画面に表示
const displayTasks = () => __awaiter(this, void 0, void 0, function* () {
    try {
        const tasks = yield getTasks();
        console.log("---現在の投資タスク一覧---");
        tasks.forEach((task) => {
            console.log(`[${task.risklevel}] ${task.name}: ${task.value}円`);
        });
    }
    catch (error) {
        console.error("データの取得に失敗しました…", error);
    }
});
// 実行！
displayTasks();
const numberBox = {
    content: 100
};
