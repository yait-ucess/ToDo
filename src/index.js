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
const arr4 = [10, 20];
const arr5 = [30, 40];
const arr6 = [...arr4];
// console.log(arr4, arr6);

const arr7 = [...arr4, ...arr5];
console.log(arr7);
