import React from 'react';
import bg from 'assets/images/news-background.png';
import { Link } from 'react-router-dom';

const NewsCard = () => {
  const id = Math.floor(Math.random() * 100);
  return (
    <div className='w-80 flex flex-col justify-center items-center'>
      <Link to={`/news/${id}`}>
        <div>
          <img src={bg} alt='alt' />
        </div>
        <div className='text-center font-semibold text-xl'>
          Here are some things you should know regarding how we work
        </div>
      </Link>
    </div>
  );
};

export default NewsCard;
