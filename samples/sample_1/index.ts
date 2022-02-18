import mainView from "./views/mainView";
import viewGod from "../../code/src/gods/viewGod";

// namespace Sample_1 {
//   //new ();
//   new Sample_1.Views.AnotherView();
// }

const vg = new viewGod();

// Register all your views
vg.register("./views/mainView.json", new mainView());
