import Data from "./components/Data"
import Login from "./components/Login"
import { useState } from "react"

export default function Home() {
  const [visible,setVisible]=useState(true)
  const visiblity=()=>{
    setVisible(!visible)
  }
  return (
   <>
   {visible==true?<Login  visiblity={visiblity}/>
    :<Data visiblity={visiblity}/>
   }
   </>
  )
}
