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
                   src="video/hht1_ep01_le01_mini_video.mp4" />


        </div>

    );
}

export default Test;