import "./ProfileBody.css";
import { useSelector, useDispatch } from "react-redux";
import Card from "components/Card/Card";

// item,
//   showComponent,

//   showModal,
//   setShowModal,
const ProfileBody = ({
  showModal,
  setShowModal,
  componentActive,
  componentInactive,
}) => {
  const allPosts = useSelector((state) => state.posts);
  const user = useSelector((state) => state.user);

  const userPosts = allPosts.posts.filter(
    (item) => item.uid._id === user.userDetail._id
  );
  console.log({ userPosts, user });
  return (
    <section className="user--posts--container">
      {userPosts.map((item) => {
        return (
          <Card
            key={item._id}
            item={item}
            showModal={showModal}
            setShowModal={setShowModal}
            componentActive={componentActive}
            componentInactive={componentInactive}
          />
        );
      })}
    </section>
  );
};

export default ProfileBody;
