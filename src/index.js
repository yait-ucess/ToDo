/**
 * 分割代入
 */
// const myProfile = {
//   name: "たかし",
//   age: 20
// };

// const { name, age } = myProfile;
// const message = `名前は${name}、${age}歳です。`;
// console.log(message);

// const myProfile = ["たかし", 20];
// const [name, age] = myProfile;
// const message = `名前は${name}、${age}歳です。`
// console.log(message);

/**
 * デフォルト値、引数など
 */
// const sayHello = (name = "たかし") => console.log(`こんにちは、${name}さん！`);
// sayHello();

/**
 * スプレッド構文　...
 */
//配列の展開
// const arr1 = [1, 2];

// const sumFunc = (num1, num2) => console.log(num1 + num2);
// sumFunc(...arr1);

//まとめる
// const arr2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...arr3] = arr2;
// console.log(num1, num2, arr3);

//配列のコピー、結合
// const arr4 = [10, 20];
// const arr5 = [30, 40];
// const arr6 = [...arr4];
// // console.log(arr4, arr6);

// const arr7 = [...arr4, ...arr5];
// console.log(arr7);

/**
 * mapやfilterを使った配列の処理
 */
// const nameArr = ["田中", "山田", "佐藤"];
// for (let index = 0; index < nameArr.length; index++ ) {
//   console.log(`${index + 1}番目は${nameArr[index]}です。`);
// }

// const nameArr2 = nameArr.map((name) => {
//   return name;
// })
// console.log(nameArr2);

// nameArr.map((name, index) => console.log(`${index + 1}番目は${name}です。`));

// const numArr = [1, 2, 3, 4, 5];
// const newNumArr = numArr.filter((num) => {
//   return num % 2 === 1;
// });
// console.log(newNumArr);

// const newNameArr = nameArr.map((name) => {
//   if (name === "佐藤") {
//     return name;
//   } else {
//     return `${name}さん`;
//   }
// });

// console.log(newNameArr);

/**
 * 三項演算子
 */
//ある条件 ? 条件がtrue : 条件がfalse
// const num = "1300";

// const formattedNum =
//   typeof num === "number" ? num.toLocaleString() : "数値を入力してください";
// console.log(formattedNum);

const checkSum = (num1, num2) => {
  return num1 + num2 > 100 ? "100を超えています。" : "許容範囲内です。";
};
console.log(checkSum(90, 9));
