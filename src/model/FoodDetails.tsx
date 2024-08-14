interface FoodDetails {
    image: string;
    title: string;
    readyInMinutes: number,
    vegetarian: boolean,
    servings: number,
    vegan: boolean,
    pricePerServing: number,
    analyzedInstructions: [{
        name: "",
        steps: [{
            number: number,
            step: string
        }]
    }],
    extendedIngredients: [{
        original: string,
        image: string
    }]
}

export default FoodDetails;