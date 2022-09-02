import "./style.scss";
import PostForm from "../../components/postComponent";
import PostComponent from "../../components/post";
import ConfirmDeleteModal from "../../components/confirmDeleteModal";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function Home() {
  const states = useSelector((state) => state);
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    getPosts();
  }, [states.reducer.getPosts]);

  async function getPosts() {
    const response = await fetch(
      "https://dev.codeleap.co.uk/careers/?format=json",
      {
        method: "GET",
        headers: {
          "content-type": "application/json",
        },
      }
    );

    const data = await response.json();
    const datasorted = await data.results.sort((a, b) => a + b);
    setPosts([...datasorted]);
  }
  return (
    <div className="home">
      <div className="home-body-app">
        <div className="home-app-container">
          <div className="home-container-header">
            <h1 className="home--header">CodeLeap Network</h1>
          </div>
          <div className="app-container-post">
            <PostForm type={"CREATE_POST"} />
            {posts.map((post) => {
              return (
                <PostComponent
                  {...post}
                  loggedUser={states.reducerSignup.payload.username.trim()}
                  time={post.created_datetime}
                  key={post.id}
                />
              );
            })}
          </div>
          {states.reducer.editPostSetup.showModal && (
            <div className="edit-modal-post">
              <PostForm type={"EDIT_POST"} />
            </div>
          )}
          {states.reducer.deletePostSetup.showModal && <ConfirmDeleteModal />}
        </div>
      </div>
    </div>
  );
}

export default Home;
