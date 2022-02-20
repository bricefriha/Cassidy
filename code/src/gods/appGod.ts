import viewGod from "./viewGod";
import { Page } from "../objects/page";
//@ts-ignore
import fs from "fs";
//@ts-ignore
import path from "path";
//@ts-ignore
import process from "process";
//@ts-ignore
import gi from "node-gtk";

// Use GtK
import { Gtk } from "../index";
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

  constructor(dir: string) {
    this._vg = new viewGod();
    this._path = dir;

    gi.startLoop();
    Gtk.init();

    //process.cwd();
  }

  /**
   * display - Display a page
   *
   */
  public async display(viewCode: Page) {
    // Set up events
    viewCode.window.on("destroy", () => Gtk.mainQuit());
    viewCode.window.on("delete-event", () => false);

    // Get the template path
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
      //console.log(data);
      let pageTemplate = JSON.parse(data);

      // Set the size of the page
      viewCode.window.setDefaultSize(
        pageTemplate.Page.height,
        pageTemplate.Page.width
      );
      viewCode.setPosition(pageTemplate.Page.position);

      // Set the title
      viewCode.setTitle(pageTemplate.Page.title);

      // Set the content
      viewCode.setContent(pageTemplate.Page.content as Array<any>);

      viewCode.window.showAll();
      Gtk.main();
    });
  }
}
