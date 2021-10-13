const Randomizer = (formula) => {
    console.log('formule: ' + formula)
    let nbDice = parseInt(formula.split(/[dD]/gm)[0])
    console.log('nbDice: ' + nbDice)
    let nbFace = parseInt(formula.split(/[dD]/gm)[1].split('+')[0])
    console.log('nbFace: ' + nbFace)
    let ret = parseInt(formula.split(/[dD]/gm)[1].split('+')[1])
    console.log('constant:' + ret)
    for(let i = 0; i < nbDice; i++) {
        let rollRes = Math.round(Math.random() * 1000000) % nbFace + 1
        ret += rollRes
        console.log('rollRes[' + i + ']: ' + ret)
    }
    console.log('result: ' + ret)
    return ret
}

export default Randomizer