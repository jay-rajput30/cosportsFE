import NavbarDesktop from "components/NavbarDesktop/NavbarDesktop";
import NavbarMobile from "components/NavbarMobile/NavbarMobile";
import { getAllUsers } from "features/users/UsersSlice";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import "./Search.css";
import UserCard from "./UserCard/UserCard";

const Search = ({ showModal, setShowModal }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const [userSearched, setUserSearched] = useState();
  const users = useSelector((state) => state.users);

  const userFound = users.users.filter(
    (item) => item.username === userSearched
  );
  console.log(userFound);
  useEffect(() => {
    const fetchUsers = async () => {
      dispatch(getAllUsers(user.token));
    };

    fetchUsers();
  }, []);
  return (
    <div className="search--container">
      <SearchInput setUserSearched={setUserSearched} />

      <article className="user--found--container">
        {userFound.map((user) => {
          return <UserCard key={user._id} user={user} />;
        })}
      </article>

      <NavbarMobile showModal={showModal} setShowModal={setShowModal} />
      <NavbarDesktop showModal={showModal} setShowModal={setShowModal} />
    </div>
  );
};
const SearchInput = ({ setUserSearched }) => {
  // const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState("");
  const searchKeyPressHandler = (e) => {
    // setSearchTerm((prev) => prev + e.key);

    if (e.key === "Enter") {
      console.log(searchTerm);
      setUserSearched((prev) => searchTerm);
      setSearchTerm((prev) => "");
    }
  };
  return (
    <input
      type="text"
      className="search--input"
      placeholder="type username and hit enter"
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      onKeyPress={(e) => searchKeyPressHandler(e)}
    />
  );
};

export default Search;
