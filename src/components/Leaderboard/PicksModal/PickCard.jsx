import React from 'react'
import { FootballContext } from '../../../providers/FootballContext';
import { Pick } from './Pick';

const PickCard = ({ pickData }) => {
    const { state: { teams } } = React.useContext(FootballContext);
    // Get image name of a logo for a given team
    const getTeamLogo = (teamName) => {
        const team = teams.find(t => t.name.toLowerCase() === teamName.toLowerCase());

        return team?.city ? `${team.city}.webp` : "";
    }

    const teamImgName = getTeamLogo(pickData.team);

    return (
        <Pick sx={{
            backgroundImage: `url(${process.env.PUBLIC_URL}/teamLogos/BG/${teamImgName})`,
            display: 'inline-block'
        }}>
            <div style={{ width: '67%', display: 'inline-block', marginTop: '0px', color: 'white' }}>
                <p className="picks-value">{pickData.value}.</p>
                <p className="pick-team-name">{pickData.team}</p>
                {pickData.status
                    ? (<p className={`${pickData.status}-text`} style={{fontSize: 28, display: 'inline-block', width: '40%', margin: 'auto', borderRadius: '5px', textAlign: 'center', borderStyle:'solid', borderWidth: '2px'}}>{pickData.status.toUpperCase()}</p>)
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