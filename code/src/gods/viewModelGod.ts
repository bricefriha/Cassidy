import { Gtk } from "..";

/**
 *  The class that take care of the dialog view <-> viewmodel
 */
export class ViewModelGod {
  /**
   * getValue get the value of a data binding or not
   * @param value initial value
   * @param bC Binding context
   */
  public static getValue(value: string, bC: Object): string {
    if (value?.startsWith("$")) {
      // Get the name of the binding value
      value = value.replace("$", "").replace("{", "").replace("}", "");
      return eval(`bC.${value}`);
    }
    return value;
  }
  /**
   * keyPress - Manage the On key press event
   */
  public static keyPress(callback: Function, event: any): boolean {
    try {
      callback(
        Gtk.acceleratorGetLabel(event?.keyval, event.state),
        event?.keyval
      );
      return true;
    } catch {
      return false;
    }
  }
}
