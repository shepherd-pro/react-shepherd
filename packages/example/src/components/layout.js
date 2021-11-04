export default function Layout({ children }) {
  return (
    <div className="hero-scroll">
    <div className="hero-outer">
      <div className="hero-inner">
        <div className="hero-welcome">
          <h1>
            <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K" alt="" height="40" />
            React Shepherd
          </h1>

          <h2>Guide your users through a tour of your app.</h2>
        </div>
        <div id="root">
          {children}
        </div>

        <div className="hero-followup">
          <p>
            <a className="button star" href="https://github.com/shipshapecode/react-shepherd">★ on Github</a> &nbsp;&nbsp;
            <a className="button" href="https://shipshapecode.github.io/react-shepherd/">View Docs</a> &nbsp;&nbsp;
          </p>
        </div>
        <div>
          <img src="/sheep.svg" />
        </div>
      </div>
    </div>
  </div>
  )
}
