import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-10 px-4">
      <div className="flex flex-col md:flex-row md:justify-between w-full md:w-3/4  mx-auto">
        {/* Locate Section */}
        <div className="flex flex-col items-center mb-8 md:mb-0 md:w-1/2">
          <div className=" mb-4 w-full">
            <div className="p-2 text-xl md:text-2xl px-2">
              Locate
            </div>
            <div className="flex flex-col justify-center py-6 px-4">
              <iframe
                className="w-full"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.40934140514!2d80.20517417404153!3d12.945638087367369!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525dcaf1158b69%3A0x2faed53a93b675d8!2sJerusalem%20College%20of%20Engineering!5e0!3m2!1sen!2sin!4v1724333299768!5m2!1sen!2sin"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
                <div className="pt-2 px-4 text-sm">
                  <p>Jerusalem College of Engineering (JCE), </p>
                  <p>Pallikarnai <br />Chennai 600028</p>
                </div>
          </div>

          
        </div>
        <div className="text-center">
            <h3 className="text-sm md:text-xl mb-2">For Queries:</h3>
            <a
              href="tel:+123456789"
              className="bg-gray-700/60 text-sm hover:bg-gray-800/80 transition-all border border-gray-400/60 px-5 py-1 rounded-2xl inline-block"
            >
              +91 123456789
            </a>

            
          <div className="text-center mt-4 text-sm">
            <h3 className="text-sm md:text-xl mb-2">Reach Us On:</h3>
            <a
              href="mailto:email2@gmail.com"
              className="bg-gray-700/60 hover:bg-gray-800/80 transition-all border border-gray-400/60 px-5 py-1 rounded-2xl inline-block"
            >
              email2@gmail.com
            </a>
          </div>
          </div>


        {/* Media Section */}
        <div className="text-center md:w-1/2 flex flex-col items-center">
          <p className="text-lg mt-4 md:text-2xl mb-4">Media</p>
          <div className="flex justify-center gap-4 text-[#ABB2BF]">
            <a
              href="https://www.instagram.com/#/"
              target="_blank"
              className="hover:text-pink-500 transition-all text-2xl"
            >
              {/* Replace the i tag with your provided icons */}
              <img src="/path-to-instagram-icon.svg" alt="Instagram" />
            </a>
            <a
              href="https://www.facebook.com/#"
              target="_blank"
              className="hover:text-blue-500 transition-all text-2xl"
            >
              <img src="/path-to-facebook-icon.svg" alt="Facebook" />
            </a>
            <a
              href="https://www.linkedin.com/company/#"
              target="_blank"
              className="hover:text-blue-800 transition-all text-2xl"
            >
              <img src="/path-to-linkedin-icon.svg" alt="LinkedIn" />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-8 text-sm text-[#ABB2BF] text-center">
        © 2024 - NCSE | All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
