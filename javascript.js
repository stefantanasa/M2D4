let addedMemberList = [];
let addMemberButton = document.getElementById("add-member-button");
let inputMemberForm = document.getElementById("member-to-add");

//create new member element
let newElement = document.createElement("li");
newElement.innerText = "george";
newElement.className = "list-group-item";

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

//testing log
