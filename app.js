const mealButton = document.getElementById("button");
const mealElement = document.getElementById("meal1");
const mealIcon = document.getElementById("logo");
const mealInstructions = document.getElementById("mealInstructions");

document.addEventListener("DOMContentLoaded", getmeal);
mealButton.addEventListener("click", getmeal);

async function getmeal(e) {
  e.preventDefault();
  try {
    const meal = await fetch(
      "https://www.themealdb.com/api/json/v1/1/random.php"
    );

    const mealData = await meal.json();
    console.log(mealData);
    mealElement.innerHTML = mealData.meals[0].strMeal;
    mealIcon.src = mealData.meals[0].strMealThumb;
    mealInstructions.innerHTML = mealData.meals[0].strInstructions;
  } catch (error) {
    console.log(error);
  }
}
