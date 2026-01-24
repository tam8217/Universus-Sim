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
            check:3,
            attackZone: 'Mid',
            speed: 2,
            damage: 3,
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
            check:3,
            attackZone: 'Mid',
            speed: 2,
            damage: 3,
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
            check:3,
            attackZone: 'Mid',
            speed: 2,
            damage: 3,
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

const startGame = () => {

}