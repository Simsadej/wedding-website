function Faq() {

    return (
        <>
            <div className='container'>
                <main>
                    <h1 className='text-center'>FAQS</h1>
                    <p className='text-center'>If you have any pressing questions for us, some answers can be found
                        here! <br/> Or if you'd like ask us personally, send us a message!</p>
                    <div className="accordion accordion-flush" id="accordionFlushExample">
                        <div className="accordion-item">
                            <h2 className="What is is the dress code?">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#flush-collapseOne" aria-expanded="false"
                                        aria-controls="flush-collapseOne">
                                    What is the dress code?
                                </button>
                            </h2>
                            <div id="flush-collapseOne" className="accordion-collapse collapse"
                                 data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">
                                    <p>For the traditonal wear for guests please come wearing white native with onion
                                        coloured head wear/ accessories.</p>
                                    
                                    <p>
                                        For guest not wearing the traditional attire please dress in formal attire. 
                                    </p>

                                    <img src="" alt=""/>
                                    
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#flush-collapseTwo" aria-expanded="false"
                                        aria-controls="flush-collapseTwo">
                                    Where is the traditional ceremony being held?
                                </button>
                            </h2>
                            <div id="flush-collapseTwo" className="accordion-collapse collapse"
                                 data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">
                                    The Traditional will be held at The Palace Banqueting venue located in Waltham
                                    Abbey. Please see the homepage for details of the address.
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#flush-collapseThree" aria-expanded="false"
                                        aria-controls="flush-collapseThree">
                                    What foods will be available on the day?
                                </button>
                            </h2>
                            <div id="flush-collapseThree" className="accordion-collapse collapse"
                                 data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">
                                    <p>
                                        The menu is as follows:
                                    </p>
                                    <p>
                                        Canapes to be served this will be:
                                        <br/>
                                        Puff Puff, Duck spring roll, vegetable samosa, Tempura prawns
                                    </p>

                                    <p>
                                        The main menu :
                                        <br/>
                                        Buffet setup for :
                                        <br/>
                                        Jollof Rice, Fried Rice White Rice, Ayamase,
                                        <br/>
                                        Singapore Noodles, Pounded Yam and Egusi,
                                        <br/>
                                        Plantain, Salad, Beef and Chicken.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#flush-collapseFour" aria-expanded="false"
                                        aria-controls="flush-collapseFour">
                                    How to get there?
                                </button>
                            </h2>
                            <div id="flush-collapseFour" className="accordion-collapse collapse"
                                 data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">
                                  <p>Here is a step-by-step guide to help you plan your journey from London to The Palace Banqueting in Waltham Abbey.
                                      <br/>
                                          You can choose between a taxi, Uber, or public transport, depending on your preference and convenience.
                                      </p>

                                    <h4>Option 1: Taxi</h4>

                                    <p>If you prefer the comfort and directness of a taxi, you can book one through a
                                    reputable London cab service.
                                        <br/>
                                    Inform the driver of your destination as: The Palace
                                    Banqueting, Waltham Abbey, EN9 1JH.
                                     <br/>
                                    The journey will take approximately 40–50 minutes, depending on your location and traffic, and may
                                    cost around £35 plus.
                                        <br/>We recommend confirming the fare with the taxi service in
                                    advance.
                                    <br/>
                                    </p>


                                    <h4>Option 2: Uber</h4>

                                    <p>
                                        Booking an Uber is a convenient alternative. Use the Uber app to request a ride from
                                    your current location to The Palace Banqueting, Waltham Abbey.
                                    <br/>
                                    Estimated journey time: 15–50 minutes (Depending on location).
                                    Approximate fare: £12–£20, depending on the time of day, demand and location.
                                    <br/>
                                    </p>


                                    <h4>Option 3: Public Transport</h4>

                                   <p>
                                      <strong>Getting to The Palace Banqueting Using Public Transport:</strong>
                                        <br/>
                                       To reach The Palace Banqueting, start by taking a train heading towards
                                       <strong>Bishop Stortford, Cheshunt</strong>, or <strong>Hertford East</strong>,
                                       and disembark at <strong>Waltham Cross Station </strong>.
                                        <br/>
                                       After exiting the train, walk to the nearby Waltham Cross Bus Station,
                                       where you can board one of the following buses: <strong>66, 251,</strong> or <strong>250</strong>.
                                       Inform the driver that you need to get off at <strong>Farm Hill Road</strong>.
                                        <br/>
                                       <br/>

                                       Alternatively, if you prefer,
                                       you can take a local taxi or book an Uber directly from Waltham Cross Station to The Palace Banqueting.
                                       The taxi ride is approximately 10 minutes.
                                       <br/>
                                       <br/>

                                       Estimated Cost:

                                       <ul>
                                           <li>Combined train and bus fares: £10–£15.</li>
                                           <li>Taxi/Uber from Waltham Cross Station: approximately £10–£15.</li>
                                       </ul>

                                       This guide is designed to make your journey smooth and stress-free.
                                       Have a pleasant trip to The Palace Banqueting!

                                       <br/>

                                   </p>


                                </div>
                            </div>
                        </div>
                        {/*<div className="accordion-item">*/}
                        {/*    <h2 className="accordion-header">*/}
                        {/*        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"*/}
                        {/*                data-bs-target="#flush-collapseFive" aria-expanded="false"*/}
                        {/*                aria-controls="flush-collapseFive">*/}
                        {/*            */}
                        {/*        </button>*/}
                        {/*    </h2>*/}
                        {/*    <div id="flush-collapseFive" className="accordion-collapse collapse"*/}
                        {/*         data-bs-parent="#accordionFlushExample">*/}
                        {/*        <div className="accordion-body">Placeholder content for this accordion, which is*/}
                        {/*            intended to*/}
                        {/*            demonstrate the <code>.accordion-flush</code> class. This is the third item's*/}
                        {/*            accordion*/}
                        {/*            body. Nothing more exciting happening here in terms of content, but just filling up*/}
                        {/*            the*/}
                        {/*            space to make it look, at least at first glance, a bit more representative of how*/}
                        {/*            this would*/}
                        {/*            look in a real-world application.*/}
                        {/*        </div>*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                    </div>

                    <div id='contact-us-form'>
                        <h4>Contact Us</h4>
                        <iframe
                            src="https://docs.google.com/forms/d/e/1FAIpQLSdGZq0pDB6-ii8-9JXygI9WEFsvZ-T4I_X6oBIabUSeTyv5HA/viewform?embedded=true"
                            width="400" height="551" frameBorder="0" marginHeight="0" marginWidth="0">Loading…
                        </iframe>

                    </div>

                </main>
            </div>
        </>
)}

export default Faq