export class TwitterUser {
  private  _id: number;
  private  _data: any;
  private  _name: any;
  private  _screen_name: any;

  get id(): number {
    return this._id;
  }

  get data(): any {
    return this._data;
  }

  get name(): any {
    return this._name;
  }

  get screen_name(): any {
    return this._screen_name;
  }

  set data(value: any) {
    this._data = value;
  }

  set name(value: any) {
    this._name = value;
  }

  set screen_name(value: any) {
    this._screen_name = value;
  }

  set id(value: number) {
    this._id = value;
  }
}
