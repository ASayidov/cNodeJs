//hw
// vazifa
// - texnika mahsulotlarni qo'shish va o'qish.
// - maydonlar: mahsulot nomi, turi, narhi, skidka, umumiy narhi
class Tex {
  constructor(name, type, price, sale, totPrice) {
    this.name = name
    this.type = type
    this.price = price
    this.sale = sale
    this.totPrice = totPrice
  }
  sayMyName(){
    console.log(`Maxsulot nomi:${this.name}`);
  }
  addPrice(narx)
  {this.price+=narx
  console.log(`Maxsulot narxi:${this.price}`);
      
  }
}

const pr_1 = new Tex('perfarator','santexnika', 850000)

pr_1.addPrice(1000)

