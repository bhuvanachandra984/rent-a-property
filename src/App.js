import './App.css';
import Header from './components/Header/Header'; 
import CustomFilter from './components/CustomFilter/CustomFilter';
function App() {
  return (
    <div className="App">
     <Header/>
     <main>
      <CustomFilter/>
     </main>
    </div>

  );
}

export default App;
