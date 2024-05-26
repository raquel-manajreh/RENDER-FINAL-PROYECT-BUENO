const getDataApi = () => {
    return fetch ('https://66505467ec9b4a4a60319fe4.mockapi.io/api/menusemanal/foods')
    .then(response => response.json())
    .then((data) => {
        const dataInfo = data.map((item) => {
            return {
                name: item.name,
                image: item.image,
                description: item.description,
                taste: item.taste,
                ingredients: item.ingredients,
                type: item.type,
              };
        });
        return dataInfo;
    });
};

export default getDataApi;
