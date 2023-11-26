// Footer.tsx
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark text-white p-3">
      <div className="container cu-footercontainer">
        <div className="row">
          {/*  copyright */}
          <div className="col-md-6 mb-2 mb-md-0">
            <p className="cu-fp">&copy; 2023 Karman Drones™</p>
          </div>
          {/* social media links */}
          <div className="col-md-6 d-flex justify-content-md-end">
            <div className="mb-2">
              <a href="#" target="_blank" className="text-white">
                <i className="fab fa-facebook-square fa-1x px-1"></i>
              </a>
              <a href="#" target="_blank" className="text-white">
                <i className="fab fa-instagram-square fa-1x px-1"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>

  );
};

export default Footer;
