import {IControlerActions} from "../IControlerActions";
import {Keyboard} from "../controler/Keyboard";
import {AbstractControlerAdapter} from "./AbstractControlerAdapter";

export class KeyboardAdapter    extends AbstractControlerAdapter
                                implements IControlerActions {
    constructor(
        private keyboard: Keyboard,
    ) {
        super('le clavier');
    }

    jump(): void {
        this.printAction('Sauter');
        this.keyboard.spacebar();
    }
    attack(): void {
        this.printAction('Attaquer');
        this.keyboard.mouseLeft();
    }
    use(): void {
        this.printAction('Interragir');
        this.keyboard.mouseRight();
    }

}