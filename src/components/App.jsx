import React, { useEffect, useState } from "react";
import getDataApi from "../services/api";
import FoodList from "./FoodList/FoodList";
import FilterByTaste from "./Filters/FilterByTaste";
import FilterByType from "./Filters/FilterByType";
// import FilterByIngredients from "./Filters/FilterByIngredients";


function App() {
  const [food, setFood] = useState([]); // Nuestro array de recetas
  const [taste, setTaste] = useState('all'); // String de sabores (dulce/salado)
  const [type, setType] = useState('all'); // String de tipos de comida (almuerzo, snack, desayuno, cena)
  // const [ingredients, setIngredients] = useState(''); //string de los ingredientes sueltos
  // const [filteredRecipes, setFilteredRecipes] = useState([])//array de las nuevas recetas que se muestren filtradas por ingredientes 

  // Ejecuta 1 sola vez cuando cargue la página
  useEffect(() => {
    // Pido los datos de la API
    getDataApi().then((dataInfo) => {
      setFood(dataInfo);
    });
  }, []);

  // Función para obtener los sabores únicos
  const getTaste = () => {
    const uniqueTastes = [...new Set(food.map(recipe => recipe.taste))];
    return uniqueTastes;
  };
  // Filtrar la comida según el sabor seleccionado
  const filterFood = food.filter((recipe) => {
    if (taste === 'all') {
      return true;
    } else {
      return recipe.taste === taste;
    }
  });

  // Función para obtener los tipos de comida únicos
  const getType = () => {
    const allTypeStrings = food.map((recipe) => JSON.stringify(recipe.type));
    const uniqueTypeStrings = [...new Set(allTypeStrings)];
    const uniqueTypes = uniqueTypeStrings.map((typeString) => JSON.parse(typeString));
    return uniqueTypes;
  };
  // Filtrar la comida según el tipo seleccionado
  const filterTypes = food.filter((recipe) => {
    if (type === 'all') {
      return true;
    } else {
      return recipe.type === type;
    }
  });

  // const filterByIngredients = () => {
    
  //   console.log('Nuestras recetas filtradas', ingredients);
  // };

  // const handleChangeIngredients = (value) => {
  //   setIngredients(value);
  // };

  return (
    <div>
      <h1>AUTH</h1>
      <FilterByTaste allTaste={getTaste()} setTaste={setTaste} />
      <FilterByType allType={getType()} setType={setType} />
      {/* <FilterByIngredients ingredients={setIngredients}/> */}
      <FoodList food={filterFood} foodType={filterTypes}/>
    </div>
  );
}

export default App;

