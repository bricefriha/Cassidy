import { Page } from "../../../code/src/objects/page";
import viewGod from "../../../code/src/gods/viewGod";
import { AnotherViewModel } from "../ViewModels/anotherViewModel";

export class AnotherView extends Page {
  constructor() {
    super();
    this.BindingContext = new AnotherViewModel();
    // Initiate the View
    //viewGod.Init(this);
  }
}
