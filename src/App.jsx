import { Provider } from 'react-redux';

import AppRouter from './AppRouter';

import { store } from './redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
};

export default App;
