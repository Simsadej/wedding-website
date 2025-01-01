import React, {useState} from 'react';

function Footer() {

    function getDate(){
        const date = new Date();
        const year = date.getFullYear() + "  ";
        return  {__html: year};
    }

    return(
        <>
            <footer>
                <div className='row' onLoad={getDate}>
                    <div className='text-center col-12'>
                        <h5> Remi Fawehinmi & Simisola Adejumo</h5>
                        <p>17th April, 2025</p>
                        <p>Created by Simisola &copy; <span dangerouslySetInnerHTML={getDate()}></span></p>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;