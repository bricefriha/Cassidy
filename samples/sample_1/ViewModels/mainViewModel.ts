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

  constructor() {
    this._quit = () => Gtk.mainQuit();
    this._delete = () => false;
  }
}
