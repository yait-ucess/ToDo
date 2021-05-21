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
const arr1 = [1, 2];

const sumFunc = (num1, num2) => console.log(num1 + num2);
sumFunc(...arr1);
