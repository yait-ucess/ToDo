import "./styles.css";

const onClickAdd = () => {
  //テキストボックスの値を取得し、初期化する
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  //div生成
  const div = document.createElement("div");
  div.className = "list-row";
  console.log(div);

  //pタグ生成
  const p = document.createElement("p");
  p.className = "todo-name";
  p.innerText = inputText;
  console.log(p);

  //divタグの子要素に各要素を設定
  div.appendChild(p);

  //入力したテキストを未完了リストに追加
  document.getElementById("incomplete-list").appendChild(div);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
