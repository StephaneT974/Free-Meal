const contentContainer = document.querySelector(".contentContainer");
const search = document.getElementById("search");
const range = document.getElementById("range");
const displayRange = document.getElementById("displayRange");
const croissant = document.getElementById("croissant");
const decroissant = document.getElementById("decroissant");


let tri = "";
let plat = [];

const fetchMeal = ()  => {
fetch ("https://www.themealdb.com/api/json/v1/1/search.php?s=" + search.value)
.then((response) => response.json())
.then((data) => {console.log(data)

plat = data.meals
displayMeal();

}
);
};

displayMeal =  () => {

    contentContainer.innerHTML ="";

    plat.slice(0,range.value)

    .sort((p1, p2) => {
        if (tri === "croissant") {  

            return p1.strMeal.localeCompare(p2.strMeal)
          
    
        } else if(tri === "decroissant") {
            return p2.strMeal.localeCompare(p1.strMeal);

        } 
    })


   .map((m) => {

        contentContainer.innerHTML += `

        <div class="cardContainer">

            <h3>${m.strMeal}</h3>
            <img src="${m.strMealThumb}">
            <p>${m.strInstructions}</p>


        </div>
        ` ; 
 }
    );
}


search.addEventListener("change" , () => {
    fetchMeal();
});


range.addEventListener("input" , () => {
    displayRange.textContent = range.value ;
    displayMeal();
});

croissant.addEventListener("click", () => {
    tri = "croissant";
    displayMeal();
    
});

decroissant.addEventListener("click", () => {
    tri = "decroissant";
    displayMeal();
    
});


fetchMeal();
