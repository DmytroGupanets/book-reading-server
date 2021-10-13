const user = {
  id: "ajs123424hdk234las234234jd",
  name: "Valera Novikov",
  email: "valera@gmail.com",
  password: "123456",
  token: "dsfsadfasdf.asdfasdfasdfasdfasdffasdfasd.fasdfsadf",
  isVefified: false,
  verifyToken: "13jkh1k2jh3jk1h2j3h1jk45hjk51",
};

const book = {
  id: "asdfsdfsdf",
  ownerId: "ajs123424hdk234las234234jd",
  name: "sdfsdf",
  pages: "sdfsdf",
  author: "sdfsdf",
  year: "sdfsdf",
  status: ["planned", "inProgress", "completed"],
  resume: {
    rating: 3,
    text: "text",
  },
};

const target = {
  target: {
    id: "sadfsdfsdfsdfsdfsdf",
    ownerId: "asdfsdfsdfsdfsdfsdfsdf",
    startDate: "20 Dec 2020",
    endDate: "29 Dec 2020",
    books: ["bookId", "bookId2", "bookId3"],
    records: [
      {
        date: "20 Dec 2020",
        time: "1100 UTC",
        pages: "132",
      },
      {
        date: "21 Dec 2020",
        time: "19:00 UTC",
        pages: "405",
      },
      {
        date: "22 Dec 2020",
        time: "21:00 UTC",
        pages: "203",
      },
    ],
  },
};

("POST api / auth / login");
("POST api / auth / register");
("GET api/ auth / logout");

("GET api / books /");
("POST api / books /");
("PATCH api / books /:booksId");

("GET api / users / current");

("POST api / targets /"); // добавление новой цели
("PATCH api / targets /: targetId"); // добавление информации в записи статистики (возвращает обновленные данные по статистике)
