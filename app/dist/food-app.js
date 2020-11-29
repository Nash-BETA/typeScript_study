"use strict";
class Score {
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
class Food {
    constructor(element) {
        this.element = element;
        //bindを使うことで
        element.addEventListener('click', this.clickEventHandler.bind(this));
    }
    //food--activeをトグル操作する
    clickEventHandler() {
        //classLisst.remove('food--active') => [jQuery]('.food--active').remove();
        this.element.classList.toggle('food--active');
        const score = new Score();
        score.render();
    }
}
class Foods {
    constructor() {
        this.elements = document.querySelectorAll('.food');
        this._activeElements = [];
        this._activeElementsScore = [];
        this.elements.forEach(element => {
            new Food(element);
        });
    }
    /**
     * activeElements - 現状アクティブ状態の物を取得する
     */
    get activeElements() {
        //初期化して値の重複を避ける
        this._activeElements = [];
        this.elements.forEach(element => {
            //food--activeクラスを持っているエレメント
            if (element.classList.contains('food--active')) {
                //_activeElementsの配列に値を入れる
                this._activeElements.push(element);
            }
        });
        //_activeElementsの値を定義する
        return this._activeElements;
    }
    /**
     * activeElementsScore - アクティブ状態のものの数値を返す
     */
    get activeElementsScore() {
        this._activeElementsScore = [];
        this.activeElements.forEach(element => {
            const FoodScore = element.querySelector('.food__score');
            //nullの場合を避ける為
            if (FoodScore) {
                //取得した値を配列に代入
                this._activeElementsScore.push(Number(FoodScore.textContent));
            }
        });
        return this._activeElementsScore;
    }
    static getInstance() {
        if (!Foods.instance) {
            Foods.instance = new Foods();
        }
        return Foods.instance;
    }
}
const foods = Foods.getInstance();
