class Pet {
  constructor({animal, age, breed, sound}){
    this.animal = animal;
    this.age = age;
    this.breed = breed, 
    this.sound = sound;
  }
  
  get activity(){
    const today = new Date();
  }

  get owner () {
    return this._owner
  }

  set owner(name){
    this._owner = owner;
    console.log(`setter called ${owner}`);
  }
  
  bark(){
    console.log(this,this.sound);
  }
}

const dog = new Pet({
  animal : 'dog',
  age : 5,
  breed: 'Shibu Inu',
  sound : 'woof'
});


dog.owner = 'Adam'

console.log(dog.owner)


class Owner {
  constructor(name, address){
    this.name = name;
    this.address = address;
  
  }
  
  set phone(phone){
    const phoneNormalized = phone.replace(/[^0-9]/g, '');
  
  //this is called a backing property
    this._phone = phoneNormalized;
  }

  get Phone(){
    return this._phone;
  }
}

dog.owner = new('Atheon', '124 Sesame Street')
dog.owner.phone = '(555)555-5555'







