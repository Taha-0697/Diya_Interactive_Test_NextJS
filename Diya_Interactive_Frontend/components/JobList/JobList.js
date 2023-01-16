import React from 'react'
import styles from './../../styles/Jobspage.module.scss'
import Image  from 'next/image';
import { Typography } from "@mui/material";

const JobList = ({ title, description , country_name , company_name , employment_type ,company_avatar }) => {
  return (
        <div className={styles.job_List} >
          <div className={styles.job_List_images} >
            <Image 
              src={company_avatar}
              height={70}
              width={70}
              alt={company_avatar}
    
            />
          </div>

          <div className={styles.job_List_Title} >
            <Typography
             variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'flex', lg: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.1rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
            >
              {title}
            </Typography> 

             <Typography
              variant="h6"
            noWrap
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'flex', lg: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 200,
              color: 'inherit',
              textDecoration: 'none',
            }}
            >
              {country_name}
            </Typography> 

            <Typography
            variant="p"
            noWrap
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'flex', lg: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 200,
              color: 'inherit',
              textDecoration: 'none',
              fontSize: {
                lg: 16,
                md: 10,
                sm: 10,
                xs: 10
              }
            }}
            >
              {company_name}
            </Typography> 
          </div>
      
       </div>
  )
}

export default JobList