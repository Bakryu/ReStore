export default class BookstoreService {
  getBooks() {
    return [
      {
        id: 1,
        title: "Production-Ready MicroServices",
        author: "Susan J. Fowler",
        price: 250,
        coverImage:
          "https://medprosvita.com.ua/wp-content/uploads/2015/09/24.jpg",
      },
      {
        id: 2,
        title: "Release It",
        author: "Michael T. Nygard",
        price: 150,
        coverImage:
          "https://medprosvita.com.ua/wp-content/uploads/2015/09/24.jpg",
      },
    ];
  }
}
