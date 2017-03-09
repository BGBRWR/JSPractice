var animal = {}

animal.username = 'bob'

animal['tagline'] = "that's me"

var noises = []
animal.noises = noises

// var count = 0
for (var key in animal) {
  // count++
  if (key === 'username') {
    console.log('Hi my name is ' + animal[key])
  } else if (key === 'tagline') {
    console.log('I like to say ' + animal[key])
  }
  // console.log(count)
}

var noiseArray = ['Bwaaa']
noiseArray.unshift('Moo')
noiseArray.push('RRRrr')
noiseArray[3] = 'woof'
// console.log(noiseArray)

animal.noises = noiseArray
// console.log(animal)

var AnimalTestUser = function (username) {
  var object = { username: username }
  if (arguments.length > 1) {
    object.otherArgs = []
    for (var i = 1; i < arguments.length; i++) {
      object.otherArgs.push(arguments[i])
    }
  }
  return object
}

var testSheep = AnimalTestUser('CottonBall', {'loves dancing': true}, [1, 2, 3])
console.log(testSheep) // { username: 'CottonBall', otherArgs: [ {'loves dancing': true}, [1,2,3] ] }

var AnimalCreator = function (username, species, tagline, noises) {
  return {
    username: username,
    species: species,
    tagline: tagline,
    noises: noises,
    friends: []
  }
}

var sheep = AnimalCreator('Cloud', 'sheep', 'You can count on me!', ['baahhh', 'arrgg', 'chewchewchew'])
var cow = AnimalCreator('Moo', 'cow', 'Drink my milk', ['Moo', 'arrgg', 'chewchewchew'])
var llama = AnimalCreator('Zeny', 'llama', 'I will spit on you', ['baahhh', 'arrgg', 'chewchewchew'])
console.log(sheep)
      // { username: 'Cloud',
      //  species: 'sheep',
      //  tagline: 'You can count on me!',
      //  noises: ['baahhh', 'arrgg', 'chewchewchew'],
      //  friends: []
      // }

var addFriend = function (animal, friend) {
  animal.friends.push(friend.username)
}

addFriend(sheep, cow)
console.log(sheep)
      // { username: 'Cloud',
      //  species: 'sheep',
      //  tagline: 'You can count on me!',
      //  noises: ['baahhh', 'arrgg', 'chewchewchew'],
      //  friends: ['Moo']
      // }
addFriend(sheep, llama)
console.log(sheep)
      // { username: 'Cloud',
      //  species: 'sheep',
      //  tagline: 'You can count on me!',
      //  noises: ['baahhh', 'arrgg', 'chewchewchew'],
      //  friends: ['Moo', 'Zeny']
      // }

var myFarm = [sheep, cow, llama]
addFriend(cow, sheep)
addFriend(llama, cow)

var addMatchesArray = function (arr) {
  for (var i = 0; i < arr.length; i++) {
    arr[i].matches = []
  }
  return arr
}

addMatchesArray(myFarm)
console.log(myFarm[0]) // { username: 'Cloud',
        //  species: 'sheep',
        //  tagline: 'You can count on me!',
        //  noises: ['baahhh', 'arrgg', 'chewchewchew'],
        //  friends: ['Moo', 'Zeny'],
        //  matches: []
        // }

var giveMatches = function (farm) {
  for (var animal in farm) {
    farm[animal].matches.push(farm[animal].friends[0])
  }
}

giveMatches(myFarm)
console.log(myFarm[0]) // { username: 'Cloud',
        //  species: 'sheep',
        //  tagline: 'You can count on me!',
        //  noises: ['baahhh', 'arrgg', 'chewchewchew'],
        //  friends: ['Moo', 'Zeny'],
        //  matches: ['Zeny']
        // }

var friends = []

friends.push(myFarm[0].username, myFarm[1].username)
console.log(friends)

var relationships = {}
relationships.friends = friends

var matches = []
relationships.matches = matches
relationships.matches.push('pig')

for (var i = 0; i < myFarm.length; i++) {
  myFarm[i].relationships = relationships
}

console.log(myFarm)
