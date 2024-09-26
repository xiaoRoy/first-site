import { useEffect } from "react";

function BlogPost({ title, blogContent }) {
  useEffect(() => {
    document.title = title;
  }, [title]);
  return (
    <article>
      <h1>{title}</h1>
      <p>{blogContent}</p>
    </article>
  );
}

function showBlogPost() {
  return (
    <BlogPost
      title="First post"
      blogContent="Welcome to my cool website."
    ></BlogPost>
  );
}

export default showBlogPost;
