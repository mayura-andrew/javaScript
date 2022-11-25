/*

You are given an object literal representing a part of your musical album collection. Each album has a unique id number as its key and several other properties. Not all albums have complete information.

You start with an updateRecords function that takes an object literal, records, containing the musical album collection, an id, a prop (like artist or tracks), and a value. Complete the function using the rules below to modify the object passed to the function.

    Your function must always return the entire record collection object.
    If #prop isn't tracks and value isn't an empty string, update or set that album's prop to value. (push)
    If #prop is tracks but the album doesn't have a tracks property, create an empty array and add value to it.
    If #prop is tracks and value isn't an empty string, add value to the end of the album's existing tracks array.
    If value is an empty string, delete the given prop property from the album.

Note: A copy of the recordCollection object is used for the tests.
*/

// Setup
const recordCollection = {
    2548: {
      albumTitle: 'Slippery When Wet',
      artist: 'Bon Jovi',
      tracks: ['Let It Rock', 'You Give Love a Bad Name']
    },
    2468: {
      albumTitle: '1999',
      artist: 'Prince',
      tracks: ['1999', 'Little Red Corvette']
    },
    1245: {
      artist: 'Robert Palmer',
      tracks: []
    },
    5439: {
      albumTitle: 'ABBA Gold'
    }
  };
  
  //Solution-0
  // Only change code below this line 
function updateRecords(records, id, prop, value) {
    if (prop !== 'tracks' && value !== "") {
        records[id][prop] = value;
    }else if (prop === "tracks" && records[id].hasOwnProperty("tracks")  === false){
        records[id][prop] = [value];
    }else if (prop === "tracks" && value !== ""){
        records[id][prop].push(value);
    }else if (value === ""){
        delete records[id][prop];
    }
    return records;

}
  
updateRecords(recordCollection, 5439, 'artist', 'ABBA');

//solution-2

function updateRecords(records, id , prop, value){
    if (value === ''){
        delete records[id][prop];
    }else if (prop ==='tracks'){
        records[id][prop] = records[id][prop] || [] //// this is called shortcircuit evaluation, see below for explanation
        records[id][prop].push(value);
    }else {
        records[id][prop] = value;
    }
    return records;
}
/*Code Explanation

    First checks if value is a blank string. If so, then the key (prop) is removed from the object.
    If that first check doesn’t pass, it next checks if prop is equal to tracks. The tracks array is initialized if it does not exist, and then value is pushed into the tracks array. (This step uses shortcircuit evaluation)
    If both these checks fail (meaning value is not an empty string and prop is not tracks), then either a new key (prop) and value (value) are added to the object, or an existing key is updated if the prop already exists.

Example Run

    updateRecords(5439, "artist", "ABBA"); runs.
    value is not a blank string, so the first condition of the else if statement fails.
    prop is equal to “artist”, not “tracks”, so the second condition of the else if statement fails.
    in the ‘else’ clause, artist: "ABBA" is added to the 5439 id.
*/

//solution-3
function updateRecords(records, id, prop, value) {
    // Access target album in record collection
    const album = records[id];
  
    // If value is an empty string,
    //  delete the given prop property from the album
    if (value === "") {
      delete album[prop];
    }
    // If prop isn't tracks,
    //  update or set that album's prop to value
    else if (prop !== "tracks") {
      album[prop] = value;
    }
    // If prop is tracks,
    //  add value to the end of the album's existing tracks array
    else {
      album["tracks"] = album["tracks"] || [];
      album["tracks"].push(value);
    }
  
    // Your function must always return the entire record collection object
    return records;
  }

  