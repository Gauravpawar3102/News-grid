// element selection
const btn = document.querySelector('.btn');
const navlinks = document.querySelector('.nav-links');

const img1 = document.querySelector('.img1');
const img2 = document.querySelector('.img2');
const img3 = document.querySelector('.img3');
const img4 = document.querySelector('.img4');
const img5 = document.querySelector('.img5');
const img6 = document.querySelector('.img6');
const img7 = document.querySelector('.img7');
const img8 = document.querySelector('.img8');
let para = document.querySelector('.para');
let head1 = document.querySelector('.head1');
let head2 = document.querySelector('.head2');
let head3 = document.querySelector('.head3');
let head4 = document.querySelector('.head4');
let head5 = document.querySelector('.head5');
let head6 = document.querySelector('.head6');
let head7 = document.querySelector('.head7');
let head8 = document.querySelector('.head8');

const apikey = 'cd0ccfd7af994c9b9f17077524a0c856';
const api = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${apikey}`;

function load() {
  fetch(api)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data.articles[3].content);
      para.textContent = data.articles[6].content;
      img1.src = data.articles[0].urlToImage;
      img2.src = data.articles[1].urlToImage;
      img3.src = data.articles[2].urlToImage;
      img4.src = data.articles[3].urlToImage;
      img5.src = data.articles[4].urlToImage;
      img6.src = data.articles[5].urlToImage;
      img7.src = data.articles[6].urlToImage;
      img8.src = data.articles[8].urlToImage;
      head1.textContent = data.articles[0].title;
      head2.textContent = data.articles[1].title;
      head3.textContent = data.articles[2].title;
      head4.textContent = data.articles[3].title;
      head5.textContent = data.articles[4].title;
      head6.textContent = data.articles[5].title;
      head7.textContent = data.articles[6].title;
      head8.textContent = data.articles[7].title;
      head2.src = data.articles[1].url;
    });
}
load();

btn.addEventListener('click', function () {
  navlinks.classList.toggle('show-links');
});
