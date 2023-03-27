import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

import { SimpleDialog } from './SimpleDialog';
/* import AddStudentForm from './AddStudentForm'; */

export default function StudentCard({ id, name, location, set = 'set1' }) {

    const [open, setOpen] = React.useState(false);
    const [dialogData, setDialogData] = React.useState({});

    const handleClickOpen = () => {
        // set the dialog data based on the current student
        setDialogData({
            title: name,
            content: `ID: ${id}, Location: ${location}`,
            /* content: <AddStudentForm handleSubmit={handleAddStudent} />, */
            maxWidth: 'sm'
        });

        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

/*     const handleAddStudent = (name, location) => {
        console.log('Adding student:', name, location);
        setOpen(false);
    };
 */

    return (
        <Card sx={{ maxWidth: 200 }}>
            <CardMedia
                component="img"
                height="200"
                image={`https://robohash.org/${name}?size=100x100&set=${set}`}
                alt={name}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Based in {location}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" color="primary" onClick={handleClickOpen} /* heref={"/students/" + id} */ >
                    View Student
                </Button>
{/*                 <Button size="small" color="primary" onClick={handleClickOpen}>
                    Add Student
                </Button> */}
            </CardActions>
            <SimpleDialog open={open} onClose={handleClose} {...dialogData} />
        </Card>
    );

}