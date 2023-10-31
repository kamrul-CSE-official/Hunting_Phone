async function loadPhones(search = "iphone") {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/phones?search=${search}`
  );
  const data = await res.json();
  const phones = data.data;
  getAllPhones(phones);
}
loadPhones();

async function getAllPhones(phones) {
  const phonesContener = document.getElementById("phones-contener");
  phonesContener.textContent = "";
  phones.forEach((phone) => {
    console.log(phone);
    const phoneCard = document.createElement("div");
    phoneCard.classList = "card max-w-96 bg-base-100 shadow-xl";
    phoneCard.innerHTML = `
        <figure><img src="${phone.image}" alt="Shoes" /></figure>
            <div class="card-body">
                <h2 class="card-title">${phone.phone_name}</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div class="card-actions justify-end">
                <button class="btn btn-primary">Buy Now</button>
                </div>
            </div>
        `;
    phonesContener.appendChild(phoneCard);
  });
}

// handle search button
const handleSearch = () => {
  const searchField = document.getElementById("search-field");
  const searchText = searchField.value;
  loadPhones(searchText);
};
