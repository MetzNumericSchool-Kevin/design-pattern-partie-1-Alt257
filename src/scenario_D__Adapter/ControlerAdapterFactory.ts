import {IControlerActions} from "./IControlerActions";
import {Keyboard} from "./controler/Keyboard";
import {KeyboardAdapter} from "./adapter/KeyboardAdapter";
import {XboxControler} from "./controler/XboxControler";
import {XboxControlerAdapter} from "./adapter/XboxControlerAdapter";
import {PS5Controler} from "./controler/PS5Controler";
import {PS5ControlerAdapter} from "./adapter/PS5ControlerAdapter";

export class ControlerAdapterFactory {

    public static create(controler): IControlerActions {
        if(controler instanceof Keyboard)       return new KeyboardAdapter(controler);
        if(controler instanceof XboxControler)  return new XboxControlerAdapter(controler);
        if(controler instanceof PS5Controler)   return new PS5ControlerAdapter(controler);
        return undefined;
    }
}