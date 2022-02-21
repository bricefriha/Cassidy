import { Gdk, Gtk } from "../../index";

export class Label {
  private _text: string;
  public get text(): string {
    return this._text;
  }
  public set text(v: string) {
    this._text = v;
  }

  private _label: any;
  public get label(): any {
    return this._label;
  }
  public set label(v: any) {
    this._label = v;
  }

  constructor(win: any, text: string, angle: number, colour: string) {
    this._text = text;
    this._label = new Gtk.Label({
      label: text,
      angle: angle,
    });
    this.setColour(colour);
    // Add the label to the view
    win.add(this.label);
  }
  /**
   * setColour
     @param hex font color in hex
*/
  public setColour(hex: string) {
    // convert to rgba
    const colour = new Gdk.RGBA();
    colour.parse(hex);

    this.label.overrideColor(Gtk.StateFlags.NORMAL, colour);
  }
}
