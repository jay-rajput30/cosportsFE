import "./ViewProfileBody.css";

import Card from "components/Card/Card";

const ViewProfileBody = ({
  showModal,
  setShowModal,
  componentActive,
  componentInactive,
  posts,
}) => {
  return (
    <section className="user--posts--container">
      {posts.map((item) => {
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

export default ViewProfileBody;
