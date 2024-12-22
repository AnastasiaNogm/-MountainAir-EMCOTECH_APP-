import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Trassa from './components/Trassa/Trassa'; // Импортируем компонент Trassa

const App: React.FC = () => {
    // Определяем данные, которые будем передавать в Trassa
    const labels = ['Label 1', 'Label 2', 'Label 3']; // Пример данных для labels
    const smallTexts = [
        'Маленькая надпись 1',
        'Маленькая надпись 2',
        'Маленькая надпись 3',
        'Маленькая надпись 4',
        'Маленькая надпись 5',
        'Маленькая надпись 6'
    ]; // Пример данных для smallTexts

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route 
                    path="/trassa" 
                    element={<Trassa labels={labels} smallTexts={smallTexts} />} 
                /> {/* Передаем labels и smallTexts как пропсы в Trassa */}
                {/* Добавляем другие ваши маршруты здесь, если есть */}
            </Routes>
        </Router>
    );
};

export default App;
