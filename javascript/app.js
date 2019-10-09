function playSound(e) {
  //allows us to grab the key code associated with the key that is pressed
  console.log(e.keyCode);
  const audio = document.querySelector(`audio[data-key= "${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key = "${e.keyCode}"]`);

  console.log(key);
  console.log(audio);
  if (!audio) {
    return;
  }
  audio.currentTime = 0; //this will allow you to click on the keys and have the audio rewind to 0 so that there are no lag time
  audio.play();
  key.classList.toggle("playing");
}
window.addEventListener("keydown", playSound);
const keys = document.querySelectorAll(".key");
//keys is now an array of the keys because we selected everything with the class name key
//because we have an array list we need to loop through the array when adding the event listener
keys.forEach(key => key.addEventListener("transitionend", removeTransition));

//passing e will then let us get the event in the console and we can console log it
function removeTransition(e) {
  //by looking at the propertyName we can just filter it out for what we want to look for in this case when the transform ends
  if (e.propertyName !== "transform") {
    return; //this will skip the propertName that does is not a transform
  }
  //   console.log(e.propertyName);
  this.classList.remove("playing");
}
