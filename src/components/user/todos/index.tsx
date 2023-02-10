import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ITodo } from "../../../interfaces/ITodo";
import Item from "./Item";

const Todos: React.FC = () => {
  return (
    <>
      <div className="">
        <ul>
          {/* {todos.map((el) => (
            <Item {...el} />
          ))} */}
        </ul>
      </div>
    </>
  );
};

export default Todos;
