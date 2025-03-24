import {KeyboardAdapter} from "./adapter/KeyboardAdapter";
import {Keyboard} from "./controler/Keyboard";
import {ControlerAdapterFactory} from "./ControlerAdapterFactory";

let keyboard = ControlerAdapterFactory.create(new Keyboard());
keyboard.jump();
keyboard.attack();
keyboard.use();

