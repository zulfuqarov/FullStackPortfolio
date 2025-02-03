import { useContext, useState } from "react";
import { Mail, Phone, MapPin, Home, Flag } from "lucide-react";
import { PortfolioContext } from "../context/ContextPortfolio";

const Contact = ({ data }) => {
  const { sendMail, sendEmailLoading } = useContext(PortfolioContext);

  const [formData, setFormData] = useState({
    senderName: "",
    email: "",
    htmltext: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendMail({
      ...formData,
      to: data.contact.email ? data.contact.email : "",
      name: `${data.firstname}  ${data.lastname}`,
    });
    setFormData({
      senderName: "",
      email: "",
      htmltext: "",
    });
  };

  if (sendEmailLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="w-12 h-12 border-4 border-teal-500 border-dashed rounded-full animate-spin"></div>
      </div>
    );
  }

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
            <div>
              <div>
                <label
                  htmlFor="senderName"
                  className="block text-sm font-medium text-teal-700"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="senderName"
                  name="senderName"
                  value={formData.senderName}
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
                htmlFor="htmltext"
                className="block text-sm font-medium text-teal-700"
              >
                Message
              </label>
              <textarea
                id="htmltext"
                name="htmltext"
                value={formData.htmltext}
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
            {data.contact.email && (
              <li className="flex items-center gap-4 text-teal-700">
                {data.contact.email ? (
                  <Mail className="w-6 h-6 text-teal-500" />
                ) : (
                  ""
                )}
                <span>{data.contact.email}</span>
              </li>
            )}
            {data.contact.phone && (
              <li className="flex items-center gap-4 text-teal-700">
                {data.contact.phone ? (
                  <Phone className="w-6 h-6 text-teal-500" />
                ) : (
                  ""
                )}
                <span>{data.contact.phone}</span>
              </li>
            )}
            {data.contact.address && (
              <li className="flex items-center gap-4 text-teal-700">
                {data.contact.address ? (
                  <MapPin className="w-6 h-6 text-teal-500" />
                ) : (
                  ""
                )}
                <span>{data.contact.address}</span>
              </li>
            )}
            {data.contact.city && (
              <li className="flex items-center gap-4 text-teal-700">
                {data.contact.city ? (
                  <Home className="w-6 h-6 text-teal-500" />
                ) : (
                  ""
                )}{" "}
                <span>{data.contact.city}</span>
              </li>
            )}
            {data.contact.country && (
              <li className="flex items-center gap-4 text-teal-700">
                {data.contact.country ? (
                  <Flag className="w-6 h-6 text-teal-500" />
                ) : (
                  ""
                )}
                <span>{data.contact.country}</span>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Contact;
