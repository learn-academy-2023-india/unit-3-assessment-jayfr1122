import React, { useState } from "react"
import Card from "./components/Card"
import "./App.css"

const App = () => {
  const suit = ["❤️", "♦️", "♠️", "♣️"]
  const rank = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
    "A"
  ]
  const [hand, setHand] = useState([])

  const drawCard = () => {
    // 1) Math.floor Math.random * rank.length = a random floating number between 0 and the length of rank. Math.floor rounds the number do to the nearest whole number so that way it is usuable for the array. with rank in the beginning a choice is made with that number in relation to what rankis can be chosen in rank. this is being string interpolated so as to provide a string that corresponds to a playing card. The same above is being done on line 27 to find a suit. Draw is the result of the string interpolation. 
    const draw = `${rank[Math.floor(Math.random() * rank.length)]} ${
      suit[Math.floor(Math.random() * suit.length)]
    }`
      // 2) See if the drawn card is already drawn.
    if (hand.indexOf(draw) === -1) {
      // 3) Add the drawn card if it isn't in the hand already.
      setHand([...hand, draw])
      // 4) If the card length is not 52...
    } else if (hand.length !== 52) {
      // 5)...draw again.
      drawCard()
      // 6) if the above conditions above arent met.
    } else {
      // 7) pop up and alert that says the below string.
      alert("All cards have been dealt.")
    }
  }
  // No need to change anything ABOVE this line ^

  const shuffle = () => {
    setHand([])
  }

  return (
    <>
    <h1>Draw a Card</h1>
    <button onClick={drawCard}>Click to Draw a Card</button>
    <button onClick={shuffle}>Return Cards and Shuffle Deck</button>
    <Card hand={hand} />
    </>
  )
}

export default App
