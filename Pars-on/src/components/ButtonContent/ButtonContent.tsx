import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Mathes.scss';

interface Button4Props {
  activeButton: string;
  setActiveButton: (buttonName: string) => void;
  titleLeft: string;
  titleMiddle: string;
  titleRight: string;
  postTitle: string; 
  labels: string[]; // Добавляем labels как пропс
}

const ButtonContent: React.FC<Button4Props> = ({
  activeButton,
  setActiveButton,
  titleLeft,
  titleMiddle,
  titleRight,
  postTitle,
  labels, // Получаем labels
}) => {
  const navigate = useNavigate();

  const handleClick = (buttonName: string, page: string) => {
    if (activeButton === buttonName) return;
    setActiveButton(buttonName);
    navigate(page, { state: { title: postTitle, labels } }); // Передаем labels через состояние
  };

  return (
    <div className="btn-group">
      <div className="btn-wrapper">
        <button
          className={`btn ${activeButton === 'left' ? 'btn-active' : ''}`}
          onClick={() => handleClick('left', '/PostDetail')}
        >
          {titleLeft} 
        </button>
      </div>
      <div className="btn-wrapper">
        <button
          className={`btn ${activeButton === 'middle' ? 'btn-active' : ''}`}
          onClick={() => handleClick('middle', '/PostImage')}
        >
          {titleMiddle}  
        </button>
      </div>
      <div className="btn-wrapper">
        <button
          className={`btn ${activeButton === 'right' ? 'btn-active' : ''}`}
          onClick={() => handleClick('right', '/PostVideo')}
        >
          {titleRight}  
        </button>
      </div>
    </div>
  );
};

export default ButtonContent;
