export default creatures = [
    {
        name: 'Gobelin',
        type: 'Goblinoïde',
        size: 'Petit',
        hp: {
            stable: 7,
            random: '2d6+0'
        },
        speed: 9,
        stats: {
            str: {
                val: 8,
                mod: -1
            },
            dex: {
                val: 14,
                mod: +2
            },
            con: {
                val: 10,
                mod: 0
            },
            int: {
                val: 10,
                mod: 0
            },
            wis: {
                val: 8,
                mod: -1
            },
            cha: {
                val: 8,
                mod: -1
            }
        },
        skills: [
            'Discrétion +6'
        ],
        sense: [
            'Vison dans le noir 18m',
            'Perception passive 9'
        ],
        language: [
            'commun',
            'gobelin'
        ],
        dangerousness: '1/4',
        xp: 50,
        abilities: [
            {
                name: 'Fuite agile',
                effect: "Le gobelin peut effectuer l'action [i]Se désengager[/i] ou [i]Se cacher[/i] par une action bonus à chacun de ses tours."
            }
        ],
        actions: [
            {
                name: "Arc court",
                effect: {
                    name: "Attaque d'arme à distance",
                    accuracy: 4,
                    range: "24/96",
                    numTarget: 1
                },
                dmg: {
                    stable: 5,
                    random: '1d6+2',
                    type: 'tranchants'
                }
            },
            {
                name: "Cimeterre",
                effect: {
                    name: "Attaque d'arme au corps à corps",
                    accuracy: 4,
                    range: "1,5",
                    numTarget: 1
                },
                dmg: {
                    stable: 5,
                    random: '1d6+2',
                    type: 'tranchants'
                }
            },
        ]
    }
]