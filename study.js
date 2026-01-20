var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const waitThreeSeconds = () => new Promise((reject) => setTimeout(() => reject(500), 3000));
const showMoney = () => __awaiter(this, void 0, void 0, function* () {
    try {
        console.log("銀行の残高を確認中…");
        const data = yield waitThreeSeconds();
        console.log(`現在の所持金は${data}円です`);
    }
    catch (error) {
        console.log("銀行のシステムがメンテナンス中です…");
    }
    ;
});
showMoney();
