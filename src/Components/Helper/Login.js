import React, { useRef, useState } from 'react'
import '../../Styles/Login.css'
import Randomizer from './Randomizer'

const Login = ({ setUser }) => {

    const [signUp, setSignUp] = useState(false)
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const [newUsername, setNewUsername] = useState('')
    const [newPassword, setNewPassword] = useState('')
    const [confirmPWD, setConfirmPWD] = useState('')
    const first = useRef(Randomizer('1d53+0'))
    const second = useRef(Randomizer('1d53+0'))
    const captcha = useRef(null)

    const _login = () => {
        fetch('https://table.lrojon.fr/security/login', {
            method: 'POST',
            headers: {
                'Content-type' : 'application/json'
            },
            body: JSON.stringify({
                username: username,
                password: password
            })
        })
        .then(async res => {
            if(res.status !== 200) {
                alert(await res.text())
            }
            else {
                return res.json()
            }
        })
        .then(data => { if(data) setUser(data) })
    }

    const _signUp = () => {
        if(parseInt(captcha.current.value) === first.current + second.current) {
            if(newPassword === confirmPWD) {
                fetch('https://table.lrojon.fr/security/create', {
                    method: 'POST',
                    headers: {
                        'Content-type' : 'application/json'
                    },
                    body: JSON.stringify({
                        username: newUsername,
                        password: newPassword
                    })
                })
                .then(async res => {
                    if(res.status === 200) {
                        setSignUp(false)
                    }
                    alert(await res.text())
                })
            }
            else {
                alert('Passwords do not match')
            }
        }
        else {
            alert('Captcha error')
        }
    }

    return (
        <div className='Login' >
            {
                signUp ?
                    <div className='signup' >
                        <input 
                            type='text' 
                            name='username' 
                            role='form' 
                            placeholder='Pseudo' 
                            value={newUsername}
                            onChange={(e) => setNewUsername(e.target.value)}
                        />
                        <input 
                            type='password' 
                            name='password' 
                            role='form' 
                            placeholder='Mot de passe' 
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                        />
                        <input 
                            type='password' 
                            name='password' 
                            role='form' 
                            placeholder='Confirmer Mot de passe' 
                            value={confirmPWD}
                            onChange={(e) => setConfirmPWD(e.target.value)}
                        />
                        <div>
                            {first.current} + {second.current} =&nbsp;<input ref={captcha} type='number' />
                        </div>
                        <button onClick={() => _signUp()} >S'inscrire</button>
                        <span onClick={() => setSignUp(false)} >Se connecter</span>
                    </div>
                :
                    <div className='signin' >
                        <input 
                            type='text' 
                            name='username' 
                            role='form' 
                            placeholder='Pseudo' 
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                        <input 
                            type='password' 
                            name='password' 
                            role='form' 
                            placeholder='Mot de passe' 
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <button onClick={() => _login()} >Connexion</button>
                        <span onClick={() => setSignUp(true)} >S'inscrire</span>
                    </div>
            }
        </div>
    )
}

export default Login
