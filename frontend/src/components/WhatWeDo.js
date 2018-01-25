import React from 'react';
import wall_clock from '../images/wall_clock.svg';
import group from '../images/group.svg';
import hand_shake from '../images/hand_shake.svg';


//stateless
const WhatWeDo = (props)=>{
    
        return(
                <div>
                    <h1 className="whatwedo__title">{props.title}</h1>
                    <div className="mission">
                        <div className="col">
                            <img src={hand_shake}  height= "80" alt="hand shake"/> 
                            <p>Help an organization and develop your skills</p>
                        </div>
                        <div className="col">
                            <img src={wall_clock}  height= "80" alt="wall clock"/>
                            <p>You just need to dedicate a few hours</p>
                        </div>
                        <div className="col">
                            <img src={group}  height= "80" alt="group"/>
                            <p>A little collaboration of each of us can generate
                        a  huge impact</p>
                        </div>
                    
                    </div>
               </div> 
            
        )
    } 

 export default WhatWeDo;  