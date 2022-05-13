const express = require('express');

const PORT = 4000;
const app = express();

app.use(express.json());

app.post('/arrays', (req, res) => {
    const { what, numbers } = req.body;
    //OR  const numbers = req.body.numbers;
    //const what = req.body.what;
   
    if (!what || !numbers) {
        return res.json({ 
            error: 'Please provide what to do with the numbers!'
         });
    }
    if (what === 'sum') {
        const sumResult = numbers.reduce((prev, curr) => prev + curr);
        return res.json({ result: sumResult });
    }
    if (what === 'multiply') {
        const multiplyResult = numbers.reduce((prev, curr) => prev * curr);
        return res.json({ result: multiplyResult });
    }
    if (what === 'double') {
        const doubleResult = numbers.map((number) => number * 2);
        return res.json({ result: doubleResult });
    }
});

app.listen(PORT, () => console.log(`Server running at port: ${PORT}`));

//OR use the below functions
// function calculateSumFromArray(arr) {
//     let sumOfNum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sumOfNum += arr[i];
//     }
//     return sumOfNum;
// }

// function calculateMultiplyFromArray(arr) {
//     let multiplyOfNum = 1;
//     for (let i = 0; i < arr.length; i++) {
//         multiplyOfNum = multiplyOfNum * arr[i];
//     }
//     return multiplyOfNum;
// }

// function calculateDoubleFromArray(arr) {
//     let resultArr = [];
//     return resultArr = arr.map((num) => num * 2);
// }