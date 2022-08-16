import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='flex justify-between px-16 text-3xl py-10 border-b '>
      <div className='tracking-widest'>NORDIC ROSE</div>
      <div className='uppercase text-xl flex gap-3'>
        <button type='button'>
          <Link to='/blog'>Blog</Link>
        </button>
        <button type='button'>About</button>
        <button type='button'>Links</button>
        <button type='button'>Projects</button>
      </div>
    </div>
  );
};

export default Navbar;
