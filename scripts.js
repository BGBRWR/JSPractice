var animal = {}

animal.username = 'bob'

animal['tagline'] = "that's me"

var noises = []
animal.noises = noises
console.log(animal)

var count = 0
for (var key in animal) {
  count++
  if (key === 'username') {
    console.log('Hi my name is ' + animal[key])
  } else if (key === 'tagline') {
    console.log('I like to say ' + animal[key])
  }
  console.log(count)
}