import { useState } from "react";
import { Mail, Phone, MapPin, Home, Flag } from "lucide-react";

const Contact = ({ data }) => {
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div
      id="Contact"
      className="min-h-screen flex justify-center items-center p-6 "
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl w-full p-8 ">
        <div className="p-6 ">
          <h2 className="text-3xl font-bold text-teal-600 text-center mb-6">
            Contact Us
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-teal-700"
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full p-4 mt-2 border border-teal-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
              </div>
              <div>
                <label
                  htmlFor="surname"
                  className="block text-sm font-medium text-teal-700"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  id="surname"
                  name="surname"
                  value={formData.surname}
                  onChange={handleChange}
                  required
                  className="w-full p-4 mt-2 border border-teal-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-teal-700"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-4 mt-2 border border-teal-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-teal-700"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full p-4 mt-2 border border-teal-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                rows="4"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full p-4 bg-teal-500 text-white font-semibold rounded-lg hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500"
            >
              Send Message
            </button>
          </form>
        </div>

        <div className=" p-6 ">
          <h3 className="text-2xl font-semibold text-teal-600 mb-6">
            Our Contact Information
          </h3>
          <ul className="space-y-6">
            <li className="flex items-center gap-4 text-teal-700">
              {data.contact.email ? (
                <Mail className="w-6 h-6 text-teal-500" />
              ) : (
                ""
              )}
              <span>{data.contact.email}</span>
            </li>
            <li className="flex items-center gap-4 text-teal-700">
              {data.contact.phone ? (
                <Phone className="w-6 h-6 text-teal-500" />
              ) : (
                ""
              )}
              <span>{data.contact.phone}</span>
            </li>
            <li className="flex items-center gap-4 text-teal-700">
              {data.contact.address ? (
                <MapPin className="w-6 h-6 text-teal-500" />
              ) : (
                ""
              )}
              <span>{data.contact.address}</span>
            </li>
            <li className="flex items-center gap-4 text-teal-700">
              {data.contact.city ? (
                <Home className="w-6 h-6 text-teal-500" />
              ) : (
                ""
              )}{" "}
              <span>{data.contact.city}</span>
            </li>
            <li className="flex items-center gap-4 text-teal-700">
              {data.contact.country ? (
                <Flag className="w-6 h-6 text-teal-500" />
              ) : (
                ""
              )}
              <span>{data.contact.country}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Contact;
