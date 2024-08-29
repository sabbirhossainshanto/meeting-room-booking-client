import assets from "@/assets";
import { useState } from "react";

const WhyChooseUs = () => {
  const [activeTab, setActiveTab] = useState(0);

  const toggleTab = (tab: number) => {
    if (activeTab === tab) {
      setActiveTab(0);
    } else {
      setActiveTab(tab);
    }
  };
  return (
 
      <div className={`container py-14`}>
        <h2 className="text-[28px] mb-6">Wy Choose Us ??</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 justify-items-center place-content-center gap-5">
          <img className="size-52 sm:size-96" src={assets.question} alt="" />
          <div className="flex flex-col justify-center items-center w-full">
            <div className="space-y-4 w-full">
              <div className="border-b border-gray-200 pb-4">
                <button
                  className="flex items-center justify-between w-full"
                  onClick={() => toggleTab(2)}
                >
                  <span className="text-lg font-medium text-gray-900">
                  Modern Facilities
                  </span>
                  {activeTab === 2 ? (
                    <svg
                      className="h-6 w-6 text-gray-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="h-6 w-6 text-gray-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  )}
                </button>
                {activeTab === 2 && (
                  <div className="mt-4">
                       <p className="text-base text-gray-500">
                      Our meeting rooms are equipped with state-of-the-art
                      technology, comfortable seating, and modern décor,
                      ensuring a productive and pleasant environment for all
                      your meetings and events.
                    </p>
                  </div>
                )}
              </div>
              <div className="border-b border-gray-200 pb-4">
                <button
                  className="flex items-center justify-between w-full"
                  onClick={() => toggleTab(3)}
                >
                  <span className="text-lg font-medium text-gray-900">
                  Prime Locations
                  </span>
                  {activeTab === 3 ? (
                    <svg
                      className="h-6 w-6 text-gray-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="h-6 w-6 text-gray-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  )}
                </button>
                {activeTab === 3 && (
                  <div className="mt-4">
                    <p className="text-base text-gray-500">
                    Situated in accessible and prestigious locations, our
                      meeting rooms offer convenience and a professional
                      atmosphere, making it easier for your attendees to
                      participate and for your event to make a lasting
                      impression.
                    </p>
                  </div>
                )}
              </div>

              <div className="border-b border-gray-200 pb-4">
                <button
                  className="flex items-center justify-between w-full"
                  onClick={() => toggleTab(4)}
                >
                  <span className="text-lg font-medium text-gray-900">
                  Flexible Booking Options
                  </span>
                  {activeTab === 4 ? (
                    <svg
                      className="h-6 w-6 text-gray-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="h-6 w-6 text-gray-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  )}
                </button>
                {activeTab === 4 && (
                  <div className="mt-4">
                    <p className="text-base text-gray-500">
                    We offer flexible booking options to accommodate your
                      needs, whether you need a room for a quick meeting or an
                      all-day event. Our user-friendly booking system makes it
                      easy to reserve a space that fits your schedule.
                    </p>
                  </div>
                )}
              </div>

              <div className="border-b border-gray-200 pb-4">
                <button
                  className="flex items-center justify-between w-full"
                  onClick={() => toggleTab(5)}
                >
                  <span className="text-lg font-medium text-gray-900">
                  Comprehensive Support
                  </span>
                  {activeTab === 5 ? (
                    <svg
                      className="h-6 w-6 text-gray-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="h-6 w-6 text-gray-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  )}
                </button>
                {activeTab === 5 && (
                  <div className="mt-4">
                    <p className="text-base text-gray-500">
                    Our dedicated support team is always on hand to assist you
                      with any technical or logistical needs during your
                      booking. From setup to troubleshooting, we ensure your
                      meeting runs smoothly.
                    </p>
                  </div>
                )}
              </div>

              <div className="border-b border-gray-200 pb-4">
                <button
                  className="flex items-center justify-between w-full"
                  onClick={() => toggleTab(6)}
                >
                  <span className="text-lg font-medium text-gray-900">
                  Affordable Pricing
                  </span>
                  {activeTab === 6 ? (
                    <svg
                      className="h-6 w-6 text-gray-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="h-6 w-6 text-gray-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  )}
                </button>
                {activeTab === 6 && (
                  <div className="mt-4">
                    <p className="text-base text-gray-500">
                    We offer competitive pricing without compromising on
                      quality. Our transparent pricing structure ensures you
                      receive excellent value for your money, making our meeting
                      rooms an affordable option for any business.
                    </p>
                  </div>
                )}
              </div>
              <div className="border-b border-gray-200 pb-4">
                <button
                  className="flex items-center justify-between w-full"
                  onClick={() => toggleTab(7)}
                >
                  <span className="text-lg font-medium text-gray-900">
                  Customizable Layouts
                  </span>
                  {activeTab === 7 ? (
                    <svg
                      className="h-6 w-6 text-gray-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="h-6 w-6 text-gray-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  )}
                </button>
                {activeTab === 7 && (
                  <div className="mt-4">
                    <p className="text-base text-gray-500">
                    Our meeting rooms can be tailored to suit your specific
                      needs. Whether you require a traditional boardroom setup
                      or a more creative layout, we can customize the space to
                      enhance collaboration and productivity.
                    </p>
                  </div>
                )}
              </div>
              <div className="border-b border-gray-200 pb-4">
                <button
                  className="flex items-center justify-between w-full"
                  onClick={() => toggleTab(8)}
                >
                  <span className="text-lg font-medium text-gray-900">
                  High-Speed Internet
                  </span>
                  {activeTab === 8 ? (
                    <svg
                      className="h-6 w-6 text-gray-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="h-6 w-6 text-gray-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  )}
                </button>
                {activeTab === 8 && (
                  <div className="mt-4">
                    <p className="text-base text-gray-500">
                    Stay connected with our high-speed internet, ensuring your
                      meetings run smoothly and efficiently. Whether you're
                      hosting a video conference or collaborating online, our
                      reliable internet service is designed to keep your team
                      connected.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
 
  );
};

export default WhyChooseUs;
