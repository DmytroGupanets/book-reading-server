const user = {
  id: "ajs123424hdk234las234234jd",
  name: "Valera LLLL",
  email: "dfdf@dsjkfj.com",
  password: "123456",
  token: "asdfsdfsdfsdf",
  isVefified: false,
  verifyToken: "sldkjfklsjdfklsdjf",
  target: {
    startDate: "1235415",
    endDate: "123123",
    books: ["bookId", "bookId2", "bookId3"],
    records: [
      {
        date: "123123",
        time: "asdfasd",
        pages: "132",
      },
      {
        date: "123123",
        time: "asdfasd",
        pages: "132",
      },
      {
        date: "123123",
        time: "asdfasd",
        pages: "132",
      },
      {
        date: "123123",
        time: "asdfasd",
        pages: "132",
      },
    ],
  },
};

const book = {
  id: "asdfsdfsdf",
  ownerId: "ajs123424hdk234las234234jd",
  name: "sdfsdf",
  pages: "sdfsdf",
  author: "sdfsdf",
  year: "sdfsdf",
  status: ["default", "inProgress", "completed"],
  resume: {
    rating: 3,
    text: "text",
  },
};

("POST api / auth / login");
("POST api / auth / register");
("POST api/ auth / logout");

("GET api / books /");
("POST api / books /");
("PATCH api / books /:booksId");

("GET api / users / current");

("PATCH api / users /: userId / target");
