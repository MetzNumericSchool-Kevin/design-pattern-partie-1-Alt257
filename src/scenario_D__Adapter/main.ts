import {KeyboardAdapter} from "./KeyboardAdapter";
import {Keyboard} from "./BO/Keyboard";

let keyboard = new KeyboardAdapter(new Keyboard());
keyboard.jump();
keyboard.attack();
keyboard.use();

