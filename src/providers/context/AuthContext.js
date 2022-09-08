import { createContext, useEffect, useState } from "react";
 import { useNavigate } from "react-router-dom";
import api from "../../services/axios";

export const AuthContext = createContext({});

export const AuthProvider = ({children}) => {
  const navigate = useNavigate()
  
    const [product, setProduct] = useState([]);
    const [ productArr, setProductArr ] = useState([]);
    const [ user, setUser ] = useState();
    useEffect(() => {
      api.get("/rifas").then(({ data }) => {
       setProduct(data.data[0]);
       setProductArr(data.data)
      })
    }, [])

    function apiCadastro(data){ 
      const formData = data;
      api.post("/register", formData)
        .then((response) => {
            setUser(response)
            // setTimeout(() => {
            //   navigate("../login")
            // }, 2000)
        })
        .catch((err) => {
            console.log(err);
          });
    }

    function apiLogin(data){
      const formData = data;
      api.post("/login", formData)
        .then((response) => {
              navigate("../login", { replace: true })
        })
    }

    const onSubmitLogin = (data) => {
      apiLogin(data);
    }

    const onSubmitFunction = (data) => {
      apiCadastro(data)
   };

  return (
    <AuthContext.Provider value={{ product, productArr, onSubmitFunction, onSubmitLogin }}>
      {children}
    </AuthContext.Provider>
  );
};
