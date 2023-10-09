import RecipeDetail from "./Components/RecipeDetail/RecipeDetail";
import { Route, Routes } from "react-router-dom";
import RecipeSearch from "./Components/RecipeSearch/RecipeSearch";
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
