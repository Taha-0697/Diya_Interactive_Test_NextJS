import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getJobDetails } from '../../slices/JobSlice';
import Box from '@mui/material/Box';
import styles from '../../styles/Jobspage.module.scss'
import Typography from '@mui/material/Typography';
import Image  from 'next/image';

const JobDetails = () => {
  const dispatch= useDispatch(); 
  const Job = useSelector((state)=> state.jobdetails);
  

  useEffect(()=>{
      dispatch(getJobDetails())
  },[])

console.log(Job.userdata?.[0]?.company_avatar)

  return (
       <Box sx={{ width: '100%' , marginTop:'40px' , marginBottom:'40px'}}>
              
        <div className={styles.job_List} >
          <div className={styles.job_List_images} >
            <img
              src= {Job.userdata?.[0]?.company_avatar}
              alt={Job.userdata?.[0]?.company_avatar}
              
            />
          </div>

          <div className={styles.job_List_Title} >
            <Typography
             variant="h5"
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'flex', lg: 'flex' },
              fontSize: {
                lg: 40,
                md: 40,
                sm: 20,
                xs: 15,
              },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.1rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
            >
               {Job.userdata?.[0]?.title}
            </Typography> 

             <Typography
              variant="h6"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'flex', lg: 'flex' },
              fontSize: {
                lg: 20,
                md: 20,
                sm: 13,
                xs: 13,
              },
              fontFamily: 'monospace',
              fontWeight: 200,
              color: 'inherit',
              textDecoration: 'none',
            }}
            >
              {Job.userdata?.[0]?.company_name}&nbsp;
              {Job.userdata?.[0]?.country_name}
            </Typography> 

            <Typography
            variant="p"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'flex', lg: 'flex' },
              fontSize: {
                lg: 25,
                md: 25,
                sm: 13,
                xs: 13,
              },
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
              {Job.userdata?.[0]?.employment_type}
            </Typography> 
          </div>
          </div>

              
              <Typography
                  variant="h6"
                  sx={{
                  fontSize: {
                lg: 20,
                md: 20,
                sm: 13,
                xs: 13,
              },
                    fontFamily: 'monospace',
                    fontWeight: 500,
                    color: 'inherit',
                   
                  }} >
                  {Job.userdata?.[0]?.description}
              </Typography>

              
 
    </Box>

  )
}

export default JobDetails