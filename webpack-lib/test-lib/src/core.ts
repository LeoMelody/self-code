import {sum} from './util'

/**
 * Test class
 */
export class Test {
    private sum: number = 0;

    constructor(n1: number, n2: number) {
        this.sum = sum(n1, n2);
    }

    render(ele: Element): Promise<boolean> {
        ele.innerHTML = this.sum.toString();
        return Promise.resolve(true);
    }
}
