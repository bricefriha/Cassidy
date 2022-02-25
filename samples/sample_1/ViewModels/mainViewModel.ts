import { Gtk } from "../../../code/src";

export class MainViewModel {
  private _quit: Function;
  public get quit(): Function {
    return this._quit;
  }
  public set quit(v: Function) {
    this._quit = v;
  }

  private _delete: Function;
  public get delete(): Function {
    return this._delete;
  }
  public set delete(v: Function) {
    this._delete = v;
  }

  private _key: Function;
  public get key(): Function {
    return this._key;
  }
  public set key(v: Function) {
    this._key = v;
  }

  constructor() {
    this._quit = () => Gtk.mainQuit();
    this._delete = () => false;

    this._key = (keyValue: any, keyNum: number) =>
      console.log(`${keyNum} ${keyValue}`);
  }
}
