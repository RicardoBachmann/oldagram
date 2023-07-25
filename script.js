const posts = [
  {
    name: "Vincent van Gogh",
    username: "vincey1853",
    location: "Zundert, Netherlands",
    avatar: "images/avatar-vangogh.jpg",
    post: "images/post-vangogh.jpg",
    comment: "just took a few mushrooms lol",
    likes: "21,492",
  },
  {
    name: "Gustave Courbet",
    username: "gus1819",
    location: "Ornans, France",
    avatar: "images/avatar-courbet.jpg",
    post: "images/post-courbet.jpg",
    comment: "i'm feelin a bit stressed tbh",
    likes: "12,502",
  },
  {
    name: "Joseph Ducreux",
    username: "jd1735",
    location: "Paris, France",
    avatar: "images/avatar-ducreux.jpg",
    post: "images/post-ducreux.jpg",
    comment:
      "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
    likes: "15,137",
  },
];

const mainEl = document.getElementById("main-el");

function renderPostSections() {
  let sections = "";
  for (let i = 0; i < posts.length; i++) {
    sections += `
    <section class="post-content">
      <div class="container">
        <div class="user-infos">
          <img class="user-avatar" src="${posts[i].avatar}" alt="User avatar"
          <div>
              <h2 class="user-name">${posts[i].name}</h2>
              <p class="location">${posts[i].location}</p>
          </div>
        </div>
        <div class="container">
        <img class="post-image" src="${posts[i].post}" alt="Painted portrait of the user">
        </div>
        
        <div class="container">
        <div class="icons">
        <button class="btn"><img class="icon-image like-icon" src="images/icon-heart.png" alt="heart"></button>
        <button class="btn"><img class="icon-image" src="images/icon-comment.png" alt="comment on post"></button> 
        <button class="btn"><img class="icon-image" src="images/icon-dm.png" alt="dm the user"></button>      
        </div>
        <div>
        <p>${posts[i].comment}</p>
        <p>${posts[i].likes}</p>
        </div> 
        <div>
      </div>
    </section> 
    `;
  }
  mainEl.innerHTML = sections;
}

renderPostSections();
