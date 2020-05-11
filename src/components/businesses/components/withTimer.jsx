
/*

Ideally this functionality would be in the 'functions' folder as 
a ReactJS independent function. 

However, we use the HTML Dom Window object's "setTimeout" function 
which makes this a web specific functionality 

*/ 

import React, { useRef, useState, useEffect } from 'react';


export default BaseComponent => ({ autoCollect, collectTime, onCollected, ...props }) => {

    const [curTime, setCurTime] = useState(0); 
    const [timer, setTimer] = useState(undefined); 

    const prevPropsRef = useRef(); 

    useEffect( () => {
        if(autoCollect && !prevPropsRef.autoCollect){
                onCollectClick();     
        }

        prevPropsRef.autoCollect = autoCollect; 
    });

    const onTimer = () => {
        var newCurTime = curTime + .10;

        if (newCurTime >= collectTime) {
            clearTimeout( timer );
            setCurTime(0); 
            onCollected();

            if (autoCollect) {
                onCollectClick();
            }
        }
        else {
            setTimer(setTimeout( onTimer, 100));
            setCurTime(newCurTime); 
        }
    }

    const onCollectClick = () => {
        setTimer(setTimeout( onTimer, 100));
        onTimer();
    }

    return(
        <BaseComponent 
            curTime={curTime}
            onCollectClick={onCollectClick}
            {...props}
        />
    )

}

