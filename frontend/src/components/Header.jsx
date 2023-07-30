import { Icon } from '@iconify/react'
import {Navbar, Image, Button, Spacer, Avatar, Text, Link} from '@nextui-org/react'
import React, {useState} from 'react'
import SignUp from './sub-components/SignUp'

export default function Header() {
    const [isLog, setIsLog] = useState(false)
    const username = 'Sanjana'
    return (
        <div>
            <Navbar  variant='sticky' isBordered borderWeight='normal' height={60} css={{position:'fixed'}}>
                <Navbar.Content>
                    <Navbar.Item>
                        <div >
                            <Icon width={30} icon="ion:menu" />
                        </div>
                    </Navbar.Item>
                    <Navbar.Item><Image src='/yourchoice-logo.png' height={20}/></Navbar.Item>
                    
                </Navbar.Content>
                <Navbar.Content hideIn='xs' css={{width:'50%'}}>
                    <div style={{width:'100%'}}>
                        <input className='search-bar' placeholder='Search...'/>
                        <span className='search-btn'>
                            <Icon icon="uil:search" />
                        </span>
                    </div>
                    <Spacer x={0}/>
                    <Navbar.Link>
                        <Icon icon="material-symbols:shopping-cart-outline-sharp" />
                    </Navbar.Link>
                </Navbar.Content>
                <Navbar.Content showIn='xs'>
                    <Button auto css={{borderRadius:'$', fontSize:'$1xl', backgroundColor:'#010c80'}}>
                    <Icon icon="uil:search" />
                    </Button>
                </Navbar.Content>
                {isLog &&
                   <Navbar.Content>
                        <Avatar/>
                        <Navbar.Item>
                            <div>
                                {!isLog &&
                                    <Text>{username}</Text>
                                }
                            </div>
                        </Navbar.Item>
                    </Navbar.Content> 
                }
                
                {!isLog &&
                   <Navbar.Content>
                        <Navbar.Item>
                            <Link onClick={() => setIsLog(true)}>
                                <Text css={{color:'#010c80 ', fontWeight:'$bold', fontSize:'18px'}}>Login</Text>
                            </Link>
                        </Navbar.Item> 
                        <Navbar.Item>
                            <Text css={{fontWeight:'$semibold', fontSize:'18px'}}>|</Text> 
                        </Navbar.Item>
                        <Navbar.Item>
                            <SignUp/>
                        </Navbar.Item>
                    </Navbar.Content> 
                }
                
            </Navbar>
           
        </div>
    )
}
