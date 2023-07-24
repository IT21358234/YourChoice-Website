import { Icon } from '@iconify/react'
import {Navbar, Image, Input, Button, Spacer, Avatar, Text, Link} from '@nextui-org/react'
import React, {useState} from 'react'

export default function Header() {
    const [isLog, setIsLog] = useState(false)
    const username = 'Sanjana'
    return (
        <div>
            <Navbar isBordered variant='sticky' borderWeight='normal'>
                <Navbar.Brand>
                    <Image src='/yourchoice-logo.png' height={20}/>
                </Navbar.Brand>
                <Navbar.Content hideIn='xs' css={{width:'50%'}}>
                    <Input 
                        contentRight={
                            <Button auto css={{borderRadius:'$', fontSize:'$1xl', backgroundColor:'#010c80'}}>
                                <Icon icon="uil:search" />
                            </Button>
                        }
                        contentClickable
                        contentRightStyling={true}
                        width='100%'
                        animated={false}
                        placeholder='Search...'
                        clearable
                    />
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
                            <Link >
                                <Text css={{color:'#010c80', fontWeight:'$semibold', fontSize:'18px'}}>Login</Text>
                            </Link>
                        </Navbar.Item> 
                        <Navbar.Item>
                            <Text css={{fontWeight:'$semibold', fontSize:'18px'}}>|</Text> 
                        </Navbar.Item>
                        <Navbar.Item>
                            <Link>
                                <Text css={{color:'#010c80', fontWeight:'$semibold', fontSize:'18px'}}>SignUp</Text>
                            </Link>
                        </Navbar.Item>
                    </Navbar.Content> 
                }
                
            </Navbar>
        </div>
    )
}
