export class Team {
  /**
   * 野球チームを表すクラス.
   *
   */

  constructor(
    //ID
    private _id: number,
    //チーム名
    private _teamName: string,
    //本拠地
    private _home: string,
    //設立日
    private _establishmentDate: Date,
    //歴史
    private _history: string
  ) {}

  /**
   * 発足日をフォーマットして返す.
   *
   */
  get formatDate() {
    const year = this.establishmentDate.getFullYear();
    const month = this.establishmentDate.getMonth();
    const day = this.establishmentDate.getDate();
    return year + "年" + month + "月" + day + "日";
  }

  public get id(): number {
    return this._id;
  }

  public set id(id: number) {
    this._id = id;
  }

  public get teamName(): string {
    return this._teamName;
  }

  public set teamName(teamName: string) {
    this._teamName = teamName;
  }

  public get home(): string {
    return this._home;
  }

  public set home(home: string) {
    this._home = home;
  }

  public get establishmentDate(): Date {
    return this._establishmentDate;
  }

  public set establishmentDate(establishmentDate: Date) {
    this._establishmentDate = establishmentDate;
  }

  public get history(): string {
    return this._history;
  }

  public set history(history: string) {
    this._history = history;
  }
}
