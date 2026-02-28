import { calculateTotal, Investment }  from "./parts";


const investmentlist: Investment[] = [
    {
        name: "A",
        value: 200,
        risklevel: "low"
    },
    {
        name: "B",
        value: 300,
        risklevel: "high"
    }
];

const total = calculateTotal(investmentlist);

console.log(`現在のポートフォリオ合計額は、${total}円です。`);



const lowRiskList = investmentlist.filter((data) => {
    return data.risklevel === "low";
});

console.log(lowRiskList);



const nameList = investmentlist.map((data) => {
    return data.name;
});


const valuelist = investmentlist.map((data) => {
    return data.value;
});

console.log(valuelist);