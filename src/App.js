import './App.css';
import Header from './Components/Header';
import Overview from './Components/Overview';
import Sidebar from './Components/Sidebar';
import Transactions from './Components/Transactions';
function App() {
  return (
    <div className="main">
      <aside>
        <Sidebar />
      </aside>
      <section className="payouts">
        <Header />
        <Overview />
        <Transactions />
      </section>
    </div>
  );
}

export default App;
