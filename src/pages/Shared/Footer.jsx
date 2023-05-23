const Footer = () => {
  return (
    <div>
      <div>
        <footer className="footer p-10 bg-base-200 gird grid-cols-1 lg:grid-cols-2 justify-center  text-base-content">
          <div>
            <img
              className="w-32"
              src="https://i.ibb.co/BLGz6fz/new-wheelieworld-logo.webp"
              alt=""
            />
            <p>
              <span className="text-xl font-semibold">Wheelie World Ltd.</span>
              <br />A Toy company since 2015
            </p>
          </div>
          <div>
            <span className="footer-title">Address</span>
            <a className="link link-hover">Mirpur-10, Dhaka, Bangladesh</a>
            <a className="link link-hover">
              Email: <span className="font-medium">wheelieworld@gmail.com</span>
            </a>
            <a className="link link-hover">
              Mobile: <span>+880-1700011100</span>
            </a>
          </div>
        </footer>
      </div>

      <div className="footer footer-center p-4 bg-base-200 border-t-2 border-gray-50 text-base-content">
        <div>
          <p className="text-base font-semibold">
            Copyright © 2023 - All right reserved by Wheelie World Ltd
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
