import NavBar from './layout/NavBar';
import Hero from './layout/Hero';
import Main from './layout/Main';
import Footer from './layout/Footer';

const Home = () => {
  return (
    <div className="fade-anim">
      <NavBar />
      <Hero />
      <Main />
      <Footer />
    </div>
  );
};

export default Home;
