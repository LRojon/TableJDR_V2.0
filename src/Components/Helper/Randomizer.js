const Randomizer = (formula) => {
    let nbDice = parseInt(formula.split(/[dD]/gm)[0])
    let nbFace = parseInt(formula.split(/[dD]/gm)[1].split('+')[0])
    let ret = parseInt(formula.split(/[dD]/gm)[1].split('+')[1])
    for(let i = 0; i < nbDice; i++) {
        let rollRes = Math.round(Math.random() * 1000000) % nbFace + 1
        ret += rollRes
    }
    return ret
}

export default Randomizer