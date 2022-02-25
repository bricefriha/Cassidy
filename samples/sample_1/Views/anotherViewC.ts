import { Window } from "../../../code/src/objects/window";
import viewGod from "../../../code/src/gods/viewGod";
import { AnotherViewModel } from "../ViewModels/anotherViewModel";

export class AnotherView extends Window {
  constructor() {
    super();
    this.BindingContext = new AnotherViewModel();
  }
}
