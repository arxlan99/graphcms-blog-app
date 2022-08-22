import bg1 from 'assets/images/bg1.png';
import NewsCard from 'components/NewsCard';
import { gql, useQuery } from '@apollo/client';

const GET_NEWS = gql`
  query getNews {
    newscasts {
      id
      background
      title
    }
  }
`;

const Home = () => {
  const { loading, error, data } = useQuery(GET_NEWS);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>`Error! ${error.message}`</div>;

  return (
    <div className='flex justify-center items-center'>
      <div className='flex flex-col justify-center items-center '>
        <div className='mt-12'>
          <img src={bg1} alt='bg1' width={600} />
        </div>
        <div className='font-semibold text-3xl max-w-[500px] text-center pt-5'>
          A few words about this blog platform, Ghost, and how this site was made
        </div>
        <div className='border-t-2 border-black w-full my-8' />
        <div className='text-5xl font-bold mb-4'>All articles</div>
        <div className='grid md:grid-cols-2 gap-x-4 gap-y-12 my-5'>
          {data?.newscasts.map((item: any) => (
            <div key={item.id}>
              <NewsCard background={item.background} id={item.id} title={item.title} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
