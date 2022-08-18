import bg1 from 'assets/images/largebg.jpg';

const NewsDetail = () => {
  return (
    <div>
      <div className='flex justify-center items-center flex-col mt-10 gap-5'>
        <div className='text-3xl font-semibold'>Lorem ipsum dolor sit amet.</div>

        <img src={bg1} alt='bg1' className='bg-cover w-1/2' />
      </div>
      <div className='text-justify text-lg flex justify-center items-center flex-col gap-5 pt-4'>
        <div className='w-2/5'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime laudantium nobis
          recusandae eaque sed repellat odit vel odio nihil blanditiis iste ipsum, at aperiam
          dolorem, tempora, numquam perspiciatis corporis. Harum vitae similique aspernatur
          doloremque exercitationem quam repellat recusandae, voluptate sit sunt nam, officia nobis
          doloribus, eveniet repellendus minus. Minima incidunt maxime veniam provident earum, neque
          magni reiciendis illum harum ullam aut fugit explicabo cumque sapiente dolorem odit
          aspernatur possimus enim excepturi fuga dolor debitis. Aspernatur quibusdam cupiditate
          cumque dolores hic quam nihil quisquam quaerat, totam deleniti voluptas maiores illum.
          Adipisci, iusto! Minima, nemo praesentium labore nostrum sapiente consequatur ut? Nihil.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime laudantium nobis
          recusandae eaque sed repellat odit vel odio nihil blanditiis iste ipsum, at aperiam
          dolorem, tempora, numquam perspiciatis corporis. Harum vitae similique aspernatur
          doloremque exercitationem quam repellat recusandae, voluptate sit sunt nam, officia nobis
          doloribus, eveniet repellendus minus. Minima incidunt maxime veniam provident earum, neque
          magni reiciendis illum harum ullam aut fugit explicabo cumque sapiente dolorem odit
          aspernatur possimus enim excepturi fuga dolor debitis. Aspernatur quibusdam cupiditate
          cumque dolores hic quam nihil quisquam quaerat, totam deleniti voluptas maiores illum.
          Adipisci, iusto! Minima, nemo praesentium labore nostrum sapiente consequatur ut? Nihil.
        </div>
      </div>
    </div>
  );
};

export default NewsDetail;
