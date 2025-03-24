export abstract class AbstractControlerAdapter {

    protected constructor(
        private readonly controlerLabel: string,
    ) {}
    protected printAction(action:string) {
        console.log('"' + action + '"'
            + ' avec '
            + this.controlerLabel
            + ' : ');
    }
}