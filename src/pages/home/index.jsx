import "./style.scss";
import CreatePost from "../../components/createPost";

function Home() {
  return (
    <div className="home">
      <div className="home-body-app">
        <div className="home-app-container">
          <div className="home-container-header">
            <h1 className="home--header">CodeLeap Network</h1>
          </div>
          <div className="app-container-post">
            <CreatePost />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
