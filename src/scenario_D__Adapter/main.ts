import {KeyboardAdapter} from "./adapter/KeyboardAdapter";
import {Keyboard} from "./controler/Keyboard";
import {ControlerAdapterFactory} from "./ControlerAdapterFactory";
import {XboxControler} from "./controler/XboxControler";

let keyboard = ControlerAdapterFactory.create(new Keyboard());
keyboard.jump();
keyboard.attack();
keyboard.use();

let xboxControler = ControlerAdapterFactory.create(new XboxControler());
xboxControler.jump();
xboxControler.attack();
xboxControler.use();

