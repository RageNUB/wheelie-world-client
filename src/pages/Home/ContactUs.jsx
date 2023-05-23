const ContactUs = () => {
  return (
    <div className="mb-8 mt-12 bg-base-200 py-7">
      <h1 className="text-4xl font-bold text-center uppercase">Contact Us</h1>
      <div className="grid grid-cols-2 gap-5 mt-4 mb-3 max-w-4xl mx-auto">
        <div>
          <label>
            <p className="text-md font-semibold">Your Name</p>
          </label>
          <input
            type="text"
            name="photo"
            placeholder="Your Name"
            className="input input-bordered input-primary w-full"
          />
        </div>
        <div>
          <label>
            <p className="text-md font-semibold">Your Email</p>
          </label>
          <input
            type="text"
            name="photo"
            placeholder="Your Email"
            className="input input-bordered input-primary w-full"
          />
        </div>
        <div className="col-span-2">
          <label>
            <p className="text-md font-semibold">Mobile Number</p>
          </label>
          <input
            type="text"
            name="photo"
            placeholder="Mobile Number"
            className="input input-bordered input-primary w-full"
          />
        </div>
        <div className="col-span-2">
          <label>
            <p className="text-md font-semibold">Your Message</p>
          </label>
          <textarea
            className="textarea textarea-primary w-full"
            placeholder="Your Message"
          ></textarea>
        </div>
        <div className="mx-auto col-span-2">
          <input
            className="btn text-white btn-primary"
            type="submit"
            value="Send Message"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
