import React from 'react'
import {ISpot} from '../../models/interfaces';

const Details: React.FC<ISpot> = ({name} : ISpot): JSX.Element => {
    return (
        <div>
            <h1>{name}</h1>
        </div>
    )
}

export default Details
