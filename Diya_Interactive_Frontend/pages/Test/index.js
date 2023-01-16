 import React from 'react'
import JobList from '../../components/JobList/JobList'
import Section from './../../components/Section/Section';
import styles from './../../styles/Jobspage.module.scss'
import { Typography ,Box} from "@mui/material";
import JobDetails from './../../components/JobDetails/JobDetails';


const index = () => {
  return (
   <Section>
       
      <Box className={styles.job_wrapper}
       component="div"
         sx={{overflowY: {xs: 'none', md: 'scroll', lg: 'scroll'},height: {xs: '100%', md: '67vh', lg: '67vh'}}}
      > 
       <Box
        className={styles.job_wrapper_left}
        component="div"
         sx={{
                    overflowY: {xs: 'none', md: 'scroll', lg: 'scroll'},
                    height: {xs: '100%', md: '100%', lg: '100%'}

            }}
        >

        <Typography
            variant= 'h2'
            noWrap
            sx={{
              justifyContent:'center',
              mr: 2,
              display: { xs: 'flex', md: 'flex', lg: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.1rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
            >
              Jobs
            </Typography>

      
        </Box>

     
      
      <Box
        className={styles.job_wrapper_right}
       component="div" sx={{ display: { xs: 'none', md: 'flex', lg: 'flex' } }}
       > </Box>
      

      </Box>
   </Section>
  )
}

export default index