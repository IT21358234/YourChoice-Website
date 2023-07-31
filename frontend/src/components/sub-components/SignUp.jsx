import {Grid, Link, Text} from '@nextui-org/react'
import React, { useState} from 'react'
import ReactModal from 'react-modal'
import { Icon } from '@iconify/react'

export default function SignUp() {
    const [isOpen, setIsOpen] = useState(false)

    const[retypePassword, setRetypePassword] = useState('')
    //const[controllingRetypePassword, setControllingRetypePassword] = useState('')
 
    //const [isPasswordVisible, setIsPasswordVisible] = useState(false)
    const [isRetypePasswordVisible, setIsRetypePasswordVisible] = useState(false)

    /*useEffect(() => {
        if(isRetypePasswordVisible){
            setControllingRetypePassword(retypePassword)
        }else{
            setControllingRetypePassword('unavailable')
        }
    },[retypePassword])*/

    const retypePasswordController = () => {
        setIsRetypePasswordVisible(!isRetypePasswordVisible)
    }

    const handleInputFocus = (e) => {
        e.target.parentNode.classList.add('active')
    }

    const handleInputBlur = (e) => {
        if (e.target.value === '') {
        e.target.parentNode.classList.remove('active')
        }
    }
    return (
        <div>
            <Link onClick={() => setIsOpen(!isOpen)}>
                <Text css={{color:'#010c80 ', fontWeight:'$bold', fontSize:'18px'}}>SignUp</Text>
            </Link>
        
            <div className='normal-mode'>
                <ReactModal 
                    isOpen={isOpen} 
                    onRequestClose={() => setIsOpen(!isOpen)} 
                    className='popup-content login-popup'
                >
                    <Grid.Container justify='space-between'>
                        <Grid>
                            <h3>Sign Up</h3>
                        </Grid>
                        <Grid>
                            <h3 onClick={() => setIsOpen(false)}><Icon icon="ep:close-bold" /></h3>
                        </Grid>
                    </Grid.Container>
                    <hr style={{border:'1px solid'}}/>
                    <Grid.Container justify='center' >
                        <Grid md xs >
                            <form className='login'>
                            
                                <div className="login" style={{marginTop:"0px"}}>
                                    <input
                                        className='login'
                                        type="text"
                                        id="fullName"
                                        name="fullName"
                                        onFocus={handleInputFocus}
                                        onBlur={handleInputBlur}
                                        required
                                    />
                                    <label className='login' htmlFor="username">Full Name</label>
                                </div>

                                <div className="login" >
                                    <input
                                        className='login'
                                        type="text"
                                        id="fullName"
                                        name="fullName"
                                        onFocus={handleInputFocus}
                                        onBlur={handleInputBlur}
                                        required
                                    />
                                    <label className='login' htmlFor="username">Email</label>
                                </div>
                                <div className="login" >
                                    <input
                                        className='login'
                                        type="text"
                                        id="mobileNumber"
                                        name="mobileNumber"
                                        onFocus={handleInputFocus}
                                        onBlur={handleInputBlur}
                                        required
                                    />
                                    <label className='login' htmlFor="username">Mobile Number</label>
                                </div>
                                <div className="login" >
                                    <input
                                        className='login'
                                        type="password"
                                        id="password"
                                        name="password"
                                        onFocus={handleInputFocus}
                                        onBlur={handleInputBlur}
                                        required
                                    />
                                    <label className='login' htmlFor="username">Password</label>
                                    <span className='login' onClick={retypePasswordController}>
                                        {isRetypePasswordVisible && <Icon icon="mdi:eye-off" />}
                                        {!isRetypePasswordVisible && <Icon icon="mdi:eye" />}
                                    </span>
                                </div>
                                <div className="login" >
                                    <input
                                        className='login'
                                        type="password"
                                        id="retypePassword"
                                        name="retypePassword"
                                        value={retypePassword}
                                        onFocus={handleInputFocus}
                                        onBlur={handleInputBlur}
                                        onChange={(e) => {
                                            setRetypePassword(e.target.value)
                                        }}
                                        required
                                    />
                                    <label className='login' htmlFor="username">Retype Password</label>
                                    <span className='login' onClick={retypePasswordController}>
                                        {isRetypePasswordVisible && <Icon icon="mdi:eye-off" />}
                                        {!isRetypePasswordVisible && <Icon icon="mdi:eye" />}
                                    </span>
                                </div>
                                
                                <Grid.Container justify='space-between'>
                                    <Grid css={{fontSize:'14px'}}>Already have an account? <Link>Login</Link></Grid>
                                    <Grid></Grid>
                                </Grid.Container>
                            </form>
                        </Grid>
                        
                    </Grid.Container>
                </ReactModal>
            </div>
        </div>
    )
}
