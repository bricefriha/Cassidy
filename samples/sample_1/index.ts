import mainView from "./views/mainView";
import viewGod from "../../code/src/gods/viewGod";
import appGod from "../../code/src/gods/appGod";

// namespace Sample_1 {
//   //new ();
//   new Sample_1.Views.AnotherView();
// }

const vg = new viewGod();
const ag = new appGod("Sample_1");

// Register all your views
vg.register("./views/mainView.json", new mainView());

vg.display(new mainView());
