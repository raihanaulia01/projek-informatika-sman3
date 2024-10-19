import { articles } from "./articlesData.js";

const urlParams = new URLSearchParams(window.location.search);
const articleId = parseInt(urlParams.get('id'));
const article = articles.find(article => article.id === articleId);

const formatDate = (date) => {
  const dateObj = new Date(date);
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return dateObj.toLocaleDateString('en-US', options);
}

if (article) {
  document.getElementById("article-title").textContent = article.title;
  document.getElementById("article-author").textContent = "By " + article.author;
  document.getElementById("article-date").textContent = formatDate(article.date);
  document.getElementById("article-content").innerHTML = article.content;

  const nextButton = document.querySelector("a#next");
  const previousButton = document.querySelector("a#previous");
  if (articles.length < articleId+1) {
    nextButton.classList.add("disabled");
    nextButton.addEventListener("click", (e) => {
      e.preventDefault();
    });
  } else {
    nextButton.href = `article.html?id=${articleId+1}`;
  }

  if (articleId === 1) {
    previousButton.classList.add("disabled");
    previousButton.addEventListener("click", (e) => {
      e.preventDefault();
    });
  } else {
    previousButton.href = `article.html?id=${articleId-1}`;
  }
} else {
  document.getElementById("article-title").textContent = "Article not found";
  document.getElementById("article-author").textContent = "";
  document.getElementById("article-date").textContent = "";
  document.getElementById("article-content").innerHTML = `<span class="error">The article you are looking for does not exist.</span>`;
}
