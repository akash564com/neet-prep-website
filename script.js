const posts = [
  {
    title: "Started Physics Today!",
    content: "I began my Physics preparation with Motion in 1D. Feeling excited! 💪",
    likes: 0,
    comments: [],
  },
  {
    title: "Biology NCERT is 🔥",
    content: "Reading Cell chapter today. NCERT is gold for NEET.",
    likes: 0,
    comments: [],
  }
];

const postsContainer = document.getElementById("posts");

if (postsContainer) {
  posts.forEach((post, index) => {
    const postEl = document.createElement("div");
    postEl.classList.add("post");
    postEl.innerHTML = `
      <h3>${post.title}</h3>
      <p>${post.content}</p>
      <button onclick="likePost(${index})">❤️ Like (${post.likes})</button>
      <div>
        <input placeholder="Write comment..." id="comment-${index}" />
        <button onclick="addComment(${index})">Comment</button>
        <ul id="comments-${index}"></ul>
      </div>
    `;
    postsContainer.appendChild(postEl);
  });
}

function likePost(i) {
  posts[i].likes++;
  location.reload();
}

function addComment(i) {
  const input = document.getElementById(`comment-${i}`);
  if (input.value) {
    posts[i].comments.push(input.value);
    const list = document.getElementById(`comments-${i}`);
    const li = document.createElement("li");
    li.textContent = input.value;
    list.appendChild(li);
    input.value = "";
  }
}
