import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';

export function SimpleDialog(props) {
    const { onClose, open } = props;


    return (
        <Dialog onClose={onClose} open={open}>
            <DialogTitle>{props.title}</DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    {props.content}
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose} autoFocus>Close</Button>
            </DialogActions>            
        </Dialog>
    );
}
//first try to get a simple dialog working that passes props to the above
//then try to extend that by replacing the student card buttons with buttons that open a dialog to show more info about a student