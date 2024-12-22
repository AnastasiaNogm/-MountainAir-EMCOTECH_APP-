import React, { useState, useEffect } from 'react';
import Glava from '../Glava/Glava';
import Conteiner from '../Conteiner/Conteiner';
import ButtonContent from '../ButtonContent/ButtonContent';
import Buttoncontent2 from '../Buton4.2/Butoncontent2';
import './ui.css';
import { Track } from '../types'; // Импорт типа Track

interface TrassaProps {
    title: string; // Заголовок страницы
    labels: string[];
}

const Trassa: React.FC<TrassaProps> = ({ title, labels }) => {
    const [activeButton, setActiveButton] = useState<string>('left'); // State для управления активной кнопкой
    const trimmedTitle = "Sample Title"; // Пример значения для trimmedTitle
    const [tracks, setTracks] = useState<Track[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);


    useEffect(() => {
        fetch('http://localhost:5000/api/tracks')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Сеть не в порядке!');
                }
                return response.json();
            })
            .then(data => {
                setTracks(data);
                setLoading(false);
            })
            .catch(err => {
                setError(err);
                setLoading(false);
            });
    }, []);
  
  if (loading) {
    return <div>Загрузка...</div>;
  }
  
  if (error) {
    return <div>Ошибка: {error.message}</div>;
  }

    return (
        <>
            <Glava title={'Трассы'} />

            <ButtonContent
                activeButton={activeButton}
                setActiveButton={setActiveButton}
                titleLeft="Левый"
                titleMiddle="Средний"
                titleRight="Правый"
                postTitle={trimmedTitle}
                labels={labels}
            />

            <ButtonContent
                activeButton={activeButton}
                setActiveButton={setActiveButton}
                titleLeft="все"
                titleMiddle="Открытый"
                titleRight="Закрытый"
                postTitle={trimmedTitle}
                labels={labels}
            />

            <Buttoncontent2
                activeButton={activeButton}
                setActiveButton={setActiveButton}
                titleLeft="трассы"
                titleMiddle="подъемники"
                titleRight=""
                postTitle={trimmedTitle}
                labels={labels}
            />
            {tracks.map((track, index) => (
              <Conteiner
                 key={index}
                  title={track.name}
                   buttonText={track.number}
                    smallTexts={[
                      `-Длина: ${track.length}`,
                      `-Время работы: ${track.time}`,
                      `-Высота: ${track.height}`,
                      `-Статус: ${track.status}`
                   ]}
               />
              ))}


        </>
    );
};

export default Trassa;