'use client'

import { useState } from 'react'
import { refresh } from 'next/cache'


export default function DrawButton({ curPlayer }) {
    function drawFunction() {
        console.log('Clicked!')
        console.log(curPlayer)
        curPlayer.curHand.push(curPlayer.deck.cards[0])
        curPlayer.deck.cards.pop()
    }
    return (
        <button onClick={drawFunction} className='drawBtn'>Draw?</button>
    )
}