import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

interface Prop {
    open: boolean,
    handleClose: (open: boolean) => void,
    deleteProduct: () => void
}
const DialogC = ({open, handleClose, deleteProduct}: Prop) => {
    return (
            <div>
                <Dialog
                    open={open}
            //onClose={handleClose}
            //aria-labelledby="alert-dialog-title"
            //aria-describedby="alert-dialog-description"
        >
            <DialogContent>
            <DialogContentText id="alert-dialog-description">
                Esta seguro que quiere eliminar este producto?
            </DialogContentText>
            </DialogContent>
            <DialogActions>
            <Button onClick={() => handleClose(false)}>Disagree</Button>
            <Button onClick={deleteProduct} autoFocus>
                Agree
            </Button>
            </DialogActions>
        </Dialog>
            </div>
    )
}

export default DialogC;