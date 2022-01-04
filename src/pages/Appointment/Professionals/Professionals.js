import { Container, Grid, Paper, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import './Profesionals.css'
import { fetchProfessionals } from '../../../Redux/slices/ProfessionalsSlice/professionalsSlice';

const Professionals = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProfessionals());
    }, [dispatch])

    const professionals = useSelector(state => state.professionals.professionals)

    return (
        <Container>
            <Grid container spacing={3} sx={{ py: 3 }}>
                {professionals.map((professional) => (<Grid key={professional.id} item xs={12} sm={6} md={4}>
                    <Paper elevation={3}>
                        <Link to={`appointment/${professional?._id}`}>
                            <Typography>
                                <img className='rounded-lg' src={professional?.img} alt='' />
                            </Typography>
                            <Typography
                                variant="h5"
                                style={{ color: "#3730a3", fontWeight: "600", textAlign:'center' }}
                                gutterBottom
                                component="div"
                            >
                                {professional?.name}
                            </Typography>
                            <Typography className='text-5xl' variant="h6" 
                                style={{ color: "#312e81", fontWeight: "500", textAlign:'center', }}
                            gutterBottom component="div">
                                {professional?.designation}
                            </Typography>
                            
                        </Link>
                    </Paper>
                </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default Professionals;