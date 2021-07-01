const foxImg = document.querySelector("#fox")
// console.log(foxImg)
const foxSays = new Audio("../audio/fox.mp3")
// const notFoxImg = document.getElementById("notFox")
    // .. goes outside of current directory, then into audio directory
foxImg.addEventListener("click", () => {
    foxSays.volume = 0.1
    foxSays.play()
})
const notFoxImg = document.querySelector("#notFox")

notFoxImg.addEventListener("click", evt => {
  if (evt.target.id !== "notFox"){
    const audioElement = new Audio(`../audio/${evt.target.id}.mp3`)
    audioElement.volume = .01
    audioElement.play()
  }
})
console.log("hi", notFoxImg)
// notFoxImg.addEventListener("click", (evt) => {
//     if (evt.target.id !== "notFox") {
//         const audioElement = new Audio(`../audio/$(evt.target.id).mp3`)
//         audioElement.volume = 0.05
//         audioElement.play()
//     }
// })