import React from 'react';

export const Loading = () => {
    return(
        <div className='col-12 d-flex align-items-center flex-column'>
            <div className='loader'></div>
            <div className='mt-3'> Loading . . .</div>
        </div>
    );
}