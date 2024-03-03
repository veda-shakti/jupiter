import React, {useContext} from 'react';
import '../../Styles/ContentFullWidth.css';
import '../../Styles/content.css'
import ModalContext from "../FormPay/ModalContext";
import img1 from '../../assets/bg-fullwidth-pic-1.webp'
import img2 from '../../assets/bg-fullwidth-pic-2.webp'
import img3 from '../../assets/bg-fullwidth-pic-3.svg'
import Buttonreg from "../../assets/Buttonreg";
const ContentFullWidth = (props) => {
    const { setShowModal } = useContext(ModalContext);
    return (
        <div className="absolute">

            <div className="content fullwidthcontent" id={`content${props.contentid}`} >
                <div className="scrolldiv fullwidthscroll" id={`scroll${props.contentid}`}>
                    <div className="contentblock">
                        <img src={img1} id="bg-fullwidth-image-1" alt="book"/>
                        <img src={img2} id="bg-fullwidth-image-2" alt="slon"/>
                        <div className="saveanimation">
                            <img src={img3} id="bg-fullwidth-image-3" alt="back-ground circle"/>
                        </div>
                        <div className="frame8_block">
                            <div className="frame8_block_row1">
                                <img src={props.photo} alt="Nasti Shackti" className="frame8_block_img no-select"/>
                                <div className="frame8_block_about">
                                    <h1 className="frame8_block_h1">Анастасия Шакти</h1>
                                    <p className="frame8_block_row1_p">
                                        Практик, ведический астролог, мастер по бизнес-астропланированию, восточный
                                        психолог, васту мастер, автор и ведущая женских практических онлайн ретритов по
                                        гармонизации гороскопа, исцеления судьбы, раскрытию духовного потенциала,
                                        целитель
                                        вечного — Души.
                                    </p>
                                </div>
                            </div>
                            <div className="frame8_block_row2">
                                <div className="frame8_block_row2_block">
                                    <h2 className="frame8_block_row2_h2">Проводник в сакральные знания и практики
                                        по:</h2>
                                    <ul className="frame8_block_row2_ul">
                                        <li className="frame8_block_row2_li">
                                            <h5 className="frame8_block_row2_li_h5">самоосвобождению от паттернов,
                                                программ,
                                                препятствующих счастью в жизни и отношениях</h5>
                                        </li>
                                        <li className="frame8_block_row2_li">
                                            <h5 className="frame8_block_row2_li_h5">выходу на более высокий уровень
                                                жизни,
                                                комфорта, внутренней целостности и гармонии</h5>
                                        </li>
                                        <li className="frame8_block_row2_li">
                                            <h5 className="frame8_block_row2_li_h5">разрешению сложных жизненных
                                                ситуаций</h5>
                                        </li>
                                    </ul>
                                </div>
                                <div className="frame8_block_row2_block golden">
                                    <h2 className="frame8_block_row2_h2">Моя миссия — это:</h2>
                                    <ul className="frame8_block_row2_ul">
                                        <li className="frame8_block_row2_li">
                                            <h5 className="frame8_block_row2_li_h5">упрочнение семей и Родов</h5>
                                        </li>
                                        <li className="frame8_block_row2_li">
                                            <h5 className="frame8_block_row2_li_h5">помощь в кризисных ситуациях в
                                                отношениях и бизнесе</h5>
                                        </li>
                                        <li className="frame8_block_row2_li">
                                            <h5 className="frame8_block_row2_li_h5">исцеление женщин, раскрытие их
                                                потенциала, материнской созидательной природы через соединение с Богом и
                                                путь по-женски</h5>
                                        </li>
                                        <li className="frame8_block_row2_li">
                                            <h5 className="frame8_block_row2_li_h5">процветание всего общества через
                                                помощь
                                                людям в реализации</h5>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="frame8_block_row3">
                                <div className="frame8_block_row3_container">
                                    <div className="frame8_block_row3_block">
                                        <h5 className="frame8_block_row3_block_h5">15 лет</h5>
                                        <p className="frame8_block_row3_block_p">в практике восточных наук (с 2009
                                            года)</p>
                                    </div>
                                    <div className="frame8_block_row3_block">
                                        <h5 className="frame8_block_row3_block_h5">более 40</h5>
                                        <p className="frame8_block_row3_block_p">исцеляющих судьбы ретритов с 2020
                                            г.</p>
                                    </div>
                                    <div className="frame8_block_row3_block">
                                        <h5 className="frame8_block_row3_block_h5">с 2017 года</h5>
                                        <p className="frame8_block_row3_block_p">духовная инициация в ведической
                                            традиции</p>
                                    </div>
                                    <div className="frame8_block_row3_block">
                                        <h5 className="frame8_block_row3_block_h5">более 3000</h5>
                                        <p className="frame8_block_row3_block_p">консультаций</p>
                                    </div>
                                    <div className="reg">
                                        <Buttonreg
                                        reg={() => setShowModal(true)}
                                        translations={{
                                            en: 'Приобрести запись',
                                            ru: 'Принять участие',
                                            uk: 'Приобрести запись',
                                        }}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContentFullWidth;