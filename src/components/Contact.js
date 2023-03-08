import React from "react";
import { icons, offset } from "../data";

export default function Contact() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [alert, setAlert] = React.useState("");
  const [submitted, setSubmitted] = React.useState(false);

  function encode(data) {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  }

  function handleSubmit(e) {
    e.preventDefault();

    setSubmitted(false);

    const fetchConfig = {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", name, email, message }),
    }

    fetch("/", fetchConfig)
      .then((response) => {
        if(!response.ok) {
          console.log("Form submission error")
          setAlert('There was an issue submitting your form. Please try again.')
        } else {
          setName('');
          setEmail('');
          setMessage('');
          setAlert('Your message was sent!');
        }
      })
      .then(() => {
        setSubmitted(true);
      })
      .catch((error) => console.error('Error caught', error));
  }

  let display = "hidden";
  if (submitted === true) {
    display = "";
  };

  return (
    <section id="contact" className="relative">
      <div className="container md:px-20 md:py-20 px-8 py-8 mx-auto bg-gray-100 rounded-b-3xl">
        <div className="flex-grow border-solid border-4 border-white md:mt-28 md:mb-24 my-20">
        </div>
          <img
            src="./cloud.png"
            alt="cloud"
            className="float-right right-0 bottom-0 md:w-80 w-40 z-10 opacity-40 animate-float-right-left"
          />
          <h1 data-aos="fade-in"
          data-aos-offset={offset}
          className="text-center md:text-7xl text-5xl font-bold text-gray-700 md:pt-56 md:pb-16 pt-28 pb-8">
            let's connect
          </h1>
        <div data-aos="fade-in" data-aos-offset={offset} className="grid mx-auto grid-cols-4 lg:w-80 w-64 gap-4">
          {icons.map((icon) => (
            <div key={icon.link}>
                <a
                  href={icon.link}
                  key={icon.image}
                >
                <img
                  alt={icon.alt}
                  className="rounded opacity-75 transition hover:-translate-y-4 ease-in-out duration-200 transform-gpu hover:shadow-none"
                  src={icon.image}
                  href={icon.link}
                />
                </a>
            </div>
          ))}
        </div>
        <form
          netlify
          name="contact"
          onSubmit={handleSubmit}
          data-aos="fade-in"
          data-aos-offset={offset}
          className="flex flex-col mx-auto md:w-1/2 md:py-8 mt-8">
          <div className="relative mb-4">
            <label htmlFor="name" className="leading-7 text-sm text-gray-400">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              className="w-full bg-white rounded border border-gray-300 focus:border-blue-300 focus:ring-2 focus:ring-blue-300 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              required
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-400">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              className="w-full bg-white rounded border border-gray-300 focus:border-blue-300 focus:ring-2 focus:ring-blue-300 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="relative mb-4">
            <label
              htmlFor="message"
              className="leading-7 text-sm text-gray-400">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={message}
              className="w-full bg-white rounded border border-gray-300 focus:border-blue-300 focus:ring-2 focus:ring-blue-300 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              required
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="text-white bg-blue-400 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">
            Submit
          </button>
        </form>
        <div className={display}>
          <div className="bg-blue-100 border border-blue-400 text-blue-900 mx-auto md:w-1/2 py-4 rounded relative" role="alert">
            <span className="block text-center">{alert}</span>
        </div>
        </div>
        <footer className="text-center md:mt-32 mt-14">
        <p>&copy; Copyright 2023 Stephanie Hestilow</p>
        <p>All Rights Reserved</p>
      </footer>
      </div>
    </section>
  );
}
