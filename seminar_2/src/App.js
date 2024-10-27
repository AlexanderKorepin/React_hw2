import logo from './logo.svg';
import './App.css';
import Counter from './components/counter';
import TextInput from './components/textInput';
import TodoList from './components/todoList';
import Timer from './components/timer';

function App() {
  return (
    <div className="App">
       <Counter />
       <TextInput />
       <TodoList />
       <Timer />  
    </div>
  );
}

export default App;
