import * as Interfaces from './interfaces.js';
import { Score as ScoreAs} from './score.js';

export default class Food implements Interfaces.Foodable {
    constructor(public element: HTMLDivElement) {
        //bindを使うことで
        element.addEventListener('click', this.clickEventHandler.bind(this))
    }
    //food--activeをトグル操作する
    clickEventHandler() {

        //classLisst.remove('food--active') => [jQuery]('.food--active').remove();
        this.element.classList.toggle('food--active')
        const score = new ScoreAs();
        score.render();
    }
}
