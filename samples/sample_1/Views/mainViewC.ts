import { Window } from "../../../code/src/objects/window.ts";
import viewGod from "../../../code/src/gods/viewGod.ts";
import { MainViewModel } from "../ViewModels/mainViewModel.ts";

export class MainView extends Window {
  constructor() {
    super();

    // Data binding
    this.BindingContext = new MainViewModel();
  }
}
