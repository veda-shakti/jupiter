import React, {useContext} from 'react';
import '../../Styles/ContentBlockVebinar.css'
import ModalContext from "../FormPay/ModalContext";
import AdaptiveTag from "./AdaptiveTag";
import Buttonreg from "../../assets/Buttonreg";
const ContentBlockVebinar = (props) => {
    const { setShowModal } = useContext(ModalContext);
    return (
        <div className="absolute">
        <div className="content blockvebinar" id={`content${props.contentid}`}>
            <div className="scrolldiv" id={`scroll${props.contentid}`}>
                <div className="contentblock">
                    <h2 className="vebinar_title">
                        {props.title}
                    </h2>
                    <p className="vebinar_info">
                        {props.description}
                    </p>

                    <div className="vebinar_block">
                        <AdaptiveTag
                            tag="p"
                            translations={{
                                en: "",
                                ru: "Практика очень глубокая и насыщенная, поэтому проводится 1 раз в жизни для стабильного результата, гармонизации энергии Юпитера в гороскопе. Наработанные качества Юпитера переходят с вами в следующее воплощение",
                                uk: ""
                            }}
                            className="vebinar_block_content"
                        />
                    </div>
                    <div className="vebinar_block">
                        <AdaptiveTag
                            tag="h3"
                            translations={{
                                en: "",
                                ru: "Какие вас ждут практики?",
                                uk: ""
                            }}
                            className="vebinar_block_h3"
                        />
                        <div className="vebinar_block_point">
                            <AdaptiveTag
                                tag="h4"
                                translations={{
                                    en: "",
                                    ru: "Мантры",
                                    uk: ""
                                }}
                                className="vebinar_block_h4"
                            />
                            <AdaptiveTag
                                tag="p"
                                translations={{
                                    en: "",
                                    ru: "Каждодневная практика чтения мантр в прямом эфире в одном поле, потоке. Запись для тех, кто будет читать в другое время",
                                    uk: ""
                                }}
                                className="vebinar_block_content"
                            />
                        </div>
                        <div className="vebinar_block_point">
                            <AdaptiveTag
                                tag="h4"
                                translations={{
                                    en: "",
                                    ru: "Алтарь",
                                    uk: ""
                                }}
                                className="vebinar_block_h4"
                            />
                            <AdaptiveTag
                                tag="p"
                                translations={{
                                    en: "",
                                    ru: "Алтарь. Обустройство алтаря, практики на алтаре для энергии Юпитера",
                                    uk: ""
                                }}
                                className="vebinar_block_content"
                            />
                        </div>
                        <div className="vebinar_block_point">
                            <AdaptiveTag
                                tag="h4"
                                translations={{
                                    en: "",
                                    ru: "Практика благотворительности",
                                    uk: ""
                                }}
                                className="vebinar_block_h4"
                            />
                            <AdaptiveTag
                                tag="p"
                                translations={{
                                    en: "",
                                    ru: "Практика благотворительности для улучшения Юпитера по определенным правилам",
                                    uk: ""
                                }}
                                className="vebinar_block_content"
                            />
                        </div>
                    </div>

                    <div className="vebinar_block">
                        <AdaptiveTag
                            tag="h3"
                            translations={{
                                en: "",
                                ru: "Какие вас ждут аудиочтения?",
                                uk: ""
                            }}
                            className="vebinar_block_h3"
                        />
                        <div className="vebinar_block_point">
                            <AdaptiveTag
                                tag="p"
                                translations={{
                                    en: "",
                                    ru: "Прослушивание аудиочтений священных писаний укрепляют нерушимую связь с Богом, помогают обрести защиту от заблуждений и раскрыть истинную мудрость, способную указать путь к успешной жизни!",
                                    uk: ""
                                }}
                                className="vebinar_block_content"
                            />
                        </div>

                        <div className="vebinar_block_point">
                            <AdaptiveTag
                                tag="h4"
                                translations={{
                                    en: "",
                                    ru: "Аудиочтение книги «Бхагавад Гита»",
                                    uk: ""
                                }}
                                className="vebinar_block_h4"
                            />
                            <AdaptiveTag
                                tag="p"
                                translations={{
                                    en: "",
                                    ru: "Ежедневное чтение мной Бхагавад Гиты и аудиозапись с комментариями, пояснениями для вас, ответы на вопросы. За 42 дня мы прочитаем всю Бхагавад Гиту. Изучим кто наш главный духовный учитель. Будем говорить о едином Боге (вне зависимости от религии), о его качествах, изучая которые формируется верная и непоколебимая фокусировка на истинных ценностях для защиты и процветания",
                                    uk: ""
                                }}
                                className="vebinar_block_content"
                            />
                        </div>
                        <div className="vebinar_block_point">
                            <AdaptiveTag
                                tag="h4"
                                translations={{
                                    en: "",
                                    ru: "Аудиочтение катхи Юпитеру",
                                    uk: ""
                                }}
                                className="vebinar_block_h4"
                            />
                            <AdaptiveTag
                                tag="p"
                                translations={{
                                    en: "",
                                    ru: "Прослушивание катхи — повествования о величии гармонизируемой планеты — для гармонизации Юпитера",
                                    uk: ""
                                }}
                                className="vebinar_block_content"
                            />
                        </div>
                    </div>

                    <h2 className="vebinar_title">
                        А также:
                    </h2>

                    <div className="vebinar_block">
                        <AdaptiveTag
                            tag="h3"
                            translations={{
                                en: "",
                                ru: "Астрогороскоп дня",
                                uk: ""
                            }}
                            className="vebinar_block_h3"
                        />
                        <AdaptiveTag
                            tag="p"
                            translations={{
                                en: "",
                                ru: "Аудио-астрогороскоп дня длительностью от 15 до 30 минут — отличное руководство для осознания текущих энергий и тенденций. Вы узнаете, какие благоприятные возможности и результаты могут открыться каждый день благодаря вашей практике. Вы также получите рекомендации о том, как использовать эти энергии в своих интересах и на что следует обратить особое внимание, чтобы избегать негативного влияния\n" +
                                    "\n" +
                                    "Более того, вы научитесь «слышать» энергетическое пространство за 42 дня и получать ответы на все ваши вопросы, связанные со сферами отношений, работы и бизнеса",
                                uk: ""
                            }}
                            className="vebinar_block_content"
                        />

                    </div>

                    <div className="vebinar_block">
                        {<AdaptiveTag
                            tag="h3"
                            translations={{
                                en: 'Материалы, которые вы получите',
                                ru: 'Лекции по Астрологии',
                                uk: 'Материалы, которые вы получите',
                            }}
                            className="vebinar_block_h3"
                        />}
                        <div className="vebinar_block_point">
                            <AdaptiveTag
                                tag="p"
                                translations={{
                                    en: "",
                                    ru: "На протяжении трех аудиолекций мы погрузимся в изучение одной из фундаментальных сил мироздания — планеты Юпитер. Мы рассмотрим его влияние и значимость в натальной карте, проанализируем взаимосвязь Юпитера с происходящими событиями в жизни.",
                                    uk: ""
                                }}
                                className="vebinar_block_content"
                            />
                        </div>

                        <AdaptiveTag
                            tag="h4"
                            translations={{
                                en: "",
                                ru: "Список лекций:",
                                uk: ""
                            }}
                            className="vebinar_block_h4"
                        />

                        <AdaptiveTag
                            tag="ul"
                            translations={{
                                en: '',
                                ru: (
                                    <>
                                        <li className="vebinar_block_li">
                                            <b>Лекция 1.</b> <br/> «Что такое планета Юпитер, механизм ее влияния на
                                            судьбу, почему Юпитер отвечает за удачу и процветание»
                                        </li>

                                        <li className="vebinar_block_li">
                                            <b>Лекция 2.</b> <br/> «В каком знаке и доме у вас Юпитер, что это значит,
                                            механизм влияния на судьбу»
                                        </li>

                                        <li className="vebinar_block_li">
                                            <b>Лекция 3.</b> <br/> «С какими планетами у вас Юпитер в гороскопе, что
                                            дают эти соединения»
                                        </li>
                                    </>
                                ),
                                uk: ''
                            }}
                            className=""
                        />
                    </div>

                    <div className="vebinar_block">
                        {<AdaptiveTag
                            tag="h3"
                            translations={{
                                en: 'Материалы, которые вы получите',
                                ru: 'Лекции о связи Материального и Духовного',
                                uk: 'Материалы, которые вы получите',
                            }}
                            className="vebinar_block_h3"
                        />}

                        <AdaptiveTag
                            tag="h4"
                            translations={{
                                en: "",
                                ru: "Список лекций:",
                                uk: ""
                            }}
                            className="vebinar_block_h4"
                        />

                        <AdaptiveTag
                            tag="ul"
                            translations={{
                                en: '',
                                ru: (
                                    <>
                                        <li className="vebinar_block_li">
                                            <b>Лекция 1.</b> <br/> «Процветание: законы процветания и денег»
                                        </li>

                                        <li className="vebinar_block_li">
                                            <b>Лекция 2.</b> <br/> «Благотворительность: для чего, а нужно ли, как,
                                            когда и кому?»
                                        </li>

                                        <li className="vebinar_block_li">
                                            <b>Лекция 3.</b> <br/> «Отношения и дети: кто такой муж в семье? (полезно и
                                            женщинам и мужчинам). Несложные отношения с детьми, вопросы деторождения»
                                        </li>

                                        <li className="vebinar_block_li">
                                            <b>Лекция 4.</b> <br/> «Статус, бизнес, возможности — качества хорошего
                                            Юпитера»
                                        </li>

                                        <li className="vebinar_block_li">
                                            <b>Лекция 5.</b> <br/> «Пространство (Васту) — судьба, гороскоп,
                                            возможности, трудности через жилое и рабочее пространство: где и как
                                            расположен Юпитер в пространстве вашего жилья, как это влияет на событийный
                                            ряд, методы гармонизации»
                                        </li>

                                        <li className="vebinar_block_li">
                                            <b>Лекция 6.</b> <br/> «Алтарь — как и где обустроить, почему важно его
                                            иметь»
                                        </li>
                                    </>
                                ),
                                uk: ''
                            }}
                            className=""
                        />
                    </div>

                    <div className="vebinar_block">
                        <AdaptiveTag
                            tag="p"
                            translations={{
                                en: "",
                                ru: "Все аудиоматериалы записываются во время практики в потоковом состоянии. Идёт необходимая информация для тех, кто участвует в практике для быстрого выхода на новый уровень, исцеления гороскопа, души",
                                uk: ""
                            }}
                            className="vebinar_block_content"
                        />
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
    );
};

export default ContentBlockVebinar;