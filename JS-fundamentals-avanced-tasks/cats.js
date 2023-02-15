function cats(array) {
  let catsArray = [];

  class Cat {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
    makeMeow() {
      console.log(`${this.name}, age ${this.age} says Meow`);
    }
  }

  for (let i = 0; i < array.length; i++) {
    let [name, ageText] = array[i].split(' ');

    let cat = new Cat(name, Number(ageText));
    catsArray.push(cat);
  }
  
  for (const cat of catsArray) {
    cat.makeMeow();
  }

}
