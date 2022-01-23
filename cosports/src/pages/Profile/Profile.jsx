import NavbarDesktop from "components/NavbarDesktop/NavbarDesktop";
import NavbarMobile from "components/NavbarMobile/NavbarMobile";
import { logoutUser } from "features/user/UserSlice";
import { useSelector, useDispatch } from "react-redux";
import "./Profile.css";
import ProfileBody from "./ProfileBody/ProfileBody";
import ProfileHeader from "./ProfileHeader/ProfileHeader";

const Profile = ({
  showModal,
  setShowModal,
  showComponent,
  setShowComponent,
  componentActive,
  componentInactive,
}) => {
  const user = useSelector((state) => state.user);

  const { firstName, lastName, username, location, website } = user.userDetail;
  const { bio, followers, following } = user.userDetail.userAccountDetails;
  // console.log({ firstName, lastName, username, bio});
  const dispatch = useDispatch();
  const logoutBtnClickHandler = () => {
    localStorage.removeItem("userToken");
    dispatch(logoutUser());
  };
  return (
    <article className="profile--container">
      <ProfileHeader
        firstName={firstName}
        lastName={lastName}
        username={username}
        bio={bio}
        location={location}
        website={website}
        followers={followers}
        following={following}
      />
      <button onClick={logoutBtnClickHandler}>logout</button>
      <ProfileBody
        showModal={showModal}
        setShowModal={setShowModal}
        showComponent={showComponent}
        setShowComponent={setShowComponent}
        componentActive={componentActive}
        componentInactive={componentInactive}
      />
      <NavbarMobile showModal={showModal} setShowModal={setShowModal} />
      <NavbarDesktop showModal={showModal} setShowModal={setShowModal} />
    </article>
  );
};

export default Profile;
