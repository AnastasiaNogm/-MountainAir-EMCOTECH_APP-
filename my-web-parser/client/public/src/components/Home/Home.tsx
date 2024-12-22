import React from 'react';
import ButtonPost from '../ButtonPost/ButtonPost';
import './ui.scss'; // Убедитесь, что импорт правильный

const Home: React.FC = () => {
  const buttons = [ 
    { id: 1, route: '/', image: "/image/skipass.png", text: "Ски-пасс и тарифы" }, 
    { id: 2, route: '/Arenda', image: "/image/pogoda.png", text: " аренда " },
    { id: 4, route: '/trassa', image: "/image/trassa.png", text: "Трасса" },  ];

  return (
 <div className="button-container">
   {buttons.map((button) => (
     <ButtonPost
       key={button.id}
       route={button.route}
       image={button.image}
       text={button.text}
     />
   ))}
 </div>
  );
};

export default Home;