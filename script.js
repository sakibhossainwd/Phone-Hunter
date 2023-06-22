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
    // limited phone show
    const showMore = document.getElementById('show-more');
    if(phones.length > 10){
        phones =phones.slice(0, 6)
        showMore.classList.remove('d-none')
    }
    else{
        showMore.classList.add('d-none')
    }
    // dislay no phone found
    const noPhone = document.getElementById('no-phone');
    if(phones.length === 0){
        noPhone.classList.remove('d-none');
        // showMore.classList.add('d-none')
    }
    else {
        noPhone.classList.add('d-none');
    }
    // display all phones
    phones.forEach(phone => {
        // console.log(phone.slug);
        const div = document.createElement('div');
        div.classList.add("col");
        div.innerHTML = `
        <div class="card p-3 mb-3">
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
    // stop reload spiner
    toggleSpinner(false)
}


// handle seaach button click
document.getElementById('search-btn').addEventListener('click', function(){
    // start reload spiner
    toggleSpinner(true)
    const inputField = document.getElementById('seach-Field');
    const inputValue = inputField.value;
    if(inputValue === ''){
        alert('Please Enter your phone name');
    }
    loadPones(inputValue);
    // inputField.addEventListener("keypress", function(event) {
    //             if (event.key === "Enter") {
    //               event.preventDefault();
    //               document.getElementById("search-btn").click();
    //             }
    //           });
    inputField.value = ''

})

const toggleSpinner = isLoading => {
    const reloadSpiner = document.getElementById('reload-spiner');
    if(isLoading){
        reloadSpiner.classList.remove('d-none')
    }
    else{
        reloadSpiner.classList.add('d-none')
    }
}

loadPones('iphone');

