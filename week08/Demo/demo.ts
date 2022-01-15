export class Wardrobe {
    public clothesitem: string;
    private color: string;
    public occasion: string;

    constructor(clothes: string, color: string, occasion: string) {
        this.clothesitem = clothes;
        this.color = color;
        this.occasion = occasion;
    }
}