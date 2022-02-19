import viewGod from "./viewGod";
import { Page } from "../objects/page";
//@ts-ignore
import fs from "fs";
//@ts-ignore
import path from "path";
//@ts-ignore
import process from "process";

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

    //process.cwd();
  }

  /**
   * display   */
  public async display(viewCode: Page) {
    console.log(viewCode.getName());
    // Get the template path
    const jsonTemp =
      this.path + this.vg.viewList[viewCode.getName()]?.substring(1);
    // console.log(
    //   viewCode.getName()[0].toLowerCase() + viewCode.getName().substring(1)
    // );
    let d: string = path.join(
      `${this.path}/Views`,
      viewCode.getName()[0]?.toLowerCase() +
        viewCode.getName().substring(1) +
        ".json"
    );
    let f = `${this.path}/Views/${viewCode
      .getName()[0]
      ?.toLowerCase()}${viewCode.getName().substring(1)}.json`;
    console.log(f);
    console.log(
      "/home/bryce/Documents/Repos/cassidy_codebase/samples/sample_1/Views/mainView.Json"
    );

    //let content = fs.readFileSync(d, "UTF8");
    fs.readFile(d, "utf8", function (err: any, data: any) {
      if (err) {
        return console.log(err);
      }
      console.log(data);
    });
    //console.log(content);

    //let pageTemplate = JSON.parse(content);
    //console.log(pageTemplate[0]);
  }
}
