import { Provider } from 'react-redux';

import NavBar from './layout/NavBar';
import Hero from './layout/Hero';
import Main from './layout/Main';
import Footer from './layout/Footer';

import { store } from './redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <NavBar />
      <Hero />
      <Main />
      <Footer />
    </Provider>
  );
};

export default App;
