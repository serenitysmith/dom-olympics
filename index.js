// grabbing header and creating new h1
var head = document.querySelector('#header');
// created new h1 element
var newHeading = document.createElement('h1');
// created text for h1
var headingText = document.createTextNode('JavaScript Made This!!')
// attached text to the h1
newHeading.appendChild(headingText)
// created a p element
var newP = document.createElement('p')
// text node to add text to p
var newPText = document.createTextNode('wrote the JavaScript')
// appenended text to p element
newP.appendChild(newPText);
//created span element
var newSpan = document.createElement('span')
// added text to span element 
var spanText = document.createTextNode('Serenity')
// gave span element a class to be styled differently
newSpan.className = 'name'
// created array of positive messages
var newMessages = [
    'Good News',
    'Mom is Home',
    'Really?',
    'Yes Im so excited!'
]
// grabbed messages that were on dom 
var messages = document.getElementsByClassName('message')
// iterated over messages to change inner html to corosponding array we created
for (var i = 0; i < messages.length; i++) {
    messages[i].innerHTML = newMessages[i]
}
// added even listener to clear button
document.getElementById('clear-button').addEventListener('click', function () {
    // iterated over array to hide messages
    for (var i = 0; i < messages.length; i++) {
        messages[i].style.display = 'none'
    }
})
// grabbed element by id
var dropDown = document.getElementById('theme-drop-down')
// grabbed left messages
var leftMessages = document.getElementsByClassName('left')
// grabbed right messages
var rightMessages = document.getElementsByClassName('right')
// event listener for change drop down menu
dropDown.addEventListener('change', function () {
    // if value from drop down is blue/brown
    if (dropDown.value == 'theme-one') {
        // iterated over left messages to make blue
        for (var i = 0; i < leftMessages.length; i++) {
            leftMessages[i].style.backgroundColor = 'blue'
        }
        // iterated over right messages to make them brown
        for (var i = 0; i < rightMessages.length; i++) {
            //styled right messages to be brown
            rightMessages[i].style.backgroundColor = 'brown'
        }
    }
    // 
    if (dropDown.value == 'theme-two') {
        // if drop down is is themme two color is red for left
        for (var i = 0; i < leftMessages.length; i++) {
            leftMessages[i].style.backgroundColor = 'red'
        }
        // if drop down is is themme two color is black for right
        for (var i = 0; i < rightMessages.length; i++) {
            rightMessages[i].style.backgroundColor = 'black'
        }
    }
})
var counter = 2;
// event lsitener for send button
document.querySelector('#send-btn').addEventListener('click', function(e) {
    e.preventDefault();
    var newDiv = document.createElement('div');
    // created new input
    var newMsgText = document.createTextNode(document.querySelector('#input').value);
    //appened new messages to parent element newMsg
    newDiv.appendChild(newMsgText);
    // added messages to newDiv
    newDiv.classList.add('message');
    if (counter % 2 === 0) {
        // adding messages to the left
        newDiv.classList.add('left')
    } else {
        // adding ,messages to the right
        newDiv.classList.add('right')
    }
    counter++;
    document.querySelector('.messages').appendChild(newDiv);
})





newSpan.appendChild(spanText);
head.appendChild(newHeading);

head.appendChild(newSpan);
head.appendChild(newP)


