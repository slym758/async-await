const blog = [
  { name: "blog 1", auther: "yazar 1" },
  { name: "blog 2", auther: "yazar 1" },
  { name: "blog 3", auther: "yazar 1" },
  { name: "blog 4", auther: "yazar 1" },
];

const listblog = () => {
  console.table(blog);
};
const addBlog = (newBlog) => {
  return new Promise((resolve, reject) => {
    if (newBlog) {
      blog.push(newBlog);
      resolve(blog);
    } else {
      reject("Bir hata oluştu");
    }
  });
};

const showBlog = async () => {
  try {
    await addBlog({ name: "blog 5", auther: "yazar 1" });
    listblog();
  } catch (error) {
    console.log(error);
  }
};
showBlog();
