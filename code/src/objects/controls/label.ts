import { Gtk } from "../../index";

export class Label {
  private _text: string;
  public get text(): string {
    return this._text;
  }
  public set text(v: string) {
    this._text = v;
  }

  constructor(win: any, text: string, angle: number) {
    this._text = text;
    // Add the label to the view
    win.add(
      new Gtk.Label({
        label: text,
        angle: angle,
      })
    );
  }
}
