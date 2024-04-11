import axios from 'axios'

document.addEventListener('DOMContentLoaded', function() {
    const page1 = document.getElementById('page1');
    const page2 = document.getElementById('page2');
    const button = document.querySelector('.btn');
   
  
    // Function to toggle visibility between pages
    function togglePages() {
      page1.classList.toggle('d-none'); // Toggle visibility of page1
      page2.classList.toggle('d-none'); // Toggle visibility of page2
    }
  
    // Event listener for button click
    button.addEventListener('click', togglePages);
  });
  let measurements1 = '';
  let measurements2 = '';
  let measurements3 = '';
  let measurements4 = '';
  let measurements5 = '';
  let instructions = '';
  let randrink = '';
  let ing1 = '';
  let ing2 = '';
  let ing3 = '';
  let ing4 = '';
  let ing5 = '';
  function randomDrink(){
    axios.get('https://www.thecocktaildb.com/api/json/v1/1/random.php')
    .then (response => {
        console.log('drink data', response.data)
        randrink = response.data.drinks[0].strDrink;
        let ing1 = response.data.drinks[0].strIngredient1
        let ing2 = response.data.drinks[0].strIngredient2
        let ing3 = response.data.drinks[0].strIngredient3
        let ing4 = response.data.drinks[0].strIngredient4
        let ing5 = response.data.drinks[0].strIngredient5
        let instructions = response.data.drinks[0].strInstructions
        let measurements1 = response.data.drinks[0].strMeasure1
        let measurements2 = response.data.drinks[0].strMeasure2
        let measurements3 = response.data.drinks[0].strMeasure3
        let measurements4 = response.data.drinks[0].strMeasure4
        let measurements5 = response.data.drinks[0].strMeasure5

        document.getElementById('meas1').textContent = measurements1
        document.getElementById('meas2').textContent = measurements2
        document.getElementById('meas3').textContent = measurements3
        document.getElementById('meas4').textContent = measurements4
        document.getElementById('meas5').textContent = measurements5


      document.getElementById('inge1').textContent = ing1;
      document.getElementById('inge2').textContent = ing2;
      document.getElementById('inge3').textContent = ing3;
      document.getElementById('inge4').textContent = ing4;
      document.getElementById('inge5').textContent = ing5;
      document.getElementById('inst').textContent = instructions;
       

        document.getElementById('yourdrink').textContent = randrink;

    })
    .catch(error => {
        console.log('error', error)
    })
  }
  randomDrink()