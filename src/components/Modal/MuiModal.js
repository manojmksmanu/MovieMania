import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import MoviesDetails from '../../pages/MoviesDetails/MoviesDetails';
import '../Modal/Modal.css'
const style = {
    position: 'absolute',
    margin: 'auto',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    // width: 1200,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    outline: "none",
    borderRadius: 5
};

export default function BasicModal({ id }) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <Button  onClick={handleOpen}> <span className='btn_details'>Read More</span> </Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <div className='data_container'>
                        <MoviesDetails id={id} handleClose={handleClose} />
                    </div>
                </Box>
            </Modal>
        </div>
    );
}