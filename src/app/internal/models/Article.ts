export class Article {
  title: string;
  description: string;
  userID: string;
  createdAt: string;
  picUrl = '';
  downloadedUrl = '';

  constructor(title: string, description: string, uid: string) {
    this.title = title;
    this.description = description;
    this.userID = uid;
  }
}
