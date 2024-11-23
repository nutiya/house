const url = "https://fakestoreapi.com/products?limit=20";
async function fetchData(){
    const response = await fetch(url);
    const data = await response.json();
    
    root.innerHTML = data.map(e =>
        
        `
            <div class="card overflow-hidden p-0" style="width: 18rem;">
                <div style="height: 300px; width: 100%;" class="overflow-hidden d-flex justify-content-center">
                    <img src="${e.image}" class="h-100 " alt="...">
                </div>
                <div class="card-body">
                    <h5 class="card-title text-wrap overflow-hidden" style="height: 50px; width: 100%;" >${e.title}</h5>
                    <p class="card-text fw-bolder fs-5">${e.price}$</p>
                    <p class="card-text text-wrap overflow-hidden" style="height: 100px; width: 100%; ">${e.description}</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        `

    )



}

fetchData();
