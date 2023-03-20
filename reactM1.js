//Q1:
//  הקוד יחליף את הרכיב השני והשלישי של מערך המספרים, ולאחר מכן ידפיס את המערך שהשתנה
[10, 30, 20]


//Q2:
const { a, b } = obj.numbers;

//Q3:
var arr = [1, 2];
[arr[0], arr[1]] = [arr[1], arr[0]];

//Q4:
const propName = 'name';
const { [propName]: personName, age } = person;

//Q5:
const { name, age, ...address } = person[propName];
const { street, city, state } = address;

//Q6:
const {
    firstName = 'Unknown',
    lastName: surname = 'Unknown',
    [propName]: { street, city, state = 'CA' } = {}
  } = person;

//Q7:
const { 
    name, 
    age, 
    address: { 
      street, 
      city, 
      state, 
      coordinates: { latitude, longitude } 
    }, 
    getFullName 
  } = person;

//Q8:
const [
    { firstName: first = 'Unknown', lastName: last = 'Unknown', age = 0 },
    { firstName: first2 = 'Unknown', lastName: last2 = 'Unknown', age: age2 = 0 }
  ] = people;

//Q9:
const { 
    person: { 
      name, 
      age, 
      getAddress 
    } 
  } = obj;
  
  const { 
    street, 
    city, 
    state 
  } = getAddress();