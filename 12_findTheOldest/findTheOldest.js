const findTheOldest = function(people) {
  people.forEach(person => {
    if ( !person.yearOfDeath )
      person.yearOfDeath = (new Date()).getFullYear();
  });

  people.sort((person1, person2) => {
    age1 = person1.yearOfDeath - person1.yearOfBirth;
    age2 = person2.yearOfDeath - person2.yearOfBirth;
    return age2 - age1;
  })

  return people[0];
};

// Do not edit below this line
module.exports = findTheOldest;
