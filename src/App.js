import "./App.css";
import Posts from "./components/Post";



const RAY_IMAGE =
  "https://specials-images.forbesimg.com/imageserve/5e63b3c8e1e617000759130e/960x0.jpg?fit=scale";
const ANAKIN_IMAGE = {
  photo:
    "https://upload.wikimedia.org/wikipedia/en/thumb/7/74/Anakin-Jedi.jpg/220px-Anakin-Jedi.jpg",
  name: "Anakin Skywalker",
  nickname: "@dart_vader",
  image: RAY_IMAGE,
  content: "WTF? Who is Ray? Why she is Skywalker? Luke...?"
};

function App() {
  return (
    <div className="App">
      <Posts {...ANAKIN_IMAGE} />
    </div>
  );
}

export default App;
