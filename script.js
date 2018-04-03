class Worker {
    constructor(lastName, position, salary) {
        this.lastName = lastName;
        this.position = position;
        this.salary = salary;
    }

    increaseSalary() {
        this.salary += this.salary * 15 / 100;
    }

    static func(worker) {
        if (worker.lastName[0] === 'В' && worker.lastName[1] === 'а' && worker.lastName[2] === 'с') {
            worker.position = "Інженер";
        }
        document.write("Посада: " + worker.position + "<br /> <br />");
    }
}

class Workers extends Worker{
    constructor(lastName, position, salary, rating) {
        super();
        this.position = position;
        this.salary = salary; //оклад
        this.rating = rating;
        this._lastName = lastName;
    }


    increaseSalaryWithRating() {
        if (this.rating >= 60 && this.rating < 75) {
            this.salary += this.salary * 20 / 100;
        }

        if (this.rating >= 75 && this.rating < 90) {
            this.salary += this.salary * 40 / 100;
        }

        if (this.rating >= 90 && this.rating <= 100) {
            this.salary += this.salary * 60 / 100;
        }
    }

    printInfo() {
        document.write("Прізвище: " + this._lastName + "<br />");
        document.write("Посада: " + this.position + "<br />");
        document.write("Оклад: " + this.salary + "<br />");
        document.write("Рейтинг (100-бальна система): " + this.rating + "<br /> <br />");
    }
}

class MyArray {
    constructor(capacity) {
        this.capacity = capacity;
        this.array = new Array(capacity);

        for (let i = 0; i < this.capacity; i++) {
            this.array[i] = Math.round(Math.random() * 20);
        }
    }

    getMax() {
        let max = this.array[0];
        for (let i = 0; i < this.capacity; i++) {
            if (this.array[i] > max) {
                max = this.array[i];
            }
        }
        return max;
    }

    getMin() {
        let min = this.array[0];
        for (let i = 0; i < this.capacity; i++) {
            if (this.array[i] < min) {
                min = this.array[i];
            }
        }
        return min;
    }

    getSum() {
        return this.array.reduce((a, b) => a + b, 0);
    }

    getAvg() {
        return this.getSum() / this.capacity;
    }

    getMult() {
        return this.array.reduce((a, b) => a * b);
    }

    getLast(){
        return this.array.pop();
    }

    getFirst(){
        return this.array.shift();
    }

    pEven(){
        document.write("Непарні: ");
        for ( let i = 0; i < this.capacity; i++) {
            if (this.array[i] % 2===1)
                document.write(this.array[i]+ ", ");
        }
    }

    pOdd() {
        document.write("Парні: ");
        for (let i = 0; i < this.capacity; i++) {
            if (this.array[i] % 2 === 0)
                document.write(this.array[i] + ", ");
        }
    }

    addAtTheEnd(){
        this.array.push(12)
        return this.array;
    }

    printArray()
    {
        for (let i = 0; i < this.capacity; i++) {
            document.write(this.array[i] + ", ");
            }
            document.write("<br />");
    }

    printInfo(){
        document.write("Максимальний елемент: " + this.getMax() + "<br />");
        document.write("Мінімальний елемент: " + this.getMin() + "<br />");
        document.write("Сума: " + this.getSum() + "<br />");
        document.write("Середнє арифметичне: " + this.getAvg() + "<br />");
        document.write("Добуток всіх елементів: " + this.getMult() + "<br />");
        document.write("Останній елемент: " + this.getLast() + "<br />");
        document.write("Перший елемент: " + this.getFirst() + "<br />");
        document.write(" " + this.pEven() + "<br />");
        document.write(" " + this.pOdd() + "<br />");
        document.write("Після додаввання: " + this.addAtTheEnd() + "<br />");

    }
}

//1.1
let worker1 = new Worker("Продан", "Не інж", 800);
document.write("Прізвище: " + worker1.lastName + "<br />");
document.write("Оклад: " + worker1.salary + "<br />");
worker1.increaseSalary();
document.write("Оклад: " + worker1.salary + "<br />");
document.write("Посада: " + worker1.position + "<br />");
document.write("<br />");

//1.2
let worker2 = new Worker("Василевич", "Не інж", 1000);
document.write("Прізвище: " + worker2.lastName + "<br />");
document.write("Оклад: " + worker2.salary + "<br />");
worker2.increaseSalary();
document.write("Оклад: " + worker2.salary + "<br />");
document.write("Посада: " + worker2.position + "<br />");
Worker.func(worker2);

//2
let workers = new Workers("Цуркан", "Інженер", 1000, 61);
workers.increaseSalaryWithRating();
workers.printInfo();

let workers2 = new Workers("Маматов", "Майже інженер", 1200, 85);
workers2.increaseSalaryWithRating();
workers2.printInfo();

//3
let array = new MyArray(10);
array.printArray();
array.printInfo();