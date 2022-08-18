import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  const navLinkStyle = ({ isActive }: any) => {
    return {
      fontWeight: isActive ? '800' : 'normal',
    };
  };

  return (
    <div className='flex justify-between px-16 text-3xl py-10 border-b '>
      <Link to='/'>
        <div className='tracking-widest'>NORDIC ROSE</div>
      </Link>
      <div className='uppercase text-xl flex gap-3'>
        <button type='button'>
          <NavLink to='/news' style={navLinkStyle}>
            News
          </NavLink>
        </button>
        <button type='button'>
          <NavLink to='/add-new' style={navLinkStyle}>
            Add New
          </NavLink>
        </button>
        <button type='button'>
          <NavLink to='/about' style={navLinkStyle}>
            About
          </NavLink>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
