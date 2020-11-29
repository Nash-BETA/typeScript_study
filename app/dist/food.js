import { Score as ScoreAs } from './score.js';
export default class Food {
    constructor(element) {
        this.element = element;
        //bindを使うことで
        element.addEventListener('click', this.clickEventHandler.bind(this));
    }
    //food--activeをトグル操作する
    clickEventHandler() {
        //classLisst.remove('food--active') => [jQuery]('.food--active').remove();
        this.element.classList.toggle('food--active');
        const score = new ScoreAs();
        score.render();
    }
}
