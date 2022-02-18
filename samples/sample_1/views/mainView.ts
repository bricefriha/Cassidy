import view from "../../../code/src/objects/view";
import viewGod from "../../../code/src/gods/viewGod";
import mainViewModel from "../ViewModels/mainViewModel";

export default class MainView extends view {
  constructor() {
    super();

    this.BindingContext = new mainViewModel();

    // Initiate the View
    //viewGod.Init(this);
    //Common.Code.ViewGod;
  }
}
