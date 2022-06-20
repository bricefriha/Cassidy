import { Gdk, Gtk } from "../../index";
import appGod from "../../gods/appGod";

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
  private set label(v: any) {
    this._label = v;
  }

  private _ag: appGod;
  public get ag(): appGod {
    return this._ag;
  }
  public set ag(v: appGod) {
    this._ag = v;
  }

  constructor(
    win: any,
    text: string,
    angle: number,
    colour: string,
    fontName: string,
    fontStyle: string,
    ag: appGod
  ) {
    this._ag = ag;

    this._text = text;
    this._label = new Gtk.Label({
      label: text,
      angle: angle,
    });
    //this._label.setAngle(angle ?? 0);
    this.setColour(colour);

    this.setFont(fontName, fontStyle);

    this._label;

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
  /**
   * setAngle - change the angle of the label
   * @param angle angle you want to set
   */
  public setAngle(angle: number) {
    this._label.angle(angle);
  }
  /**
   * SetFont - set th font of the Label
   * @param fontName Font name
   * @param style Font Style
   */
  public setFont(fontName: string = "Ubuntu", style: string = "Regular") {
    console.log(this.ag.fonts);
    console.log(
      this.ag.fonts.find((f: any) => {
        return (
          f.PangoFontDescription.familyName === fontName &&
          f.PangoFontDescription.styleName === style
        );
      })
    );
    this.label.overrideFont(
      this.ag.fonts.find((f: any) => {
        return (
          f.PangoFontDescription.familyName === fontName &&
          f.PangoFontDescription.styleName === style
        );
      })
    );
  }
}
