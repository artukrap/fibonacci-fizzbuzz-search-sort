/*
* Write a JavaScript function to sort the following array of objects by movie value.
*/

function sortObjectList(obj_list, key) {
  return obj_list.sort(function(obj1, obj2) {
  	if(obj1[key] < obj2[key]) return -1;
    if(obj1[key] > obj2[key]) return 1;
    return 0;
  });
}

let testFour = [
  {
    movie: "Ghostbusters",
    director: "Ivan Reitman",
    year: 1984
  },
  {
    movie: "Good Will Hunting",
    director: "Gus Van Sant",
    year: 1997
  },
  {
    movie: "Resident Evil",
    director: "Paul W.S. Anderson",
    year: 2002
  },
  {
    movie: "E.T. the Extra-Terrestrial",
    director: "Steven Spielberg",
    year: 1882
  }
];

console.log(sortObjectList(testFour, "movie"));
