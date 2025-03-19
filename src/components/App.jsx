import React, { useEffect, useState } from "react";
import getDataApi from "../services/api";
import FoodList from "./FoodList/FoodList";
import FilterByTaste from "./Filters/FilterByTaste";
import FilterByType from "./Filters/FilterByType";
import { Navigate, Route, Routes } from "react-router-dom";
import Login from "./Login/Login";
import NavBar from "./NavBar/NavBar";
import AuthRoute from "./AuthRoute/AuthRoute";
import Register from "./Register/Register";
// import FilterByIngredients from "./Filters/FilterByIngredients";

function App() {

  const [user, setUser] = useState(null);

  const [food, setFood] = useState([]); // Nuestro array de recetas PRINCIPAL - LOS DATOS DE LA API
  const [taste, setTaste] = useState('all'); // String de sabores (dulce/salado)
  const [type, setType] = useState('all'); // String de tipos de comida (almuerzo, snack, desayuno, cena)
  const [nav, setNav] = useState(''); //para que aparezca el nav
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
    // Filtra recetas que tengan un tipo definido
    const allTypeStrings = food
      .filter(recipe => recipe.type) // Filtra recetas sin tipo definido
      .map((recipe) => JSON.stringify(recipe.type));

    const uniqueTypeStrings = [...new Set(allTypeStrings)];

    // Intenta parsear solo si el tipo es válido
    const uniqueTypes = uniqueTypeStrings.map((typeString) => {
      try {
        return JSON.parse(typeString);
      } catch (error) {
        console.error("Error al parsear tipo de receta:", error);
        return null; // Devuelve null o un valor por defecto si falla el parseo
      }
    }).filter(type => type !== null); // Filtra cualquier valor que no se haya podido parsear

    return uniqueTypes;
  };

  // Filtrar la comida según el tipo seleccionado
  const filterTypes = food.filter((recipe) => {
    if (type === 'all') {
      return true;
    } else {
      return recipe.type && JSON.stringify(recipe.type) === JSON.stringify(type);
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
      <NavBar setNav={setNav}/>

      <Routes>
        <Route path="/login" element={<Login setUser={setUser} />} />
        <Route path="/register" element={<Register />} />
        <Route path="/food" element={<FoodList />} />
      
        <Route path="/food" element={
          <AuthRoute user={user} component={
            <>
              <FilterByTaste allTaste={getTaste()} setTaste={setTaste} />
              <FilterByType allType={getType()} setType={setType} />
              {/* <FilterByIngredients ingredients={setIngredients}/> */}
              <FoodList food={filterFood} />
            </>
          } />
        } />
         
        <Route path="*" element={user ? <Navigate to="/food" /> : <Navigate to="/login" />} />

      </Routes>
    </div>
  );
}

export default App;
