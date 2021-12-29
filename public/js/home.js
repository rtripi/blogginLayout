const blogSection = document.querySelector('.blog-section');

db.collection('blogs')
  .get()
  .then((blogs) => {
    blogs.forEach((blog) => {
      if (blog.id != decodeURI(location.pathname.split('/').pop())) {
        createBlog(blog);
      }
    });
  });

const createBlog = (blog) => {
  let data = blog.data();

  blogSection.innerHTML += `
    <div class="blog-card">
    <img src="${data.bannerImg}" alt="" class="blog-image">
      <h1 class="blog-title">${data.title.substring(0, 100) + '...'}</h1>
      <p class="blog-overview">${data.article.substring(0, 200) + '...'}</p>
      <a href="/${blog.id}" class="btn dark">leia</a>
    </div>
    `;
};
