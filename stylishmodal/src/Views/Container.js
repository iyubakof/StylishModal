import React, { useState } from 'react';
import Header from './Header';
import ModalComponent from './ModalComponent';
import album from '../media/albumCover.PNG';

function Container() {
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <Header />
            <br />
            <ModalComponent
                open={open}
                setOpen={setOpen}
                handleClose={handleClose}
                handleOpen={handleOpen}>
                <div className="modalWrapper">
                    <iframe src="https://open.spotify.com/embed/track/5ClqcvP4dYDDX6Zv3jPQD1"
                        width="300" height="380" frameborder="0" allowtransparency="true"
                        allow="encrypted-media">
                    </iframe>
                </div>
            </ModalComponent>
        </>
    )
}

export default Container
