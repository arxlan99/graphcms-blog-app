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

const AllNews = () => {
  const { loading, error, data } = useQuery(GET_NEWS);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>`Error! ${error.message}`</div>;

  return (
    <div className='flex justify-center items-center my-4'>
      <div className='flex flex-col justify-center items-center '>
        <div className='text-5xl font-bold mb-4'>All articles</div>
        <div className='grid md:grid-cols-2 gap-x-4 gap-y-12 mt-5'>
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

export default AllNews;
