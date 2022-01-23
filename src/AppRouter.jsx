import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import Home from './Home';
import AppLoading from './components/AppLoading';

import { db, collection, getDocs } from './firebase';
import { addCharacters } from './redux/actions';
import { data } from './assets/data';

const AppRouter = () => {
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();

  useEffect(() => {
    const getCharacters = async () => {
      setLoading(true);
      try {
        const charactersCol = collection(db, 'characters');
        const characterSnapShot = await getDocs(charactersCol);
        const characterList = characterSnapShot.docs.map((doc) => {
          return { ...doc.data(), id: doc.id };
        });
        const action = addCharacters(characterList);
        dispatch(action);
      } catch (err) {
        const action = addCharacters(data);
        dispatch(action);
        console.error(err);
      }
      setLoading(false);
    };
    getCharacters();
  }, [dispatch]);

  if (loading) {
    return <AppLoading />;
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
