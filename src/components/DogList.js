import { Link } from "react-router-dom";
import "./DogList.css";

function DogList({ dogs }) {
  return (
    <div className="DogList">
      <h1>Dog List</h1>
      <ul>
        {dogs.map((d) => {
          return (
            <Link to={`./dogs/${d.name.toLowerCase()}`} key={d.name}>
              <li>
                <img src={d.src} alt={d.name} /> {d.name}
              </li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
}

export default DogList;
