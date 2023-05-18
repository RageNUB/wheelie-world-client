const Footer = () => {
  return (
    <div>
      <div>
        <footer className="footer p-10 bg-base-200 text-base-content">
          <div>
            <img
              className="w-32"
              src="https://i.ibb.co/BLGz6fz/new-wheelieworld-logo.webp"
              alt=""
            />
            <p>
              <span className="text-xl font-semibold">Wheelie World Ltd.</span>
              <br />
              A Toy company since 2015
            </p>
          </div>
          <div>
            <span className="footer-title">Services</span>
            <a className="link link-hover">Branding</a>
            <a className="link link-hover">Design</a>
            <a className="link link-hover">Marketing</a>
            <a className="link link-hover">Advertisement</a>
          </div>
          <div>
            <span className="footer-title">Company</span>
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Jobs</a>
            <a className="link link-hover">Press kit</a>
          </div>
          <div>
            <span className="footer-title">Legal</span>
            <a className="link link-hover">Terms of use</a>
            <a className="link link-hover">Privacy policy</a>
            <a className="link link-hover">Cookie policy</a>
          </div>
        </footer>
      </div>
      <hr />
      <div className="footer footer-center p-4 bg-base-200 text-base-content">
        <div>
          <p className="text-base font-semibold">Copyright © 2023 - All right reserved by Wheelie World Ltd</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
