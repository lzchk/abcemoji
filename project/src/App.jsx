import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Form from './components/Form'
import Result from './components/Result'

let getJsonFile = (pathToFile) => {
  let request = new XMLHttpRequest();

  request.open("GET", pathToFile, false);
  request.send(null);

  let my_JSON_object = JSON.parse(request.responseText);

  return my_JSON_object;
};
const allEmoji = getJsonFile("https://emoji-api-app.herokuapp.com/");

function App() {
  //использование хуков
  const [valueEmoji, setValueEmoji] = useState('fruit');

  return (
    <div className="App">
        <Header/>
        <Form setValueEmoji={setValueEmoji}/>
        <Result valueEmoji={valueEmoji}/>
      <h2>main</h2>
    </div>
    
  );
}

export default App;
