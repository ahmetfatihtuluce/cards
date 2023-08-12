import "bulma/css/bulma.css";
import "./App.css";
import Course from "./Course";
import Angular from "./images/angular.jpg";
import Bootstrap from "./images/bootstrap5.png";
import Csharp from "./images/ccsharp.png";
import frontend from "./images/frontend.jpg";

function App() {
  return (
    <div className="App">
      <section className="hero is-link">
        <div className="hero-body">
          <p className="title">My Courses</p>
          
        </div>
      </section>

      <div className="container">
          <section className="section">

          </section>
        <div className="columns">
          <div className="column">
            <Course
              image={Angular}
              title="Angular"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam,
              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea"
            />
          </div>
          <div className="column">
            <Course
              image={Bootstrap}
              title="Bootstrap"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit,
             sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam,
             quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea"
            />
          </div>
          <div className="column">
            <Course
              image={Csharp}
              title="Komple Web"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit,
             sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam,
             quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea"
            />
          </div>
          <div className="column">
            <Course
              image={frontend}
              title="Frontend"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam,
              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
