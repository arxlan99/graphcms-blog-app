import bg1 from 'assets/images/bg1.png';

const Home = () => {
  return (
    <div className='flex justify-center items-center'>
      <div className='flex flex-col justify-center items-center '>
        <div className='mt-12'>
          <img src={bg1} alt='bg1' width={600} />
        </div>
        <div className='font-semibold text-3xl max-w-[500px] text-center pt-5'>
          A few words about this blog platform, Ghost, and how this site was made
        </div>
      </div>
    </div>
  );
};

export default Home;
