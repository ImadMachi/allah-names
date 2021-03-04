import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const NamesList = () => {
  const names = useSelector((state) => state.names);
  return (
    <div>
      <h1 className="title">
        {"{وَلِلَّهِ الْأَسْمَاءُ الْحُسْنَى فَادْعُوهُ بِهَا}"}
      </h1>
      <span className="names-list">
        {names.map((elem) => (
          <Link to={"/" + elem.id} key={elem.id} className="names-list__name">
            {elem.name}
          </Link>
        ))}
      </span>
    </div>
  );
};

export default NamesList;
