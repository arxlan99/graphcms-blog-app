import React from 'react';
import { Link } from 'react-router-dom';

type Props = {
  id: number;
  title: string;
  background: string | null;
};

const NewsCard = (props: Props) => {
  const { id, title, background } = props;

  return (
    <div className='w-80 flex flex-col justify-center items-center '>
      <Link to={`/news/${id}`}>
        <div className='min-h-[200px]'>
          <img src={background ? background : ''} alt='alt' />
        </div>
        <div className='text-center font-semibold text-xl'>{title}</div>
      </Link>
    </div>
  );
};

export default NewsCard;
