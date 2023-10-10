console.log('js file is connected');

// step 01 : load the foods

function loadFood(foodName) {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${foodName}`
    console.log(url);
    try {
        fetch(url)
            .then(res => res.json())
            .then(foods => showFoods(foods.meals))
    } catch (error) {
        console.log(error)
    }
}

//step 02: click search btn for search food
// document.getElementById('search_button').addEventListener('click', function searchFood() {
//     console.log('btn clicked');
//     const searchField = document.getElementById('search_filed');
//     console.log(searchField);
//     const searchValue = searchField.value;
//     console.log(searchValue);
//     const foodName = searchValue;
//     loadFood(foodName);
//     searchField.value = '';
// }
// )

//search btn
document.getElementById('search_button').addEventListener('click', searchFood);

function searchFood() {
    const searchField = document.getElementById('search_field');
    const searchValue = searchField.value;
    console.log(searchValue);
    const foodName = searchValue;
    loadFood(foodName);
    searchField.value = '';
  }
  
  

//step 03: show foods
const showFoods = foods => {
    console.log(foods);

    //get the container
    const foodContainer = document.getElementById('food_container');

    foodContainer.innerHTML = '';

    //get the per food data
    for (const food of foods) {
        console.log(food);
        const foodId = food.idMeal
        const foodName = food.strMeal;
        const foodCountry = food.strArea;
        const foodImg = food.strMealThumb;
        const foodLink = food.strSource;
        const foodYoutube = food.strYoutube;

        //create the card
        const card = document.createElement('div');
        card.className = 'flex space-x-4 w-1/2 bg-white rounded-lg shadow-lg p-4 mx-8';
        //card html 
        card.innerHTML = `
        <img id="" class=" food_img w-96 rounded-lg h-96" src="${foodImg}">
        <div id="" class="food_data w-full">
        <h1 class="text-2xl font-bold ms-4">${foodName}</h1>
        <h1>Country: ${foodCountry}</h1>
        <p>Food Id: ${foodId}</p>
        <btn class="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 mt-4">Details</btn>
        </div>
        `
        //append the card
        foodContainer.appendChild(card)

        // document.getElementsByClassName("food_img").style.padding = "50px 10px 20px 30px";
        // document.getElementsByClassName("food_data").style.margin = "50px 10px 20px 30px";
        // console.log(object);

        var foodImgElements = document.getElementsByClassName("food_img");
        for (var i = 0; i < foodImgElements.length; i++) {
            foodImgElements[i].style.padding = "50px 10px 20px 30px";
        }

        var foodDataElements = document.getElementsByClassName("food_data");
        for (var i = 0; i < foodDataElements.length; i++) {
            foodDataElements[i].style.margin = "50px 10px 20px 30px";
        }

    }
}

const foodName = 'meat'
loadFood(foodName)

// Function to fetch and load food data
/* async function loadFood(foodName) {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${foodName}`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const { meals } = await response.json();
        showFoods(meals);
    } catch (error) {
        console.error(error);
    }
}

// Function to create a food card
// function createFoodCard(food) {
//     const { idMeal, strMeal, strArea, strMealThumb } = food;
    
//     const card = document.createElement('div');
//     card.className = 'flex flex-col md:flex-row bg-white rounded-lg shadow-lg p-4 mx-8 mb-4';

//     card.innerHTML = `
//         <img class="w-1/2 md:w-1/3" src="${strMealThumb}" alt="${strMeal}">
//         <div class="w-full md:w-2/3 p-4">
//             <h1 class="text-2xl font-bold">${strMeal}</h1>
//             <h1>Country: ${strArea}</h1>
//             <p>Food Id: ${idMeal}</p>
//             <button class="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Details</button>
//         </div>
//     `;

//     return card;
// }

// Function to create a food card
function createFoodCard(food) {
    const { idMeal, strMeal, strArea, strMealThumb } = food;
    
    const card = document.createElement('div');
    card.className = 'flex flex-col md:flex-row bg-white rounded-lg shadow-lg p-4 mx-2 mb-4';

    card.innerHTML = `
        <img class="w-full md:w-1/3" src="${strMealThumb}" alt="${strMeal}">
        <div class="w-full md:w-2/3 p-4">
            <h1 class="text-2xl font-bold">${strMeal}</h1>
            <h1>Country: ${strArea}</h1>
            <p>Food Id: ${idMeal}</p>
            <button class="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Details</button>
        </div>
    `;

    return card;
}

// Function to show foods
function showFoods(foods) {
    const foodContainer = document.getElementById('food_container');
    foodContainer.innerHTML = ''; // Clear previous results
    
    if (!foods) {
        // Handle the case when no results are found
        foodContainer.textContent = 'No results found.';
        return;
    }

    foods.forEach(food => {
        const card = createFoodCard(food);
        foodContainer.appendChild(card);
    });
}

// Event listener for the search button
document.getElementById('search_button').addEventListener('click', () => {
    const searchValue = document.getElementById('search_field').value;
    loadFood(searchValue);
});

// Initial load (you can remove this if you want to load results only when the search button is clicked)
const initialFoodName = 'meat';
loadFood(initialFoodName); */