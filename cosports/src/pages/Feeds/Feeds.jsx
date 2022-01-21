import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchAllPosts } from "features/post/postSlice";
import Card from "components/Card/Card";
import "./Feeds.css";
import NavbarMobile from "components/NavbarMobile/NavbarMobile";
import NavbarDesktop from "components/NavbarDesktop/NavbarDesktop";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Feeds = ({ showModal, setShowModal }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const allPosts = useSelector((state) => state.posts);
  const { userDetail, token, status, error } = useSelector(
    (state) => state.user
  );
  const [showComponent, setShowComponent] = useState(false);

  const componentActive = (id) => {
    setShowComponent((showComponent) => true);
    navigate(`/singlepost/${id}`);
  };

  const componentInactive = () => {
    setShowComponent((showComponent) => false);
  };
  useEffect(() => {
    if (allPosts.posts.length === 0) {
      const fetchPosts = async () => {
        dispatch(fetchAllPosts(token));
      };
      fetchPosts();
    }
  }, []);

  return (
    <div className="feed--container">
      {allPosts?.posts?.map((item) => {
        return (
          <Card
            key={item._id}
            item={item}
            showComponent={showComponent}
            componentActive={componentActive}
            componentInactive={componentInactive}
          />
        );
      })}
      <NavbarMobile showModal={showModal} setShowModal={setShowModal} />
      <NavbarDesktop showModal={showModal} setShowModal={setShowModal} />
    </div>
  );
};

export default Feeds;
