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
  constructor() {
    this._bindingContext = new Object();
  }

  /**
   * getName
   */
  public getName(): string {
    return this.constructor?.name;
  }
}
