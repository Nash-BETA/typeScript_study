import { Foods } from './foods.js';
export class Score {
    /**
    * totalScore - 現状の合計スコアの足し算
    */
    get totalScore() {
        const foods = Foods.getInstance();
        //reduce数値の足し算で使われる関数
        return foods.activeElementsScore.reduce((total, score) => total + score, 0);
    }
    //DOMの書き換え
    render() {
        document.querySelector('.score__number').textContent = String(this.totalScore);
    }
    static getInstance() {
        if (!Score.instance) {
            Score.instance = new Score();
        }
        return Score.instance;
    }
}
