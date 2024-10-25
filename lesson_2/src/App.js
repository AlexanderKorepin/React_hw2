
import './App.css'

import Counter from "./components/couter";
import MessegesList from './components/list';
import Timer from './components/timer';
import Show from './components/visible';


function App() {
  const userName = 'Alexander';
  return (
    <div className="App">
      <h1>Hello {userName}</h1> 
      <Counter />
      <Show data = 'Новый текст из компонента'/>   
      <Show data = 'Другой текст из компонента'/>
      <Timer />   
      <MessegesList />
    </div>
  );
}

export default App;
