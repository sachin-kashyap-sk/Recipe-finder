import RecipeDetail from "./Components/RecipeDetail/RecipeDetail";
import RecipeSearch from "./Components/RecipeSearch/RecipeSearch";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<RecipeSearch />}></Route>
        <Route path="/RecipeDetail/:id" element={<RecipeDetail />}></Route>
      </Routes>
    </div>
  );
}

export default App;
