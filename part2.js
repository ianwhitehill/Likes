var likes = 0
var likeCounter1 = document.querySelector("#numLikes")
var likeCounter2 = document.querySelector("#numLikes2")
var likeCounter3 = document.querySelector("#numLikes3")

function addLike1() {
    likes++
    likeCounter1.innerText = likes + " like(s)"
}

var likes2 = 0
function addLike2() {
    likes2++
    likeCounter2.innerText = likes2 + " like(s)"
}

var likes3 = 0
function addLike3() {
    likes3++
    likeCounter3.innerText = likes3 + " like(s)"
}