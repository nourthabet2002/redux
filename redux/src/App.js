import logo from './logo.svg';
import './App.css';
import Listtask from './Listtask';
import Addtask from './Addtask';
import Task from './Task';
function App() {
  return (
    <div className="App">
      <Listtask/>
      <Task/>
      <Addtask/>
    </div>
    
  );
}
export default App;
