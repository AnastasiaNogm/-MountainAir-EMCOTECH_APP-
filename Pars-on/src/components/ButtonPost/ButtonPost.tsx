import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import './ui.css';

interface ButtonPostProps {
    route: string;
    image: string;
    text: string;
}

const ButtonPost: React.FC<ButtonPostProps> = ({ route, image, text }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(route);
    };

    return (
        <Button className="btn-lg" onClick={handleClick}>
            <img src={image} alt="Button" />
            <div className="button-text">{text}</div>
        </Button>
    );
};

export default ButtonPost;