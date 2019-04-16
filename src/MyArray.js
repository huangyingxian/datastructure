"use strict";
class MyArray {
    constructor() {
        this.arr = []; // number[]
        this.elements = 0;
    }
    /**
     * 往数组里面插入元素（无序）
     */
    push(value) {
        this.arr[this.elements++] = value;
    }
    /**
     * 打印数组
     * @param arr 需要打印的目标数组
     */
    display() {
        let str = '[';
        for (let i = 0; i < this.arr.length; i++) {
            let e = this.arr[i];
            if (i !== this.arr.length - 1) {
                str += e + ' ';
            }
            else {
                str += e;
            }
        }
        str += ']';
        console.log(str);
    }
    /**
     * 转换数组为字符串
     * @param arr 需要转换的目标数组
     */
    toString(arr) {
        let str = '[';
        for (let i = 0; i < arr.length; i++) {
            let e = arr[i];
            if (i !== arr.length - 1) {
                str += e + ' ';
            }
            else {
                str += e;
            }
        }
        str += ']';
        return str;
    }
}
module.exports = MyArray;
//# sourceMappingURL=MyArray.js.map