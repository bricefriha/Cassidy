import { Window } from "../../../code/src/objects/window.ts";
import viewGod from "../../../code/src/gods/viewGod.ts";
import { AnotherViewModel } from "../ViewModels/anotherViewModel.ts";

export class AnotherView extends Window {
  constructor() {
    super();
    this.BindingContext = new AnotherViewModel();
  }
}
