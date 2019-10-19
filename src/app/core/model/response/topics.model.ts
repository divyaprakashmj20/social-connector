export class Topics {
  topicId: String;
  name: String;
  expressions: String[];

  public constructor(init?: Partial<Topics>) {
    Object.assign(this, init);
  }
}
