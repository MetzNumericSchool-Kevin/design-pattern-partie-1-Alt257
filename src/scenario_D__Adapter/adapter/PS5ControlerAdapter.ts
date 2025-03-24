import {IControlerActions} from "../IControlerActions";
import {AbstractControlerAdapter} from "./AbstractControlerAdapter";
import {PS5Controler} from "../controler/PS5Controler";

export class PS5ControlerAdapter   extends AbstractControlerAdapter
                                    implements IControlerActions {
    constructor(
        private ps5Controler: PS5Controler,
    ) {
        super('la manette de PS5');
    }

    jump(): void {
        this.printAction('Sauter');
        this.ps5Controler.triangleButton();
    }
    attack(): void {
        this.printAction('Attaquer');
        this.ps5Controler.crossButton();
    }
    use(): void {
        this.printAction('Intéragir');
        this.ps5Controler.circleButton();
    }

}