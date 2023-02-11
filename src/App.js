import { Navigate, NavLink, Route, Routes } from "react-router-dom";
import ListPage from "./pages/ListPage";
import WritePage from "./pages/WritePage";
import TodoListPage from "./pages/TodoListPage";

function App() {
  return (
    <div className="bg-gray-300 min-h-screen">
      <div className="w-1/2 max-w-screen-sm m-auto bg-white min-h-screen">
        <Routes>
          <Route path="/list" element={<ListPage />} />
          <Route path="/write" element={<WritePage />} />
          <Route path="/todoList" element={<TodoListPage />} />
          <Route path="*" element={<Navigate to="/list" />} />
        </Routes>

        <footer className="pt-2 flex items-center gap-2">
          <NavLink to={"/list"} className=" text-xs">
            리스트
          </NavLink>
          <NavLink to={"/write"} className=" text-xs">
            작성
          </NavLink>
          <NavLink to={"/todoList"} className=" text-xs">
            투두리스트
          </NavLink>
        </footer>
      </div>
    </div>
  );
}

export default App;
