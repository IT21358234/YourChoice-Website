import React, {useState} from 'react'
import { Icon } from '@iconify/react'
import { Chat } from './sub-components/Chat'
import { Button } from '@nextui-org/react'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from './sub-components/Home'

export default function Main() {

    const [isOpen, setIsOpen] = useState(false)

    return (
        <div style={{paddingTop:'55px'}}>
            <Chat>
                <Button 
                    auto 
                    css={{borderRadius:'$rounded', height:'70px', fontSize:'$3xl', backgroundColor:'#010c80 '}}
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen && <Icon icon="ri:close-line" />}
                    {!isOpen && <Icon icon="ep:chat-dot-round" />}
                </Button>
                {isOpen &&
                    <div className='chatbox'>
                        <div style={{backgroundColor:'#010c80', height:'', padding:'10px', color:'white'}}>
                            <h2>Chat with Us</h2>
                            <h4>👋 Hi, message us with any questions. We're happy to help!</h4>
                        </div>
                        <div style={{backgroundColor:'white', height:'100px'}}>

                        </div>
                    </div>
                }
            </Chat>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home/>} />
                </Routes>
            </BrowserRouter>
        </div>
    )
    }
