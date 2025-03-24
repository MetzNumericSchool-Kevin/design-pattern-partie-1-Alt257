import {IControlerActions} from "./IControlerActions";
import {Keyboard} from "./controler/Keyboard";
import {KeyboardAdapter} from "./adapter/KeyboardAdapter";

export class ControlerAdapterFactory {

    public static create(controler): IControlerActions {
        if(controler instanceof Keyboard)   return new KeyboardAdapter(controler);
        return undefined;
    }
}