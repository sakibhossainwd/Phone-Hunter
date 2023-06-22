// async await
const loadPones = async(inputValue) => {
    const url = `https://openapi.programming-hero.com/api/phones?search=${inputValue}`
    // console.log(url)
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
    const phonesContainer = document.getElementById('phones-container');
    phonesContainer.innerHTML = ""
    phones.forEach(phone => {
        // console.log(phone.slug);
        const div = document.createElement('div');
        div.classList.add("col");
        div.innerHTML = `
        <div class="card p-3">
        <img src="${phone.image}" class="card-img-top" alt="...">
                <div class="card-body mt-3">
                  <h5 class="card-title fw-bold">Name: ${phone.phone_name}</h5>
                  <p class="fw-medium">Slug: ${phone.slug}</p>
                  <button onclick="loadPhoneDetails(${phone.slug}) "type="button" class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#exampleModal">
    See Details
  </button>
                </div>
        </div>
        `
        phonesContainer.appendChild(div);
    });
}

const phoneDetails = () => {
    const inputField = document.getElementById('seach-Field');
    const inputValue = inputField.value;
    loadPones(inputValue);
    inputField.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
          event.preventDefault();
          document.getElementById("search-btn").click();
        }
      });
      
    inputField.value = ""
}

// modal part


loadPones('iphone');

