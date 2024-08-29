const ContactForm = () => {
  return (
    <div className="py-14 container">
      <div className="grid grid-cols-12 gap-6 ">
        <div className="col-span-12 lg:col-span-7 bg-white box_shadow px-[30px] py-[24px]">
          <div>
            <h4 className="text-[20px] sm:text-[28px] uppercase mb-1">
              Leave us a message
            </h4>
            <p className="mb-6 text-[15px]">
              Use the form below to get in touch with the team
            </p>
            <div className="grid grid-cols-12 gap-5">
              <div className="col-span-12 sm:col-span-6">
                <div>
                  <label htmlFor="first_name" className="block mb-1.5">
                    First Name <span className="text-[#fd3d57ad]">*</span>
                  </label>
                  <input
                    type="text"
                    className="w-full border border-[#E9E4E4] rounded focus:outline-[#fd3d57ad] focus:ring-0 py-2 px-2"
                  />
                </div>
              </div>
              <div className="col-span-12 sm:col-span-6">
                <div className="single_billing_inp">
                  <label htmlFor="last_name" className="block mb-1.5">
                    Last Name <span className="text-[#fd3d57ad]">*</span>
                  </label>
                  <input
                    type="text"
                    className="w-full border border-[#E9E4E4] rounded focus:outline-[#fd3d57ad] focus:ring-0 py-2 px-2"
                  />
                </div>
              </div>
              <div className="col-span-12">
                <div className="single_billing_inp">
                  <label htmlFor="email_addr" className="block mb-1.5">
                    Email Address <span className="text-[#fd3d57ad]">*</span>
                  </label>
                  <input
                    type="text"
                    className="w-full border border-[#E9E4E4] rounded focus:outline-[#fd3d57ad] focus:ring-0 py-2 px-2"
                  />
                </div>
              </div>
              <div className="col-span-12">
                <div className="single_billing_inp">
                  <label htmlFor="company_name" className="block mb-1.5">
                    Subject
                  </label>
                  <input
                    type="text"
                    className="w-full border border-[#E9E4E4] rounded focus:outline-[#fd3d57ad] focus:ring-0 py-2 px-2"
                  />
                </div>
              </div>
              <div className="col-span-12">
                <div className="single_billing_inp">
                  <label htmlFor="county_region" className="block mb-1.5">
                    Your message <span className="text-[#fd3d57ad]">*</span>
                  </label>
                  <textarea className="w-full border border-[#E9E4E4] rounded focus:outline-[#fd3d57ad] focus:ring-0 py-2 px-2"></textarea>
                </div>
              </div>
              <div className="col-span-12 mt-4">
                <button
                  type="submit"
                  className="default_btn btn-hover xs_btn rounded px-4"
                >
                  send message
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-12 lg:col-span-5 bg-white box_shadow px-[30px] py-[24px]">
          <div className=" padding_default border-0 shadow_sm">
            <h4 className="text-[18px] uppercase mb-[14px]">our office</h4>
            <div className="footer_contact">
              <div className="relative pb-3">
                <p className="absolute top-1 left-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="32"
                      d="M256 48c-79.5 0-144 61.39-144 137c0 87 96 224.87 131.25 272.49a15.77 15.77 0 0 0 25.5 0C304 409.89 400 272.07 400 185c0-75.61-64.5-137-144-137Z"
                    ></path>
                    <circle
                      cx="256"
                      cy="192"
                      r="48"
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="32"
                    ></circle>
                  </svg>
                </p>
                <p className="pl-[32px]">
                  {" "}
                  7895 Dr New Albuquerue, NM 19800, nited States Of America{" "}
                </p>
              </div>
              <div className="relative pb-3">
                <span className="absolute left-0 top-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="m19.23 15.26l-2.54-.29a1.99 1.99 0 0 0-1.64.57l-1.84 1.84a15.045 15.045 0 0 1-6.59-6.59l1.85-1.85c.43-.43.64-1.03.57-1.64l-.29-2.52a2.001 2.001 0 0 0-1.99-1.77H5.03c-1.13 0-2.07.94-2 2.07c.53 8.54 7.36 15.36 15.89 15.89c1.13.07 2.07-.87 2.07-2v-1.73c.01-1.01-.75-1.86-1.76-1.98z"
                    ></path>
                  </svg>
                </span>
                <p className="pl-[32px]">+566 477 256, +566 254 575</p>
              </div>
              <div className="relative pb-3">
                <span className="absolute left-0 top-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M4 20q-.825 0-1.412-.587Q2 18.825 2 18V6q0-.825.588-1.412Q3.175 4 4 4h16q.825 0 1.413.588Q22 5.175 22 6v12q0 .825-.587 1.413Q20.825 20 20 20Zm8-7L4 8v10h16V8Zm0-2l8-5H4ZM4 8V6v12Z"
                    ></path>
                  </svg>
                </span>
                <p className="pl-[32px]"> sabbirshnt@gmail.com</p>
              </div>
            </div>

            <h4 className="text-lg mt-4 mb-3 uppercase">Careers</h4>
            <p className="font-medium mb-0">
              If you are interesting in emplyment <br /> opportunities at
              booking.com. Please email us :
            </p>
            <a className="text-primary">booking.com@mail.com</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
