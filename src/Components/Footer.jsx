import { FaceBook_Link, Insta_link, Twitter_link } from "../Constants/ApiLinks";

const Footer = () => {
  return (
    <>
      <div className="Footer_section">
        <h1>Infogenius</h1>
        <ul>
          <li>Home</li>
          <li>Upload Image</li>
          <li>Select Categories</li>
          <li>View Results</li>
        </ul>
        <div className="horizontal_line"></div>
        <div className="links_copyrights">
          <div className="CopyRight">
            <span>© 2023 Infogenius, All Rights Reserved.</span>
          </div>
          <div className="links">
            <img src={FaceBook_Link} alt="facebook link" />
            <img src={Insta_link} alt="instagram link" />
            <img src={Twitter_link} alt="twitter link" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
