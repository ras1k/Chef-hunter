const Recipe = ({ recipe }) => {

    const { name, ingredients, cooking_method } = recipe;

    return (
        <div>
            <h1> <span className='text-yellow-950 text-[16px] font-[500]'>Recipe:</span> {name}</h1>
            <div>
                <h1 className='text-yellow-950 text-[16px] font-[500]'>Ingredients</h1>
                {
                    ingredients.map(ingredient => <li key={ingredient.id}> {ingredient}</li>)
                }
                <p> <span className='text-yellow-950  font-[500]'>Cooking Method: </span>{cooking_method}</p>
            </div>
        </div>
    );
};

export default Recipe;