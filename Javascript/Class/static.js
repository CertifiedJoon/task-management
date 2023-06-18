class User {
  static staticMethod() {
    console.log(this === User);
  }
}

User.staticMethod();

class Article {
  constructor(title, date) {
    this.title = title;
    this.date = date;
  }

  static publisher = 'Joonyoung Moon';

  static createTodaysDigest() {
    // this = Article
    return new this("Today's digest", new Date());
  }

  static compare(articleA, articleB) {
    return articleA.date - articleB.date;
  }
}

let articles = [
  new Article('HTML', new Date(2019, 1, 1)),
  new Article('CSS', new Date(2019, 0, 1)),
  new Article('JavaScript', new Date(2019, 11, 1)),
];

articles.sort(Article.compare);

console.log(articles[0].title);

// inheritance of static properties and methods
class Blog extends Article {
  comment() {
    console.log(`${this.title} added comment`);
  }
}

let blogs = [
  new Blog('Blog1', new Date(2019, 1, 1)),
  new Blog('Blog2', new Date(2019, 2, 1)),
];

blogs.sort(Article.compare);
blogs[0].comment();

console.log(Blog.publisher);
