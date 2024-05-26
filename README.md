# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

______________________________________________________

1º Instalo react-router-dom para hacer que mi componente navegue según mi usuario esté o no Logeado. 
2º. Creo un componente de api de Java Script, donde haré la petición a mi api, con la información de cada comida que mostraré después.
3º. Creo el componente de FoodList, donde mostrare en mi web el listado de las comidas, con su información(nombre, imagen, descripción, etc).
4º Creo el componente Recipe, con cada item que quiero mostrar posteriormente en mi web a través de FoodList, y se lo mando por props a foodList, añandiéndolo después también a nuestra app para que se muestre finalmente en el html el listado de cada receta con su informacion.