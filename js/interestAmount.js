//Interest amount

//function to calculate the interest of a given price
function interest(){
    let enterPrice = document.getElementsByTagName(`input`)[0].value;

    //validation. must be a number
    let text;
     if(isNaN(enterPrice)){
         text = `Input not valid. Please enter a number.`;
     }else{
         text = ``;
     }
     document.getElementsByTagName(`p`)[1].innerText = text;

     //calculation
     let result = 0.15 * enterPrice;
     let newResult = result + enterPrice;
     return document.getElementsByTagName(`input`)[1].value = `Interest Amount is: ${newResult}`;
}