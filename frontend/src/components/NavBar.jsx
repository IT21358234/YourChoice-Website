//import { Icon } from '@iconify/react';
//import {Navbar, Image, Input, Button, Spacer, Avatar, Text, Link, Dropdown} from '@nextui-org/react'
//import React, {useState} from 'react'

export default function NavBar() {

    /*const [isLog, setIsLog] = useState(false)
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
    const [isMenFasion, setIsMenFasion] = useState(false)*/

    return (
        <div>
            {/*<nav className='navbar'>
                <div 
                    className='dropdown' 
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
                    onMouseEnter={() => setIsSport(true)} 
                    onMouseLeave={() => setIsSport(false)}
                >
                    <div className='dropbtn'>
                    <div>
                        Sport
                    </div>
                    <Spacer x={0.5}/>
                    <div style={{paddingTop:'6px', fontSize:'14px'}}>
                        {!isSport && <Icon icon="ep:arrow-down-bold" />}
                        {isSport && <Icon icon="ep:arrow-up-bold" />} 
                    </div>
                    </div>
                    <div className='dropdown-content'>
                        <div className='dropdown-item'>Women's Fashion</div>
                        <div className='dropdown-item'>Men's Fashion</div>
                    </div>
                </div>
                
                <div 
                    className='dropdown' 
                    onMouseEnter={() => setIsHomeGarden(true)} 
                    onMouseLeave={() => setIsHomeGarden(false)}
                >
                    <div className='dropbtn'>
                    <div>
                        Home & Garden
                    </div>
                    <Spacer x={0.5}/>
                    <div style={{paddingTop:'6px', fontSize:'14px'}}>
                        {!isHomeGarden && <Icon icon="ep:arrow-down-bold" />}
                        {isHomeGarden && <Icon icon="ep:arrow-up-bold" />} 
                    </div>
                    </div>
                    <div className='dropdown-content'>
                        <div className='dropdown-item'>Women's Fashion</div>
                        <div className='dropdown-item'>Men's Fashion</div>
                    </div>
                </div>
                
                <div 
                    className='dropdown' 
                    onMouseEnter={() => setIsToys(true)} 
                    onMouseLeave={() => setIsToys(false)}
                >
                    <div className='dropbtn'>
                    <div>
                        Toys
                    </div>
                    <Spacer x={0.5}/>
                    <div style={{paddingTop:'6px', fontSize:'14px'}}>
                        {!isToys && <Icon icon="ep:arrow-down-bold" />}
                        {isToys && <Icon icon="ep:arrow-up-bold" />} 
                    </div>
                    </div>
                    <div className='dropdown-content'>
                        <div className='dropdown-item'>Women's Fashion</div>
                        <div className='dropdown-item'>Men's Fashion</div>
                    </div>
                </div>
                
                <div 
                    className='dropdown' 
                    onMouseEnter={() => setIsPublications(true)} 
                    onMouseLeave={() => setIsPublications(false)}
                >
                    <div className='dropbtn'>
                    <div>
                        Publications
                    </div>
                    <Spacer x={0.5}/>
                    <div style={{paddingTop:'6px', fontSize:'14px'}}>
                        {!isPublications && <Icon icon="ep:arrow-down-bold" />}
                        {isPublications && <Icon icon="ep:arrow-up-bold" />} 
                    </div>
                    </div>
                    <div className='dropdown-content'>
                        <div className='dropdown-item'>Women's Fashion</div>
                        <div className='dropdown-item'>Men's Fashion</div>
                    </div>
                </div>
                
                <div 
                    className='dropdown' 
                    onMouseEnter={() => setIsHealthBeauty(true)} 
                    onMouseLeave={() => setIsHealthBeauty(false)}
                >
                    <div className='dropbtn'>
                    <div>
                        Health & Beauty
                    </div>
                    <Spacer x={0.5}/>
                    <div style={{paddingTop:'6px', fontSize:'14px'}}>
                        {!isHealthBeauty && <Icon icon="ep:arrow-down-bold" />}
                        {isHealthBeauty && <Icon icon="ep:arrow-up-bold" />} 
                    </div>
                    </div>
                    <div className='dropdown-content'>
                        <div className='dropdown-item'>Women's Fashion</div>
                        <div className='dropdown-item'>Men's Fashion</div>
                    </div>
                </div>
                
                <div 
                    className='dropdown' 
                    onMouseEnter={() => setIsGroceriesFoods(true)} 
                    onMouseLeave={() => setIsGroceriesFoods(false)}
                >
                    <div className='dropbtn'>
                    <div>
                        Groceries
                    </div>
                    <Spacer x={0.5}/>
                    <div style={{paddingTop:'6px', fontSize:'14px'}}>
                        {!isGroceriesFoods && <Icon icon="ep:arrow-down-bold" />}
                        {isGroceriesFoods && <Icon icon="ep:arrow-up-bold" />} 
                    </div>
                    </div>
                    <div className='dropdown-content'>
                        <div className='dropdown-item'>Women's Fashion</div>
                        <div className='dropdown-item'>Men's Fashion</div>
                    </div>
                </div>
                
                <div 
                    className='dropdown' 
                    onMouseEnter={() => setIsVehicle(true)} 
                    onMouseLeave={() => setIsVehicle(false)}
                >
                    <div className='dropbtn'>
                    <div>
                        Vehicle
                    </div>
                    <Spacer x={0.5}/>
                    <div style={{paddingTop:'6px', fontSize:'14px'}}>
                        {!isVehicle && <Icon icon="ep:arrow-down-bold" />}
                        {isVehicle && <Icon icon="ep:arrow-up-bold" />} 
                    </div>
                    </div>
                    <div className='dropdown-content'>
                        <div className='dropdown-item'>Women's Fashion</div>
                        <div className='dropdown-item'>Men's Fashion</div>
                    </div>
                </div>
                
    </nav>*/}
        </div>
    )
}
