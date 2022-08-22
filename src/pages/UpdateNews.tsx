import React, { useState } from 'react';
import { gql, useMutation, useQuery } from '@apollo/client';
import toast, { Toaster } from 'react-hot-toast';
import { Link, useParams } from 'react-router-dom';

const UPDATE_NEWS = gql`
  mutation updateNews($id: ID, $title: String!, $post: String!, $background: String!) {
    updateNewscast(
      where: { id: $id }
      data: { title: $title, post: $post, background: $background }
    ) {
      id
    }
  }
`;

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

const UpdateNews = () => {
  const { id } = useParams();
  const [updateNews, { loading, error }] = useMutation(UPDATE_NEWS);

  const [title, setTitle] = useState<string>('');
  const [post, setPost] = useState('');
  const [background, setBackground] = useState('');

  const { loading: loadingNewsDetail, error: errorNewsDetail } = useQuery(GET_NEWS_DETAIL, {
    variables: { id },
    onCompleted: (comingData) => {
      setTitle(comingData?.newscast.title);
      setPost(comingData?.newscast.post);
      setBackground(comingData?.newscast.background);
    },
  });

  const handleSend = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    updateNews({
      variables: {
        id,
        title,
        post,
        background,
      },
    }).then(() => {
      toast.success('News updated successfully!');
    });
  };

  if (loadingNewsDetail) return <div>Loading...</div>;
  if (errorNewsDetail) {
    return <div>Error! {errorNewsDetail.message}</div>;
  }
  if (error) {
    return <div> {error.message}</div>;
  }

  return (
    <div className='flex justify-center items-center py-8 '>
      <div>
        <Toaster position='bottom-right' reverseOrder={false} />
      </div>

      <form className='w-full lg:w-1/2 p-5 lg:p-0'>
        <div>
          <div className='font-semibold text-2xl mb-5'>Update News</div>
          <div className='mb-4'>
            <button type='button'>
              <Link to={`/news/${id}`} className='underline'>
                {'<'} Back
              </Link>
            </button>
          </div>
          <div className='flex flex-col gap-8'>
            <div>
              <label htmlFor='first_name' className='block mb-2 text-sm font-medium text-gray-900 '>
                Title
              </label>
              <input
                type='text'
                id='first_name'
                className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 '
                placeholder='News title'
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>

            <div>
              <label htmlFor='background' className='block mb-2 text-sm font-medium text-gray-900 '>
                Background url:
              </label>
              <input
                type='text'
                id='background'
                className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 '
                placeholder='https://media.wired.com/photos/science.jpg'
                required
                value={background}
                onChange={(e) => setBackground(e.target.value)}
              />
            </div>

            <div>
              <div className='mb-4 w-full bg-gray-50 rounded-lg border border-gray-200 '>
                <div className='flex justify-between items-center py-2 px-3 border-b '>
                  <div className='flex flex-wrap items-center divide-gray-200 sm:divide-x '>
                    <div className='flex items-center space-x-1 sm:pr-4'>
                      <button
                        type='button'
                        className='p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 00 white '
                      >
                        <svg
                          aria-hidden='true'
                          className='w-5 h-5'
                          fill='currentColor'
                          viewBox='0 0 20 20'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            fillRule='evenodd'
                            d='M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z'
                            clipRule='evenodd'
                          />
                        </svg>
                        <span className='sr-only'>Attach file</span>
                      </button>
                      <button
                        type='button'
                        className='p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 00 white '
                      >
                        <svg
                          aria-hidden='true'
                          className='w-5 h-5'
                          fill='currentColor'
                          viewBox='0 0 20 20'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            fillRule='evenodd'
                            d='M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z'
                            clipRule='evenodd'
                          />
                        </svg>
                        <span className='sr-only'>Embed map</span>
                      </button>
                      <button
                        type='button'
                        className='p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 00 white '
                      >
                        <svg
                          aria-hidden='true'
                          className='w-5 h-5'
                          fill='currentColor'
                          viewBox='0 0 20 20'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            fillRule='evenodd'
                            d='M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z'
                            clipRule='evenodd'
                          />
                        </svg>
                        <span className='sr-only'>Upload image</span>
                      </button>
                      <button
                        type='button'
                        className='p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 00 white '
                      >
                        <svg
                          aria-hidden='true'
                          className='w-5 h-5'
                          fill='currentColor'
                          viewBox='0 0 20 20'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            fillRule='evenodd'
                            d='M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z'
                            clipRule='evenodd'
                          />
                        </svg>
                        <span className='sr-only'>Format code</span>
                      </button>
                      <button
                        type='button'
                        className='p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 00 white '
                      >
                        <svg
                          aria-hidden='true'
                          className='w-5 h-5'
                          fill='currentColor'
                          viewBox='0 0 20 20'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            fillRule='evenodd'
                            d='M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zm-.464 5.535a1 1 0 10-1.415-1.414 3 3 0 01-4.242 0 1 1 0 00-1.415 1.414 5 5 0 007.072 0z'
                            clipRule='evenodd'
                          />
                        </svg>
                        <span className='sr-only'>Add emoji</span>
                      </button>
                    </div>
                    <div className='flex flex-wrap items-center space-x-1 sm:pl-4'>
                      <button
                        type='button'
                        className='p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 00 white '
                      >
                        <svg
                          aria-hidden='true'
                          className='w-5 h-5'
                          fill='currentColor'
                          viewBox='0 0 20 20'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            fillRule='evenodd'
                            d='M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z'
                            clipRule='evenodd'
                          />
                        </svg>
                        <span className='sr-only'>Add list</span>
                      </button>
                      <button
                        type='button'
                        className='p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 00 white '
                      >
                        <svg
                          aria-hidden='true'
                          className='w-5 h-5'
                          fill='currentColor'
                          viewBox='0 0 20 20'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            fillRule='evenodd'
                            d='M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z'
                            clipRule='evenodd'
                          />
                        </svg>
                        <span className='sr-only'>Settings</span>
                      </button>
                      <button
                        type='button'
                        className='p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 00 white '
                      >
                        <svg
                          aria-hidden='true'
                          className='w-5 h-5'
                          fill='currentColor'
                          viewBox='0 0 20 20'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            fillRule='evenodd'
                            d='M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z'
                            clipRule='evenodd'
                          />
                        </svg>
                        <span className='sr-only'>Timeline</span>
                      </button>
                      <button
                        type='button'
                        className='p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 00 white '
                      >
                        <svg
                          aria-hidden='true'
                          className='w-5 h-5'
                          fill='currentColor'
                          viewBox='0 0 20 20'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            fillRule='evenodd'
                            d='M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z'
                            clipRule='evenodd'
                          />
                        </svg>
                        <span className='sr-only'>Download</span>
                      </button>
                    </div>
                  </div>
                  <button
                    type='button'
                    data-tooltip-target='tooltip-fullscreen'
                    className='p-2 text-gray-500 rounded cursor-pointer sm:ml-auto hover:text-gray-900 hover:bg-gray-100 00 white '
                  >
                    <svg
                      aria-hidden='true'
                      className='w-5 h-5'
                      fill='currentColor'
                      viewBox='0 0 20 20'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        fillRule='evenodd'
                        d='M3 4a1 1 0 011-1h4a1 1 0 010 2H6.414l2.293 2.293a1 1 0 11-1.414 1.414L5 6.414V8a1 1 0 01-2 0V4zm9 1a1 1 0 010-2h4a1 1 0 011 1v4a1 1 0 01-2 0V6.414l-2.293 2.293a1 1 0 11-1.414-1.414L13.586 5H12zm-9 7a1 1 0 012 0v1.586l2.293-2.293a1 1 0 111.414 1.414L6.414 15H8a1 1 0 010 2H4a1 1 0 01-1-1v-4zm13-1a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 010-2h1.586l-2.293-2.293a1 1 0 111.414-1.414L15 13.586V12a1 1 0 011-1z'
                        clipRule='evenodd'
                      />
                    </svg>
                    <span className='sr-only'>Full screen</span>
                  </button>
                  <div
                    id='tooltip-fullscreen'
                    role='tooltip'
                    className='inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 transition-opacity duration-300 tooltip '
                    data-popper-reference-hidden=''
                    data-popper-placement='top'
                    style={{
                      position: 'absolute',
                      inset: 'auto auto 0px 0px',
                      margin: '0px',
                      transform: 'translate3d(679.2px, 20.8px, 0px)',
                    }}
                  >
                    Show full screen
                    <div
                      className='tooltip-arrow'
                      data-popper-arrow=''
                      style={{
                        position: 'absolute',
                        left: '0px',
                        transform: 'translate3d(79.2px, 0px, 0px)',
                      }}
                    />
                  </div>
                </div>
                <div className='py-2 px-4 bg-white rounded-b-lg '>
                  <label htmlFor='editor' className='sr-only'>
                    Publish post
                  </label>
                  <textarea
                    id='editor'
                    rows={8}
                    className='outline-none block px-0 w-full text-sm text-gray-800 bg-white border-0  focus:ring-0  '
                    placeholder='Write an post...'
                    value={post}
                    required
                    onChange={(e) => setPost(e.target.value)}
                  />
                </div>
              </div>
              {loading ? (
                <div>Sending...</div>
              ) : (
                <button
                  onClick={(e) => handleSend(e)}
                  type='submit'
                  className='inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200  hover:bg-blue-800'
                >
                  Publish the new post
                </button>
              )}
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default UpdateNews;
