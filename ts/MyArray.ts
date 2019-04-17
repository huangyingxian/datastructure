
class MyArray {
    private arr: Array<number> = []// number[]
    private elements: number;

    constructor() {
        this.elements = 0;
    }

    /**
     * 往数组里面插入元素（无序）
     */
    public push(value: any): void {
        this.arr[this.elements++] = value;
    }

    /**
     * 往数组里面插入元素（有序）
     * @param value 
     */
    public insert(value: any): void {
        let i;
        for (i = 0; i < this.elements; i++) {
            if (this.arr[i] > value) {
                break;
            }
        }
        for (let j = this.elements; j>i;j--) {
            this.arr[j] = this.arr[j-1];
        }
        this.arr[i] = value;
        this.elements++;
    }

    /**
     * 打印数组
     * @param arr 需要打印的目标数组
     */
    public display(): void {
        let str: string = '[';
        for (let i = 0; i < this.elements; i++) {
            let e = this.arr[i];
            if (i !== this.elements - 1) {
                str += e + ' '
            } else {
                str += e
            }
        }
        str += ']';
        console.log(str);
    }

    /**
     * 转换数组为字符串
     * @param arr 需要转换的目标数组
     */
    public toString(): string {
        let str: string = '[';
        for (let i = 0; i < this.elements; i++) {
            let e = this.arr[i];
            if (i !== this.elements - 1) {
                str += e + ' '
            } else {
                str += e
            }
        }
        str += ']';
        return str;
    }


    /**
     * 通过数组查找数值在数组中的位置
     * @param value 需要查询的数组
     */
    public search(value: number): number {
        let j;
        for (j = 0; j < this.elements; j++) {
            if (value === this.arr[j]) {
                break;
            }
        }
        if (j === this.elements) {
            return -1;
        } else {
            return 1;
        }
    }

    /**
     * 根据数组的位置查找对应的值
     * @param index 查找的位置
     */
    public getValueByIndex(index: number): number {
        if (index >= this.elements || index < 0) {
            throw new Error('ArrayIndexOutOfBoundsExceptions');
        } else {
            return this.arr[index];
        }
    }

    /**
     * 根据下表删除数组中的元素
     */
    public delete(index: number) {
        if (index >= this.elements || index < 0) {
            throw new Error('ArrayIndexOutOfBoundsExceptions');
        } else {
            for (let i = index; i < this.elements - 1; i++) {
                this.arr[i] = this.arr[i + 1];
            }
            this.elements--;
            console.log(this.elements)
        }
    }

    /**
     * 根据位置修改为指定的新值
     * @param index 需要修改的值的位置
     * @param newValue 修改后的值
     */
    public update(index: number, newValue: number): void {
        if (index >= this.elements || index < 0) {
            throw new Error('ArrayIndexOutOfBoundsExceptions');
        } else {
            this.arr[index] = newValue;
        }
    }
}

module.exports = MyArray