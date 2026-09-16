import './App.css';
import AppHeader from "./components/AppHeader/appheader";
import Ingredient from "./components/BurgerIngredients/ingredient";

function App() {
  return (
    <div className="root">
        <AppHeader></AppHeader>
        <main>
            <Ingredient></Ingredient>
        </main>
    </div>
  );
}

export default App;
