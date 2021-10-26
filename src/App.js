import React from "react";
import 'bulma/css/bulma.min.css';
//
import "./App.css";
// WE IMPORT OUR COMPONENTS
import Form from "./components/Form";
import Header from "./components/Header";
import Main from "./components/Main";
import NewsDisplay from "./components/NewsDisplay";


function App() {

  //variable with your apiKey
  const apiKey = "23067b203d9b414581d1ae17a29870bd";

  //State to hold news data
  const [News, setNews] = React.useState(null);

  //Function to getNews
  const getNews = async (searchTerm) => {
    // make fetch request and store response
    const response = await fetch(
      `https://api.sportsdata.io/v3/nfl/scores/json/NewsByTeam/${searchTerm}?key=${apiKey}`
    );
    // Parse JSON response into a javascript object
    const data = await response.json();
    //set the News state to the news
    setNews(data);
  };

  // USE OUR COMPONENTS IN APPs RETURNED JSX
  // We pass the getNews function as a prop called newssearch
  return (
    <div className="App">
      <Header />
      <Form newsSearch={getNews} />
      <NewsDisplay News={News} />
      <Main />
    </div>
  );
}

export default App;
