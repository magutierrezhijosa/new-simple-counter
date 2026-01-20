import { useEffect, useState , useRef} from "react"
import Digit from "./Digit.jsx"

<script src="https://kit.fontawesome.com/597c816119.js" crossorigin="anonymous"></script>

function SecondCounter() {
  
  const [second , setSecond] = useState(0);
  
  const intervalRef = useRef(null);

  const inputRef = useRef(null);

  const [restar , setRestar] = useState(false);

  const [alerta,setAlerta] = useState(null);

  console.log(typeof alerta);

  function decrement() {
    
    setSecond(0);

    setRestar(true);
    
    setSecond(parseInt(inputRef.current.value));

  }

  if (alerta===second) {
        
        alert("ALERTA LLEGASTE AL NUMERO !!");
    }
  
  useEffect(()=>{
    
   

    if (!restar) {
      intervalRef.current = setInterval(()=>{

      
      setSecond(prev => prev + 1);

      },1000)
    }

      intervalRef.current = setInterval(()=>{

      
      setSecond(prev => prev - 1);

      },1000)

    
    return ()=>{clearInterval(intervalRef.current)}

  },[restar]);

  
  function reset() {
    
    setSecond(0);
  }

  function pause() {
    
    return clearInterval(intervalRef.current);
  }

  return (
    <>
        <div className="container">
            <h1 className="text-danger">CONTADOR</h1>
            <div className="d-flex justify-content-evenly">

                <p><i className="fa-solid fa-clock"></i></p>
                <Digit name={"digit8"} digit={Math.floor(second/10000000 % 10)}></Digit>
                <Digit name={"digit7"} digit={Math.floor(second/1000000 % 10)}></Digit>
                <Digit name={"digit6"} digit={Math.floor(second/100000 % 10)}></Digit>
                <Digit name={"digit5"} digit={Math.floor(second/10000 % 10)}></Digit>
                <Digit name={"digit4"} digit={Math.floor(second/1000 % 10)}></Digit>
                <Digit name={"digit3"} digit={Math.floor(second/100 % 10)}></Digit>
                <Digit name={"digit2"} digit={Math.floor(second/10 % 10)}></Digit>
                <Digit name={"digit1"} digit={Math.floor(second % 10)}></Digit>
                             
            </div>

            <div className="container">

                <input name="pepito" type="text" defaultValue={second} ref={inputRef} />

                <input type="text" onChange={(e) => setAlerta(parseInt(e.target.value))} />
                <button onClick={decrement}>Regresiva</button>

                <button onClick={reset} >Reset</button>

                <button onClick={pause}>Pause</button>


            </div>
        </div>
    </>
  )
}

export default SecondCounter