import './App.css';
import Counter from './Counter'

function App() {
  return (
    <>
  <Counter appName="Counter 1" counterValue={200}/>
  <Counter appName="Counter 2" counterValue={200}/>
  <Counter appName="Counter 3" counterValue={200}/>
    </>
  ) 
}

export default App;
