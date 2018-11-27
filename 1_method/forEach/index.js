function handlePosts() {
  const posts = [
    { id: 23, title: "js news" },
    { id: 33, title: "react learn" },
    { id: 42, title: "vue component" }
  ];

  posts.forEach(function(post) {
    console.log(post["id"] + ":" + post["title"]);
  })
}

handlePosts();