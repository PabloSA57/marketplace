import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { CircularProgress } from '@mui/material';

interface Prop {
    open: boolean,
    handleClose: (open: boolean) => void,
    deleteProduct: () => void,
    state?: {
        loading: boolean,
        aproved: boolean,
        error: boolean
    }
}
const DialogC = ({open, handleClose, deleteProduct, state}: Prop) => {

    const handleUpdatePage = () => {
        window.location.reload()
    } 
    return (
            <div>
                <Dialog
                    open={open}
            //onClose={handleClose}
            //aria-labelledby="alert-dialog-title"
            //aria-describedby="alert-dialog-description"
            >
                {!state?.aproved && !state?.loading && !state?.error && <><DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Esta seguro que quiere eliminar este producto?
                    </DialogContentText>
                </DialogContent>

                <DialogActions>
                    <Button 
                        onClick={() => handleClose(false)}>
                            Disagree
                    </Button>

                    <Button 
                        onClick={deleteProduct} autoFocus>
                        Agree
                    </Button>
                </DialogActions></>}

                {state?.loading && <CircularProgress />}

                {state?.aproved && <><DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        El pruducto a sido eliminado
                    </DialogContentText>
                </DialogContent>

                <DialogActions>
                    <Button
                        onClick={handleUpdatePage}
                        >
                            Ok
                    </Button>
                </DialogActions></>}

                {state?.error && <><DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Error al eliminar el producto
                    </DialogContentText>
                </DialogContent>

                <DialogActions>
                    <Button
                        onClick={handleUpdatePage}
                        >
                            Ok
                    </Button>
                </DialogActions></>}
        </Dialog>
            </div>
    )
}

export default DialogC;