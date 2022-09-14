import { createContext, useEffect, useState } from "react";
 import { useNavigate } from "react-router-dom";
import api from "../../services/axios";


export const AuthContext = createContext({});

export const AuthProvider = ({children}) => {
  const navigate = useNavigate()
  
    const [product, setProduct] = useState([]);
    const [ productArr, setProductArr ] = useState([]);
    const [ user, setUser ] = useState();
    const [pedidos , setPedidos ] = useState([]);
    const token = localStorage.getItem("token");

    useEffect(() => {
      api.get("/rifas").then(({ data }) => {
       setProduct(data.data[0]);
       setProductArr(data.data)
      })
    }, [])

    useEffect(() => {
      api.get("/pedidos", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then(({ data }) => {
        setPedidos(data.data);
      })
    }, [])

    function apiCadastro(data){ 
      const formData = data;
      api.post("/register", formData)
        .then((response) => {
            setUser(response)
            localStorage.setItem("token", response.data.token);      
            navigate("../login")
        })
        .catch((err) => {
            console.log(err);
          });
    }

    function apiLogin(data){
      const formData = data;
      api.post("/login", formData)
        .then((response) => {
          localStorage.setItem("token", response.data.token);
          navigate("/")
        })
    }

    const onSubmitLogin = (data) => {
      apiLogin(data);
    }

    const onSubmitFunction = (data) => {
      apiCadastro(data)
   };

  return (
    <AuthContext.Provider value={{ product, productArr, onSubmitFunction, onSubmitLogin, pedidos}}>
      {children}
    </AuthContext.Provider>
  );
};
