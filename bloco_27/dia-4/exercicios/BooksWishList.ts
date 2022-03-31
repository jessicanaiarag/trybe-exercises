type Book = {
  book: string;
  author: string;
  genre: string;
}

class BookWishList {
  private wishList: Book[];
  constructor(book: Book) {
    this.wishList = [];
    this.wishList.push(book);
  }

  addToWishlist(newBook: Book): void {
    this.wishList.push(newBook);
  }

  showWishList(): void {
    return console.log(this.wishList);
  }
}

const wishList = new BookWishList({book: 'The Road', author: 'Cormac McCarthy', genre: 'Dystopia'})
wishList.addToWishlist({book: 'Misery', author: 'Stephen King', genre: 'Thriller'});
wishList.showWishList();