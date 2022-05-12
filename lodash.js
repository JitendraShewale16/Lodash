const _ = require("lodash");

//**********   first and last array elements *****************
let words = ['sky', 'wood', 'forest', 'falcon','pear', 'ocean', 'universe'];
console.log(`First element :${_.first(words)}`);
// output : First element :sky
console.log(`Last element :${_.last(words)}`);
// output : Last element :universe

//**********  nth array elements *****************
let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(`nth element :${_.nth(nums, 3)}`);
// output : nth element :4
console.log(`- nth element :${_.nth(nums, -3)}`);
// output : - nth element :7

//**********  chunking array *****************
console.log(`chunk 2 :${_.chunk(nums, 2)}`);
// output : chunk 2 :1,2,3,4,5,6,7,8,9

//**********  array slice *****************
console.log(`slice 2, 6 :${_.slice(nums, 2, 6)}`);
// output : slice 2, 6 :3,4,5,6
console.log(`slice 0, 8 :${_.slice(nums, 0, 8)}`);
// output :slice 0, 8 :1,2,3,4,5,6,7,8

//**********  random array element *****************
console.log('random array :', _.sample(words));
// output :random array : falcon

//**********  shuffling array elements *****************
console.log('shuffling array :',_.shuffle(words));
// output : shuffling array : [
//  'pear',   'wood',
//  'falcon', 'universe',
//  'ocean',  'sky',
//  'forest'
// ]

//**********  determine data type    *****************
let vals = [1, 2, 'good', [1, 2], {name: 'Peter', age: 32}];
    vals.forEach( (e) => {

    if (_.isNumber(e)) {
        console.log(`${e} is a number`);
    }

    if (_.isString(e)) {
        console.log(JSON.stringify(e) + ' is a string');
    }

    if (_.isArray(e)) {
        console.log(JSON.stringify(e) + ' is an array');
    }

    if (_.isObject(e)) {
        console.log(JSON.stringify(e) + ' is an object');
    }

});

// output : 1 is a number
// 2 is a number
// "good" is a string
// [1,2] is an array
// [1,2] is an object
// {"name":"Peter","age":32} is an object

//**********  range function    *****************
// Creates an array of numbers (positive and/or negative) progressing from start up to, but not including, end. 
// If end is not specified it’s set to start with start then set to 0. 
// If end is less than start a zero-length range is created unless a negative step is specified.
console.log(_.range(5)); 
// output : [ 0, 1, 2, 3, 4 ]

//*********** array regrouping the elements using zip/ unzip functions
var result = _.zip(['a', 'b'], [1, 2], [true, false]);
console.log(`zip function array elements :${result}`);
// output : zip function array elements :a,1,true,b,2,false
console.log(`unzip function array elements :${_.unzip(result)}`);
// output : unzip function array elements :a,b,1,2,true,false

//*********** Converts all elements in array into a string
console.log(`join elements with string :${_.join(nums,'-')}`);
// output : join elements with string :1-2-3-4-5-6-7-8-9

//***********  Reverse the elements 
console.log(`Reverse elements :${_.reverse(nums)}`);
// output : Reverse elements :9,8,7,6,5,4,3,2,1

//***********  Remove elements | modify the array elements
console.log(`Remove elements :${_.pullAll(nums,[1,5])}`)
// output : Remove elements :9,8,7,6,4,3,2

//***********  if plain object then returns true else false
console.log(`if plain object then returns true :${_.isPlainObject({'X':1})}`);
// output : if plain object then returns true :true
console.log(`if plain object then returns false :${_.isPlainObject([0,1])}`);
// output : if plain object then returns false :false


//*********** _.times receives as arguments the number of iterations and 
// a function to execute n times and returns an array of the results. 
// Very useful when creating dynamic test data.
function getRandomNumber() {
    return Math.round(Math.random() * 100);
}
console.log(`no. of iterations :${_.times(5, getRandomNumber)}`);
// output : no. of iterations :15,73,8,16,70

//*********** Difference of two arrays 
const allIds = [1, 3, 4, 2, 10, 22, 11, 8];
const activeIds = [1, 4, 22, 11, 8];
console.log(`Difference of ids :${_.difference(allIds, activeIds)}`);
// output : Difference of ids :3,2,10

//***********  Clone - deeply 
let people = [
    {
      name: 'Arnold', specialization: 'C++',
    },
    {
      name: 'Jason',specialization: 'Python',
    },
    {
      name: 'Percy', specialization: 'JS',
    },
  ];
  let peopleCopy = _.cloneDeep(people);
  console.log(`C++ ${peopleCopy.filter(  (person) => person.specialization == 'C++')}`);
  // output :  [ { name: 'Arnold', specialization: 'C++' } ]
  
  for (person of folksDoingCpp) {person.specialization = 'JS';}
  console.log('person ...Convert them to JS',person);
  //person ...Convert them to JS { name: 'Arnold', specialization: 'JS' }
  
  console.log('array is untouched after deep cloning',people);
  //array is untouched after deep cloning [
  //  { name: 'Arnold', specialization: 'C++' },
  //  { name: 'Jason', specialization: 'Python' },
  //  { name: 'Percy', specialization: 'JS' }


  