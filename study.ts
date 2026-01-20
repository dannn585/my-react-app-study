
const waitThreeSeconds = () => new Promise((reject) => setTimeout(() => reject(500), 3000));

const showMoney = async () => {
    try{
        console.log("銀行の残高を確認中…");

    const data = await waitThreeSeconds();
    console.log(`現在の所持金は${data}円です`);
    }
    catch(error){
        console.log("銀行のシステムがメンテナンス中です…");
    };
};

showMoney();

