import {IControlerActions} from "../IControlerActions";
import {Keyboard} from "../controler/Keyboard";
import {AbstractControlerAdapter} from "./AbstractControlerAdapter";
import {XboxControler} from "../controler/XboxControler";

export class XboxControlerAdapter   extends AbstractControlerAdapter
                                    implements IControlerActions {
    constructor(
        private xboxControler: XboxControler,
    ) {
        super('la manette de Xbox');
    }

    jump(): void {
        this.printAction('Sauter');
        this.xboxControler.ButtonA();
    }
    attack(): void {
        this.printAction('Attaquer');
        this.xboxControler.ButtonX();
    }
    use(): void {
        this.printAction('Intéragir');
        this.xboxControler.ButtonB();
    }

}