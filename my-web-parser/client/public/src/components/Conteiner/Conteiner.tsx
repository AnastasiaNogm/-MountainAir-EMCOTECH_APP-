import React from 'react';
import './ui.scss'; // Убедитесь, что стили импортируются правильно

interface ConteinerProps {
    title: string;
    buttonText: string;
    smallTexts: string[]; // Массив для всех маленьких надписей
}

const Conteiner: React.FC<ConteinerProps> = ({ title, buttonText, smallTexts }) => {
    // Проверяем, что массив содержит как минимум 6 элементов
    const leftTexts = smallTexts.slice(0, 4); // Первые 4 текста
    const rightTexts = smallTexts.slice(4, 6); // Последние 2 текста

    return (
        <div className="container">
            <h2 className="container-title">{title}</h2>
            <button className="container-button">{buttonText}</button>
            <div className="small-texts-container">
                <div className="left-texts">
                    {leftTexts.map((text, index) => (
                        <p key={index} className="container-label">{text}</p>
                    ))}
                </div>
                <div className="right-texts">
                    {rightTexts.map((text, index) => (
                        <p key={index} className="container-label">{text}</p>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Conteiner;
