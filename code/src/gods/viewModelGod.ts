/**
 *  The class that take care of the dialog view <-> viewmodel
 */
export class ViewModelGod {
  /**
   * getValue get the value of a data binding or not
   * @param value initial value
   * @param bC Binding context
   */
  public static getValue(value: string, bC: Object) {
    if (value.startsWith("$")) {
      // Get the name of the binding value
      value = value.replace("$", "").replace("{", "").replace("}", "");
      return eval(`bC.${value}`);
    }
    return value;
  }
}
