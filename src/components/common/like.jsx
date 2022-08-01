import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular} from '@fortawesome/fontawesome-svg-core/import.macro'

const Like = props => {
    let classes = ''
        props.liked ? classes = solid('heart') : classes = regular('heart')
           
        return <FontAwesomeIcon icon={classes} onClick = {props.onClick} className = 'pointer'/>
}
 
export default Like;