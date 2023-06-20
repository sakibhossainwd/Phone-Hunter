// async await
const loadPones = async() => {
    const url = `https://openapi.programming-hero.com/api/phones?search=samsung`
    // main async await steps

    // const res = await fetch(url);
    // const data = await res.json();
    // displayMealDetails(data)

    // add error and async await
    try{
        const res = await fetch(url);
        const data = await res.json();
        displayPhonesDetails(data.data)
    }
    catch(error){
        console.log('Error:- ', error)
    }
};

const displayPhonesDetails = phones => {
    console.log(phones);
    const phonesContainer = document.getElementById('phones-container');
    phones.forEach(phone => {
        console.log(phone);
        const div = document.createElement('div');
        div.classList.add("card");
        div.innerHTML = `
        <img src="${phone.image}" class="card-img-top py-3" alt="...">
                <div class="card-body">
                  <h5 class="card-title">Name: ${phone.phone_name}</h5>
                  <h6 class="card-title">Slug: ${phone.slug}</h6>
                  <button class="btn btn-warning">See Details</button>
                </div>
        `
        phonesContainer.appendChild(div);
    });
}


loadPones();