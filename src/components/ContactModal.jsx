import axios from "axios";
import React, { useState } from "react";

const ContactModal = ({ closeModal, isOpen }) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    surname: "",
    username: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const sendMessageHandle = async (e) => {
    e.preventDefault();

    const token = "7356453117:AAGCcU1rfib6FYCKoJlt8-77Dgq5RK8UgkE";
    const chat_id = "5625872174";
    const URL = `https://api.telegram.org/bot${token}/sendMessage`;
    const text = `New order for you:
    \n Name: ${formData.name}
    \n Phone Number: ${formData.phone}
    \n Surname: ${formData.surname}
    \n Username: ${formData.username}`;

    try {
      await axios.post(URL, {
        chat_id,
        text: text,
      });

      alert("Done my brother");
      setFormData({
        name: "",
        phone: "",
        surname: "",
        username: "",
      });
      closeModal();
    } catch (error) {
      console.log(error);
    }
  };

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

            <form onSubmit={sendMessageHandle} className="space-y-4">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-green-500 focus:outline-none"
                  required
                />
                <input
                  type="number"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Your phone number"
                  className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-green-500 focus:outline-none"
                  required
                />
                <input
                  type="text"
                  name="surname"
                  value={formData.surname}
                  onChange={handleChange}
                  placeholder="Your surname"
                  className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-green-500 focus:outline-none"
                  required
                />
                <input
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  placeholder="Your Telegram username"
                  className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-green-500 focus:outline-none"
                  required
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
