import {useEffect} from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Typography } from "@mui/material";
import { useDispatch, useSelector } from 'react-redux';
import CircularProgress from '@mui/material/CircularProgress';
import { AllJObs } from '../../slices/JobSlice';
import Link from 'next/link';


const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));



const CustomizedTables = ( ) => {

    const { userdata,loading,error  } = useSelector((state) => state.jobdetails)
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(AllJObs())
  },[])
  console.log(userdata)
    

  return (
    <TableContainer component={Paper} sx={{maxHeight:{xs:510 , md: 580 , lg:580} , marginTop:'20px' , marginBottom:'20px'}}>
      <Table stickyHeader aria-label="customized table">
        <TableHead >
          <TableRow>
            <StyledTableCell>
                <Typography
                  variant="h5"
                  noWrap
                  sx={{
                    m: 1,
                    display: { xs: 'flex', md: 'flex', lg: 'flex' },
                    fontFamily: 'monospace',
                    fontWeight: 900,
                    color: 'inherit',
                    textDecoration: 'none',
                    justifyContent:'center',

                  }} >
                  Title
              </Typography>
            </StyledTableCell>
            <StyledTableCell >
                <Typography
                  variant="h5"
                  noWrap
                  sx={{
                    m: 1,
                    justifyContent:'center',
                    display: { xs: 'flex', md: 'flex', lg: 'flex' },
                    fontFamily: 'monospace',
                    fontWeight: 900,
                    color: 'inherit',
                    textDecoration: 'none',
                  }} >
                  Description
              </Typography>
            </StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {loading ?  <CircularProgress loading={loading}/> :  userdata.data?.map((row) => (
              // eslint-disable-next-line @next/next/link-passhref
              <Link
              key={row.id}
              href={{
                  pathname: '/Jobs/[slug]',
                  query: { slug: row.id },
                }}
                
              >
            <StyledTableRow >
                <StyledTableCell align='center'
                   sx={{maxWidth:12}}>                
                  {row.title}

              </StyledTableCell>
              <StyledTableCell align='center'
                   sx={{maxWidth:12}}>

                  {row.description}
                
              </StyledTableCell>
            </StyledTableRow>
              </Link>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default CustomizedTables