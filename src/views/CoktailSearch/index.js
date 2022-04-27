import SearchInput from "./Components/SearchInput";
import {useState, useEffect} from 'react';
import axios from 'axios';
import CoktailCard from "./Components/CocktailCard";


function CoktailSearch(){

    const [currDrink, setCurrDrink] = useState("")
    const [cocktailList, setCocktailList] = useState([])

    const handleChange = function(event){
        setCurrDrink(event.target.value)
    }

    const handleSubmit = function(event){
        axios(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${currDrink}`)
        .then(function(response){
            setCocktailList(response.data.drinks)
           
        }).catch(function(error){
            console.log(error)
        })
    }
    console.log(cocktailList)


        



    return (
        <div>
            <SearchInput handleChange={handleChange} handleSubmit={handleSubmit}/>
            
            {cocktailList.map(function(coktail){
                return (
                    <CoktailCard drinks={coktail}/>    
                )   
            }
            )}
        </div>
    )
}

export default CoktailSearch;