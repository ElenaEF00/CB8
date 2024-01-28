import "react-calendar/dist/Calendar.css";

export default function Homepage() {
  return (
    <div className="banner">
      <div className="container">
        <h3 className="title">Fai il compleanno?</h3>
        <a className="link" href="/auguri">
          🎉 Tanti auguri! 🎉
        </a>
        <p>Non fai il compleanno? Clicca lo stesso!</p>
      </div>
    </div>
  );
}
