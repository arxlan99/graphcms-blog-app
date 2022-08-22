import { gql, useQuery } from '@apollo/client';
import { Link, useParams } from 'react-router-dom';

const GET_NEWS_DETAIL = gql`
  query getNew($id: ID!) {
    newscast(where: { id: $id }) {
      id
      background
      title
      post
    }
  }
`;

const NewsDetail = () => {
  const { id } = useParams();
  const { loading, error, data } = useQuery(GET_NEWS_DETAIL, {
    variables: { id },
  });

  if (loading) return <div>Loading...</div>;
  if (error) return <div>`Error! ${error.message}`</div>;

  return (
    <div className='mb-10'>
      <div className='flex justify-end mr-32 mt-5 text-lg italic underline'>
        <Link to={`/update-news/${id}`}>Update News</Link>
      </div>
      <div className='flex justify-center items-center flex-col mt-10 gap-5'>
        <div className='text-3xl font-semibold'>{data?.newscast.title}</div>

        <img src={data?.newscast.background} alt='bg1' className='bg-cover w-1/2' />
      </div>
      <div className='text-justify text-lg flex justify-center items-center flex-col gap-5 pt-4'>
        <div className='w-2/5'>{data?.newscast.post}</div>
      </div>
    </div>
  );
};

export default NewsDetail;
