let addedMemberList = [];
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
};

//Get team numbers and number of members added

let membersNumber = addedMemberList.length;
let getTeamNode = document.getElementById("teams-list");
const howManyTeams = function () {
  let numberOfTeams = document.getElementById("input-numbers").value;
  for (i = 0; i < numberOfTeams; i++) {
    console.log(i);
    let newTeam = document.createElement("li");
    newTeam.innerText = `Team ${i + 1}`;
    newTeam.className = "list-group-item";
    getTeamNode.appendChild(newTeam);
  }
};

const randomIndex = function () {};
//test
let teams = 3;
let memList = ["george", "Stefan", "Anusha", "Amir", "seb", "Dan", "Daniela"];
let obj = {};
for (i = 0; i < 4; i++) {
  for (x = 0; x < 4; x++) {
    obj.x = memList[i];
  }
}

console.log(obj);
