/**
 * 分割代入
 */
const myProfile = {
  name: "たかし",
  age: 20
};

const { name, age } = myProfile;
const message = `名前は${name}、${age}歳です。`;
console.log(message);
