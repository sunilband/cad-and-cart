import React,{useState} from "react";
import Logo from "./Logo";
import axios from "axios";
import { useRouter } from 'next/router';


type Props = {
  userName:any,
  setUserName:any,
  userPassword:any,
  setPassword:any,
  submit:any


};

const Login = (props: Props) => {
    const router:any = useRouter();
  return (
    <div className="h-screen w-screen relative flex flex-col justify-center items-center bg-slate-950">
      {/* Logo image */}
      <Logo />
      {/*login box*/}

      <div className="relative py-4 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-[#00feff] to-[#fdb101] shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl "></div>
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <div className="max-w-md mx-auto">
            <div>
              <h1 className="text-2xl font-semibold uppercase tracking-wider">
                Welcome to Cad & Cart
              </h1>
            </div>
            {/* inner box */}
            <div className="w-28 h-48">
              <input type="text"  className="p-3 rounded-md mt-3" placeholder="Username" value={props.userName} onChange={(e)=>props.setUserName(e.target.value)} required/>
              <input type="password"  className="p-3 rounded-md mt-3" placeholder="Password" value={props.userPassword} onChange={(e)=>props.setPassword(e.target.value)} required/>
             <button className="bg-blue-500 text-white  rounded-md px-4 py-3 mt-3 hover:scale-105 transition-all ease-in-out duration-100 hover:-translate-y-1 hover:shadow-2xl" onClick={props.submit}>
                    Submit
                  </button>
                  <p className="w-36 mt-2 hover:scale-105 cursor-pointer">Forget password?</p>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
