import {useState, useEffect} from "react";

import CardList from "./components/CardList";
import Search from "./components/Search";
import 'tachyons';

function App() {
  const [mobilesArray, setMobilesArray] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetch("https://api.unsplash.com/search/photos?page=1&query=mobile phones&client_id=zvyxt4-6FVicLc-9sH0Hm12DsrdRT2BWiaCaYUnpGns")
    .then(response => response.json())
    .then(data => setMobilesArray(data.results))
  },[])

  const searchChanged = (e) => {
    setSearchText(e.target.value);
  }

  const filtMobiles = mobilesArray.filter((mobile) => mobile.user.username.toLowerCase().includes(searchText.toLowerCase()));

  return (
    <div className="tc">
      <h1>Mobile Shop</h1>
      <Search searchChanged={searchChanged}></Search>
      <CardList phonesData={filtMobiles}></CardList>
    </div>
  );
}

export default App;
