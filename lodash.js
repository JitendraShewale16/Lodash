const _ = require('lodash');

//**********   first and last array elements *****************
const words = ['sky', 'wood', 'forest', 'falcon', 'pear', 'ocean', 'universe'];
// syntax : _.first(array)
console.log(`First element :${_.first(words)}`);
// output : First element :sky
// syntax : _.last(array)
console.log(`Last element :${_.last(words)}`);
// output : Last element :universe

//**********  nth array elements *****************
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// syntax : _.nth(array, n)
console.log(`nth element :${_.nth(nums, 3)}`);
// output : nth element :4
console.log(`- nth element :${_.nth(nums, -3)}`);
// output : - nth element :7

//**********  chunking array *****************
// syntax : _.chunk(array, size)
console.log(`chunk 2 :${_.chunk(nums, 2)}`);
// output : chunk 2 :1,2,3,4,5,6,7,8,9

//**********  array slice *****************
// syntax : _.slice(array, startIndex, endIndex)
console.log(`slice 2, 6 :${_.slice(nums, 2, 6)}`);
// output : slice 2, 6 :3,4,5,6
console.log(`slice 0, 8 :${_.slice(nums, 0, 8)}`);
// output :slice 0, 8 :1,2,3,4,5,6,7,8

//**********  random array element *****************
// syntax : _.sample(collection)
console.log('random array :', _.sample(words));
// output :random array : falcon

//**********  shuffling array elements *****************
// syntax : _.shuffle(collection)
console.log('shuffling array :', _.shuffle(words));
// output : shuffling array : [
//  'pear',   'wood',
//  'falcon', 'universe',
//  'ocean',  'sky',
//  'forest'
// ]

//* *********  determine data *****************
const vals = [1, 2, 'good', [1, 2], { name: 'Peter', age: 32 }];
vals.forEach(e => {
  if (_.isNumber(e)) {
    console.log(`${e} is a number`);
  }

  if (_.isString(e)) {
    console.log(`${JSON.stringify(e)} is a string`);
  }

  if (_.isArray(e)) {
    console.log(`${JSON.stringify(e)} is an array`);
  }

  if (_.isObject(e)) {
    console.log(`${JSON.stringify(e)} is an object`);
  }
});

// output : 1 is a number
// 2 is a number
// "good" is a string
// [1,2] is an array
// [1,2] is an object
// {"name":"Peter","age":32} is an object

//********** range *****************
// Creates an array of numbers (positive and/or negative) progressing from start up to, but not including, end.
// If end is not specified it’s set to start with start then set to 0.
// If end is less than start a zero-length range is created unless a negative step is specified.
// syntax : _.range( start, end, step )
console.log(_.range(5));
// output : [ 0, 1, 2, 3, 4 ]

//*********** array regrouping the elements using zip/ unzip functions
let result = _.zip(['a', 'b'], [1, 2], [true, false]);
// syntax :_.zip([arrays])
console.log(`zip function array elements :${result}`);
// output : zip function array elements :a,1,true,b,2,false
// syntax : _.unzip(array)
console.log(`unzip function array elements :${_.unzip(result)}`);
// output : unzip function array elements :a,b,1,2,true,false

//*********** Converts all elements in array into a string
// syntax : _.join(array, [separator=','])
console.log(`join elements with string :${_.join(nums, '-')}`);
// output : join elements with string :1-2-3-4-5-6-7-8-9

//* **********  Reverse the elements
// syntax : _.reverse( array )
console.log(`Reverse elements :${_.reverse(nums)}`);
// output : Reverse elements :9,8,7,6,5,4,3,2,1

//***********  Remove elements | modify the array elements
// syntax : _.pullAll(array, values)
console.log(`Remove elements :${_.pullAll(nums, [1, 5])}`);
// output : Remove elements :9,8,7,6,4,3,2

//***********  if plain object then returns true else false
// syntax : _.isPlainObject(value)
console.log(`if plain object then returns true :${_.isPlainObject({ 'X': 1 })}`);
// output : if plain object then returns true :true
console.log(`if plain object then returns false :${_.isPlainObject([0, 1])}`);
// output : if plain object then returns false :false

//*********** _.times receives as arguments the number of iterations and
// a function to execute n times and returns an array of the results.
// Very useful when creating dynamic test data.
function getRandomNumber() {
  return Math.round(Math.random() * 100);
}
// syntax : _.times( n, iteratee )
console.log(`no. of iterations :${_.times(5, getRandomNumber)}`);
// output : no. of iterations :15,73,8,16,70

//*********** Difference of two arrays
const allIds = [1, 3, 4, 2, 10, 22, 11, 8];
const activeIds = [1, 4, 22, 11, 8];
// syntax : _.difference(array, [values])
console.log(`Difference of ids :${_.difference(allIds, activeIds)}`);
// output : Difference of ids :3,2,10

//***********  Clone - deeply
const people = [
  {
    name: 'Arnold',
    specialization: 'C++',
  },
  {
    name: 'Jason',
    specialization: 'Python',
  },
  {
    name: 'Percy',
    specialization: 'JS',
  },
];

// syntax : _.cloneDeep( value )
const peopleCopy = _.cloneDeep(people);
const folksDoingCpp = peopleCopy.filter(person => person.specialization == 'C++');

for (person of folksDoingCpp) {
  person.specialization = 'JS';
}
console.log('person ...Convert them to JS', person);
// person ...Convert them to JS { name: 'Arnold', specialization: 'JS' }

console.log('array is untouched after deep cloning', people);
// array is untouched after deep cloning [
//  { name: 'Arnold', specialization: 'C++' },
//  { name: 'Jason', specialization: 'Python' },
//  { name: 'Percy', specialization: 'JS' }

//***********  Round - method is used to compute number rounded to precision
// syntax : _.round(number, [precision = 0])
console.log('rounded to precision :', _.round(5.006));
// output : rounded to precision : 5

console.log('rounded to with precision number :', _.round(5.006, 2));
// output : rounded to precision : 5.01

//*********** _.isNil --> method is used to check if the value is null or undefined. if the value is nullish then return boolean true or false
// syntax : _.isNil(value)
console.log('Check the value :', _.isNil(null));
// output : Check the value : true

console.log('Check the value :', _.isNil(NaN));
// output : Check the value : false

//*********** _.toLower --> convert to lowerCase
// syntax : _.toLower( [string = ''])
console.log('Check the toLower :', _.toLower('Hello-LODASH'));
// output : Check the toLower : hello-lodash

//*********** _.toUpper --> convert to upperCase
// syntax : _.toUpper( [string = ''])
console.log('Check the toLower :', _.toUpper('Hello-Lodash'));
// output : Check the toLower : HELLO-LODASH

//*********** _.pick --> property base create new object
// syntax : _.pick( object, paths )
const obj = { 'x': 1, 'y': '2', 'z': 3 };
console.log('New obj :', _.pick(obj, ['x'])); // output : New obj : HELLO-LODASH

//*********** _.clone() --> shadow Clone / type
// syntax : _.clone(value)
const val = {
  x: 23,
};
const shallowCopy = _.clone(val); // Shallow copy
console.log('Comparing original with shallow ', val === shallowCopy);

val.x = 10; // Changing original value
console.log('After changing original value');
console.log('Original value ', val);
// output : Original value  { x: 10 }
console.log('Shallow Copy value ', shallowCopy); // Note: _.clone() doesn’t copy deeply it just passed the reference.
// output : Shallow Copy value  { x: 23 }

//*********** _.assign() --> assign the properties of the given source objects to the destination objects
// syntax: _.assign( dest_object, src_obj )
console.log('assign :', _.assign({ a: 1, c: 3 }, { c: 2 }));
// output :assign : { a: 0, c: 3 }

//*********** _.find()
// syntax: _.find(collection, predicate, fromIndex)
const x = [
  { 'name': 'Akhil', marks: '78' },
  { 'name': 'Akhil', marks: '98' },
  { 'name': 'Akhil', marks: '97' },
];

result = _.find(x, obj => {
  if (obj.marks > 90) {
    return true;
  }
});
console.log('find for the first object in the list', result);
// output : find for the first object in the list { name: 'Akhil', marks: '98' }

//*********** _.keyBy()
// syntax: _.keyBy( collection, iteratee )
const array = [
  { 'dir': 'left', 'code': 89 },
  { 'dir': 'right', 'code': 71 },
];
console.log(
  'keyBy method :',
  _.keyBy(array, o => String.fromCharCode(o.code)),
);
// output : keyBy method :  { Y: { dir: 'left', code: 89 }, G: { dir: 'right', code: 71 } }

//*********** _.reduce()
// syntax : _.reduce(collection, iteratee, accumulator)
const users = [1, 2, 3, 4];
console.log(
  'reduce method :',
  _.reduce(users, (sum, n) => sum + n, 0),
);
// output : reduce method: 10

//*********** _.delay()
// syntax : _.delay( func, wait, args )
_.delay(
  x => {
    console.log('Delay method:', x);
  },
  3000,
  'WaitFor3Sec!',
);
// output : Delay method: WaitFor3Sec!

//*********** _.sortedUniq() - all duplicated values won’t be returned
// syntax : _.sortedUniq(array)
var sortedArray = [1, 1, 2, 3, 3, 3, 5, 8, 8];
console.log('sortedUniq :',_.sortedUniq(sortedArray));
// output : sortedUniq : [ 1, 2, 3, 5, 8 ]


//*********** _.deburr() -  It removes all “combining diacritical marks”, so “é” becomes “e”.
// syntax : _.deburr([string=''])
console.log('deburr :',_.deburr("déjà vu"));
// output : deburr : deja vu

//*********** _.groupBy() 
// syntax : _.groupBy( collection, iteratee )
var user = ([6.5, 4.12, 6.8, 5.4,4.5]);
console.log('groupBy :',_.groupBy(user, Math.floor ));
 
