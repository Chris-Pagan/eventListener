//import "./styles.css";

/*
Add event listeners to the .expand_button buttons
*/
function expandArticleBody() {
  // your code here
  const allBtns = document.querySelectorAll(".expand_button");
  const expandArticleClickHandler = (event) =>{
    let currentArticle = allBtns.parentNode;
        
      if(allBtns.innerText === "V"){
        currentArticle.style.display = "none";
        allBtns.innerText = ">"
      } else if (allBtns.innerText === ">"){
        currentArticle.style.display = "block";
        allBtns.innerText = "V";
      }

  }
  for (let button of allBtns){
    button.addEventListener("click", expandArticleClickHandler);
  }
}

/*
Add event listeners to the .highlightBtn buttons
*/
function highlightArticle() {
  // your code here
  const allBtns = document.querySelectorAll(".highlightBtn");
    const expandArticleClickHandler = (event) =>{
    for (let btn of allBtns){
      let currentArticle = btn.parentNode.parentNode;
        
      if(btn.innerText === "V"){
        currentArticle.style.display = "none";
        btn.innerText = ">"
      } else if (btn.innerText === ">"){
        currentArticle.style.display = "block";
        btn.innerText = "V";
      }
    }
  }
  for (let button of allBtns){
    button.addEventListener("click", expandArticleClickHandler);
  }
}

function main() {
  expandArticleBody();
  highlightArticle();
}

main();