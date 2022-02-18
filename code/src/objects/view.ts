export default class View {
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
  constructor() {
    this._bindingContext = new Object();
  }

  /**
   * getName
   */
  public getName(): string {
    return this.constructor.name;
  }
  /**
   * getPath
   */
  // public getPath(): string {
  //   // A regular expression to look for lines in this file (A.ts / A.js)
  //   const rexThisFile = /\bA\.[tj]s:/i;
  //   // Get a stack trace, break into lines -- this is V8, we can rely on the format
  //   const stackLines = new Error().stack?.split(/\r\n|\r|\n/);
  //   // Find the first line that doesn't reference this file
  //   const line = stackLines?.find(
  //     (line, index) => index > 0 && !rexThisFile.test(line)
  //   );
  //   if (line) {
  //     // Found it, extract the directory from it
  //     const instanceOfDirName = line
  //       .replace(/^\s*at\s*/, "")
  //       .replace(/\w+\.[tj]s[:\d]+$/, "")
  //       .replace(/^file:\/\//, "");
  //     //console.log(`instanceOfDirName = "${instanceOfDirName}"`);

  //     return instanceOfDirName;
  //   }
  //   return "";
  // }
}
