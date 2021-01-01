import React from "react";

export default props => {
    return (
        <svg width={props.width} height={props.height} viewBox="0 0 12 12" fill="none"
             xmlns="http://www.w3.org/2000/svg">
            <path
                d="M6.00005 5.86879C7.33424 5.86879 8.41592 4.55503 8.41592 2.93441C8.41592 1.31376 8.06079 0 6.00005 0C3.93931 0 3.58411 1.31376 3.58411 2.93441C3.58411 4.55503 4.66579 5.86879 6.00005 5.86879Z"
                fill={props.color}/>
            <path d="M1.43688 10.3492C1.43647 10.2504 1.43605 10.3214 1.43688 10.3492V10.3492Z" fill={props.color}/>
            <path d="M10.5629 10.4264C10.5642 10.3994 10.5633 10.2387 10.5629 10.4264V10.4264Z" fill={props.color}/>
            <path
                d="M10.5578 10.2308C10.5131 7.40761 10.1444 6.60316 7.32289 6.09395C7.32289 6.09395 6.92572 6.60004 6.00001 6.60004C5.0743 6.60004 4.67706 6.09395 4.67706 6.09395C1.88638 6.59761 1.49524 7.39012 1.44382 10.1391C1.4396 10.3635 1.43764 10.3753 1.43689 10.3493C1.43706 10.3981 1.43727 10.4884 1.43727 10.6459C1.43727 10.6459 2.10899 12 6.00001 12C9.89096 12 10.5628 10.6459 10.5628 10.6459C10.5628 10.5447 10.5628 10.4743 10.5629 10.4265C10.5622 10.4426 10.5607 10.4113 10.5578 10.2308Z"
                fill={props.color}/>
        </svg>
    )
};