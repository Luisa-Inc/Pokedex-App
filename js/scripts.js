  //create an array 'userList' that shows at least 3 objects with names, heights and types


  let userList = [
    
    { name: 'Bulbasaur', height: 0.7, type: ['grass', 'poison'] },
    { name: 'Charmander', height: 0.6, type: 'fire'},
    { name: 'Pikachu', height: 0.4, type: 'electric'},
    
];


// pokemon list 'for each' function

userList.forEach(function(user) {
  console.log(user.name + ' is ' + user.height + ' meters tall and of the following pokemon type: ' +  user.type);
});
