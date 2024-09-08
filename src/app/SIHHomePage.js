import React from 'react';
import { Box, Typography, Button, Grid } from '@mui/material';
import Image from 'next/image';
import styles from '../css/SIHStyles.module.css';

export default function SIHHomePage() {
  return (
    <Box>
      <Grid container spacing={4} alignItems="center" sx={{ mb: 8 }}>
        <Grid item xs={12} md={6}>
          <Typography variant="h1" className={styles.label3}>
            Audit.ai
          </Typography>
          <Typography variant="h2" className={styles.label1}>
            Your number 1 inspection assistant
          </Typography>
          <Typography variant="body1" className={styles.label2} sx={{ my: 2 }}>
            The AI assistant for easy, efficient, and effective monitoring, reviewing, and ranking of educational institutions
          </Typography>
          <Button variant="contained" color="secondary" className={styles.largegreenButton}>
            Get Started
          </Button>
        </Grid>
        <Grid item xs={12} md={6}>
          <Image src="/images/checklist1.png" alt="Checklist" width={256} height={256} className={styles.largegreenImage} />
        </Grid>
      </Grid>

      <Grid container spacing={4} sx={{ mb: 8 }}>
        <Grid item xs={12} md={6}>
          <Typography variant="h3" className={styles.label4}>
            The Problem
          </Typography>
          <Typography variant="body1" className={styles.label5}>
            Institutional inspections are crucial for maintaining educational standards and ensuring compliance with regulatory guidelines. Traditional inspection methods are manual, time-consuming, and often lack consistency. There is a need for a more efficient, consistent, and data-driven approach to institutional inspections.
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Image src="/images/paperpen.png" alt="Paper and Pen" width={512} height={512} className={styles.largeblueImage} />
        </Grid>
      </Grid>

      <Grid container spacing={4} sx={{ mb: 8 }}>
        <Grid item xs={12} md={6}>
          <Typography variant="h3" className={styles.label4}>
            Our Solution
          </Typography>
          <Typography variant="body1" className={styles.label5}>
            Audit.ai is an AI-driven Inspection System for Institutions that revolutionizes the way inspections are conducted. By incorporating AI technologies to enhance accuracy, efficiency, and consistency. This system would leverage AI algorithms to analyze various aspects of an institution, such as infrastructure, faculty qualifications, student performance, and adherence to regulations.
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Image src="/images/penapple.png" alt="Pen and Apple" width={512} height={512} className={styles.largeblueImage} />
        </Grid>
      </Grid>

      <Box sx={{ bgcolor: 'secondary.main', color: 'white', py: 4, px: 2, mb: 8 }}>
        <Typography variant="h3" className={styles.label6}>
          Features
        </Typography>
        <ul className={styles.label5}>
          <li>Automated Facility Inspections: Use image recognition to assess infrastructure and facilities.</li>
          <li>Document Analysis: Employ natural language processing to evaluate reports, qualifications, and compliance documents.</li>
          <li>Real-time Data Collection: We continuously gather and analyze data from various sources to provide up-to-date insight.</li>
          <li>Pattern Recognition: Identify trends and potential issues using machine learning algorithms.</li>
          <li>Actionable Insights: Generate comprehensive reports with suggestions for improvements and compliance adherence.</li>
        </ul>
        <Button variant="contained" color="primary" size="large" sx={{ mt: 2 }}>
          Try Project
        </Button>
      </Box>

      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Typography variant="h3" className={styles.label4}>
            How it works
          </Typography>
          <Typography variant="body1" className={styles.label5}>
            The system can utilize image recognition for facility inspections, natural language processing for analyzing reports and documentation, and machine learning for identifying patterns and potential issues. Real-time data collection and analysis would enable inspectors to make informed decisions and provide actionable insights for institutional improvements.
          </Typography>
          <Button variant="outlined" color="secondary" size="large" sx={{ mt: 2 }}>
            Learn More
          </Button>
        </Grid>
        <Grid item xs={12} md={6}>
          <Image src="/images/scholarhat.png" alt="Scholar Hat" width={384} height={384} className={styles.blueImage} />
        </Grid>
      </Grid>
    </Box>
  );
}
