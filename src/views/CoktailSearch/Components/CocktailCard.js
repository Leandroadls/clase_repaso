function CoktailCard({drinks}){
    return(
           <div>
                <h1>{drinks.strDrink}</h1>
                    <ul>
                        <li>Alcoholic: {drinks.strAlcoholic}</li>
                        <li>Category: {drinks.strCategory}</li>
                        <li>Glass: {drinks.strGlass}</li>
                    </ul>
            </div>
    )    
}

export default CoktailCard;
