import { Page } from "../objects/page";

/**
 *  The class that take care of tranlating the view from .json to ts
 */
export default class ViewGod {
  private _viewList: { [viewCode: string]: string };
  public get viewList(): { [viewCode: string]: string } {
    return this._viewList;
  }
  public set viewList(v: { [viewCode: string]: string }) {
    this._viewList = v;
  }

  constructor() {
    this._viewList = {};
  }
  /**
   * Initiate
   */
  public Init(viewCode: Page) {
    const viewName = viewCode.getName();
    console.log(viewName);
    console.log(this.viewList[viewName]);
  }
  /**
   * register
   *
   * */
  public register(viewTemplate: string, viewCode: Page) {
    // Add the view to the list
    this.viewList[viewCode.getName()] = viewTemplate;
  }
}
