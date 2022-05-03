import React from 'react'
import { FootballContext } from '../../../providers/FootballContext';
import { Pick } from './Pick';

// Common style elements regardless of BG
const picksStatusStyle = {
    fontSize: 28,
    display: 'inline-block',
    width: '40%',
    margin: 'auto',
    borderRadius: '5px',
    textAlign: 'center',
    borderStyle:'solid',
    borderWidth: '2px'
};

const PickCard = ({ pickData }) => {
    const { getTeamImageName } = React.useContext(FootballContext);

    const teamImgName = getTeamImageName(pickData.team);

    return (
        <Pick sx={{
            backgroundImage: `url(${process.env.PUBLIC_URL}/teamLogos/BG/${teamImgName})`,
            display: 'inline-block'
        }}>
            <div style={{ width: '67%', display: 'inline-block', marginTop: '0px', color: 'white' }}>
                <p className="picks-value">{pickData.value}.</p>
                <p className="pick-team-name">{pickData.team}</p>
                {pickData.status
                    ? (<p className={`${pickData.status}-text`} style={picksStatusStyle}>{pickData.status.toUpperCase()}</p>)
                    : null}
            </div>

            <img
                src={`${process.env.PUBLIC_URL}/teamLogos/${teamImgName}`}
                title={pickData.team}
                className="logo-img" />
        </Pick>
    );
};

export default PickCard;