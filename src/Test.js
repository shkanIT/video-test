import React from 'react';
import sample from './hht1_ep04_le01_mini_video.mp4'
function Test(props) {
    return (
        <div>
            <video width={'50%'}
                   height={'50%'}
                   autoPlay
                   muted
                   controls
                   loop
                   src="video/04_02_minisitcom.mp4" />


        </div>

    );
}

export default Test;