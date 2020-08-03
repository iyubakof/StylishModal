import React from 'react';
import { Modal, Fade, Backdrop, Button, Grid } from '@material-ui/core';

function ModalComponent(props) {
    const { open, handleClose, handleOpen } = props;

    return (
        <>
            <section className="btn-section">
                <Grid container 
                    alignItems={"center"}
                    justify={"center"}>
                    <Grid item xs={4} className="btn-container">
                        <Button contained onClick={handleOpen} className="modal-btn">Click For A Surprise</Button>
                    </Grid>
                </Grid>
            </section>
            <Modal
                aria-labelledby="Transition Modal"
                aria-describedby="Modal with a Fade transition"
                className='modal'
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    {props.children}
                </Fade>
            </Modal>
        </>
    )
}

export default ModalComponent;
