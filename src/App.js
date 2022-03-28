import './App.css';
import NavBar from './components/NavBar';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <NavBar />
      <h2>This site is currently under construction</h2>
      <h3>This is an educational site</h3>
      <p>Please checkout the Books page. It features filtering, component destructuring,
        and a few basic modal components.
        <br />
        You will also see within the page real time data filtering.
        <br />
      </p>
      <h3>Site Next ups: </h3>
      <p>Adding books to the books table via modal</p>
    </div>
  );
}

export default App;
