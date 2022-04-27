import * as React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import { FootballContext } from "../../../providers/FootballContext";
import Table from '@material-ui/core/Table';
import PicksBody from './PicksBody';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    height: "70%",
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    borderRadius: "1rem",
};

export default function PicksModal() {
    const {
        state: { openModal, selectedPlayer },
        handleClose: handleClose
    } = React.useContext(FootballContext);

    return (
        <div>
            <Modal
                open={openModal}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        <b>{selectedPlayer?.name}'s Picks</b>
                    </Typography>
                    <div className="test">
                        <Table width="100%">
                            <PicksBody
                                selectedPlayer={selectedPlayer}
                            />
                        </Table>
                    </div>
                </Box>
            </Modal>
        </div>
    );
}