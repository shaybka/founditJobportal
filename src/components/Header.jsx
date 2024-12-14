import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg';
import Button from './ui/Button';

const Header = () => {
  return (
    <div className="container bg-white h-[80px] max-w-[1400px] mx-auto flex items-center justify-between px-4">
      <div>
        <img src={logo} alt="logo" width={138} height={30} />
      </div>
      <nav className="hidden md:flex">
        <ul className="flex space-x-4 font-sans">
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/jobs">Jobs</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
        </ul>
      </nav>
      <div className="hidden md:flex gap-4 justify-center items-center">
        <Link to="/login">Login</Link>
        <Button color="border-primary border-2" title="Resume Builder" titlecolor="text-primary" />
        <Button color="bg-primary" title="Apply for Jobs" />
      </div>
      {/* Mobile Menu */}
      <div className="block md:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
        </svg>
      </div>
    </div>
  );
};

export default Header;