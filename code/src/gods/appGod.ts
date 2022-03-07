import viewGod from "./viewGod";
import { Window } from "../objects/window";
//@ts-ignore
import fs from "fs";
//@ts-ignore
import path from "path";
//@ts-ignore
import process from "process";
//@ts-ignore
import gi from "node-gtk";
import ft from "freetype2";

// Use GtK
import { Cairo, Gdk, Gtk, Pango } from "../index";
//const Gtk = gi.require("Gtk", "3.0");

export default class AppGod {
  private _path: string;
  public get path(): string {
    return this._path;
  }
  public set path(v: string) {
    this._path = v;
  }

  private _vg: viewGod;
  public get vg(): viewGod {
    return this._vg;
  }
  private set vg(v: viewGod) {
    this._vg = v;
  }

  private _fonts: object[];
  public get fonts(): object[] {
    return this._fonts;
  }
  public set fonts(v: object[]) {
    this._fonts = v;
  }

  constructor(dir: string) {
    this._vg = new viewGod();
    this._path = dir;
    this._fonts = [];
    gi.startLoop();
    Gtk.init();
    Gdk.init([]);
    //process.cwd();
    console.log(this.path);

    this.checkFonts();
  }
  private async checkFonts() {
    if (this._path != "")
      // Load fonts
      fs.readFile(
        `${this._path}/Resources/fonts/Ubuntu-R.ttf`,
        async (err, buffer: Buffer) => {
          //console.log(buffer);
          if (err) throw err;
          await this.loadFont(buffer);
        }
      );
  }
  private async loadFont(buffer: Buffer) {
    //const result = {};
    const result: ft.FontFace = ft.NewMemoryFace(buffer, 0);

    //if (err) throw err;

    const face = result;
    //console.log(face.properties());

    //const font = Cairo.FontFace.createForFtFace(face);
    //console.log(font);
    let fontdesc = new Pango.FontDescription(face.properties());

    fontdesc.setFamily(face);

    this.fonts.push(fontdesc);
    console.log(fontdesc);
    console.log(this.fonts);

    //font.setSynthesize(Cairo.FtSynthesize.BOLD);
    //const synth = font.getSynthesize();
    //console.log({ font, synth, bold: 1 });
    //console.assert(synth === Cairo.FtSynthesize.BOLD);
  }
  /**
   * display - Display a window
   * @param viewCode Instance of the window you want to display
   */
  public async display(viewCode: Window) {
    viewCode.ag = this;
    // Get the template pathS
    let jsonTemp: string = path.join(
      `${this.path}/Views`,
      viewCode.getName()[0]?.toLowerCase() +
        viewCode.getName().substring(1) +
        ".json"
    );

    //let content = fs.readFileSync(d, "UTF8");
    fs.readFile(jsonTemp, "utf8", function (err: any, data: string) {
      if (err) {
        return console.log(err);
      }

      let pageTemplate = JSON.parse(data);
      if (pageTemplate.Page != null) {
        // Set the type of the window
        const winType = pageTemplate.Page.type;
        if (winType) viewCode.resetWindow(winType);

        // Set up events
        viewCode.setEvents(pageTemplate.Page);

        // Set the size of the page
        viewCode.setSize(pageTemplate.Page?.height, pageTemplate.Page?.width);

        // Set window position
        viewCode.setPosition(pageTemplate.Page.position);

        // Set Background colour
        viewCode.setBgHexColour(pageTemplate.Page.backgroundColor);

        // Set the title
        viewCode.setTitle(pageTemplate.Page.title);

        // Set the content
        viewCode.setContent(pageTemplate.Page.content as Array<any>);

        viewCode.window.showAll();
        Gtk.main();
      }
    });
  }
}
