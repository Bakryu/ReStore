export default class BookstoreService {
  getBooks() {
    return [
      {
        id: 1,
        title: "Production-Ready MicroServices",
        author: "Susan J. Fowler",
      },
      {
        id: 2,
        title: "Release It",
        author: "Michael T. Nygard",
      },
    ];
  }
}