import { Page } from "../../../code/src/objects/page";
import viewGod from "../../../code/src/gods/viewGod";
import { MainViewModel } from "../ViewModels/mainViewModel";

export class MainView extends Page {
  constructor() {
    super();

    this.BindingContext = new MainViewModel();

    // Initiate the View
    //viewGod.Init(this);
    //Common.Code.ViewGod;
  }
}
