import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchAllPosts } from "features/post/postSlice";
import Card from "components/Card/Card";
import "./Feeds.css";
import NavbarMobile from "components/NavbarMobile/NavbarMobile";
import NavbarDesktop from "components/NavbarDesktop/NavbarDesktop";
import { useNavigate } from "react-router-dom";
import Modal from "components/Modal/Modal";

const Feeds = ({
  showModal,
  setShowModal,
  showComponent,
  setShowComponent,
  componentActive,
  componentInactive,
}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const allPosts = useSelector((state) => state.posts);
  const { userDetail, token, status, error } = useSelector(
    (state) => state.user
  );
  // const [showComponent, setShowComponent] = useState(false);

  useEffect(() => {
    if (allPosts.posts.length === 0) {
      const fetchPosts = async () => {
        dispatch(fetchAllPosts(token));
      };
      fetchPosts();
    }
  }, []);
  console.log({ posts: allPosts });
  return (
    <div className="feed--container">
      <div className="feed--card--container">
        {allPosts?.posts?.map((item) => {
          return (
            <Card
              key={item._id}
              item={item}
              showComponent={showComponent}
              componentActive={componentActive}
              componentInactive={componentInactive}
              showModal={showModal}
              setShowModal={setShowModal}
            />
          );
        })}
      </div>

      <NavbarMobile showModal={showModal} setShowModal={setShowModal} />
      <NavbarDesktop showModal={showModal} setShowModal={setShowModal} />
      {showModal.status && (
        <Modal showModal={showModal} setShowModal={setShowModal} />
      )}
    </div>
  );
};

export default Feeds;
