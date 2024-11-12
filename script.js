var res = fetch("https://restcountries.com/v3.1/all");
res.then((data)=>{
    return data.json();
}).then((data1)=>{
     datafirst(data1);
}).catch((error)=> console.log(error));

var maindiv = document.createElement("div");
maindiv.className = "container";
maindiv.setAttribute("style","flex");
var row = document.createElement("div");
// row.className = "row ";




function datafirst(data1){
    for(var i=0;i<data1.length;i++){
       
        var col = document.createElement("div");
       col.className = "col-lg-4";
        col.innerHTML = `<div class="card border-primary mb-3 col-lg-4" style="max-width: 18rem; background-color:pink;">
  <div class="card-header">${data1[i].name.common}</div>
  <div class="card-body text-primary">
    <h5 class="card-title">Primary card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
  </div>`;
row.append(col);
maindiv.append(row);
document.body.append(maindiv);
    
    }
}