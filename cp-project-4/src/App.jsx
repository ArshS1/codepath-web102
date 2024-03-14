import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [inputs, setInputs] = useState({
    url: "",
    format: "",
    no_ads: "",
    no_cookie_banners: "",
    width: "",
    height: "",
  });

  const [currentImage, setCurrentImage] = useState(null);

  const [prevImages, setPrevImages] = useState([]);

  const ACCESS_KEY = import.meta.env.VITE_APP_ACCESS_KEY;

  const reset = () => {
    setInputs({
      url: "",
      format: "",
      no_ads: "",
      no_cookie_banners: "",
      width: "",
      height: "",
    });
  };

  const callAPI = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const json = await response.json();
    console.log(response, json);
    if (json.length === 0) {
      alert("Oops! Something went wrong with that query, let's try again!");
    } else {
      setCurrentImage(json); // assuming currentImage state is used to store the fetched data
      reset();
    }
  };

  useEffect(() => {
    callAPI();
  }, []);

  const inputsInfo = [
    "Input a link to any website you would like to take a screenshot of. Do not include https or any protocol in the URL",
    "Input which image format you would prefer for your screenshot: jpeg, png, or webp",
    "Input true or false if you would like your website screenshot to not contain any ads",
    "Input true or false if you would like your website screenshot to not contain of those annoying 'allow cookies' banners",
    "Choose the width of your screenshot (in pixels)",
    "Choose the height of your screenshot (in pixels)",
  ];

  const makeQuery = () => {
    let wait_until = "network_idle";
    let response_type = "json";
    let fail_on_status = "400%2C404%2C500-511";
    let url_starter = "https://";
    let fullURL = url_starter + inputs.url;

    let query = `https://api.apiflash.com/v1/urltoimage?access_key=${ACCESS_KEY}&url=${fullURL}&format=${inputs.format}&width=${inputs.width}&height=${inputs.height}&no_cookie_banners=${inputs.no_cookie_banners}&no_ads=${inputs.no_ads}&wait_until=${wait_until}&response_type=${response_type}&fail_on_status=${fail_on_status}`;
    callAPI(query).catch(console.error);
  };

  const submitForm = () => {
    let defaultValues = {
      format: "jpeg",
      no_ads: "true",
      no_cookie_banners: "true",
      width: "1920",
      height: "1080",
    };

    if (inputs.url == "" || inputs.url == " ") {
      alert("You forgot to submit an url!");
    } else {
      for (const [key, value] of Object.entries(inputs)) {
        if (value == "") {
          inputs[key] = defaultValues[key];
        }
      }
      makeQuery();
    }
  };

  return (
    <div className="whole-page">
      <div>
        <button onClick={callAPI}>Fetch new post</button>
        {currentImage && (
          <div>
            <h2>{currentImage.title}</h2>
            <p>{currentImage.body}</p>
            <img
              src={`https://via.placeholder.com/150?text=${currentImage.id}`}
              alt="placeholder"
            />
            <button onClick={() => addToBanList(currentImage.id)}>
              Ban this post
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
