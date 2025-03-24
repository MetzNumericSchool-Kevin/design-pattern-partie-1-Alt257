import {Keyboard} from "./controler/Keyboard";
import {ControlerAdapterFactory} from "./ControlerAdapterFactory";
import {XboxControler} from "./controler/XboxControler";
import {PS5Controler} from "./controler/PS5Controler";

let keyboard = ControlerAdapterFactory.create(new Keyboard());
keyboard.jump();
keyboard.attack();
keyboard.use();

console.log();

let xboxControler = ControlerAdapterFactory.create(new XboxControler());
xboxControler.jump();
xboxControler.attack();
xboxControler.use();

console.log();

let ps5Controler = ControlerAdapterFactory.create(new PS5Controler());
ps5Controler.jump();
ps5Controler.attack();
ps5Controler.use();

