import { useState } from 'react'
import './App.css'
import APIForm from './components/APIForm';

function App() {
  const [inputs, setInputs] = useState({
    url: "",
    format: "",
    no_ads: "",
    no_cookie_banners: "",
    width: "",
    height: "",
  });
  const ACCESS_KEY = import.meta.env.VITE_APP_ACCESS_KEY;

  const inputsInfo = [
    "Input a link to any website you would like to take a screenshot of. Do not include https or any protocol in the URL",
    "Input which image format you would prefer for your screenshot: jpeg, png, or webp",
    "Input true or false if you would like your website screenshot to not contain any ads",
    "Input true or false if you would like your website screenshot to not contain of those annoying 'allow cookies' banners",
    "Choose the width of your screenshot (in pixels)",
    "Choose the height of your screenshot (in pixels)",
  ];

  const submitForm = () => {
 

  }

  return (
    <div className="whole-page">
      <h1>Build Your Own Screenshot! 📸</h1>
      
      <APIForm
        inputs={inputs}
        handleChange={(e) =>
          setInputs((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value.trim(),
          }))
        }
        onSubmit={submitForm}
      />
      <br></br>

    </div>
  );
}

export default App
