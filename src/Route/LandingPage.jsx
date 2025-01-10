import WelcomePage from '@/HomePage'
import React from 'react'
import { Outlet } from 'react-router-dom'

const LandingPage = () => {
    return (
        <div>
            <WelcomePage />
            
            <Outlet />
        </div>
    )
}

export default LandingPage
