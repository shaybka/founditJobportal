import logo from '../assets/logo.svg';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 p-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand Section */}
        <div>
        
          <img
            className="h-10 w-auto object-cover"
            src={logo}
            alt="Logo"
          />
          <p className="text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam mollis,
            justo nec porttitor auctor, erat sapien faucibus lectus, vel tempor
            dolor augue et lectus.
          </p>
          {/* Social Media */}
          <div className="flex space-x-4 mt-4">
            <a href="#" className="hover:text-white">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="hover:text-white">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="hover:text-white">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="#" className="hover:text-white">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>

        {/* Home Links */}
        <div>
          <h2 className="font-bold text-lg mb-4">Home</h2>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-white">Product</a></li>
            <li><a href="#" className="hover:text-white">Course</a></li>
            <li><a href="#" className="hover:text-white">About Us</a></li>
            <li><a href="#" className="hover:text-white">Log in</a></li>
          </ul>
        </div>

        {/* Course Links */}
        <div>
          <h2 className="font-bold text-lg mb-4">Course</h2>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-white">HTML & CSS</a></li>
            <li><a href="#" className="hover:text-white">Javascript</a></li>
            <li><a href="#" className="hover:text-white">Fotographer</a></li>
            <li><a href="#" className="hover:text-white">Desain Grafis</a></li>
          </ul>
        </div>

        {/* Article Links */}
        <div>
          <h2 className="font-bold text-lg mb-4">Article</h2>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-white">New</a></li>
            <li><a href="#" className="hover:text-white">Old</a></li>
            <li><a href="#" className="hover:text-white">Trend</a></li>
            <li><a href="#" className="hover:text-white">Popular</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h2 className="font-bold text-lg mb-4">Contact Us</h2>
          <p className="text-sm hover:text-white">CCdoc123@gmail.com</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
