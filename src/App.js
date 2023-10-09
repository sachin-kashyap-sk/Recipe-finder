import { Route, Routes } from "react-router-dom";
import { RecipeSearch } from "./Components/recipe-search";
import { RecipeDetail } from "./Components/recipe-detail";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<RecipeSearch />}></Route>
        <Route path="/recipeDetail/:id" element={<RecipeDetail />}></Route>
      </Routes>
    </div>
  );
}

export default App;
