var head = document.querySelector('#header');
var newHeading = document.createElement('h1');
var headingText = document.createTextNode('JavaScript Made This!!')

newHeading.appendChild(headingText)

var newP = document.createElement('p')
var newPText = document.createTextNode('wrote the JavaScript')
newP.appendChild(newPText);
var newSpan = document.createElement('span')
var spanText = document.createTextNode('Serenity')
newSpan.className = 'name'

var newMessages = [
    'Good News',
    'Mom is Home',
    'Really?',
    'Yes Im so excited!'
]

var messages = document.getElementsByClassName('message')
for (var i = 0; i < messages.length; i++) {
    messages[i].innerHTML = newMessages[i]
}

document.getElementById('clear-button').addEventListener('click', function () {
    for (var i = 0; i < messages.length; i++) {
        messages[i].style.display = 'none'
    }
})
var dropDown = document.getElementById('theme-drop-down')
var leftMessages = document.getElementsByClassName('left')
var rightMessages = document.getElementsByClassName('right')
dropDown.addEventListener('change', function () {
    if (dropDown.value == 'theme-one') {
        for (var i = 0; i < leftMessages.length; i++) {
            leftMessages[i].style.backgroundColor = 'blue'
        }
        for (var i = 0; i < rightMessages.length; i++) {
            rightMessages[i].style.backgroundColor = 'brown'
        }
    }
    if (dropDown.value == 'theme-two') {
        for (var i = 0; i < leftMessages.length; i++) {
            leftMessages[i].style.backgroundColor = 'red'
        }
        for (var i = 0; i < rightMessages.length; i++) {
            rightMessages[i].style.backgroundColor = 'black'
        }
    }
})
var counter = 2;

document.querySelector('#send-btn').addEventListener('click', function(e) {
    e.preventDefault();
    var newDiv = document.createElement('div');
    var newMsgText = document.createTextNode(document.querySelector('#input').value);
    newDiv.appendChild(newMsgText);
    newDiv.classList.add('message');
    if (counter % 2 === 0) {
        newDiv.classList.add('left')
    } else {
        newDiv.classList.add('right')
    }
    counter++;
    document.querySelector('.messages').appendChild(newDiv);
})










// newP.appendChild(newSpan)



newSpan.appendChild(spanText);
head.appendChild(newHeading);

head.appendChild(newSpan);
head.appendChild(newP)


