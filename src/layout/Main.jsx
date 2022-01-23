import MessageBanner from '../components/MessageBanner';
import SubmitBanner from '../components/SubmitBanner';
import List from './List';

const Main = () => {
  return (
    <div className="max-centered">
      <MessageBanner />
      <main role="main">
        <List />
      </main>
      <SubmitBanner />
    </div>
  );
};

export default Main;
