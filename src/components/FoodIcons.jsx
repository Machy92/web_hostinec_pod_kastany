import React from 'react';

const getColor = (active) => active ? "#212529" : "rgba(255, 255, 255, 0.9)";

export const BurgerIcon = ({ className, style, active }) => (
    <svg
        viewBox="0 0 24 24"
        className={className}
        style={style}
        fill={getColor(active)}
    >
        <path d="M12,5c-4.4,0-8,3.6-8,8h16C20,8.6,16.4,5,12,5z" />
        <path d="M4,15c0,0.6,0.4,1,1,1c0.6,0,1-0.4,1-1s0.4-1,1-1s1,0.4,1,1s0.4,1,1,1s1-0.4,1-1s0.4-1,1-1s1,0.4,1,1s0.4-1,1,1 s1-0.4,1-1s0.4-1,1-1s1,0.4,1,1c0.6,0,1,0.4,1,1v1H4V15z" />
        <path d="M4,18h16v2c0,1.1-0.9,2-2,2H6c-1.1,0-2-0.9-2-2V18z" />
    </svg>
);

export const FriesIcon = ({ className, style, active }) => (
    <svg
        viewBox="0 0 24 24"
        className={className}
        style={style}
        fill={getColor(active)}
    >
        <path d="M7 2h2v10H7zM11 2h2v10h-2zM15 2h2v10h-2z" />
        <path d="M5,13l1.5,9h11L19,13H5z M12,18c-1.1,0-2-0.9-2-2s0.9-2,2-2s2,0.9,2,2S13.1,18,12,18z" />
    </svg>
);

export const StripsIcon = ({ className, style, active }) => (
    <svg
        viewBox="0 0 24 24"
        className={className}
        style={style}
        fill={getColor(active)}
    >
        <path d="M16.5,5.5c-1.5-1.5-3.5-1.5-5,0l-4,4l3,3l4-4C16,7,17.5,7,16.5,5.5z" />
        <path d="M5.5,10.5l4,4l3-3l-4-4C7,6,5.5,6,5.5,7.5S4.5,9.5,5.5,10.5z" />
        <path d="M19.5,13.5l-4-4l-3,3l4,4C18,18,19.5,18,19.5,16.5S20.5,14.5,19.5,13.5z" />
        <path d="M10,13l-3,3c-1.5,1.5-1.5,3.5,0,5s3.5,1.5,5,0l3-3L10,13z" />
    </svg>
);
