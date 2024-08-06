import AuctionDetail from './pages/AuctionDetail';
import Page from './router/router';
import Nav from './components/layout/Nav';
import Footer from './components/layout/Footer';

function App() {
  return (
    <>
      <AuctionDetail />
      <Nav />
      <Page />
      <Footer />
    </>
  );
}

export default App;
