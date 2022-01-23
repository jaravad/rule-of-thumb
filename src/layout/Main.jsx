import MessageBanner from '../components/MessageBanner';
import SubmitBanner from '../components/SubmitBanner';

const Main = () => {
  return (
    <div className="max-centered">
      <MessageBanner />
      <main role="main">
        {/* <!-- Start: Implementation --> */}
        👉 Your code goes here 👈
        {/* <!-- End: Implementation --> */}
      </main>
      <SubmitBanner />
    </div>
  );
};

export default Main;
