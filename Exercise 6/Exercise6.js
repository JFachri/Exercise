//soal pertama
const calculateStudentData = function (students) {
  let result = {
    score: {
      highest: students[0].score,
      lowest: students[0].score,
      average: 0,
    },
    age: {
      highest: (new Date() - students[0].age) / 31536000000,
      lowest: (new Date() - students[0].age) / 31536000000,
      average: 0,
    },
  };

  let totalScore = 0;
  let totalAge = 0;
  for (let i = 0; i < students.length; i++) {
    let years = (new Date() - students[i].age) / 31536000000;
    if (students[i].score > result.score.highest ) {
      result.score.highest = students[i].score;
    }
    if (students[i].score < result.score.lowest) {
      result.score.lowest = students[i].score;
    }

    if (years > result.age.highest) {
      result.age.highest = years;
    }
    if (years < result.age.lowest) {
      result.age.lowest = years;
    }

    totalScore += students[i].score;
    totalAge += years;
  }
  result.score.average = totalScore / students.length;
  result.age.average = totalAge / students.length;

  return result
}

const studentsData = [
  {
    name: "Jusuf",
    email: "jusuf@gmail.com",
    age: new Date("1996-01-20"),
    score: 84,
  },
  {
    name: "Fachri",
    email: "fachri@gmail.com",
    age: new Date("1992-03-20"),
    score: 82,
  },
  {
    name: "Suarez",
    email: "suarez@gmail.com",
    age: new Date("1999-04-19"),
    score: 90,
  },
]
console.log(calculateStudentData(studentsData));

//soal kedua
class Product {
  static productList = []

  constructor() {
    this.productName = "";
    this.price = 0;
  }

  set setProductName(productName) {
    this.productName = productName
  }

  get getProductName() {
    return this.productName
  }

  set setPrice(price) {
    this.price = price
  }

  get getPrice() {
    return this.price
  }
}

class Transaction {
  constructor() {
    this.cart = [];
    this.total = 0;
  }

  addToCart(productName, qty) {
    for (let item of Product.productList) {
      if (productName == item.productName) {
        let priceTotal = item.price * qty;
        let order = {...item, quantity: qty, total: priceTotal}
        this.cart.push(order)
        this.total += priceTotal;
        return
      }
    }
    console.log("Maaf barang tidak tersedia, mohon cari barang yang ada saja")
  }

  get getShowTotal() {
    return this.total
  }

  get getCheckout() {
    Object.freeze(this)
    return this
  }
}

let product1 = new Product()
product1.setProductName = "ROG Mainboard";
product1.setPrice = "5000000";

let product2 = new Product()
product2.setProductName = "MSI Liquid";
product2.setPrice = "1300000";

Product.productList.push(product1, product2)

let trans1 = new Transaction()
trans1.addToCart("MSI Liquid", 3);
console.log(trans1);