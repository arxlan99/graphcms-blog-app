import NewsCard from 'components/NewsCard';

const AllNews = () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <div className='flex justify-center items-center my-4'>
      <div className='flex flex-col justify-center items-center '>
        <div className='text-5xl font-bold mb-4'>All articles</div>
        <div className='grid md:grid-cols-2 gap-x-4 gap-y-12 mt-5'>
          {arr.map((item) => (
            <div key={item}>
              <NewsCard />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllNews;
