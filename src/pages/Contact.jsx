
import React from "react";

const Contact = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-4 py-10">
      <form
        action=""
        className="bg-black/20 gap-5 flex flex-col p-5 sm:p-8 md:p-12 rounded-2xl w-full max-w-xl"
      >
        <div className="flex gap-2 w-full flex-col items-start">
          <label htmlFor="name">Your Name:</label>
          <input
            id="name"
            type="text"
            placeholder="Enter your name"
            className="border border-black py-2 px-4 rounded-xl w-full focus:outline-none focus:ring-2 focus:ring-amber-400"
          />
        </div>

        <div className="flex gap-2 w-full flex-col items-start">
          <label htmlFor="email">Your Email:</label>
          <input
            id="email"
            type="email"
            placeholder="Enter your email"
            className="border border-black py-2 px-4 rounded-xl w-full focus:outline-none focus:ring-2 focus:ring-amber-400"
          />
        </div>

        <div className="flex gap-2 w-full flex-col items-start">
          <label htmlFor="message">Your Message:</label>
          <textarea
            id="message"
            name="message"
            rows={5}
            placeholder="Write your message..."
            className="border border-black py-2 px-4 rounded-xl w-full resize-y focus:outline-none focus:ring-2 focus:ring-amber-400"
          />
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-amber-50 hover:bg-amber-100 transition-colors duration-300 flex justify-center rounded-lg px-8 py-3 font-medium w-full sm:w-auto"
          >
            SEND
          </button>
        </div>
      </form>
    </section>
  );
};

export default Contact;
