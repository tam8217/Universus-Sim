'use client'

import Image from "next/image"
import DrawButton from "@/client/drawButton"

import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';


const deckOne = {
  name: "Cowboy Bebop - Spike",
  handSize: 6,
  startingHealth: 29,
  cards: [
    {
      name: "Questioning Threat",
      type: "Attack",
      keywords: ['Ranged'],
      symbols: ['Chaos', 'Good', 'Water'],
      difficulty: 3,
      check: 3,
      attackZone: 'Mid',
      speed: 2,
      damage: 3,
      url: 'https://universus.cards/cards/cb02/005.webp',
      enhances: [
        {
          cost: 'flip1Found',
          speedBuff: 3
        },
        {
          cost: null,
          deadklock: true,
          checkBonus: 5
        }
      ]
    },
    {
      name: "Questioning Threat",
      type: "Attack",
      keywords: ['Ranged'],
      symbols: ['Chaos', 'Good', 'Water'],
      difficulty: 3,
      check: 3,
      attackZone: 'Mid',
      speed: 2,
      damage: 3,
      url: 'https://universus.cards/cards/cb02/005.webp',
      enhances: [
        {
          cost: 'flip1Found',
          speedBuff: 3
        },
        {
          cost: null,
          deadklock: true,
          checkBonus: 5
        }
      ]
    }
  ]
}

const curPlayer = {
  deck: deckOne,
  curHand: []
}



function GamePage() {
  return (
    <h3>Game Time!</h3>
    
  )
}

function HomePage() {
  return (
    <div className="flex min-h-screen justify-center bg-zinc-50 font-sans dark:bg-black">
      <h3>Universus Simulator!</h3>
    </div>
  )
}

function Card({ cardData }) {
  return (
    <Image src={cardData.url} alt={cardData.name} width={200} height={300} />
  )
}

function Hand({ hand }) {
  const curHand = hand.map(card =>
    <Card cardData={card} key={card.name} />
  )
  return (
    <div className="flex justify-center">
      {curHand}
    </div>
  )
}

const content = <HomePage />

export default function Home() {
  const [hand, setHand] = useState([])

  function drawFunction() {
    console.log('Clicked!')
    console.log(curPlayer)
    if (curPlayer.deck.cards.length != 0) {
      curPlayer.curHand.push(curPlayer.deck.cards[0])
      curPlayer.deck.cards.pop()
      setHand(curPlayer.curHand)
    } else {
      alert('Out of cards!')
    }
    
    console.log(hand)
  }



  return (
    <BrowserRouter>

    </BrowserRouter>
  );
}
