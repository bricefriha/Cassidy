///import { anotherView } from "./Views/anotherView";
import viewGod from "../../code/src/gods/viewGod";
import appGod from "../../code/src/gods/appGod";
//@ts-ignore
import path from "path";
//@ts-ignore
import process from "process";
import { MainViewModel } from "./ViewModels/mainViewModel";
import { MainView } from "./Views/mainViewjson";

// Register all your views
//vg.register("./Views/mainView.json", new mainView());
//vg.register("./Views/mainView.json", new anotherView());

const ag = new appGod(__dirname);
let d = new MainView();

//new MainViewModel();
ag.display(d);
