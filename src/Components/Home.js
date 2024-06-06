import React from "react";
import web from '../Images/img1.svg';
import CommonPage from "./CommonPage";

export default function Home() {
    return (
        <>
            <CommonPage 
            name='Grow Your Business With'
            imgsrc={web}
            visit='/Service'
            btnname='Get Started' />
        </>
    )
}