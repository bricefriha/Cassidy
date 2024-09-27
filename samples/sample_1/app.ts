///import { anotherView } from "./Views/anotherView";
import viewGod from "../../code/src/gods/viewGod.ts";
import appGod from "../../code/src/gods/appGod.ts";
import { MainViewModel } from "./ViewModels/mainViewModel.ts";
import { MainView } from "./Views/mainViewC.ts";
const __dirname = new URL('.', import.meta.url).pathname;
const ag = new appGod(__dirname);
let d = new MainView();

//new MainViewModel();
ag.display(d);
