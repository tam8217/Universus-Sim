'use client'
import Image from "next/image"

import { useState } from 'react'


function Card({cardData}) {
  return (
    <Image src={cardData.url} alt={cardData.name}/>
  )
}

function Hand({ curPlayer }) {
  const curHand = curPlayer.curHand.map(card => 
    <Card cardData={card} key={1} />
  )
  return(
    <div>
      {curHand}
    </div>
  )
}



export default function ShowHand({ curPlayer }) {
    return (
        <button onClick={drawFunction} className='drawBtn'>Draw?</button>
    )
}