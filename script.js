function editProf(idToSelect){
    var elem = document.querySelector(idToSelect)
    elem.innerText = 'John Booth'
}

var connections = 2
function removeUser(idToSelect){
    var elem = document.querySelector(idToSelect)
    var user = document.querySelector('#twoCircle')
    connections--
    elem.remove()
    user.innerText = connections
}

var connections2 = 418
function addUser(idToSelect){
    var elem = document.querySelector(idToSelect)
    var user = document.querySelector('#fiveHundredCircle')
    var requests = document.querySelector('#twoCircle')
    connections--
    connections2++
    elem.remove()
    user.innerText = connections2
    requests.innerText = connections
}