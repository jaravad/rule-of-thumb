import MessageBanner from '../components/MessageBanner';
import SubmitBanner from '../components/SubmitBanner';
import List from './List';

const hairline = 'Speak out. Be heard.';
const title = 'Be counted';

const message = (
  <>
    Rule of Thumb is a crowd sourced court of public opinion where anyone and
    everyone can speak out and speak freely. It’s easy: You share your opinion,
    we analyze and put the data in a public report.
  </>
);

const Main = () => {
  return (
    <div className="max-centered">
      <MessageBanner
        message={message}
        hairline={hairline}
        title={title}
        closable
      />
      <main role="main">
        <List />
      </main>
      <SubmitBanner />
    </div>
  );
};

export default Main;
