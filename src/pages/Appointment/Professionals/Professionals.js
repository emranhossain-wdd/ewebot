import { Container, Grid, Paper, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Professionals = () => {
    const [professionals, setProfessionals] = useState([]);

    useEffect(() => {
        fetch('https://murmuring-citadel-28008.herokuapp.com/professionals')
            .then(res => res.json())
            .then(data => setProfessionals(data))
    }, [])

    return (
        <Container>
            <Grid container spacing={3} sx={{ py: 3 }}>
                {professionals.map((professional) => (<Grid key={professional._id} item xs={12} sm={6} md={4}>
                    <Paper elevation={3}>
                        <Link to={`appointment/${professional?._id}`}>
                            <Typography>
                                <img className='rounded-lg' src={professional.img} alt='' />
                            </Typography>
                            <Typography
                                variant="h5"
                                style={{ color: "#5CE7ED", fontWeight: "600" }}
                                gutterBottom
                                component="div"
                            >
                                {professional?.name}
                            </Typography>
                            <Typography variant="h6" gutterBottom component="div">
                                {professional?.time}
                            </Typography>
                            <Typography variant="caption" display="block" gutterBottom>
                                {professional?.space} SPACES AVAILABLE
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