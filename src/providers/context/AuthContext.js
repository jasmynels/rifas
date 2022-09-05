import { createContext, useEffect, useState } from "react";
import api from "../../services/axios";


  

export const AuthContext = createContext({});

export const AuthProvider = ({children}) => {
  
    const [product, setProduct] = useState([]);

    useEffect(() => {
      const getRifas = () => {
        api
          .get("/rifas")
          .then((response) => setProduct(response.data.data[0]))
          .catch((error) => console.log(error));
      };
      getRifas();
    }, []); 

    

  return (
    <AuthContext.Provider value={{ product }}>
      {children}
    </AuthContext.Provider>
  );
};
