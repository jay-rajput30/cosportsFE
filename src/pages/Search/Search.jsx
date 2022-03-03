import Modal from "components/Modal/Modal";
import NavbarDesktop from "components/NavbarDesktop/NavbarDesktop";
import NavbarMobile from "components/NavbarMobile/NavbarMobile";
import { getAccountDetail, getAllUsers } from "features/users/UsersSlice";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import "./Search.css";
import UserCard from "./UserCard/UserCard";

const Search = ({ showModal, setShowModal }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  // const [showComponent, setShowComponent] = useState(false);
  // const [setUserSearched] = useState();
  const userFound = useSelector((state) => state.users);

  console.log({ userFound: userFound });

  useEffect(() => {
    const fetchUsers = async () => {
      dispatch(getAllUsers(user.token));
    };

    fetchUsers();
  }, []);

  return (
    <div className="search--container">
      <SearchInput
        // setUserSearched={setUserSearched}
        showModal={showModal}
        setShowModal={setShowModal}
        // showComponent={showComponent}
        // setShowComponent={setShowComponent}
      />
      <article className="user--found--container">
        {userFound.searchedAccounts.length === 0 ? (
          <p>no user found. please try again</p>
        ) : (
          userFound.searchedAccounts.map((user) => {
            return <UserCard key={user._id} user={user} />;
          })
        )}
      </article>

      <NavbarMobile showModal={showModal} setShowModal={setShowModal} />
      <NavbarDesktop showModal={showModal} setShowModal={setShowModal} />
      {showModal.status && (
        <Modal showModal={showModal} setShowModal={setShowModal} />
      )}
    </div>
  );
};
const SearchInput = ({
  // setUserSearched,
  showModal,
  setShowModal,
  // showComponent,
  // setShowComponent,
  setUserFound,
}) => {
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState("");
  const user = useSelector((state) => state.user);
  const searchKeyPressHandler = (e) => {
    setSearchTerm(e.target.value);
    // setUserSearched(searchTerm);

    // if (e.key === "Enter") {
    console.log(searchTerm);
    // setShowComponent(true);
    // setSearchTerm((prev) => "");
    dispatch(getAccountDetail({ searchTerm, token: user.token }));
    // }
  };
  return (
    <>
      <input
        type="text"
        className="search--input"
        placeholder="type username and hit enter"
        value={searchTerm}
        // onChange={(e) => setSearchTerm(e.target.value)}
        onChange={(e) => searchKeyPressHandler(e)}
      />
      <NavbarMobile showModal={showModal} setShowModal={setShowModal} />
      <NavbarDesktop showModal={showModal} setShowModal={setShowModal} />
    </>
  );
};

export default Search;
