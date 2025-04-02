import React from "react";

const ContactModal = ({ closeModal, isOpen }) => {
  

  return (
    <div className="fixed z-50">
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-[#00000010] flex items-center justify-center p-4">
          <div
            className="fixed inset-0 transition-opacity"
            onClick={closeModal}
          />

          <div className="relative z-10 w-full max-w-md rounded-lg bg-white p-6 shadow-xl">
            <button
              onClick={closeModal}
              className="absolute right-4 top-4 text-gray-400 hover:text-gray-500"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
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
            </button>

            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            </div>

            <h2 className="mb-6 text-center text-xl font-bold">
              Please fill out this form.
            </h2>

            <form className="space-y-4">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-green-500 focus:outline-none"
                />
                <input
                  type="tel"
                  placeholder="Your phone number"
                  className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-green-500 focus:outline-none"
                />
                <input
                  type="text"
                  placeholder="Your surname"
                  className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-green-500 focus:outline-none"
                />
                <input
                  type="text"
                  placeholder="Your Telegram username"
                  className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-green-500 focus:outline-none"
                />
              </div>

              <button
                type="submit"
                className="mx-auto block w-32 rounded-md bg-green-400 px-4 py-2 text-center text-white hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactModal;
