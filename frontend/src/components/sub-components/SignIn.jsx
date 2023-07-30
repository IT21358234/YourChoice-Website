import React from 'react'

export default function SignIn() {

    const handleInputFocus = (e) => {
        e.target.parentNode.classList.add('active')
    }

    const handleInputBlur = (e) => {
        if (e.target.value === '') {
        e.target.parentNode.classList.remove('active')
        }
    }

    const login = () => {

    }

    return (
        <div >
           
        </div>
    )
}
