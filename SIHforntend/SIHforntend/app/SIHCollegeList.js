import * as React from 'react';
import { useState, useEffect } from "react";
import SIHstyles from '../css/SIHStyles.module.css'


import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Image from 'next/image';


export default function SIHCollegeList(props) {


    let collegeListContent = (
        <div>
            <button type="button" className={SIHstyles.orangeButton} onClick={() => showPage('Home')}>collegeListContent</button>
        </div>
    )

    return (
        <div id="SIHHomePage">
            {collegeListContent}
        </div >
    )
}