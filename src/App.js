import RecipeDetail from "./Components/RecipeDetail/RecipeDetail";
import RecipeSearch from "./Components/RecipeSearch/RecipeSearch";
import { Route, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RecipeSearch />}></Route>
          <Route path="/RecipeDetail/:id" element={<RecipeDetail />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
