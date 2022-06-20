//@ts-ignore
import gi from "node-gtk";
import { Label } from "./controls/label";
// Use GtK
import { Gdk, Gtk } from "../index";
import { ViewModelGod } from "../gods/viewModelGod";
import appGod from "../gods/appGod";

export class Window {
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
  private _ag: appGod;
  public get ag(): appGod {
    return this._ag;
  }
  public set ag(v: appGod) {
    this._ag = v;
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
    this._ag = new appGod("");
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
   * setEvents
   * @param page
   */
  public setEvents(page: Object) {
    // Move through all properties
    for (const property in page) {
      //console.log(property);
      if (property.startsWith("on")) {
        let value: any = eval("page." + property);

        // Get binding value if necessary
        value = ViewModelGod.getValue(value, this.BindingContext);

        //console.log(value);
        switch (property) {
          case "onDestroy":
            // Register the destroy event
            this.window.on("destroy", value);
            break;
          case "onDeleteEvent":
            this.window.on("delete-event", value);
            break;
          case "onKeyPressed":
            this.window.on("key-press-event", (event: any) => {
              // value(
              //   Gtk.acceleratorGetLabel(event?.keyval, event.state),
              //   event?.keyval
              // );
              return ViewModelGod.keyPress(value, event);
            });
            //this.window.on("key-press-event", value);
            break;
          default:
            break;
        }
      }
    }
  }
  /**
   * setTitle - Change the title of the window
   * @param title Title of the window (showed on the top of it)
   */
  public setTitle(title: string) {
    this.window.title = title ?? this.getName();
  }
  /**
   * setContent: Set the content of the page
   */
  public setContent(content: Array<any>) {
    //console.log(this.ag);
    // Loop component declared in the template
    for (const obj of content) {
      // ToDo: forin in forof != pretty
      for (const ctlName in obj)
        switch (ctlName) {
          case "Label":
            const lbl = obj.Label;

            // Create the label
            new Label(
              this.window,
              ViewModelGod.getValue(lbl.text, this.BindingContext),
              parseInt(
                ViewModelGod.getValue(lbl.angle, this.BindingContext) ?? 0
              ),
              ViewModelGod.getValue(lbl.textColor, this.BindingContext) ??
                "#000000",
              lbl.FontName,
              lbl.FontStyle,
              this.ag
            );
            break;

          default:
            break;
        }
    }
  }

  /**
   * setPosition
   * @param pos position
   */
  public setPosition(pos: string) {
    // I'm putting to uppercase so the user as no case constrain
    switch (pos?.toUpperCase()) {
      case "CENTER":
        this.window.setPosition(Gtk.WindowPosition.CENTER);
        break;
      case "CENTERALWAYS":
        console.log("Gtk.WindowPosition.CENTER_ALWAYS");
        this.window.setPosition(Gtk.WindowPosition.CENTER_ALWAYS);
        break;
      case "MOUSE":
        console.log("Gtk.WindowPosition.MOUSE");
        this.window.setPosition(Gtk.WindowPosition.MOUSE);
        break;
      case "NONE":
        console.log("Gtk.WindowPosition.NONE");
        this.window.setPosition(Gtk.WindowPosition.NONE);
        break;
      case "CENTERONPARENT":
        console.log("Gtk.WindowPosition.CENTER_ALWAYS");
        this.window.setPosition(Gtk.WindowPosition.CENTER_ON_PARENT);
        break;
    }
  }
  /**
   * resetWindow - Set the window
   * @param type type of the window
   * @param title title of the window
   */
  public resetWindow(type: string, title = this.window.title) {
    let typeSet: any;
    // Set the type
    // I'm converting the type to uppercase so the user as no case constrain
    switch (type.toUpperCase()) {
      case "TOPLEVEL":
        // Set the window as top level
        //this.window.type = Gtk.WindowType.TOPLEVEL;
        typeSet = Gtk.WindowType.TOPLEVEL;
        break;
      case "POPUP":
        console.log("Gtk.WindowType.POPUP");
        // Set the window as a popup
        //this.window.type = Gtk.WindowType.POPUP;
        typeSet = Gtk.WindowType.POPUP;
        break;

      default:
        console.log("default");
        typeSet = Gtk.WindowType.TOPLEVEL;
        break;
    }

    // Reinstanciate the window
    this.window = new Gtk.Window({
      title: title ?? "Cassidy Window",
      type: typeSet,
    });
  }
  /**
   * setBgColour - change the colour of the background from hexadecimal
   * @param hex hexadecimal colour
   */
  public setBgHexColour(hex: string) {
    // convert to rgba
    const colour = new Gdk.RGBA();
    if (hex) {
      colour.parse(hex);

      // Change the colour of the window
      this.window.overrideBackgroundColor(Gtk.StateFlags.NORMAL, colour);
    }
  }
  /**
   * setBgColour - change the colour of the background from rgba
   * @param red red amount
   * @param green green amount
   * @param blue blue amount
   * @param alpha alpha (optional)
   */
  public setBgRGBAColour(red: number, green: number, blue: number, alpha = 1) {
    // convert to rgba
    const colour = new Gdk.RGBA({
      red,
      green,
      blue,
      alpha,
    });

    // Change the colour of the window
    this.window.overrideBackgroundColor(Gtk.StateFlags.NORMAL, colour);
  }
  /**
   * setSize
   */
  public setSize(height: number, width: number) {
    // Set the size of the page
    this.window.setDefaultSize(width, height);
  }
}
