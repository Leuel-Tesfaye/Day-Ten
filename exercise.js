// Exercise level 1: 
const a = new Set([4, 5, 8, 9])
const b = [3, 4, 5, 7]
const countries = new Set(['Finland', 'Sweden', 'Norway'])

// 1 . create an empty set 
const loop = new Set () 

// 2. create a set containing 0 to 10 using loop 
for(const loop of a && b) {
    console.log(loop)
}
// 3. remove an element from the set
console.log(countries.delete('Finland'))
console.log(countries)

// 4. clear a set 
console.log(a.clear())
console.log(a.size)

