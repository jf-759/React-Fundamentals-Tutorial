import{ Outlet } from 'react-router-dom';
import './App.css';
import Title from './Title/Title';
import POPOSList from './POPOSList/POPOSList';
import Footer from './Footer/Footer';

function App() {
  return (
    <div className="App">
      <Title />
      <Outlet />
      <POPOSList />
      <Footer />
    </div>
  );
}

export default App;
