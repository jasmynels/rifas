import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../services/axios";
import { toast } from "react-hot-toast";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [product, setProduct] = useState([]);
  const [productArr, setProductArr] = useState([]);
  const [user, setUser] = useState();
  const [usuario, setUsuario] = useState({});
  const [pedidos, setPedidos] = useState([]);
  const token = localStorage.getItem("token");
  const [rifaValue, setRifaValue] = useState(0)
  // quantidade comprada
  const [qtd, setQtd] = useState(0)
  useEffect(() => {
    api.get("/rifas").then(({ data }) => {
      setProduct(data.data[0]);
      setProductArr(data.data);
    });
  }, []);
  useEffect(() => {
    api
    .get("/me", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then(({ data }) => {
      setUsuario(data.user);
      console.log(data.user);
    });
  }, [])
  

  useEffect(() => {
    api
      .get("/pedidos", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(({ data }) => {
        setPedidos(data.data);
        console.log(data)
      });
  }, []);

  // useEffect(() => {
    
  //   api
  //     .post("/pedidos/create", {
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //       },
  //     })
  //     .then(({ data }) => {
  //       console.log(data.data);
        
  //     });
  // }, []);

  function apiCadastro(data) {
    const formData = data;
    api
      .post("/register", formData)
      .then((response) => {
        setUser(response);
        localStorage.setItem("token", response.data.token);
        navigate("../compra");
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function apiLogin(data) {
    console.log(data)
    api.post("/login", data)
    .then((response) => {
      if(response.data.success === false){
        toast.error("Senha ou login inválido");
      }else { 
        toast.success("Login realizado com sucesso!");
        console.log(response)
        localStorage.setItem("token", response.data.token);
        setTimeout(() => {
        navigate("/");
        }, 2000);
      }
      
    })
    .catch((err) => {
      toast.error("O Login falhou");
    });
  }

  const onSubmitFunction = (data) => {
    apiCadastro(data);
  };

  return (
    <AuthContext.Provider
      value={{
        product,
        productArr,
        onSubmitFunction,
        apiLogin,
        pedidos,
        token,
        usuario,
        rifaValue, setRifaValue, qtd, setQtd
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
