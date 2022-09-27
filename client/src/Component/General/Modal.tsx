import Box from '@mui/material/Box';
import Modal from "@mui/material/Modal";
import { BoxModalStyle } from './style.modal';

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    boxShadow: 24,
    p: 4,
    width: 1/1,

};

export const ModalUi = (props: any) => {
    return (
        <>
            <Modal
                disableEnforceFocus  
                open={props.open}
                onClose={(e, reason) => props.handleClose(reason)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description">
                    <BoxModalStyle>
                        {props.children}
                    </BoxModalStyle>
                    
            </Modal>
        </>
    )
}
