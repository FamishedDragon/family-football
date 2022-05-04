import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { FootballContext } from "../../../providers/FootballContext";
import Switch from '@mui/material/Switch';
import { FormControlLabel, FormGroup } from '@mui/material';
import PicksCardLayout from './PicksCardLayout';
import { reducerKeys } from '../../../reducers/footballReducer';
import PicksListLayout from './PickListLayout';

const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '75%',
    maxWidth: 850,
    minWidth: 850,
    height: "70%",
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    borderRadius: "1rem",
    overflowY: 'auto',
};

export default function PicksModal() {
    const {
        state: { openModal, selectedPlayer, pickListLayout },
        handlePicksModalClose: handleClose,
        dispatch
    } = React.useContext(FootballContext);

    return (
        <div>
            <Modal
                open={openModal}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={modalStyle}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        <b>{selectedPlayer?.name}'s Picks</b>
                        <FormGroup>
                            <FormControlLabel 
                                control={
                                    <Switch 
                                        checked={pickListLayout} 
                                        onChange={() => dispatch({
                                            type: reducerKeys.SET_PICKS_MODAL_LAYOUT,
                                            payload: !pickListLayout
                                    })}/>
                                }
                                label="List Format"
                            />
                        </FormGroup>
                    </Typography>
                    {pickListLayout
                        ? (<PicksListLayout/>)
                        :(<PicksCardLayout/>)
                    }
                </Box>
            </Modal>
        </div>
    );
}