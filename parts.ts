export interface Investment {
    name: string;
    value: number;
    risklevel?: "low" | "medium" | "high";

}


export const calculateTotal = (list: Investment[]): number => {
    let total = 0;
    list.forEach((data) => {
        total = total + data.value;
    });
    return total * 1.1;
};


export const getValueList = ((list: Investment[]): number[] => {
    return list.map((data) => {
        return data.value;
    });
});


