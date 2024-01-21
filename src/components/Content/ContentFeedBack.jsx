import React, { useEffect, useState } from 'react';
import '../../Styles/contentFeedBack.css';
import '../../Styles/content.css';

const ContentFeedBack = (props) => {
    const [reviews, setReviews] = useState([]);
    const [column1Reviews, setColumn1Reviews] = useState([]);
    const [column2Reviews, setColumn2Reviews] = useState([]);

    useEffect(() => {
        const apiURL = 'https://jupiter.anastasiyashakti.com/index.php?id=2';
        
        fetch(apiURL)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                setReviews(data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    useEffect(() => {
        // Распределение отзывов по столбцам
        let tempColumn1 = [];
        let tempColumn2 = [];
        let col1Height = 0;
        let col2Height = 0;

        reviews.forEach(review => {
            if (col1Height <= col2Height) {
                tempColumn1.push(review);
                col1Height += review.content.length; // Примерный расчет высоты
            } else {
                tempColumn2.push(review);
                col2Height += review.content.length; // Примерный расчет высоты
            }
        });

        setColumn1Reviews(tempColumn1);
        setColumn2Reviews(tempColumn2);
    }, [reviews]);

    return (
        <div className="absolute">
            <div className="frame13 content" id={`content${props.contentid}`}>
                <div className="scrolldiv" id={`scroll${props.contentid}`}>
                    <div className="contentblock">
                        <div className="frame13_block">
                            <h2 className="frame13_h2">Что говорят об Астропрогнозе?</h2>
                            <div className="frame13_content">
                                <div className="containerforframe13">
                                    <div className="column" id="column1">
                                        {column1Reviews.map(review => (
                                            <div key={review.id} className="frame13_content_block">
                                                <h5 className="frame13_content_block_name">{review.pagetitle}</h5>
                                                <p className="frame13_content_block_p">{review.content}</p>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="column" id="column2">
                                        {column2Reviews.map(review => (
                                            <div key={review.id} className="frame13_content_block">
                                                <h5 className="frame13_content_block_name">{review.pagetitle}</h5>
                                                <p className="frame13_content_block_p">{review.content}</p>
                                            </div>
                                        ))}
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

export default ContentFeedBack;
