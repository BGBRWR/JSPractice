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
console.log(noiseArray)

animal.noises = noiseArray
console.log(animal)
