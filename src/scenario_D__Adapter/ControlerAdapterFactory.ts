import {IControlerActions} from "./IControlerActions";
import {Keyboard} from "./controler/Keyboard";
import {KeyboardAdapter} from "./adapter/KeyboardAdapter";
import {XboxControler} from "./controler/XboxControler";
import {XboxControlerAdapter} from "./adapter/XboxControlerAdapter";

export class ControlerAdapterFactory {

    public static create(controler): IControlerActions {
        if(controler instanceof Keyboard)       return new KeyboardAdapter(controler);
        if(controler instanceof XboxControler)  return new XboxControlerAdapter(controler);
        return undefined;
    }
}