import './App.css';
import About from "./components/about";
import Menu from "./components/Menu";
import Page from "./components/Page";
// import Header from "./components/Header";
import Hero from "./components/Hero";
import AboutLine from "./components/AboutLine";
import Header from "./components/Header";


function App() {
  return (
    <div className="App">
        <Header/>
        <Hero/>
        <AboutLine/>
        <About/>
        <Menu/>
        <Page/>

    </div>
  );
}

export default App;

