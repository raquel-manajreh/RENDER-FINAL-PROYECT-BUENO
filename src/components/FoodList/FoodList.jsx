import Recipe from "../Recipe/Recipe"

function FoodList({food}) {

    const recipesHtml = food.map((item) => 
    <li key={item.id}><Recipe data={item}/></li>)

  return (
    <div>
      <h1>Nuestras recetas</h1>
      <ul>
        {recipesHtml}
      </ul>
    </div>
  )
}

export default FoodList
