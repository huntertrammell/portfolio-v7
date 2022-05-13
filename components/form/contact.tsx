const Contact = () => {
  return (
    <form
      action="https://formspree.io/f/xgedrzak"
      method="POST"
      className="w-full max-w-3xl mx-auto px-0 lg:p-10"
    >
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label
            className="block uppercase tracking-wide text-dark text-xs font-secondary mb-2"
            htmlFor="first-name"
          >
            First Name
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-dark border border-dark rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-primary"
            type="text"
            id="first-name"
            name="first-name"
            required
            placeholder="Jane"
          />
        </div>
        <div className="w-full md:w-1/2 px-3">
          <label
            className="block uppercase tracking-wide text-dark text-xs font-secondary mb-2"
            htmlFor="last-name"
          >
            Last Name
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-dark border border-dark rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-primary"
            type="text"
            id="last-name"
            name="last-name"
            required
            placeholder="Doe"
          />
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3">
          <label
            className="block uppercase tracking-wide text-dark text-xs font-secondary mb-2"
            htmlFor="email"
            placeholder="notspam@hotmail.ru"
          >
            E-mail
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-dark border border-dark rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-primary"
            id="email"
            type="email"
            name="email"
            required
            placeholder="notspam@hotmail.ru"
          />
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3">
          <label
            className="block uppercase tracking-wide text-dark text-xs font-secondary mb-2"
            htmlFor="message"
          >
            Message
          </label>
          <textarea
            name="message"
            required
            className=" no-resize appearance-none block w-full bg-gray-200 text-dark border border-dark rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-primary h-48 resize-none"
            id="message"
          ></textarea>
        </div>
      </div>
      <div className="md:flex md:items-center">
        <div className="md:w-1/3">
          <button
            className="bg-primary px-6 py-2 text-center hover:scale-105 cursor-pointer font-secondary text-light transition-all"
            type="submit"
          >
            Send
          </button>
        </div>
      </div>
    </form>
  );
};

export default Contact;
