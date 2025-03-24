import {IControlerActions} from "./IControlerActions";
import {Keyboard} from "./BO/Keyboard";

export class KeyboardAdapter implements IControlerActions {
    private keyboard: Keyboard;
    constructor(
    ) {
        this.keyboard = new Keyboard();
    }

    jump(): void {
        console.log('"Sauter" avec le clavier : ');
        this.keyboard.spacebar();
    }
    attack(): void {
        console.log('"Attaquer" avec le clavier : ');
        this.keyboard.mouseLeft();
    }
    use(): void {
        console.log('"Interragir" avec le clavier : ');
        this.keyboard.mouseRight();
    }

}