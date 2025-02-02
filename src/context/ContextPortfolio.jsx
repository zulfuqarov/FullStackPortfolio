import React, { createContext, useState } from "react";
import axios from "axios";
export const PortfolioContext = createContext();
const ContextPortfolio = ({ children }) => {
  const apiUrl = import.meta.env.VITE_API;

  const [loading, setloading] = useState(true);
  const [data, setdata] = useState();
  const getPorfolio = async (name) => {
    setloading(true);
    try {
      const response = await axios.get(`${apiUrl}/portfolio/${name}`);
      console.log(response.data);
      setdata(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setloading(false);
    }
  };
  return (
    <PortfolioContext.Provider value={{ getPorfolio, loading, data }}>
      {children}
    </PortfolioContext.Provider>
  );
};

export default ContextPortfolio;
