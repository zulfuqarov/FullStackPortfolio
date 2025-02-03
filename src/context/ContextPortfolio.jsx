import React, { createContext, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
export const PortfolioContext = createContext();
const ContextPortfolio = ({ children }) => {
  const apiUrl = import.meta.env.VITE_API;

  const [loading, setloading] = useState(true);
  const [data, setdata] = useState();
  const getPorfolio = async (name) => {
    setloading(true);
    try {
      const response = await axios.get(`${apiUrl}/portfolio/${name}`);
      setdata(response.data);
    } catch (error) {
    } finally {
      setloading(false);
    }
  };

  const [sendEmailLoading, setsendEmailLoading] = useState(false);
  const sendMail = async (data) => {
    setsendEmailLoading(true);
    try {
      const { to, name, senderName, htmltext, email } = data;
      if (!senderName || !htmltext || !email) {
        toast.info("Missing parameters!");
        return;
      }

      const response = await axios.get(`${apiUrl}/email/`, {
        params: {
          to,
          name,
          senderName,
          htmltext,
          email,
        },
      });

      toast.success("Email sent successfully!");
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      setsendEmailLoading(false);
    }
  };

  return (
    <PortfolioContext.Provider
      value={{ getPorfolio, loading, data, sendMail, sendEmailLoading }}
    >
      {children}
    </PortfolioContext.Provider>
  );
};

export default ContextPortfolio;
