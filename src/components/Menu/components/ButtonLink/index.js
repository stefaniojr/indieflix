import React from 'react';

function ButtonLink(props) {
    // props => { }
    return (     
        <a className={props.className} href={props.href}>
        up new doggo vid
    </a>
    );
}

export default ButtonLink;