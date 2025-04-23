import React, { useEffect, useState } from "react";
import TodoFilter from "./TodoFilter";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";
import FooterActions from "./FooterActions";
import axios from "axios";
import { override } from "../common/loading";
import MoonLoader from "react-spinners/MoonLoader";


const TodoForm = () => {
  const [loading, setLoading] = useState(true);
  const [listData, setListData] = useState([]);

  const handleGetListData = async () => {
      try {
          setLoading(true);
          const res = await axios.get(`http://localhost:3000/libraries`);
          setListData(res.data);
      } catch (error) {
          console.log(error);
      } finally {
          setLoading(false);
      }
  };

  useEffect(() => {
      handleGetListData();
  }, []);


    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center w-full">
      {loading && (
          <div className="absolute inset-0 flex justify-center items-center z-50 rounded-lg opacity-65 bg-gray-700">
              <MoonLoader
                  loading={loading}
                  size={50}
                  cssOverride={override}
                  color="#ffffff"
              />
          </div>
      )}
      <div className="max-w-md w-full p-6 bg-white rounded-lg shadow">
          <h1 className="text-center text-2xl font-semibold mb-4">
              Quản lý công việc
          </h1>
          <AddTodo />
          <TodoFilter />
          <TodoList todos={listData} />
          <FooterActions />
      </div>
  </div>
    );
};

export default TodoForm;
