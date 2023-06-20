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
    // console.log(phones);
    const phonesContainer = document.getElementById('phones-container');
    phonesContainer.innerHTML = ""
    phones.forEach(phone => {
        // console.log(phone.slug);
        const div = document.createElement('div');
        div.classList.add("card");
        div.innerHTML = `
        <img src="${phone.image}" class="card-img-top py-3" alt="...">
                <div class="card-body">
                  <h5 class="card-title">Name: ${phone.phone_name}</h5>
                  <h6 class="card-title">Slug: ${phone.slug}</h6>
                  <button onclick="loadPhoneDetails(${phone.slug})" type="button" class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#exampleModal">
    See Details
  </button>
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
const loadPhoneDetails = phoneId => {
    // console.log(phoneId);
    const url = `https://openapi.programming-hero.com/api/phone/${phoneId}`;
    fetch(url)
    .then(res => res.json())
    .then(data => PhonesDetails(data))
}

const PhonesDetails = phone => {
    // console.log(phone)
    const modalTitle = document.getElementById('exampleModalLabel');
    modalTitle.innerText = `${phone.name}`
    const modalContainer = document.getElementById('modal-container');
    modalContainer.innerHTML = `
    <h4>Brand: ${phone.brand}</h4>
    <h4>Slug: ${phone.slug}</h4>
    `
}


loadPones('iphone');

