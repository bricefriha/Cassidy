import { Window } from "../../../code/src/objects/window";
import viewGod from "../../../code/src/gods/viewGod";
import { MainViewModel } from "../ViewModels/mainViewModel";

export class MainView extends Window {
  constructor() {
    super();

    // Data binding
    this.BindingContext = new MainViewModel();
  }
}
