import { useState, useEffect } from "react";

const Button = () => {
  const [buttons, setButtons] = useState([]);
  const [joke, setJoke] = useState({});

  const getJoke = async (category) => {
    const url = `https://api.chucknorris.io/jokes/random?category=${category}`;
    try {
      const response = await fetch(url);
      const data = await response.json();
      setJoke(data);
    } catch (error) {
      console.log("error", error);
    }
  };
  useEffect(() => {
    const url = "https://api.chucknorris.io/jokes/categories";

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        setButtons(json);
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchData();
  }, []);
  return (
    <div>
      <div className="button__wrapper">
        {buttons.map((item) => {
          return (
            <button key={item} className="button" onClick={() => getJoke(item)}>
              {item}
            </button>
          );
        })}
        <div className="joke__wrapper">{joke.value}</div>
      </div>
    </div>
  );
};

export default Button;
