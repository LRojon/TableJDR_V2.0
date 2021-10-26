import Randomizer from './Randomizer'

const makeIndividualLoot = (lvl) => {
    let loot = []
    let twenty = Randomizer('1d20+0')
    if(lvl >= 0 && lvl <= 3) {
        if(twenty >= 1 && twenty <= 5) {
            loot.push(Randomizer('4d6+0') + ' pc')
        }
        else if(twenty >= 6 && twenty <= 10){
            loot.push(Randomizer('4d6+0') + ' pa')
        }
        else if(twenty >= 11 && twenty <= 14){
            loot.push(Randomizer('2d6+0') + ' po')
        }
        else if(twenty >= 15 && twenty <= 18){
            loot.push(Randomizer('4d6+0') + ' po')
        }
        else if(twenty >= 19 && twenty <= 20){
            loot.push(Randomizer('1d3+0') + ' pp')
        }
    }
    else if(lvl >= 4 && lvl <= 7) {
        if(twenty >= 1 && twenty <= 5) {
            loot.push((Randomizer('3d6+0') * 100) + ' pc')
            loot.push((Randomizer('5d6+0')) + ' pe')
        }
        else if(twenty >= 6 && twenty <= 10){
            loot.push((Randomizer('4d6+0') * 10) + ' pa')
            loot.push((Randomizer('5d6+0')) + ' po')
        }
        else if(twenty >= 11 && twenty <= 14){
            loot.push((Randomizer('1d6+0') * 10) + ' po')
            loot.push((Randomizer('5d6+0')) + ' pe')
        }
        else if(twenty >= 15 && twenty <= 18){
            loot.push((Randomizer('2d6+0') * 10) + ' po')
            loot.push((Randomizer('5d6+0')) + ' pa')
        }
        else if(twenty >= 19 && twenty <= 20){
            loot.push((Randomizer('2d6+0') * 100) + ' pp')
            loot.push((Randomizer('5d6+0')) + ' po')
        }
    }
    else if(lvl >= 8 && lvl <= 11) {
        if(twenty >= 1 && twenty <= 5) {
            loot.push((Randomizer('5d6+0') * 100) + ' pc')
            loot.push((Randomizer('1d6+0') * 10) + ' pe')
        }
        else if(twenty >= 6 && twenty <= 10){
            loot.push((Randomizer('1d6+0') * 100) + ' pe')
            loot.push((Randomizer('1d6+0') * 100) + ' po')
        }
        else if(twenty >= 11 && twenty <= 14){
            loot.push((Randomizer('2d6+0') * 100) + ' po')
            loot.push((Randomizer('1d6+0') * 1) + ' pp')
        }
        else if(twenty >= 15 && twenty <= 18){
            loot.push((Randomizer('2d6+0') * 100) + ' po')
            loot.push((Randomizer('1d6+0') * 10) + ' pp')
        }
        else if(twenty >= 19 && twenty <= 20){
            loot.push((Randomizer('2d6+0') * 100) + ' po')
            loot.push((Randomizer('2d6+0') * 10) + ' pp')
        }
    }
    else if(lvl >= 12 && lvl <= 16) {
        if(twenty >= 1 && twenty <= 5) {
            loot.push((Randomizer('4d6+0') * 100) + ' pa')
            loot.push((Randomizer('1d6+0') * 100) + ' po')
        }
        else if(twenty >= 6 && twenty <= 10){
            loot.push((Randomizer('1d6+0') * 100) + ' pe')
            loot.push((Randomizer('1d6+0') * 100) + ' po')
        }
        else if(twenty >= 11 && twenty <= 14){
            loot.push((Randomizer('2d6+0') * 100) + ' po')
            loot.push((Randomizer('1d6+0') * 1) + ' pp')
        }
        else if(twenty >= 15 && twenty <= 18){
            loot.push((Randomizer('2d6+0') * 100) + ' po')
            loot.push((Randomizer('1d6+0') * 10) + ' pp')
        }
        else if(twenty >= 19 && twenty <= 20){
            loot.push((Randomizer('2d6+0') * 100) + ' po')
            loot.push((Randomizer('2d6+0') * 10) + ' pp')
        }
    }
    else{
        if(twenty >= 1 && twenty <= 5) {
            loot.push((Randomizer('2d6+0') * 1000) + ' pe')
            loot.push((Randomizer('6d6+0') * 100) + ' po')
        }
        else if(twenty >= 6 && twenty <= 10){
            loot.push((Randomizer('8d6+0') * 100) + ' po')
            loot.push((Randomizer('1d6+0') * 10) + ' pp')
        }
        else if(twenty >= 11 && twenty <= 14){
            loot.push((Randomizer('1d6+0') * 1000) + ' po')
            loot.push((Randomizer('1d3+0') * 100) + ' pp')
        }
        else if(twenty >= 15 && twenty <= 18){
            loot.push((Randomizer('1d6+0') * 1000) + ' po')
            loot.push((Randomizer('1d6+0') * 100) + ' pp')
        }
        else if(twenty >= 19 && twenty <= 20){
            loot.push((Randomizer('1d6+0') * 1000) + ' po')
            loot.push((Randomizer('2d6+0') * 100) + ' pp')
        }
    }

    return loot
}

const makeBLoot = (lvl) => {
    let loot = []
    let numObject = 0
    let twenty = Randomizer('1d20+0')

    if(lvl >= 0 && lvl <= 3) {
        if(twenty === 19 || twenty === 20){
            numObject = 1
        }
    }
    else if(lvl >= 4 && lvl <= 7) {
        if(twenty >= 15 && twenty <= 18){
            numObject = 1
        }
        else if(twenty >= 19 && twenty <= 20){
            numObject = Randomizer('1d3+0')
        }
    }
    else if(lvl >= 8 && lvl <= 11) {
        if(twenty >= 11 && twenty <= 14){
            numObject = 1
        }
        else if(twenty >= 15 && twenty <= 20){
            numObject = Randomizer('1d3+0')
        }
    }
    else if(lvl >= 12 && lvl <= 16) {
        if(twenty >= 6 && twenty <= 10){
            numObject = 1
        }
        else if(twenty >= 11 && twenty <= 18){
            numObject = Randomizer('1d3+0')
        }
        else if(twenty >= 19 && twenty <= 20){
            numObject = Randomizer('1d6+0')
        }
    }
    else{
        if(twenty >= 6 && twenty <= 10){
            numObject = 1
        }
        else if(twenty >= 11 && twenty <= 14){
            numObject = Randomizer('1d3+0')
        }
        else if(twenty >= 15 && twenty <= 20){
            numObject = Randomizer('1d6+0')
        }
    }

    for(let i = 1; i <= numObject; i++) {
        let hundred = Randomizer('1d100+0')
        switch(hundred) {
            case 1:
            case 2:
                loot.push('Acide, ' + Randomizer('1d4+0') + ' fioles')
                break;
            case 3:
            case 4:
                loot.push('Antitoxine, ' + Randomizer('1d4+0') + ' fioles')
                break;
            case 5:
            case 6:
                loot.push('Arbalète de poing')
                break;
            case 7:
            case 8:
                loot.push('Arc court')
                break;
            case 9:
            case 10:
                loot.push('Arc long')
                break;
            case 11:
            case 12:
                loot.push('Armure de cuir clouté')
                break;
            case 13:
            case 14:
                loot.push('Bouclier en osier')
                break;
            case 15:
            case 16:
                loot.push('Broigne')
                break;
            case 17:
            case 18:
                loot.push('Cadenas')
                break;
            case 19:
            case 20:
                loot.push('Carquois avec ' + Randomizer('3d6+0') + ' carreaux')
                break;
            case 21:
            case 22:
                loot.push('Carquois avec ' + Randomizer('3d6+0') + ' flèches')
                break;
            case 23:
            case 24:
                loot.push('Chausse-trappes')
                break;
            case 25:
            case 26:
                loot.push('Chemise de mailles en argent')
                break;
            case 27:
            case 28:
                loot.push('Cimeterre damasquiné')
                break;
            case 29:
            case 30:
                loot.push('Corde en soie, 15 mètres')
                break;
            case 31:
            case 32:
                loot.push('Dague en argent')
                break;
            case 33:
            case 34:
                loot.push('Dague en fer')
                break;
            case 35:
            case 36:
                loot.push('Eau bénite, ' + Randomizer('1d4+0') + ' fioles')
                break;
            case 37:
            case 38:
                loot.push('Épée longue')
                break;
            case 39:
            case 40:
                loot.push('Étui à parchemins')
                break;
            case 41:
            case 42:
                loot.push('Feu grégeois, ' + Randomizer('1d4+0') + ' fioles')
                break;
            case 43:
            case 44:
                loot.push('Feuilles de parchemin vierge, ' + Randomizer('1d6+0'))
                break;
            case 45:
            case 46:
                loot.push('Flûte de pan')
                break;
            case 47:
            case 48:
                loot.push('Focalisateur arcanique')
                break;
            case 49:
            case 50:
                loot.push('Focalisateur druidique')
                break;
            case 51:
            case 52:
                loot.push('Gants en cuir')
                break;
            case 53:
            case 54:
                loot.push('Grimoire contenant ' + Randomizer('1d4+0') + ' sorts de niveau 1')
                break;
            case 55:
            case 56:
                loot.push('Grimoire vierge')
                break;
            case 57:
            case 58:
                loot.push('Heaume pour un personnage de taille petite')
                break;
            case 59:
            case 60:
                loot.push('Lonue-vue')
                break;
            case 61:
            case 62:
                loot.push('Loupe')
                break;
            case 63:
            case 64:
                loot.push('Lyre')
                break;
            case 65:
            case 66:
                loot.push('Matériel d\'alchimiste')
                break;
            case 67:
            case 68:
                loot.push('Matériel d\'empoisonneur')
                break;
            case 69:
            case 70:
                loot.push('Matériel d\'herboriste')
                break;
            case 71:
            case 72:
                loot.push('Morgenstern en métal noir')
                break;
            case 73:
            case 74:
                loot.push('Outils de voleur')
                break;
            case 75:
            case 76:
                loot.push('Petit mirroir')
                break;
            case 77:
            case 78:
                loot.push('Poison, ' + Randomizer('1d4+0') + ' fioles')
                break;
            case 79:
            case 80:
                loot.push('Potion de soins')
                break;
            case 81:
            case 82:
                loot.push('Rapière')
                break;
            case 83:
            case 84:
                loot.push('Robe de bure')
                break;
            case 85:
            case 86:
                loot.push('Sablier')
                break;
            case 87:
            case 88:
                loot.push('Sac à dos vide')
                break;
            case 89:
            case 90:
                loot.push('Sarbacane')
                break;
            case 91:
            case 92:
                loot.push('Selle d\'équitation')
                break;
            case 93:
            case 94:
                loot.push('Serpe en argent')
                break;
            case 95:
            case 96:
                loot.push('Symbole sacré')
                break;
            case 97:
            case 98:
                loot.push('Trident gravé du symbole d\'un dieux')
                break;
            case 99:
            case 100:
                loot.push('Trousse de soins')
                break;
            default:
                loot.push('NTM')
                break;
        }
    }

    return loot
}

const giveTreasure = (nb, type) => {
    const treasures = {
        gem10: ['Azurite', 'Hématite', 'Malachite', 'Quartz bleu', 'Turquoise'],
        gem50: ['Calcédoine', 'Héliotrope', 'Jaspe', 'Onyx', 'Zircon'],
        gem100: ['Ambre', 'Améthyste', 'Grenat', 'Jade', 'Perle', 'Tourmaline'],
        gem500: ['Chrysobéryl', 'Périfot', 'Perle noire', 'Spinelle', 'Topaze'],
        gem1000: ['Émeraude', 'Opale noire', 'Opale de feu', 'Saphir'],
        gem5000: ['Diamant', 'Rubis', 'Saphir noir'],
        art25: ['Statuette en bois rare', 'Bracelet en or', 'Calice en or', 'Petit miroir d\'argent', 'Pendentif en électrum', 'Portrait d\'un noble'],
        art250: ['Anneau en platine serti de jaspes', 'Figurines en ivoire', 'Couronne d\'or et d\'argent', 'Statuette en jade', 'Tapisserie brodée de fil d\'or'],
        art750: ['Masque cérémoniel en or serti d\'ambre', 'Dague sacrificielle damasquinée de platine', 'Idole en or aux yeux de perle'],
        art2500: ['Buste en platine serti d\'opales', 'Gantelet ouvragé en or et argent', 'Calice en or serti de perles', 'Sculpture en marbre d\'un grand maître'],
        art7500: ['Couronne d\'un empereur en platine sertie d\'opales noires', 'Cor de chasse en ivoire, d\'or et de platine', 'Dague sacrificielle en dent de dragon'],
    }
    let objects = []

    if(treasures[type] === null) { throw new Error('diveTreasure: Wrong type.') }

    let value = '(' + type.replace('art', '').replace('gem', '') + ' po)'

    for(let i = 1; i <= nb; i++) {
        objects.push(treasures[type][Randomizer('1d' + treasures[type].length + '+0') - 1] + value)
    }

    return objects
}

const makeCLoot = (lvl) => {
    let loot= []
    let twenty = Randomizer('1d20+0')

    if(lvl >= 0 && lvl <= 3) {
        if(twenty >= 3 && twenty <= 5){
            loot = loot.concat(giveTreasure(1, 'art25'))
        }
        else if(twenty >= 6 && twenty <= 9){
            loot = loot.concat(giveTreasure(Randomizer('2d6+0'), 'gem10'))
        }
        else if(twenty >= 10 && twenty <= 13){
            loot = loot.concat(giveTreasure(Randomizer('1d4+0'), 'art25'))
        }
        else if(twenty >= 14 && twenty <= 16){
            loot = loot.concat(giveTreasure(Randomizer('1d6+0'), 'gem50'))
        }
        else if(twenty >= 17 && twenty <= 19){
            loot = loot.concat(giveTreasure(1, 'art250'))
        }
        else if(twenty === 20){
            loot = loot.concat(giveTreasure(Randomizer('2d6+0'), 'gem50'))
        }
    }
    else if(lvl >= 4 && lvl <= 7) {
        if(twenty >= 3 && twenty <= 5){
            loot = loot.concat(giveTreasure(Randomizer('2d6+0'), 'gem50'))
        }
        else if(twenty >= 6 && twenty <= 9){
            loot = loot.concat(giveTreasure(Randomizer('1d4+0'), 'art25'))
        }
        else if(twenty >= 10 && twenty <= 13){
            loot = loot.concat(giveTreasure(Randomizer('1d6+0'), 'gem100'))
        }
        else if(twenty >= 14 && twenty <= 16){
            loot = loot.concat(giveTreasure(Randomizer('2d4+0'), 'gem50'))
        }
        else if(twenty >= 17 && twenty <= 19){
            loot = loot.concat(giveTreasure(1, 'art750'))
        }
        else if(twenty === 20){
            loot = loot.concat(giveTreasure(Randomizer('2d6+0'), 'gem100'))
        }
    }
    else if(lvl >= 8 && lvl <= 11) {
        if(twenty >= 3 && twenty <= 5){
            loot = loot.concat(giveTreasure(1, 'art750'))
        }
        else if(twenty >= 6 && twenty <= 9){
            loot = loot.concat(giveTreasure(Randomizer('3d6+0'), 'gem50'))
        }
        else if(twenty >= 10 && twenty <= 13){
            loot = loot.concat(giveTreasure(Randomizer('1d4+0'), 'art750'))
        }
        else if(twenty >= 14 && twenty <= 16){
            loot = loot.concat(giveTreasure(Randomizer('2d6+0'), 'gem50'))
        }
        else if(twenty >= 17 && twenty <= 19){
            loot = loot.concat(giveTreasure(Randomizer('2d4+0'), 'art750'))
        }
        else if(twenty === 20){
            loot = loot.concat(giveTreasure(Randomizer('3d6+0'), 'gem100'))
        }
    }
    else if(lvl >= 12 && lvl <= 16) {
        if(twenty >= 3 && twenty <= 5){
            loot = loot.concat(giveTreasure(Randomizer('3d6+0'), 'gem500'))
        }
        else if(twenty >= 6 && twenty <= 9){
            loot = loot.concat(giveTreasure(1, 'art2500'))
        }
        else if(twenty >= 10 && twenty <= 13){
            loot = loot.concat(giveTreasure(Randomizer('2d6+0'), 'gem1000'))
        }
        else if(twenty >= 14 && twenty <= 16){
            loot = loot.concat(giveTreasure(Randomizer('1d4+0'), 'art2500'))
        }
        else if(twenty >= 17 && twenty <= 19){
            loot = loot.concat(giveTreasure(1, 'art7500'))
        }
        else if(twenty === 20){
            loot = loot.concat(giveTreasure(Randomizer('3d6+0'), 'gem1000'))
        }
    }
    else{
        if(twenty >= 3 && twenty <= 5){
            loot = loot.concat(giveTreasure(1, 'art7500'))
        }
        else if(twenty >= 6 && twenty <= 9){
            loot = loot.concat(giveTreasure(Randomizer('3d6+0'), 'gem1000'))
        }
        else if(twenty >= 10 && twenty <= 13){
            loot = loot.concat(giveTreasure(Randomizer('1d4+0'), 'art7500'))
        }
        else if(twenty >= 14 && twenty <= 16){
            loot = loot.concat(giveTreasure(Randomizer('1d6+0'), 'gem5000'))
        }
        else if(twenty >= 17 && twenty <= 19){
            loot = loot.concat(giveTreasure(Randomizer('2d4+0'), 'art7500'))
        }
        else if(twenty === 20){
            loot = loot.concat(giveTreasure(Randomizer('1d8+0'), 'gem5000'))
        }
    }

    return loot
}

const makeDLoot = (lvl) => {
    let om = {
        om1: 0,
        om2: 0,
        om3: 0,
        om4: 0,
        om5: 0,
        om6: 0,
        om7: 0,
        om8: 0,
    }
    let loot = []
    let twenty = Randomizer('1d20+0')

    switch(twenty) {
        case 2:
            if(lvl >= 4 && lvl <= 7) { om.om1 = Randomizer('1d3+0') }
            else if(lvl >= 8 && lvl <= 11) { om.om1 = Randomizer('1d4+0') }
            else if(lvl >= 12 && lvl <= 16) { om.om1 = Randomizer('1d3+0'); om.om2 = Randomizer('1d6+0') }
            else { om.om3 = Randomizer('1d6+0') }
            break;
        case 3:
            if(lvl >= 0 && lvl <= 3) { om.om1 = 1 }
            else if(lvl >= 4 && lvl <= 7) { om.om1 = Randomizer('1d4+0') }
            else if(lvl >= 8 && lvl <= 11) { om.om1 = Randomizer('1d6+0') }
            else if(lvl >= 12 && lvl <= 16) { om.om1 = Randomizer('1d4+0'); om.om2 = Randomizer('1d6+0') }
            else { om.om3 = Randomizer('1d8+0') }
            break;
        case 4:
            if(lvl >= 0 && lvl <= 3) { om.om1 = Randomizer('1d3+0') }
            else if(lvl >= 4 && lvl <= 7) { om.om1 = Randomizer('1d6+0') }
            else if(lvl >= 8 && lvl <= 11) { om.om1 = Randomizer('1d6+0') }
            else if(lvl >= 12 && lvl <= 16) { om.om1 = Randomizer('1d6+0'); om.om2 = Randomizer('1d6+0') }
            else { om.om3 = Randomizer('1d3+0'); om.om4 = Randomizer('1d4+0') }
            break;
        case 5:
            if(lvl >= 0 && lvl <= 3) { om.om1 = Randomizer('1d3+0') }
            else if(lvl >= 4 && lvl <= 7) { om.om1 = Randomizer('1d6+0') }
            else if(lvl >= 8 && lvl <= 11) { om.om2 = Randomizer('1d6+0') }
            else if(lvl >= 12 && lvl <= 16) { om.om3 = Randomizer('1d4+0') }
            else { om.om4 = Randomizer('1d6+0') }
            break;
        case 6:
            if(lvl >= 0 && lvl <= 3) { om.om1 = Randomizer('1d3+0') }
            else if(lvl >= 4 && lvl <= 7) { om.om2 = Randomizer('1d4+0') }
            else if(lvl >= 8 && lvl <= 11) { om.om2 = Randomizer('1d6+0') }
            else if(lvl >= 12 && lvl <= 16) { om.om3 = Randomizer('1d4+0') }
            else { om.om4 = Randomizer('1d8+0') }
            break;
        case 7:
            if(lvl >= 0 && lvl <= 3) { om.om1 = Randomizer('1d3+0') }
            else if(lvl >= 4 && lvl <= 7) { om.om2 = Randomizer('1d4+0') }
            else if(lvl >= 8 && lvl <= 11) { om.om2 = Randomizer('1d6+0') }
            else if(lvl >= 12 && lvl <= 16) { om.om3 = Randomizer('1d6+0') }
            else { om.om5 = Randomizer('1d5+0') }
            break;
        case 8:
            if(lvl >= 0 && lvl <= 3) { om.om1 = Randomizer('1d4+0') }
            else if(lvl >= 4 && lvl <= 7) { om.om2 = Randomizer('1d6+0') }
            else if(lvl >= 8 && lvl <= 11) { om.om2 = Randomizer('1d6+0') }
            else if(lvl >= 12 && lvl <= 16) { om.om3 = Randomizer('1d6+0') }
            else { om.om5 = Randomizer('1d4+0') }
            break;
        case 9:
            if(lvl >= 0 && lvl <= 3) { om.om1 = Randomizer('1d4+0') }
            else if(lvl >= 4 && lvl <= 7) { om.om2 = Randomizer('1d6+0') }
            else if(lvl >= 8 && lvl <= 11) { om.om2 = Randomizer('1d6+0') }
            else if(lvl >= 12 && lvl <= 16) { om.om3 = Randomizer('1d6+0') }
            else { om.om5 = Randomizer('1d6+0') }
            break;
        case 10:
            if(lvl >= 0 && lvl <= 3) { om.om1 = Randomizer('1d4+0') }
            else if(lvl >= 4 && lvl <= 7) { om.om2 = Randomizer('1d6+0') }
            else if(lvl >= 8 && lvl <= 11) { om.om3 = Randomizer('1d4+0') }
            else if(lvl >= 12 && lvl <= 16) { om.om4 = 1 }
            else { om.om5 = Randomizer('1d6+0') }
            break;
        case 11:
            if(lvl >= 0 && lvl <= 3) { om.om1 = Randomizer('1d4+0') }
            else if(lvl >= 4 && lvl <= 7) { om.om2 = Randomizer('1d6+0') }
            else if(lvl >= 8 && lvl <= 11) { om.om3 = Randomizer('1d6+0') }
            else if(lvl >= 12 && lvl <= 16) { om.om4 = Randomizer('1d3+0') }
            else { om.om6 = Randomizer('1d4+0') }
            break;
        case 12:
            if(lvl >= 0 && lvl <= 3) { om.om1 = Randomizer('1d6+0') }
            else if(lvl >= 4 && lvl <= 7) { om.om3 = 1 }
            else if(lvl >= 8 && lvl <= 11) { om.om3 = Randomizer('1d6+0') }
            else if(lvl >= 12 && lvl <= 16) { om.om4 = Randomizer('1d4+0') }
            else { om.om6 = Randomizer('1d4+0') }
            break;
        case 13:
            if(lvl >= 0 && lvl <= 3) { om.om1 = Randomizer('1d6+0') }
            else if(lvl >= 4 && lvl <= 7) { om.om3 = Randomizer('1d4+0') }
            else if(lvl >= 8 && lvl <= 11) { om.om3 = Randomizer('1d6+0') }
            else if(lvl >= 12 && lvl <= 16) { om.om4 = Randomizer('1d4+0') }
            else { om.om6 = Randomizer('1d6+0') }
            break;
        case 14:
            if(lvl >= 0 && lvl <= 3) { om.om1 = Randomizer('1d6+0') }
            else if(lvl >= 4 && lvl <= 7) { om.om3 = Randomizer('1d4+0') }
            else if(lvl >= 8 && lvl <= 11) { om.om4 = 1 }
            else if(lvl >= 12 && lvl <= 16) { om.om4 = Randomizer('1d6+0') }
            else { om.om6 = Randomizer('1d6+0') }
            break;
        case 15:
            if(lvl >= 0 && lvl <= 3) { om.om2 = Randomizer('1d3+0') }
            else if(lvl >= 4 && lvl <= 7) { om.om3 = Randomizer('1d6+0') }
            else if(lvl >= 8 && lvl <= 11) { om.om4 = Randomizer('1d3+0') }
            else if(lvl >= 12 && lvl <= 16) { om.om5 = 1 }
            else { om.om6 = Randomizer('1d6+0'); om.om7 = 1 }
            break;
        case 16:
            if(lvl >= 0 && lvl <= 3) { om.om2 = Randomizer('1d4+0') }
            else if(lvl >= 4 && lvl <= 7) { om.om3 = Randomizer('1d6+0') }
            else if(lvl >= 8 && lvl <= 11) { om.om4 = Randomizer('1d4+0') }
            else if(lvl >= 12 && lvl <= 16) { om.om5 = Randomizer('1d4+0') }
            else { om.om7 = Randomizer('1d3+0') }
            break;
        case 17:
            if(lvl >= 0 && lvl <= 3) { om.om2 = Randomizer('1d6+0') }
            else if(lvl >= 4 && lvl <= 7) { om.om4 = 1 }
            else if(lvl >= 8 && lvl <= 11) { om.om4 = Randomizer('1d4+0') }
            else if(lvl >= 12 && lvl <= 16) { om.om5 = 1; om.om6 = 1 }
            else { om.om7 = Randomizer('1d4+0') }
            break;
        case 18:
            if(lvl >= 0 && lvl <= 3) { om.om3 = 1 }
            else if(lvl >= 4 && lvl <= 7) { om.om4 = Randomizer('1d3+0') }
            else if(lvl >= 8 && lvl <= 11) { om.om4 = Randomizer('1d6+0') }
            else if(lvl >= 12 && lvl <= 16) { om.om7 = 1 }
            else { om.om7 = Randomizer('1d6+0') }
            break;
        case 19:
            if(lvl >= 0 && lvl <= 3) { om.om3 = Randomizer('1d3+0') }
            else if(lvl >= 4 && lvl <= 7) { om.om5 = 1 }
            else if(lvl >= 8 && lvl <= 11) { om.om5 = 1 }
            else if(lvl >= 12 && lvl <= 16) { om.om7 = 1 }
            else { om.om8 = Randomizer('1d4+0') }
            break;
        case 20:
            if(lvl >= 0 && lvl <= 3) { om.om4 = 1 }
            else if(lvl >= 4 && lvl <= 7) { om.om6 = 1 }
            else if(lvl >= 8 && lvl <= 11) { om.om6 = 1 }
            else if(lvl >= 12 && lvl <= 16) { om.om8 = 1 }
            else { om.om8 = Randomizer('1d6+0') }
            break;
        default:
            break;
    }

    for(const [key, value] of Object.entries(om)) {
        if(value !== 0) {
            let pluriel = (value > 1 ? 's' : '')
            loot.push(value + ' Objet' + pluriel + ' magique' + pluriel + ' Tier ' + key.replace('om', ''))
        }
    }

    return loot
}

const makeHoardLoot = (lvl) => {
    let loot = []
    let twenty = Randomizer('1d20+0')

    if(lvl >= 0 && lvl <= 3) {
        if(twenty >= 11 && twenty <= 14){
            loot = loot.concat(makeBLoot(lvl))
        }
        else if(twenty >= 15 && twenty <= 18){
            loot = loot.concat(makeBLoot(lvl))
            loot = loot.concat(makeCLoot(lvl))
        }
        else if(twenty >= 19 && twenty <= 20){
            loot = loot.concat(makeBLoot(lvl))
            loot = loot.concat(makeCLoot(lvl))
            loot = loot.concat(makeDLoot(lvl))
        }
    }
    else if(lvl >= 4 && lvl <= 7) {
        if(twenty >= 6 && twenty <= 10){
            loot = loot.concat(makeBLoot(lvl))
        }
        else if(twenty >= 11 && twenty <= 14){
            loot = loot.concat(makeBLoot(lvl))
            loot = loot.concat(makeCLoot(lvl))
        }
        else if(twenty >= 15 && twenty <= 20){
            loot = loot.concat(makeBLoot(lvl))
            loot = loot.concat(makeCLoot(lvl))
            loot = loot.concat(makeDLoot(lvl))
        }
    }
    else if(lvl >= 8 && lvl <= 11) {
        if(twenty >= 1 && twenty <= 5) {
            loot = loot.concat(makeBLoot(lvl))
        }
        else if(twenty >= 6 && twenty <= 10){
            loot = loot.concat(makeBLoot(lvl))
            loot = loot.concat(makeCLoot(lvl))
        }
        else if(twenty >= 11 && twenty <= 20){
            loot = loot.concat(makeBLoot(lvl))
            loot = loot.concat(makeCLoot(lvl))
            loot = loot.concat(makeDLoot(lvl))
        }
    }
    else if(lvl >= 12 && lvl <= 16) {
        if(twenty >= 1 && twenty <= 5) {
            loot = loot.concat(makeBLoot(lvl))
            loot = loot.concat(makeCLoot(lvl))
        }
        else if(twenty >= 6 && twenty <= 20){
            loot = loot.concat(makeBLoot(lvl))
            loot = loot.concat(makeCLoot(lvl))
            loot = loot.concat(makeDLoot(lvl))
        }
    }
    else{
        loot = loot.concat(makeBLoot(lvl))
        loot = loot.concat(makeCLoot(lvl))
        loot = loot.concat(makeDLoot(lvl))
    }

    return loot
}

export { makeIndividualLoot, makeHoardLoot }