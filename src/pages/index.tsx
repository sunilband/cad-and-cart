import Login from "./components/Login";
import Data from "./components/Data"
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import DataCards from "./components/DataCards";



export default function Home() {
 
  var token:any = ""

  const [data,setData]=useState()
  const [visible,setVisible]=useState(true)
  const [loading,setLoading]=useState(false)
  const [userName, setUserName] = useState("");
  const [userPassword, setPassword] = useState("");
  
  

  const goBack=()=>{
    setVisible(!visible)
  }

  const submit = () => {
  
    // fetching token
    
    axios
      .post("https://cadandcartapi.vercel.app/api/login/", {
        username: userName,
        password: userPassword,
      })
      .then((res: any) => {
        if(res.data.token){
          token = res.data.token;
          setLoading(true)
          setVisible(!visible)
          console.log(token)
        }
        else{
          alert("invalid username or password")
        }
        
      })
       .then(() => {
         axios
      .get("https://cadandcartapi.vercel.app/api/movement_list_all/", {
       headers: { Authorization: `Token ${token}` },
     })
     .then((res: any) => {
       setData(res.data.data)
       console.log(data)
       setLoading(false)
     })
    });
  };

  return (
    <>
      {visible&&<Login
        userName={userName}
        setUserName={setUserName}
        userPassword={userPassword}
        setPassword={setPassword}
        submit={submit}
      />}
      {
        !visible&&!loading&&<div>
        <DataCards goBack={goBack} data={data}/>
          {/* <Data goBack={goBack} data={data}/> */}
      </div>
      }
      
    </>
  );
}
