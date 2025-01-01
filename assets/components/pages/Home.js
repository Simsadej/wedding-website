import React from 'react-dom';
import {Link} from 'react-router-dom';
import '../../styles/Home.css';
import HeroImage from '../../public/hero-image.jpeg';
import FooterImage from '../../public/footer-image.jpeg';
import ArchImage from '../../public/image-arch.png';
import Florals from '../../public/floral-design.png';
import {Button} from "../Button";
import '../../styles/Button.css';

function Home() {
    return (
        <>
            <div className='jumbotron jumbotron-fluid'>
                <h1 className='home-title'>Remi Fawehinmi & Simisola Adejumo</h1>

                <picture className=''>
                    <source media="(max-width: 799px)" srcSet={HeroImage}/>
                    <source media="(min-width: 800px)" srcSet={HeroImage}/>
                    <img src={HeroImage} alt="" className='hero-image'/>
                </picture>

            </div>
            <div className='clearfix'></div>

            <div className='container'>
                <main>
                    <div className='row'>
                        <div className='col-sm-12 col-md-12 col-lg-12 col-xl-12 my-5'>

                            <h3>Welcome to Our Wedding!</h3>
                            <div className='col-sm-12 col-md-12 col-lg-6 col-xl-6 float-start'>
                                <p>
                                    We cordially invite you to our Traditional Engagement and Wedding Reception on the
                                    17th
                                    April, 2025.
                                    We are excited to have you share our big day with us.
                                </p>

                                <p>

                                    As we wait for the big day to arrive, we have created this website to keep you up to
                                    date
                                    with everything.

                                </p>

                                <p>In the <strong>attendance section</strong>, can you Please confirm whether or not you
                                    will
                                    be at our wedding
                                    with us? Please confirm as soon as possible so we can arrange everything much
                                    faster.
                                </p>


                                <p>

                                    Also, please note that on the day, do <strong>not</strong> upload any photos or
                                    videos
                                    on
                                    any form of social
                                    media.

                                </p>
                                <p>

                                    Enjoy the site, and We’ll see you soon!
                                </p>
                            </div>
                            <div className='img-arch col-sm-12 col-md-12 col-lg-6 col-xl-6 float-end '>
                                <img src={ArchImage} alt='arch-image' className='arch-image'/>
                            </div>
                        </div>

                    </div>

                    <div className='aside row'>
                        <div className='col-sm-12 col-md-12 col-md-8 col-lg-8 my-3'>

                            <h3>Where is it located?</h3>


                            <div id='map'>
                                <gmp-map center="51.683006286621094,-0.005473606754094362" zoom="14" map-id="tewl">
                                    <gmp-advanced-marker position="51.683006286621094,-0.005473606754094362"
                                                         title="My location"></gmp-advanced-marker>
                                </gmp-map>
                            </div>

                        </div>


                        <div className='col-sm col-lg-4 my-5 float-lg-end'>

                            <h5>April, 17, 2025</h5>

                            <p>Ceremony | 12:00 PM
                                <br/>
                                Grange Park Methodist Church, Old Park Ridings, London N21 2EU
                            </p>
                            <p>Traditional Engagement and Reception | 3:30 PM
                                <br/>
                                The Palace Banqueting
                                112 Brooker Rd, Waltham Abbey EN9 1JH
                                (Wheelchair Accessible)</p>

                        </div>
                    </div>

                    <div className='row'>
                        <div className='col-sm-12 col-md-12 col-lg-6'>
                            <img src={FooterImage} alt="footer-image" className='footer-image'/>
                        </div>
                        <div className='row article float-right clearfix'>


                            <div
                                className='text-center col-sm-12 col-md-12 col-lg-6 col-xl-6 my-5 justify-content-center align-items-center'>

                                <h3>Save the Date and we'll see you there!</h3>
                                <p>
                                    If you'd like to give us a gift we're registered at <a href="http://">Prezola</a>
                                </p>

                                <Link to="/wedding/confirm-attendance" className="btn-outline">RSVP</Link>

                            </div>
                        </div>
                    </div>

                </main>
            </div>


        </>
    )
}

export default Home;