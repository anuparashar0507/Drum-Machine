import React from 'react'

export default function Drumpad(props) {
    return (
        
            <div id={props.bank[props.index].id} className="drum-pad">
               {props.bank[props.index].keyTrigger}
                <audio className="clip" id={props.bank[props.index].keyTrigger} src={props.bank[props.index].url}/>
            </div>
        
    )
}