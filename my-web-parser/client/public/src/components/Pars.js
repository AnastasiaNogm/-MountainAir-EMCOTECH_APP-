import React, { useEffect, useState } from 'react';

const TrackList = () => {
  const [tracks, setTracks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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
    <div>
      <h1>Трассы</h1>
      <ul>
        {tracks.map((track, index) => (
          <li key={index}>
            <strong>Название трассы:</strong> {track.name} <br />
            <strong>Номер трассы:</strong> {track.number} <br />
            <strong>Длина трассы:</strong> {track.length} <br />
            <strong>Время работы:</strong> {track.time} <br />
            <strong>Высота:</strong> {track.height} <br />
            <strong>Статус:</strong> {track.status} <br />
            <hr />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TrackList;