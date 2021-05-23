import "./styles.css";

const onClickAdd = () => {
  //テキストボックスの値を取得し、初期化する
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  //div生成
  const div = document.createElement("div");
  div.className = "list-row";

  //pタグ生成
  const p = document.createElement("p");
  p.className = "todo-name";
  p.innerText = inputText;
  console.log(p);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
