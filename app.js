function getRandomActivity(){
    axios.request({
        url : "https://www.boredapi.com/api/activity/",
    }).then(graSuccess).catch(graFailure);
}

function getPriceRanges(){
    axios.request({
        url : "https://www.boredapi.com/api/activity?minprice=0&maxprice=0.1",
    }).then(gprSuccess).catch(gprFailure);
}

//Used brakpoints to find the eact location of data point as i was getting undefined previously 
function gprSuccess(response){
    let data = response.data.price;
    document.body.insertAdjacentHTML(`beforeend`, `<h1>${data}</h1>`);
    console.log(data);
}

function gprFailure(error){
    document.body.insertAdjacentHTML(`beforeend`,`<h1>FAILURE!</h1>`);
    console.log(error);
}

//Always press the button on the page then the debugger will show you the data you want and where exactly its located
function graSuccess(response){
    let data = response.data.activity;
    document.body.insertAdjacentHTML(`beforeend`, `<h1>${data}</h1>`);
    console.log(data);
}

function graFailure(error){
    document.body.insertAdjacentHTML(`beforeend`,`<h1>FAILURE!</h1>`);
    console.log(error);
}

//Event Listeners
document.getElementById(`smashButton`).addEventListener(`click`,getRandomActivity);
document.getElementById(`smashSubmit`).addEventListener(`click`, getPriceRanges);