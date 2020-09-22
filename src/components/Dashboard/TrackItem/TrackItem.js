import React from 'react';
import { Link } from 'react-router-dom';
import UserControls from '../UserControls/UserControls';

export default function TrackItem (props) {
    const { track, user, who } = props;

    return (
        <Link to={`/tracks/${track.id}`}>
        <li className="track track-item">
            <h2>{track.title}</h2>
            {/* { who !== 'private' 
                ? <p className="public-user">by {user}</p> 
                : null } */}
            <p>{track.date_modified}</p>
            
            { who === 'private' && 
                <UserControls 
                    track={track}
                    onChange={e => props.onChange(e)}
                    // onClickDelete={props.onClickDelete}
                    onClickDelete={(trackId) => props.onClickDelete(trackId)}
                />
            }
            
            {/* <Link to={`/tracks/${track.id}`}>See Drum Machine Configuration</Link> */}

            {/* <button>Listen to Audio Sample</button> // revisit once dealing with sound */}
            
        </li>
        </Link>
    )
}