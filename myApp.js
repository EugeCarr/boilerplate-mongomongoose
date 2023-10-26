require('dotenv').config();
mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

let personSchema = new mongoose.Schema({
  "name": {
    "type": String,
    "required": true
  },
  "age": Number,
  "favoriteFoods": [String]
})

let Person = mongoose.model("Person", personSchema);

const createAndSavePerson = (done) => {
  let newPerson = new Person(
    {
      name: "Jane Fonda",
      age: 84,
      favoriteFoods: ["eggs", "fish", "fresh fruit"]
    }
  );

  newPerson.save(function(err, data){
    if(err){
      return console.error(err)
    }else{
      done(null, data)
    }
  });
};

var arrayOfPeople = [
  {name: "Frankie", age: 74, favoriteFoods: ["Del Taco"]},
  {name: "Sol", age: 76, favoriteFoods: ["roast chicken"]},
  {name: "Robert", age: 78, favoriteFoods: ["wine"]}
];

const createManyPeople = (arrayOfPeople, done) => {
  Person.create(arrayOfPeople, function(err, data){
    if(err){
      return console.error(err)
    }else{
      done(null, data);
    }
  });


};

const findPeopleByName = function(personName, done) {
  console.log(personName);
  Person.find({name: personName}, function(err, data){
    if(err) return console.log(err);
    console.log(data);
    done(null, data);
  });
};

const findOneByFood = (food, done) => {
  console.log(food);
  Person.findOne({favoriteFoods: food}, function(err, data){
    if(err) return console.log(err);
    console.log(data);
    done(null, data);
  });
};

const findPersonById = (personId, done) => {
  console.log(personId);
  Person.findById(personId, function(err, data){
    if(err) return console.log(err);
    console.log(data);
    done(null, data);
  });
};

const findEditThenSave = (personId, done) => {
  const foodToAdd = "hamburger";
  let person = Person.findById(personId, function(person, error){
    console.log(person);
    let currentFoods = person.favoriteFoods;
    currentFoods.push(foodToAdd);
    person["favoriteFoods"] = currentFoods;
    person.save(function(err, data){
      if(err) return console.log(err);
      if(!person){
        return console.log("No person found with this Id")
      }else{
        done(null, data);
      }
    })
  });
  
  currentFoods.push(foodToAdd);
 
};

const findAndUpdate = (personName, done) => {
  const ageToSet = 20;

  done(null /*, data*/);
};

const removeById = (personId, done) => {
  done(null /*, data*/);
};

const removeManyPeople = (done) => {
  const nameToRemove = "Mary";

  done(null /*, data*/);
};

const queryChain = (done) => {
  const foodToSearch = "burrito";

  done(null /*, data*/);
};

/** **Well Done !!**
/* You completed these challenges, let's go celebrate !
 */

//----- **DO NOT EDIT BELOW THIS LINE** ----------------------------------

exports.PersonModel = Person;
exports.createAndSavePerson = createAndSavePerson;
exports.findPeopleByName = findPeopleByName;
exports.findOneByFood = findOneByFood;
exports.findPersonById = findPersonById;
exports.findEditThenSave = findEditThenSave;
exports.findAndUpdate = findAndUpdate;
exports.createManyPeople = createManyPeople;
exports.removeById = removeById;
exports.removeManyPeople = removeManyPeople;
exports.queryChain = queryChain;
