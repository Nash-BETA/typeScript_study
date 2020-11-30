import { Foodsable } from './interfaces';
import FoodDefault from './food';

export class Foods implements Foodsable {
    private static instance: Foods;
    elements = document.querySelectorAll<HTMLDivElement>('.food');

    private _activeElements: HTMLDivElement[] = [];
    private _activeElementsScore: number[] = [];

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
                this._activeElements.push(element)
            }
        })
        //_activeElementsの値を定義する
        return this._activeElements
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
        })

        return this._activeElementsScore;
    }

    private constructor() {
        this.elements.forEach(element => {
            new FoodDefault(element);
        })
    }
    static getInstance() {
        if (!Foods.instance) {
            Foods.instance = new Foods();
        }
        return Foods.instance;
    }
}
