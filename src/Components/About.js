import React from "react";
import web from '../Images/img1.svg';
import CommonPage from './CommonPage';

export default function About() {
    return (
        <>
            <CommonPage 
            name='Welcome to About page'
            imgsrc={web}
            visit='/contact'
            btnname='Contact Now' />
        </>
    )
}