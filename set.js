// set : is a collection of elements. set can only contains similar elements 
// creating an empty set 
let companies = new Set() 
console.log(companies)

// creating set from array 
let languages = [
    'English',
    'Finnish',
    'English',
    'French',
    'Spanish',
    'English',
    'French'
]

const setOfLanguages = new Set(languages)
console.log(setOfLanguages)

// set is an iterable object and we can iterate through each element 

const setOfLanguages2 = new Set(languages)
for(const language of setOfLanguages) {
        console.log(language)
}

// Adding an element to a set

let Companies = new Set()
console.log(Companies.size)
Companies.add('Google')
Companies.add('Microsoft')
Companies.add('Facebook')
Companies.add('Twitter')
Companies.add('Amazon')
Companies.add('Alibaba')
console.log(Companies)

// adding an element to a set through looping 
let companies1  = ['Google','Microsoft','Facebook','Twitter','Amazon','Alibaba ','Github']
const setOfCompanies = new Set() 
for ( const addCompanies of companies1) {
    setOfCompanies.add(addCompanies)
}
console.log(setOfCompanies)

// Deleting an element in a set 
let companies2 =  new Set(['Google','Microsoft','Facebook','Twitter','Amazon','Alibaba ','Github'])
console.log(companies2.delete('Google'))
console.log(companies2)

// checking an element in a set 
console.log(companies2.has('Google'))
console.log(companies2.has('Facebook'))

// map : 
const map = new Map() 
console.log(map.size)

// creating a map from an array 
countries =  [
    ['Finland', 'Helsinki'],
    ['Sweden', 'Stockholm'],
    ['Norway', 'Oslo'],
  ]

const countriesMap = new Map (countries)
console.log(countriesMap)
console.log(countriesMap.size)

// getting a value from the map 
console.log(countriesMap.get('Sweden'))

// getting all values from the map using loop 
for(const loop of countriesMap){
    console.log(loop)
}





