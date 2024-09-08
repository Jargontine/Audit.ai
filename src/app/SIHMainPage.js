import * as React from 'react';
import { useState, useEffect } from "react";
import SIHstyles from '../css/SIHStyles.module.css'
import SIHHomePage from './SIHHomePage'
import SIHCollegeList from './SIHCollegeList'
import SIHDashboardOverview from './SIHDashboardOverview'

import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Image from 'next/image';
import { deepOrange, deepPurple } from '@mui/material/colors';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';

import navbarlogo from '../images/AuditAIlogo1.png';

export default function PrincipalMainPage(props) {

    const [pageName, setPageName] = useState('HomePage');
    const [avatarInitials, setAvatarInitials] = useState('');


    function showPage(page) {
        console.log("Page Name is ::" + page + "::");
        if (page === 'Home') {
            setPageName('HomePage');
        } else if (page === 'CollegeList') {
            setPageName('CollegeList');
        } else if (page === 'DashboardOverview') {
            setPageName('DashboardOverview');
        }
    }

    useEffect(() => {
        mountFunction();
    }, []);

    async function mountFunction() {
        // Fetch the User details from the backend
        setAvatarInitials('SI');
        showPage('Home', 0);
    }

    let mainBodyPage = '';
    if (pageName === 'HomePage') {
        mainBodyPage = <SIHHomePage />;
    } else if (pageName === 'CollegeList') {
        mainBodyPage = <SIHCollegeList />;
    } else if (pageName === 'DashboardOverview') {
        mainBodyPage = <SIHDashboardOverview />;
    }


    let headerContent = (
        <div>
            <Box border={0} sx={{ width: "100%", bgcolor: 'rgb(0,0,0)', display: 'flex', flexWrap: 'wrap' }}>
                <Box sx={{ width: '35%' }}>
                        <Avatar sx={{ mt: 1, ml:3, width: 60, height: 60 }} >
                            <Image src={navbarlogo} alt="Logo" fill sizes="(max-width: 617px) 100vw, (max-width: 1200px) 50vw, 33vw" />
                        </Avatar>
                </Box>
                <Box border={1} direction="column" justifyContent="center" alignItems="center" sx={{ width: '35%', display: 'flex', flexWrap: 'wrap' }}>
                    {(pageName === "HomePage") ?
                        <Box sx={{ mt: 3, mb: 3, mr: 10 }}>
                            <button type="button" className={SIHstyles.orangeButton} onClick={() => showPage('Home')}>Home</button>
                        </Box>
                        :
                        <Box sx={{ mt: 3, mb: 3, mr: 10 }}>
                            <button type="button" className={SIHstyles.whiteButton} onClick={() => showPage('Home')}>Home</button>
                        </Box>
                    }
                    {(pageName === "CollegeList") ?
                        <Box sx={{ mt: 3, mb: 3, mr: 10 }}>
                            <button type="button" className={SIHstyles.orangeButton} onClick={() => showPage('CollegeList')}>Colleges</button>
                        </Box>
                        :
                        <Box sx={{ mt: 3, mb: 3, mr: 10 }}>
                            <button type="button" className={SIHstyles.whiteButton} onClick={() => showPage('CollegeList')}>Colleges</button>
                        </Box>
                    }
                    {(pageName === "DashboardOverview") ?
                        <Box sx={{ mt: 3, mb: 3, mr: 10 }}>
                            <button type="button" className={SIHstyles.orangeButton} onClick={() => showPage('DashboardOverview')}>Dashboard Overview</button>
                        </Box>
                        :
                        <Box border={0} sx={{ mt: 3, mb: 3, mr: 10 }}>
                            <button type="button" className={SIHstyles.whiteButton} onClick={() => showPage('DashboardOverview')}>Dashboard Overview</button>
                        </Box>
                    }
                </Box>
                <Box border={1} direction="column" justifyContent="center" alignItems="center" sx={{ width: '30%', display: 'flex', flexWrap: 'wrap' }}>
                    <Box sx={{ mr: 2 }}>
                        <Avatar className={SIHstyles.orangeAvatar}>{avatarInitials}</Avatar>
                    </Box>
                    <Box>
                        <button type="button" className={SIHstyles.smallwhiteButton} onClick={() => showPage('personMenu')}>Hello, Smart India</button>
                    </Box>
                </Box>
            </Box>
        </div>
    )

    let menuMainPageContent = (
        <div></div>
    )

    return (
        <div id="SIHMainPage">
            <Box border={1} width="100%" sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', bgcolor:'white' }}>
                <Box borderBottom={0} >
                    {headerContent}
                </Box>
                <Box border={0}>
                    {mainBodyPage}
                </Box>
            </Box>
        </div>
    )

}