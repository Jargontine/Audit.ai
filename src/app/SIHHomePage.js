import * as React from 'react';
import { useState, useEffect } from "react";
import SIHstyles from '../css/SIHStyles.module.css'


import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Image from 'next/image';

import checklist from '../images/checklist1.png';
import paperpen from '../images/paperpen.png'
import penapple from '../images/penapple.png'
import scholarhat from '../images/scholarhat.png'


export default function SIHHomePage(props) {

    function showPage(page) {

    }

    let companyNameSection = (
        <Box sx={{ mt: 20, mb: 5, ml: 40, width: "100%", display: 'flex', flexWrap: 'wrap' }}>
            <label className={SIHstyles.label3}>
                Audit.ai
            </label>
        </Box>
    )

    let introSection = (
        <Box sx={{ ml: 30, width: "100%", display: 'flex', flexWrap: 'wrap' }}>
            <Box border={0} sx={{ width: "50%" }}>
                <Box sx={{ ml: 10 }}>
                    <label className={SIHstyles.label1}>
                        Your number 1 inspection assistant
                    </label>
                </Box>
                <Box sx={{ ml: 10, mt: 5 }}>
                    <label className={SIHstyles.label2}>
                        The AI assistant for easy, efficient, and effective monitoring, reviewing, <br></br> and ranking of educational institutions
                    </label>
                </Box>
                <Box sx={{ ml: 10, mt: 5 }}>
                    <button type="button" className={SIHstyles.largegreenButton} onClick={() => showPage('GetStarted')}>Get Started</button>
                </Box>
            </Box>
            <Box border={0} sx={{ width: "20%" }}>
                <Avatar sx={{ m: 0, width: 256, height: 256, bgcolor: 'green' }} variant="square">
                    <Image className={SIHstyles.largegreenImage} src={checklist} alt="Logo" />
                </Avatar>
            </Box>
            <Box border={0} sx={{ width: "30%" }}></Box>
        </Box>

    )

    let problemSection = (
        <div>
            <Box sx={{ mt: 40, mb: 5, ml: 20, width: "100%", display: 'flex', flexWrap: 'wrap' }}>
                <Box border={0} sx={{ width: "60%" }}>
                    <label className={SIHstyles.label4}>
                        The Problem
                    </label><br></br>
                    <label className={SIHstyles.label5}>
                        Institutional inspections are crucial for maintaining educational standards and ensuring compliance with regulatory guidelines. Traditional inspection methods are manual, time-consuming, and often lack consistency. There is a need for a more efficient, consistent, and data-driven approach to institutional inspections.
                    </label>
                </Box>
                <Box border={0} sx={{ width: "40%" }}>
                    <Avatar sx={{ m: 0, width: 512, height: 512, bgcolor: 'green' }} variant="square">
                        <Image className={SIHstyles.largeblueImage} src={paperpen} alt="Logo" />
                    </Avatar>
                </Box>
            </Box>

        </div>
    )

    let solutionSection = (
        <div>
            <Box sx={{ mt: 40, mb: 5, ml: 20, width: "100%", display: 'flex', flexWrap: 'wrap' }}>
                <Box border={0} sx={{ width: "60%" }}>
                    <label className={SIHstyles.label4}>
                        Our Solution
                    </label><br></br>
                    <label className={SIHstyles.label5}>
                        Audit.ai is an AI-driven Inspection System for Institutions that revolutionizes the way inspections are conducted. By incorporating AI technologies to enhance accuracy, efficiency, and consistency. This system would leverage AI algorithms to analyze various aspects of an institution, such as infrastructure, faculty qualifications, student performance, and adherence to regulations.
                    </label>
                </Box>
                <Box border={0} sx={{ width: "40%" }}>
                    <Avatar sx={{ m: 0, width: 512, height: 512, bgcolor: 'green' }} variant="square">
                        <Image className={SIHstyles.largeblueImage} src={penapple} alt="Logo" />
                    </Avatar>
                </Box>
            </Box>

        </div>
    )

    let featuresSection = (
        <div>
            <Box width="100%" sx={{ bgcolor: 'rgb(232, 141, 35)' }} >
                <Box width="100%" height={100} display="flex" justifyContent="center" alignItems="center" sx={{ mt: 1 }}>
                    <label className={SIHstyles.label6}>
                        Features
                    </label>
                </Box>
            </Box>
        </div>
    )

    let howItworksSection = (
        <div>
            <Box sx={{ mt: 40, mb: 5, ml: 20, width: "100%", display: 'flex', flexWrap: 'wrap' }}>
                <Box border={0} sx={{ width: "60%" }}>
                    <label className={SIHstyles.label4}>
                        How it works
                    </label><br></br>
                    <label className={SIHstyles.label5}>
                        The system can utilize image recognition for facility inspections, natural language processing for analyzing reports and documentation, and machine learning for identifying patterns and potential issues. Real-time data collection and analysis would enable inspectors to make informed decisions and provide actionable insights for institutional improvements.
                    </label>
                    <Box sx={{ ml: 0, mt: 5 }}>
                        <button type="button" className={SIHstyles.largegreenButton} onClick={() => showPage('GetStarted')}>Learn More</button>
                    </Box>
                </Box>
                <Box border={0} sx={{ width: "40%" }}>
                    <Avatar sx={{ m: 0, width: 384, height: 384, bgcolor: 'green' }} variant="square">
                        <Image className={SIHstyles.blueImage} src={scholarhat} alt="Logo" />
                    </Avatar>
                </Box>
            </Box>
        </div>
    )

    return (
        <div id="SIHHomePage">
            {companyNameSection}
            {introSection}
            {problemSection}
            {solutionSection}
            {featuresSection}
            {howItworksSection}
        </div >
    )

}