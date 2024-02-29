import React from "react";
import {
  MdLocationOn,
  MdPhone,
  MdAccessTime,
  MdFacebook,
} from "react-icons/md";
import {
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaPinterest,
} from "react-icons/fa";
const Footer = () => {
  return (
    <div className="footer">
      <div className="container py-5 text-white">
        <div className="row">
          <div className="col-lg-3 col-md-6 col-12 mt-3">
            <img src="/img/logo-footer.png" alt="abc" className="img-fluid w-75"/>
            <p className="text-white my-4">
              Nullam ac justo efficitur, tristique ligula. Lorem Ipsn gravida
              nibh vel velit auctor aliquet. Aenean sollicitudin.
            </p>
            <div className="">
              <p>
                <MdPhone size={20} className="me-2" />
                +977-9876541232
              </p>
              <p>
                <MdLocationOn size={20} className="me-2" />
                Baneshwor, Kathmandu
              </p>
              <p>
                <MdAccessTime size={20} className="me-2" />
                Mon - Sat 8.00 - 18.00 Sunday CLOSED
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-12 mt-3">
            <h4>Latest News</h4>
            <div className="details mt-4">
              <span className="mt-4">
                Water & Rocks: Discovering the Beauty of New Zealand
              </span>
              <p className="text-secondary">05.4.2016</p>
            </div>
            <hr />
            <div className="details">
              <span className="mt-4">
                Updates: People Who Work Overseas and Fly For Free
              </span>
              <p className="text-secondary">05.4.2016</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-12 mt-3">
            <h4>Navbar Links</h4>
            <ul className="mt-4">
              <li>Home</li>
              <li>About</li>
              <li>Our Tour</li>
              <li>Gallery</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6 col-12 mt-3">
            <h4>Follow Us</h4>
            <div className="icon mt-4">
              <span className="me-2">
                <MdFacebook size={25} />
              </span>
              <span className="me-2">
                <FaInstagram size={25} />
              </span>
              <span className="me-2">
                <FaTwitter size={25} />
              </span>
              <span className="me-2">
                <FaLinkedin size={25} />
              </span>
              <span className="me-2">
                <FaPinterest size={25} />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
