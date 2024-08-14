import React from 'react';
import './Content.css';
import ParticleHeaderBg from '../ParticlesBg/ParticlesHeader/ParticleHeaderBg';

/* ReactScroll */
import { Link } from 'react-scroll';

/* Multi idioma */
import { FormattedMessage } from 'react-intl';

const Content = () => (
    <div className="contenido">
        <ParticleHeaderBg />
        <section className="inicio" id="inicio">

            <div className="titulo">

                <p data-aos="fade-up" data-aos-delay="600">
                    <FormattedMessage
                        id='greeting'
                        defaultMessage='Please visit me!'
                    />
                </p>
                <h1 data-aos="fade-up" data-aos-delay="800">
                    <FormattedMessage
                        id='name'
                        defaultMessage='Tomas Rodriguez'
                    />
                </h1>
                <p data-aos="fade-up" data-aos-delay="1000">
                    <FormattedMessage
                        id='rol'
                        defaultMessage='Senior Blockchain Developer'
                    />
                </p>

                <div className="wrapper">
                    <a className="button" href="https://join.skype.com/invite/qaajOaNy9IYj" target="_blank" rel='noreferrer' data-aos="fade-up" data-aos-delay="1200">
                        <div className="icon">
                            <i className="fab fa-skype"></i>
                        </div>
                        <span>Skype</span>
                    </a>
                    <a className="button" href="https://github.com/TajimaMatsumoto39/" target="_blank" rel='noreferrer' data-aos="fade-up" data-aos-delay="1400">
                        <div className="icon">
                            <i className="fab fa-github"></i>
                        </div>
                        <span>Github</span>
                    </a>
                    <a className="button" href="https://t.me/goldenbutter1234/" target="_blank" rel='noreferrer' data-aos="fade-up" data-aos-delay="1600">
                        <div className="icon">
                            <i className="fab fa-telegram"></i>
                        </div>
                        <span>Telegram</span>
                    </a>
                    <a className="button" href="mailto:miyagiTajima39@gmail.com" target="_blank" rel='noreferrer' data-aos="fade-up" data-aos-delay="1800">
                        <div className="icon">
                            <i className="fab fas fa-envelope" style={{ fontSize: "22" + "px" }}></i>
                        </div>
                        <span>Gmail</span>
                    </a>
                </div>

                <Link to="sobre-mi" href="#sobre-mi">
                    <div className="scroll-down"></div>
                </Link>
            </div>
        </section>
    </div>
);

export default Content;