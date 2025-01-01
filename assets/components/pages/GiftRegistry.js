import React from "react";
import '../../styles/GiftRegistry.css'
import {Button} from "../Button";

function GiftRegistry() {

    return(
        <>
            <div className='container container-fluid'>
                <main>
                    <div className='row'>
                        <div className='col-sm-12 col-md-12 col-lg-12 col-xl-12'>
                            <h1 className='text-center'>Gift Registry</h1>

                            <p>We are so excited to have you join our special day and your presence at our wedding is
                                the best gift we could ask for. However, if we are to be honored with a present from
                                you, a monetary gift towards our <strong>Honeymoon Trip to Bali </strong> would be very much
                                appreciated.
                            </p>

                            <p>We have set up a cash fund wedding registry at Prezola.
                            </p>
                            <p>OR</p>
                            <p>We have put together a gift list as well on both sites below. Just click on either
                                buttons and you'll be taken to the sites for our gifts registry!</p>
                            <p>We thank you very much in advance! <span> &#128522;</span></p>
                        </div>

                        <div className='gift-buttons text-center col-sm col-md-12 col-lg-12 col-xl-12'>




                            <a href='https://www.amazon.co.uk/wedding/registry/35LX7TSA6B7JV'
                               ><Button

                                children='Amazon'
                                size='btn-small'
                                type='submit'
                                style='btn-outline'/></a>

                            <a href='https://prezola.com/buy/view/207072'>
                                <Button

                                    children='Prezola'
                                    size='btn-small'
                                    type='submit'
                                    style='btn-outline'
                                />
                            </a>
                        </div>

                    </div>
                </main>
            </div>
        </>
    );
}

export default GiftRegistry;
