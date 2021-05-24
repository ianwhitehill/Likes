var likes = 3
var likeCounter = document.querySelector("#numLikes")

function addLike() {
    likes++
    likeCounter.innerText = likes + " like(s)"
}