function loneGuy() {
    console.log(this)
}
loneGuy()  //  window object


let averageJoe = {
    name: "Joe",
    talk: loneGuy
}
averageJoe.talk()  //   {name: "Joe", talk: ƒ}


let anotherAverageJoe = {
    name: "Another Joe",
    speak: averageJoe.talk
}
anotherAverageJoe.speak()  //  {name: "Another Joe", speak: ƒ}


let anotherLoneGuy = anotherAverageJoe.speak
anotherLoneGuy()  //  window object


anotherLoneGuy.apply(averageJoe)  //  {name: "Joe", talk: ƒ}
averageJoe.talk.call(anotherAverageJoe)  //  {name: "Another Joe", speak: ƒ}