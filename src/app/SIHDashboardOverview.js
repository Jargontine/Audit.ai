import * as React from 'react';
import { useState, useEffect } from "react";
import SIHstyles from '../css/SIHStyles.module.css'

import ReactEcharts from "echarts-for-react";
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';

// Card related
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';

import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Image from 'next/image';


export default function SIHDashboardOverview(props) {

    const pieValues = {
        tooltip: {
            trigger: 'item',
            textStyle: {
                fontSize: 14
            }
        },
        grid: {
            height: "500px",
            width: "500px"
        },
        color: [
            '#CBB6F8',
            '#5E3FBE',
            '#E5DAFB'
        ],
        legend: {
            orient: 'vertical',
            left: 'right'
        },
        series: [
            {
                name: 'Colleges',
                type: 'pie',
                radius: '90%',
                data: [
                    { value: 30, name: 'Colleges Inspected [30%]' },
                    { value: 30, name: 'Colleges Submitted [30%]' },
                    { value: 40, name: 'Un-inspected [40%]' }
                ],
                emphasis: {
                    scale: true,
                    scaleSize: 10,
                    itemStyle: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 45, 203, 0.5)'
                    },
                    label: {
                        fontSize: 18
                    }
                }
            }
        ]
    };

    const barValues = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        color: [
            '#F89C31'
        ],
        xAxis: [
            {
                type: 'category',
                data: ['IIT Bombay', 'IIT Madras', 'IIT Delhi', 'IIM Kolkata', 'IIM Bangalore', 'NIT Trichy', 'IIT Kolkata', 'BITS Pilani', 'NIT Pondicherry', 'Anna University'],
                axisTick: {
                    alignWithLabel: true
                },
                nameTextStyle: {
                    silent: false
                }
            }
        ],
        yAxis: [
            {
                type: 'value'
            }
        ],
        series: [
            {
                name: 'Direct',
                type: 'bar',
                barWidth: '60%',
                data: [9.85, 9.46, 9.21, 9.21, 9.00, 8.98, 8.81, 8.76, 8.54, 8.39]
            }
        ]
    };


    let dashBoardOverviewContent = (
        <div>
            <Box border={0} sx={{ mt: 12, ml: 20, width: "100%", display: 'flex', flexWrap: 'wrap' }}>
                <Box sx={{ width: "45%", ml: 5 }}>
                    <Box sx={{ width: "100%", display: 'flex', flexWrap: 'wrap' }}>
                        <Box sx={{ width: '33%' }}>
                            <label className={SIHstyles.label9}>260</label> <br></br><label className={SIHstyles.label10}>Total Colleges</label>
                        </Box>
                        <Box sx={{ width: '33%' }}>
                            <label className={SIHstyles.label9}>78</label> <br></br><label className={SIHstyles.label10}>Colleges Inspected</label>
                        </Box>
                        <Box sx={{ width: '33%' }}>
                            <label className={SIHstyles.label9}>78</label> <br></br><label className={SIHstyles.label10}>Submitted</label>
                        </Box>
                    </Box>
                    <Box sx={{ mt: 10, width: "100%", display: 'flex', flexWrap: 'wrap' }}>
                        <Box sx={{ width: '33%' }}>
                            <label className={SIHstyles.label9}>104</label> <br></br><label className={SIHstyles.label10}>Un-inspected</label>
                        </Box>
                        <Box sx={{ width: '33%' }}>
                            <label className={SIHstyles.label9}>5</label> <br></br><label className={SIHstyles.label10}>9+ CGPA univ.</label>
                        </Box>
                        <Box sx={{ width: '33%' }}>
                            <label className={SIHstyles.label9}>100</label> <br></br><label className={SIHstyles.label10}>Passing Colleges</label>
                        </Box>
                    </Box>
                </Box>
                <Box sx={{ width: "40%" }}>
                    <ReactEcharts option={pieValues} />;
                </Box>
            </Box>
            <Box sx={{ mt: 18, ml: 20, width: "100%", display: 'flex', flexWrap: 'wrap' }}>
                <Box sx={{ width: "45%", ml: 5 }}>
                    <Box sx={{ width: "100%", display: 'flex', flexWrap: 'wrap' }}>
                        <Box sx={{ width: '50%' }}>
                            <label className={SIHstyles.label7}>Top Colleges by CGPA</label>
                        </Box>
                        <Box border={0} sx={{ width: '25%' }}>
                            <button type="button" className={SIHstyles.whiteBGButton} onClick={() => showPage('GetStarted')}>Rank By &nbsp;&nbsp;&nbsp; &#x25B6;</button>
                        </Box>
                        <Box border={0} sx={{ width: '25%' }}>
                            <button type="button" className={SIHstyles.whiteBGButton} onClick={() => showPage('GetStarted')}>Filter  &nbsp;&nbsp;&nbsp;  (Off)</button>
                        </Box>

                    </Box>
                    <Box sx={{ mt: 10, width: "100%", display: 'flex', flexWrap: 'wrap' }}>
                        <Box sx={{ width: '100%' }}>
                            <label className={SIHstyles.label2}>1. IIT Bombay - 9.85 </label><br></br><br></br>
                            <label className={SIHstyles.label2}>2. IIT Madras - 9.46</label><br></br><br></br>
                            <label className={SIHstyles.label2}>3. IIT Delhi - 9.21</label><br></br><br></br>
                            <label className={SIHstyles.label2}>4. IIM Kolkata - 9.21</label><br></br><br></br>
                            <label className={SIHstyles.label2}>5. IIM Bangalore - 9.00</label><br></br><br></br>
                            <label className={SIHstyles.label2}>6. NIT Trichy - 8.98</label><br></br><br></br>
                            <label className={SIHstyles.label2}>7. IIT Kolkata - 8.81 </label><br></br><br></br>
                            <label className={SIHstyles.label2}>8. BITS Pilani - 8.76</label><br></br><br></br>
                            <label className={SIHstyles.label2}>9. NIT Pondicherry - 8.54</label><br></br><br></br>
                            <label className={SIHstyles.label2}>10. Anna University - 8.39</label><br></br><br></br>
                        </Box>
                    </Box>
                </Box>
                <Box border={0} sx={{ width: "40%" }}>
                    <ReactEcharts option={barValues} style={{
                        height: '600px',
                        width: '100%',
                    }} />;
                </Box>
            </Box>

        </div>
    )

    return (
        <div id="SIHHomePage">
            {dashBoardOverviewContent}
        </div >
    )

}
