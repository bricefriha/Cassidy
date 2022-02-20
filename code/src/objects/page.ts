//@ts-ignore
import gi from "node-gtk";
import { Label } from "./controls/label";
// Use GtK
import { Gtk } from "../index";
//const Gtk = gi.require("Gtk", "3.0");

export class Page {
  /**
   * Our lovely BindingContext
   */
  private _bindingContext: object;
  public get BindingContext(): object {
    return this._bindingContext;
  }
  public set BindingContext(v: object) {
    this._bindingContext = v;
  }
  /**
   * ToDo: property window being a 'any' is quite dangerous, better changing it to window type when/if possible
   */
  private _window: any;
  public get window(): any {
    return this._window;
  }
  public set window(v: any) {
    this._window = v;
  }

  constructor() {
    this._bindingContext = new Object();

    // Create a new window
    this._window = new Gtk.Window();
  }

  /**
   * getName
   */
  public getName(): string {
    return this.constructor?.name;
  }
  /**
   * setContent: Set the content of the page
   */
  public setContent(content: Array<any>) {
    // Loop component declared in the template
    for (const key of content) {
      // ToDo: forin in forof != pretty
      for (const ctlName in key)
        switch (ctlName) {
          case "Label":
            console.log(this.window);
            new Label(key.Label.text, this.window);
            break;

          default:
            break;
        }
    }
  }
}
