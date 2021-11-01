import React, { useState, useEffect } from "react";
import "./App.css";
import Main from "./containers/Main";
import LoadingPage from "./components/loadingPage/lottiePage";

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer =  setTimeout(() => {
      setLoading(false)
    },2000)
    return () => clearTimeout(timer)
  },[])
  return (
    <div>
        {loading ?
        <div class="preload-wrapper">
          <div class="preload-item">
            <LoadingPage/> 
          </div>
        </div>
      :
      <Main />
        }
    </div>
  );
}

export default App;
