//random to do list tbh this is nothing im not going to add many comments

//html
let containerEL = document.getElementById("container");

//event listner
let item = document.addEventListener("keydown", keydownHandler);


//create array
let list = [];



//print function

function keydownHandler(event) {

    if (event.keyCode === 13) {
        item = prompt("What do you want added to the list?!");
        if (item == "") {
            return;
        };
        list.push(item);
        listHandler();
    }
    if (event.keyCode == 46) {
        item = prompt("What are we taking off?");
        if (item == "") {
            return;
        };
        listHandlerRemove();
    }
}

function listHandler() {

    containerEL.innerHTML = "";

    for (let i = 0; i < list.length; i++) {
        containerEL.innerHTML += `${list[i]} `;
    }
}

function listHandlerRemove() {
    //line 47 is the only line worth anything in this whole script beacuse I used x.spilt so I can go through each term and remove if need be
    let listItems = item.split(/(?:,| )+/);
    console.log(listItems);
    for (let i = 0; i < list.length; i++) {

        for (n = 0; n < listItems.length; n++) {
            if (list[i] === listItems[n]);
            list.splice(i, 1);
        }
    }
    listHandler();
}