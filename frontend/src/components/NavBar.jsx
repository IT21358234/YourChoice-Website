import { Icon } from '@iconify/react';
import {Navbar, Image, Input, Button, Spacer, Avatar, Text, Link, Dropdown} from '@nextui-org/react'
import React, {useState} from 'react'

export default function NavBar() {

    const [isLog, setIsLog] = useState(false)
    const username = 'Sanjana'

    const [isFasion, setIsFasion] = useState(false)
    const [isElectronic, setIsElectronic] = useState(false)
    const [isSport, setIsSport] = useState(false)
    const [isHomeGarden, setIsHomeGarden] = useState(false)
    const [isToys, setIsToys] = useState(false)
    const [isPublications, setIsPublications] = useState(false)
    const [isHealthBeauty, setIsHealthBeauty] = useState(false)
    const [isGroceriesFoods, setIsGroceriesFoods] = useState(false)
    const [isVehicle, setIsVehicle] = useState(false)

    const [isWomenFasion, setIsWomenFasion] = useState(false)
    const [isMenFasion, setIsMenFasion] = useState(false)

    return (
        <div>
            <nav className='navbar'>
                <div 
                    className='dropdown' 
                    onMouseEnter={() => setIsFasion(true)} 
                    onMouseLeave={() => setIsFasion(false)}
                >
                    <div className='dropbtn'>
                    <div>
                        Fashion
                    </div>
                    <Spacer x={0.5}/>
                    <div style={{paddingTop:'6px', fontSize:'14px'}}>
                        {!isFasion && <Icon icon="ep:arrow-down-bold" />}
                        {isFasion && <Icon icon="ep:arrow-up-bold" />} 
                    </div>
                    </div>
                    <div className='dropdown-content'>
                        <div className='dropdown-item'>Women's Fashion</div>
                        <div className='dropdown-item'>Men's Fashion</div>
                        <div className='dropdown-item'>Kids' Fashion</div>
                    </div>
                </div>
                
                <div 
                    className='dropdown' 
                    onMouseEnter={() => setIsElectronic(true)} 
                    onMouseLeave={() => setIsElectronic(false)}
                >
                    <div className='dropbtn'>
                    <div>
                        Electronic
                    </div>
                    <Spacer x={0.5}/>
                    <div style={{paddingTop:'6px', fontSize:'14px'}}>
                        {!isElectronic && <Icon icon="ep:arrow-down-bold" />}
                        {isElectronic && <Icon icon="ep:arrow-up-bold" />} 
                    </div>
                    </div>
                    <div className='dropdown-content'>
                        <div className='dropdown-item'>Women's Fashion</div>
                        <div className='dropdown-item'>Men's Fashion</div>
                    </div>
                </div>
                
                <div 
                    className='dropdown' 
                    onMouseEnter={() => setIsFasion(true)} 
                    onMouseLeave={() => setIsFasion(false)}
                >
                    <div className='dropbtn'>
                    <div>
                        Sport
                    </div>
                    <Spacer x={0.5}/>
                    <div style={{paddingTop:'6px', fontSize:'14px'}}>
                        {!isFasion && <Icon icon="ep:arrow-down-bold" />}
                        {isFasion && <Icon icon="ep:arrow-up-bold" />} 
                    </div>
                    </div>
                    <div className='dropdown-content'>
                        <div className='dropdown-item'>Women's Fashion</div>
                        <div className='dropdown-item'>Men's Fashion</div>
                    </div>
                </div>
                
                <div 
                    className='dropdown' 
                    onMouseEnter={() => setIsFasion(true)} 
                    onMouseLeave={() => setIsFasion(false)}
                >
                    <div className='dropbtn'>
                    <div>
                        Fashion
                    </div>
                    <Spacer x={0.5}/>
                    <div style={{paddingTop:'6px', fontSize:'14px'}}>
                        {!isFasion && <Icon icon="ep:arrow-down-bold" />}
                        {isFasion && <Icon icon="ep:arrow-up-bold" />} 
                    </div>
                    </div>
                    <div className='dropdown-content'>
                        <div className='dropdown-item'>Women's Fashion</div>
                        <div className='dropdown-item'>Men's Fashion</div>
                    </div>
                </div>
                
                <div 
                    className='dropdown' 
                    onMouseEnter={() => setIsFasion(true)} 
                    onMouseLeave={() => setIsFasion(false)}
                >
                    <div className='dropbtn'>
                    <div>
                        Fashion
                    </div>
                    <Spacer x={0.5}/>
                    <div style={{paddingTop:'6px', fontSize:'14px'}}>
                        {!isFasion && <Icon icon="ep:arrow-down-bold" />}
                        {isFasion && <Icon icon="ep:arrow-up-bold" />} 
                    </div>
                    </div>
                    <div className='dropdown-content'>
                        <div className='dropdown-item'>Women's Fashion</div>
                        <div className='dropdown-item'>Men's Fashion</div>
                    </div>
                </div>
                
                <div 
                    className='dropdown' 
                    onMouseEnter={() => setIsFasion(true)} 
                    onMouseLeave={() => setIsFasion(false)}
                >
                    <div className='dropbtn'>
                    <div>
                        Fashion
                    </div>
                    <Spacer x={0.5}/>
                    <div style={{paddingTop:'6px', fontSize:'14px'}}>
                        {!isFasion && <Icon icon="ep:arrow-down-bold" />}
                        {isFasion && <Icon icon="ep:arrow-up-bold" />} 
                    </div>
                    </div>
                    <div className='dropdown-content'>
                        <div className='dropdown-item'>Women's Fashion</div>
                        <div className='dropdown-item'>Men's Fashion</div>
                    </div>
                </div>
                
                <div 
                    className='dropdown' 
                    onMouseEnter={() => setIsFasion(true)} 
                    onMouseLeave={() => setIsFasion(false)}
                >
                    <div className='dropbtn'>
                    <div>
                        Fashion
                    </div>
                    <Spacer x={0.5}/>
                    <div style={{paddingTop:'6px', fontSize:'14px'}}>
                        {!isFasion && <Icon icon="ep:arrow-down-bold" />}
                        {isFasion && <Icon icon="ep:arrow-up-bold" />} 
                    </div>
                    </div>
                    <div className='dropdown-content'>
                        <div className='dropdown-item'>Women's Fashion</div>
                        <div className='dropdown-item'>Men's Fashion</div>
                    </div>
                </div>
                
                <div 
                    className='dropdown' 
                    onMouseEnter={() => setIsFasion(true)} 
                    onMouseLeave={() => setIsFasion(false)}
                >
                    <div className='dropbtn'>
                    <div>
                        Fashion
                    </div>
                    <Spacer x={0.5}/>
                    <div style={{paddingTop:'6px', fontSize:'14px'}}>
                        {!isFasion && <Icon icon="ep:arrow-down-bold" />}
                        {isFasion && <Icon icon="ep:arrow-up-bold" />} 
                    </div>
                    </div>
                    <div className='dropdown-content'>
                        <div className='dropdown-item'>Women's Fashion</div>
                        <div className='dropdown-item'>Men's Fashion</div>
                    </div>
                </div>
                
                <div 
                    className='dropdown' 
                    onMouseEnter={() => setIsFasion(true)} 
                    onMouseLeave={() => setIsFasion(false)}
                >
                    <div className='dropbtn'>
                    <div>
                        Fashion
                    </div>
                    <Spacer x={0.5}/>
                    <div style={{paddingTop:'6px', fontSize:'14px'}}>
                        {!isFasion && <Icon icon="ep:arrow-down-bold" />}
                        {isFasion && <Icon icon="ep:arrow-up-bold" />} 
                    </div>
                    </div>
                    <div className='dropdown-content'>
                        <div className='dropdown-item'>Women's Fashion</div>
                        <div className='dropdown-item'>Men's Fashion</div>
                    </div>
                </div>
                
            </nav>
        </div>
    )
}
