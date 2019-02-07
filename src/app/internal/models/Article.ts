export class Article {
  title: string;
  description: string;
  pictureUrl: string;
  userID: string

  constructor(title: string, description: string, picUrl: string, uid: string) {
    this.title = title;
    this.description = description;
    this.pictureUrl = picUrl;
    this.userID = uid;
  }
}
