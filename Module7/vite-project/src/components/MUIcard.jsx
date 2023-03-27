import React from 'react';
import mutantLogo from '../assets/mutant.png'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
const MUIcard = () => {
    return (
        <Card sx={{ maxWidth: 345, margin: 10 }} elevation={5}>
            <CardMedia
                component="img"
                image={mutantLogo}
                alt="avatar"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    John Doe
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Architect & Engineer
                </Typography>
            </CardContent>
        </Card>
    )
}
export default MUIcard;