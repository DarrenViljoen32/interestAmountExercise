//Interest amount

//function to calculate the interest of a given price
function interest(){
    let enterPrice = document.getElementsByTagName(`input`)[0].value;
    let enterPercent = document.getElementsByTagName(`input`)[1].value;

    //validation. must be a number
    let text;
     if(isNaN(enterPrice || enterPercent)){
         text = `Input not valid. Please enter a number.`;
     }else{
         text = ``;
     }
     document.getElementsByTagName(`p`)[1].innerText = text;

     //calculation
     let result = enterPercent / enterPrice;
     let newResult = result * 100;
     return document.getElementsByTagName(`input`)[2].value = `${enterPercent}% of ${enterPrice} is ${newResult.toFixed(2)}%`;
}

