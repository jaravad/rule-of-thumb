const MessageBanner = ({ message, closable, hairline, title }) => {
  return (
    <aside className="banner banner-top" role="doc-tip" aria-label="Speak Out">
      {(hairline || title) && (
        <div className="banner__left">
          {hairline && <span className="banner__hairline">{hairline}</span>}
          {title && <span className="banner__title">{title}</span>}
        </div>
      )}
      {message && (
        <div className="banner__right">
          <p className="banner__text">{message}</p>
        </div>
      )}
      {closable && (
        <button className="icon-button" aria-label="close">
          <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg">
            <g stroke="#000" strokeWidth="2" fill="none" fillRule="evenodd">
              <path d="M1 19L19 1M1 1l18 18" />
            </g>
          </svg>
        </button>
      )}
    </aside>
  );
};

export default MessageBanner;
