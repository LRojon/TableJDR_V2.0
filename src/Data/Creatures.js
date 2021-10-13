let creatures = [
    { // Gobelin
        "hp": {
            "stable": 7,
            "random": "2d6+0"
        },
        "stats": {
            "str": {
                "val": 8,
                "mod": -1
            },
            "dex": {
                "val": 14,
                "mod": 2
            },
            "con": {
                "val": 10,
                "mod": 0
            },
            "int": {
                "val": 10,
                "mod": 0
            },
            "wis": {
                "val": 8,
                "mod": -1
            },
            "cha": {
                "val": 8,
                "mod": -1
            }
        },
        "_id": "614c41fcc739352db563c74e",
        "name": "Gobelin",
        "type": "Goblinoïde",
        "size": "Petite",
        "speed": "9m",
        "armor": 15,
        "skills": [
            "Discrétion +6"
        ],
        "senses": [
            "Vison dans le noir 18m",
            "Perception passive 9"
        ],
        "languages": [
            "commun",
            "gobelin"
        ],
        "dangerousness": "1/4",
        "xp": 50,
        "abilities": [
            {
                "name": "Fuite agile",
                "effect": "Le gobelin peut effectuer l'action <i>Se désengager</i> ou <i>Se cacher</i> par une action bonus à chacun de ses tours.",
                "_id": "614d97a77e507b756e7e122b"
            }
        ],
        "actions": [
            {
                "name": "Arc court",
                "effect": {
                    "name": "Attaque d'arme à distance",
                    "accuracy": 4,
                    "range": "24/96",
                    "numTarget": 1
                },
                "dmg": {
                    "stable": 5,
                    "random": "1d6+2",
                    "type": "tranchants"
                },
                "_id": "614c436fc739352db563c758"
            },
            {
                "name": "Cimeterre",
                "effect": {
                    "name": "Attaque d'arme au corps à corps",
                    "accuracy": 4,
                    "range": "1,5",
                    "numTarget": 1
                },
                "dmg": {
                    "stable": 5,
                    "random": "1d6+2",
                    "type": "tranchants"
                },
                "_id": "614d97a77e507b756e7e122d"
            }
        ],
    },
    { // Chevreuil
        "hp": {
            "stable": 4,
            "random": "1d8+0"
        },
        "stats": {
            "str": {
                "val": 11,
                "mod": 0
            },
            "dex": {
                "val": 16,
                "mod": 3
            },
            "con": {
                "val": 11,
                "mod": 0
            },
            "int": {
                "val": 2,
                "mod": -4
            },
            "wis": {
                "val": 14,
                "mod": 2
            },
            "cha": {
                "val": 5,
                "mod": -3
            }
        },
        "_id": "614c5455e2005567ad8bb64f",
        "name": "Chevreuil",
        "type": "Bête",
        "size": "Moyenne",
        "speed": "15m",
        "armor": 13,
        "skills": [],
        "senses": [
            "Perception passive 12"
        ],
        "languages": [],
        "dangerousness": "0",
        "xp": 10,
        "abilities": [],
        "actions": [
            {
                "name": "Morsure",
                "effect": {
                    "name": "Attaque d'arme au corps à corps",
                    "accuracy": 2,
                    "range": "1,5",
                    "numTarget": 1
                },
                "dmg": {
                    "stable": 2,
                    "random": "1d4+0",
                    "type": "perforants"
                },
                "_id": "614d97f77e507b756e7e1233"
            }
        ],
    },
    { // Blême
        "hp": {
            "stable": 36,
            "random": "8d8+0"
        },
        "stats": {
            "str": {
                "val": 16,
                "mod": 3
            },
            "dex": {
                "val": 17,
                "mod": 3
            },
            "con": {
                "val": 10,
                "mod": 0
            },
            "int": {
                "val": 11,
                "mod": 0
            },
            "wis": {
                "val": 10,
                "mod": 0
            },
            "cha": {
                "val": 8,
                "mod": -1
            }
        },
        "_id": "614cbb5e66f44ef785e095dd",
        "name": "Blême",
        "type": "Mort-vivant",
        "size": "Moyenne",
        "speed": "9m",
        "armor": 13,
        "skills": [
            "Résistance aux dégâts nécrotiques",
            "Immunité contre les dégâts de poison",
            "Immunité contre les états Charmé Empoisonné et Épuisé"
        ],
        "senses": [
            "Vision dans le noir 18 m",
            "Perception passive 12"
        ],
        "languages": [
            "commun"
        ],
        "dangerousness": "2",
        "xp": 450,
        "abilities": [
            {
                "name": "Mépris du renvoi",
                "effect": "Le blême et toutes les goules situées à 9 mètres ou moins de lui bénéficient d'un avantage lors des jets de sauvegarde contre les effets qui renvoient les morts-vivants.",
                "_id": "614d97317e507b756e7e121e"
            },
            {
                "name": "Puanteur",
                "effect": "Les créatures qui commencent leur tour à 1,50 mètre ou moins du blême doivent chacune réussir un jet de sauvegarde de Constitution DD 10 pour ne pas être empoisonnées jusqu'au début de leur prochain tour. Les créatures qui ont réussi leur jet de sauvegarde sont immunisées contre la puanteur du blême pendant 24 heures.",
                "_id": "614d97317e507b756e7e121f"
            }
        ],
        "actions": [
            {
                "name": "Griffes",
                "effect": {
                    "name": "Attaque d'arme au corps à corps",
                    "accuracy": 5,
                    "range": "1,5",
                    "numTarget": 1
                },
                "dmg": {
                    "stable": 10,
                    "random": "2d6+3",
                    "type": "tranchants",
                    "effect": "Si la cible n'est pas un mort-vivant, elle doit réussir un jet de sauvegarde de Constitution DD 10 pour ne pas être <i>paralysée</i> pendant 1 minute. La cible peut retenter le jet de sauvegarde à la fin de chacun de ses tours et mettre fin à l'effet dont elle est victime en cas de réussite."
                },
                "_id": "614d97317e507b756e7e1220"
            },
            {
                "name": "Morsure",
                "effect": {
                    "name": "Attaque d'arme au corps à corps",
                    "accuracy": 3,
                    "range": "1,5",
                    "numTarget": 1
                },
                "dmg": {
                    "stable": 12,
                    "random": "2d8+3",
                    "type": "perforants"
                },
                "_id": "614d97317e507b756e7e1221"
            }
        ]
    },
    { // Ala
        "hp": {
            "stable": 127,
            "random": "15d8+60"
        },
        "stats": {
            "str": {
                "val": 20,
                "mod": 5
            },
            "dex": {
                "val": 16,
                "mod": 3
            },
            "con": {
                "val": 18,
                "mod": 4
            },
            "int": {
                "val": 10,
                "mod": 0
            },
            "wis": {
                "val": 16,
                "mod": 3
            },
            "cha": {
                "val": 8,
                "mod": -1
            }
        },
        "_id": "615340e9926a282907ac9a8d",
        "name": "Ala",
        "type": "Fée",
        "size": "Moyenne",
        "speed": "9m, vol 12m",
        "armor": 17,
        "skills": [
            "Athlétisme +8",
            "Discrétion +6",
            "Perception +9",
            "Immunité contre les dégâts de foudre",
            "Immunité contre les dégâts de poison",
            "Immunité contre les dégâts de tonnerre",
            "Immunité contre l'état Empoisonné"
        ],
        "senses": [
            "Vision dans le noir 18 m",
            "Perception passive 19"
        ],
        "languages": [
            "commun",
            "draconique"
        ],
        "dangerousness": "8",
        "xp": 3900,
        "abilities": [
            {
                "name": "Repli aérien",
                "effect": "Une ala ne provoque par d'attaque d'opportunité quand elle vole hors de portée d'un ennemi.",
                "_id": "615340e9926a282907ac9a8e"
            },
            {
                "name": "Chair empoisonnée",
                "effect": "La chair d'une ala est gorgée de poison. Une créature qui réussit une attaque de morsure contre une ala doit faire un jet de sauvegarde de Constitution DD 16. Sur un échec, elle subit 10 (3d6) dégâts de poison.",
                "_id": "615340e9926a282907ac9a8f"
            },
            {
                "name": "Force de la tempête",
                "effect": "Si un orage électrique se déchaîne à proximité d'une ala et de sa cible, le jet de sauvegarde de cette dernière contre le baiser de la foudre est désavantagé.",
                "_id": "615340e9926a282907ac9a90"
            }
        ],
        "actions": [
            {
                "name": "Attaques multiples",
                "effect": "Une ala porte deux attaques de <i>griffe</i> et une de <i>morsure</i>.",
                "_id": "615340e9926a282907ac9a91"
            },
            {
                "name": "Griffe",
                "effect": {
                    "name": "Attaque d'arme au corps à corps",
                    "accuracy": 8,
                    "range": "1,5",
                    "numTarget": 1
                },
                "dmg": {
                    "stable": 14,
                    "random": "2d8+5",
                    "type": "tranchants"
                },
                "_id": "615340e9926a282907ac9a92"
            },
            {
                "name": "Morsure",
                "effect": {
                    "name": "Attaque d'arme au corps à corps",
                    "accuracy": 8,
                    "range": "1,5",
                    "numTarget": 1
                },
                "dmg": {
                    "stable": 10,
                    "random": "1d10+5",
                    "type": "perforants",
                    "effect": "La cible doit réussir un jet de sauvegarde de Constitution DD 16 ou subir 10 (3d6) dégâts de poison."
                },
                "_id": "615340e9926a282907ac9a93"
            },
            {
                "name": "Baiser de la foudre (Recharge 5-6)",
                "effect": "Une cible qui se trouve dans un rayon de 15 mètres doit faire un jet de sauvegarde de Dextérité DD 16. Sur un échec, elle subit 28 (8d6) dégâts de foudre ou moitié moins sur une réussite.",
                "_id": "615340e9926a282907ac9a94"
            }
        ]
    },
    { // Aigle
        "hp": {
            "stable": 3,
            "random": "1d6+0"
        },
        "stats": {
            "str": {
                "val": 6,
                "mod": -2
            },
            "dex": {
                "val": 15,
                "mod": 2
            },
            "con": {
                "val": 10,
                "mod": 0
            },
            "int": {
                "val": 2,
                "mod": -4
            },
            "wis": {
                "val": 14,
                "mod": 2
            },
            "cha": {
                "val": 7,
                "mod": -2
            }
        },
        "_id": "615ee90cb2e3d458c9323716",
        "name": "Aigle",
        "type": "Bête",
        "size": "Petite",
        "speed": "3m, vol 18m",
        "armor": 12,
        "skills": [
            "Perception +4"
        ],
        "senses": [
            "Perception passive 14"
        ],
        "languages": [],
        "dangerousness": "0",
        "xp": 0,
        "abilities": [
            {
                "name": "Vue aiguisée",
                "effect": "L'aigle obtient un avantage lors des tests de Sagesse (Perception) basés sur la vue.",
                "_id": "615ee8dfd1be70238ce0f9fd"
            }
        ],
        "actions": [
            {
                "name": "Serres",
                "effect": {
                    "name": "Attaque d'arme au corps à corps",
                    "accuracy": "+4",
                    "range": "1,5",
                    "numTarget": "1"
                },
                "dmg": {
                    "stable": "4",
                    "random": "1d4+2",
                    "type": "tranchants",
                    "effect": null
                },
                "_id": "615ee8ebd1be70238ce0f9fe"
            }
        ]
    },
    { // Chien en chaleur
        hp: {
            stable: 0.1,
            random: "1d345,6+666"
        },
        stats: {
            str: {
                val: 2,
                mod: -4
            },
            dex: {
                val: 15,
                mod: 2
            },
            con: {
                val: 0.7,
                mod: -5
            },
            int: {
                val: 14,
                mod: 2
            },
            wis: {
                val: -1,
                mod: -6
            },
            cha: {
                val: 666,
                mod: 328
            }
        },
        _id: "615f2eee27a7bd4edf6a58c3",
        name: "Chien en chaleur",
        type: "Plante",
        size: "Gigantesque",
        speed: "He is speed",
        armor: 159753,
        skills: [
            "Inaguichable"
        ],
        senses: [
            "Tous déboussolé"
        ],
        languages: [
            "Oui"
        ],
        dangerousness: "Over 9000",
        xp: 0.88,
        abilities: [
            {
                name: "Capitain crochet",
                effect: "Crochet inversé into serrure into crochet",
                _id: "615f2e9677076efb5ee70720"
            }
        ],
        actions: [
            {
                name: "Gjvfjvvvnjgvv",
                effect: {
                    name: "Loïc Rojon",
                    accuracy: "4",
                    range: "1,5",
                    numTarget: "1"
                },
                dmg: {
                    stable: "5",
                    random: "1d6+90",
                    type: "nécrotiques",
                    effect: null
                },
                _id: "615f2c3877076efb5ee7071e"
            },
            {
                name: "loic.rojon@gmail.com",
                effect: "Hclchlclh mh mh mj mj mjvhmvlhclgx🍆💦",
                _id: "615f2d1d77076efb5ee7071f"
            }
        ]
    }
]

export default creatures