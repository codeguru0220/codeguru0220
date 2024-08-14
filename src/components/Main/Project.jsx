import React from 'react';
import '../../pages/Project/ProjectPage.css'
import { Link } from 'react-router-dom';
import { ButtomGet } from '../ButtomGet/ButtomGet';

/* Multi idioma */
import { FormattedMessage } from 'react-intl';

/* Swiper */
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";

/* Img */
const proyectImg = require.context('../../img', true);

const Project = () => {
    return (
        <section className="proyectos" id="proyectos">
            <h2 className="heading">
                <FormattedMessage
                    id='projects'
                    defaultMessage='Projects'
                />
            </h2>
            <div className="proyect-site" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                <Swiper
                    spaceBetween={30}
                    loop={true}
                    grabCursor={true}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination, Autoplay]}
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                        },
                        768: {
                            slidesPerView: 2,
                        },
                        1024: {
                            slidesPerView: 3,
                        },
                    }}
                    className='proyectos-slider mySwiper'
                >
                    <SwiperSlide className='caja'>
                        <img
                            src={proyectImg(`./advertising_website.png`)}
                            alt='proyectos'

                        />
                        <div className="content">
                            <h3>Advertising</h3>
                            <p>
                                Attractive website
                            </p>
                            <p className="tecnologias">
                                React
                                <span> -</span> CSS
                                <span> -</span> Redux
                                <span> -</span> Bootstrap
                                <span> -</span> TypeScript
                                {/* <span> -</span> Solidity */}
                                <span> -</span> NodeJS
                                <span> -</span> MongoDB
                            </p>
                            <a href="" className="custom-btn btn" target="_blank" rel="noopener noreferrer"><span>Demo</span></a>
                            <a href="" className="custom-btn btn-codigo" target="_blank" rel="noopener noreferrer">Repository</a>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='caja'>
                        <img
                            src={proyectImg(`./coin_marketplace.png`)}
                            alt='proyectos'

                        />
                        <div className="content">
                            <h3>Coin Marketplace</h3>
                            <p>
                                Can buy everything with Coin
                            </p>
                            <p className="tecnologias">
                                HTML5
                                <span> -</span> TailwindCSS
                                <span> -</span> NodeJS
                                <span> -</span> React
                                <span> -</span> Bootstrap
                                <span> -</span> Solidity
                                <span> -</span> MongoDB

                            </p>
                            <a href="" className="custom-btn btn" target="_blank" rel="noopener noreferrer"><span>Demo</span></a>
                            <a href="" className="custom-btn btn-codigo" target="_blank" rel="noopener noreferrer">Repository</a>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='caja'>
                        <img
                            src={proyectImg(`./marketplace.png`)}
                            alt='proyectos'

                        />
                        <div className="content">
                            <h3>Marketplace</h3>
                            <p>
                                Allowed you to buy with token
                            </p>
                            <p className="tecnologias">
                                React
                                <span> -</span> CSS
                                <span> -</span> Redux
                                <span> -</span> NodeJS
                                <span> -</span> ExpressJS
                                <span> -</span> Sequelize
                                <span> -</span> PostgreSQL
                                <span> -</span> Ethereum
                            </p>
                            <a href="" className="custom-btn btn" target="_blank" rel="noopener noreferrer"><span>Demo</span></a>
                            <a href="" className="custom-btn btn-codigo" target="_blank" rel="noopener noreferrer">Repository</a>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='caja'>
                        <img
                            src={proyectImg(`./NFT.JPG`)}
                            alt='proyectos'
                        />
                        <div className="content">
                            <h3>NFT</h3>
                            <p>
                                Please use NFT
                            </p>
                            <p className="tecnologias">
                                HTML5
                                <span> -</span> CSS
                                <span> -</span> JavaScript
                                <span> -</span> NFT

                            </p>
                            <a href="" className="custom-btn btn" target="_blank" rel="noopener noreferrer"><span>Demo</span></a>
                            <a href="" className="custom-btn btn-codigo" target="_blank" rel="noopener noreferrer">Repository</a>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='caja'>
                        <img
                            src={proyectImg(`./selling_with_token.png`)}
                            alt='proyectos'
                        />
                        <div className="content">
                            <h3></h3>
                            <p>
                                Car Market
                            </p>
                            <p className="tecnologias">

                                <span> -</span> CSS
                                <span> -</span> JavaScript
                                <span> -</span> Bootstrap
                            </p>
                            <a href="" className="custom-btn btn" target="_blank" rel="noopener noreferrer"><span>Demo</span></a>
                            <a href="" className="custom-btn btn-codigo" target="_blank" rel="noopener noreferrer">Repository</a>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='caja'>
                        <img
                            src={proyectImg(`./trading.png`)}
                            alt='proyectos'
                        />
                        <div className="content">
                            <h3>Trading</h3>
                            <p>
                                Token price graph
                            </p>
                            <p className="tecnologias">
                                <span> -</span> CSS
                                <span> -</span> JavaScript
                                <span> -</span> Bootstrap
                            </p>
                            <a href="" className="custom-btn btn" target="_blank" rel="noopener noreferrer"><span>Demo</span></a>
                            <a href="h" className="custom-btn btn-codigo" target="_blank" rel="noopener noreferrer">Repository</a>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='caja'>
                        <img
                            src={proyectImg(`./website_frontend.png`)}
                            alt='proyectos'
                        />
                        <div className="content">
                            <h3>Story</h3>
                            <p>
                                Funny Stories
                            </p>
                            <p className="tecnologias">
                                <span> -</span> CSS
                                <span> -</span> React
                                <span> -</span> TailwindCSS
                            </p>
                            <a href="" className="custom-btn btn" target="_blank" rel="noopener noreferrer"><span>Demo</span></a>
                            <a href="" className="custom-btn btn-codigo" target="_blank" rel="noopener noreferrer">Repository</a>
                        </div>
                    </SwiperSlide>

                </Swiper>
                <div className="swiper-pagination"></div>
            </div>
            {/* <Link className="custom-btn btn-codigo portafolio-btn" to="/project">
                <FormattedMessage
                    id='btn-more-projects'
                    defaultMessage='More projects'
                />
            </Link> */}
            <div className='portafolio-btn'>
                <Link to="/project">
                    <ButtomGet />
                </Link>
            </div>
        </section>

    )
};
export default React.memo(Project);