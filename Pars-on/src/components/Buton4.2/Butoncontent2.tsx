import React from 'react';

interface ButtonContent2Props {
    activeButton: string;
    setActiveButton: (buttonName: string) => void;
    titleLeft: string;
    titleMiddle: string;
    titleRight: string;
    postTitle: string;
    labels: string[]; // Добавляем labels как пропс
}

const Buttoncontent2: React.FC<ButtonContent2Props> = ({
    activeButton,
    setActiveButton,
    titleLeft,
    titleMiddle,
    titleRight,
    postTitle,
    labels,
}) => {
    // Ваша логика здесь
    return (
        <div className="btn-group">
            <div className="btn-wrapper">
                <button
                    className={`btn ${activeButton === 'left' ? 'btn-active' : ''}`}
                    onClick={() => setActiveButton('left')}
                >
                    {titleLeft}
                </button>
            </div>
            <div className="btn-wrapper">
                <button
                    className={`btn ${activeButton === 'middle' ? 'btn-active' : ''}`}
                    onClick={() => setActiveButton('middle')}
                >
                    {titleMiddle}
                </button>
            </div>
            <div className="btn-wrapper">
            </div>
        </div>
    );
};

export default Buttoncontent2;
