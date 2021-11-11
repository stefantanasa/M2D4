let addedMemberList = [];

//fake list
let memList = [
  "George",
  "Johny",
  "Stefan",
  "Anusha",
  "Amir",
  "Seb",
  "Dan",
  "Daniela",
  "Nic",
];

let addMemberButton = document.getElementById("add-member-button");
let inputMemberForm = document.getElementById("member-to-add");
let waitingList = [];
let teamsObject = {};
//create new member element

//get member elsement node and append to list
let getCreateMemberListNode = document.getElementById("added-members-to-list");

//funtion to add a new name to the list

const addMember = function () {
  let newElement = document.createElement("li");
  newElement.innerText = inputMemberForm.value;
  newElement.className = "list-group-item";
  getCreateMemberListNode.appendChild(newElement);
  addedMemberList.push(inputMemberForm.value);
  inputMemberForm.value = "";
};

//Get team numbers and number of members added
let objTeams = {};

let membersNumber = addedMemberList.length;
let getTeamNode = document.getElementById("teams-list");
let numberOfTeams = document.getElementById("input-numbers");
//how many teams function
const howManyTeams = function () {
  //shuffle fake list
  let shuffledList = addedMemberList.sort(() => Math.random() - 0.5);
  console.log(shuffledList);
  // splitting the list:
  let chunk_size = Math.floor(shuffledList.length / numberOfTeams.value);
  var tempArray = [];

  for (index = 0; index < shuffledList.length; index += chunk_size) {
    myChunk = shuffledList.slice(
      index,
      index + Math.floor(shuffledList.length / numberOfTeams.value)
    );
    // Do something if you want with the group

    tempArray.push(myChunk);
  }

  // ul in the dom to be created:
  for (i = 0; i < numberOfTeams.value; i++) {
    let newTeam = document.createElement("ul");
    newTeam.innerText = `Team ${i + 1}`;
    newTeam.className = `list-group-item ${i}`;
    getTeamNode.appendChild(newTeam);
  }
  numberOfTeams.value = "";
  let node = document.getElementsByClassName("list-group-item 0");
  console.log(`is a node: ${node[0]}`);

  for (i = 0; i < tempArray.length; i++) {
    console.log(tempArray[i]);
    let node = document.getElementsByClassName(`list-group-item ${i}`);
    for (x = 0; x < tempArray[i].length; x++) {
      console.log(tempArray[i][x]);
      let mem = document.createElement("li");
      mem.innerText = tempArray[i][x];
      mem.className = "list-group-item";
      node[0].appendChild(mem);
    }
  }

  ////so far so good :)
  for (i = 0; i < addedMemberList.length; i++) {
    for (member = 0; member < addedMemberList.length; member++) {
      objTeams[member + 1] = addedMemberList[member];
    }
  }
};
// let obj = {};

// let chunk_size = 2;
// var index = 0;
// var arrayLength = memList.length;
// var tempArray = [];

// for (index = 0; index < arrayLength; index += chunk_size) {
//   myChunk = memList.slice(index, index + chunk_size);
//   // Do something if you want with the group
//   tempArray.push(myChunk);
// }

// for (i = 0; i < tempArray.length; i++) {
//   let oneElement = document.createElement("li");
//   oneElement.innerText = `This is ${tempArray[i]}`;
//   getCreateMemberListNode.appendChild(oneElement);
// }

/*
 * Returns an array with arrays of the given size.
 *
 * @param myArray {Array} array to split
 * @param chunk_size {Integer} Size of every group
 




function chunkArray(myArray, chunk_size) {
  var index = 0;
  var arrayLength = myArray.length;
  var tempArray = [];

  for (index = 0; index < arrayLength; index += chunk_size) {
    myChunk = myArray.slice(index, index + chunk_size);
    // Do something if you want with the group
    tempArray.push(myChunk);
  }

  return tempArray;
}
// Split in group of 3 items
var result = chunkArray(memList, Math.floor(memList.length / 4));
// Outputs : [ [1,2,3] , [4,5,6] ,[7,8] ]

for (let list = 0; list < result.length; list++) {
  console.log(result[list]);
}

*/

/* Object way
let equalTeams = memList.length - (memList.length % 3);
for (i = 0; i < equalTeams; i++) {
  for (member = 0; member < equalTeams; member++) {
    objTeams[member + 1] = memList[member];
  }
}
console.log(objTeams);
console.log(objTeams);

for (i = 1; i < Object.keys(objTeams).length; i++) {
  let oneElement = document.createElement("li");
  oneElement.innerText = `This is ${objTeams[i]}`;
  getCreateMemberListNode.appendChild(oneElement);
}
*/
// for (i = 0; i < addedMemberList.length; i++) {
//   for (x = 0; x < addedMemberList.length; x++) {
//     obj[x + 1] = addedMemberList[x];
//   }
// }

// const randomIndex = function () {};
// //test

// console.log(obj);

// Shuffle the list

// let shuffled = memList.sort(() => Math.random() - 0.5);
// console.log(memList);

// let equalTeams = memList.length - (memList.length % 3);

// console.log(equalTeams);
