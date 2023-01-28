// const URL = "https://restcountries.com/v3.1/all";
// fetch(URL)
//   .then((respons) => respons.json())
//   .then((data) => console.log(data));

// const ülkeler = (data) => {
//   data.forEach((a) => {
//     console.log(a.flags.png);
//   });
// };
// const select = document.querySelector(".select");

// const getCountries = async () => {
//   const URL = "https://restcountries.com/v3.1/all";
//   try {
//     const res = await fetch(URL);
//     const data = await res.json();
//     flag(data);
//   } catch (error) {
//     renderError(error);
//   }
// };

// getCountries();

// const flag = (data) => {
//   console.log(data);
//   country=data
//   country.forEach((e) => {
//     // console.log(e.name.common);
//     const countriesNAmes = e.name.common;
//     select.innerHTML += `
//     <option>${countriesNAmes}</option>
//     `;
//   });
// };

// select.addEventListener("change",(e)=>{
//     console.log(select.value);
//     const a =country.filter(x=>x.name.common === select.value )
//     // console.log(country);
//     console.log(a);

//     const { }= a



// })


// const URL = "https://restcountries.com/v3.1/all";
// fetch(URL)
// .then((respons)=>respons.json())
// .then((data)=>ülkeler(data))

// const ülkeler = (data) => {
// data.forEach(a => {
// const country= (a.name.common);
// console.log(country);
// const select = document.querySelector(".select");
// select.innerHTML+=`
// <Option>${country}</Option>
// `
// });
// };
const main = document.querySelector(".main");
const select = document.querySelector(".select");
const getCountries = async () => {
  const URL = "https://restcountries.com/v3.1/all";

  //Apiden veri gelirse
  try {
    const res = await fetch(URL);
    const data = await res.json();
    veri = data;
    flag(data);
  } catch (error) {
    //apiden veri gelmezse
    renderError(error);
  }
};

getCountries();

const flag = (data) => {
  data.forEach((e) => {
    const ülker = e.name.common;
    // console.log(ülker);

    select.innerHTML += `
<option value="${ülker}">${ülker}</option>`;
  });
};

select.addEventListener("change", (e) => {
  const tablo = veri.filter((x) => {
    return x.name.common === select.value;
  });
  console.log(tablo);

  const {
    region,
    capital,
    languages,
    currencies,
    population,
    borders,
    maps: { googleMaps },
    flags: { svg },
    name: { common },
  } = tablo[0];

  main.innerHTML = `

<div class="card" style="width: 18rem;">

  <img src="${svg}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${common}</h5>

  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item"><i class="fa-solid fa-earth-americas"></i>

<span class="fw-bold">Region: </span>${region}</li>
    <li class="list-group-item"><i class="fas fa-lg fa-landmark"></i>

<span class="fw-bold">Capital: </span>${capital}</li>
    <li class="list-group-item"><i class="fas fa-lg fa-comments"></i>
<span class="fw-bold">Languages: </span>${Object.values(languages)}</li>
    <li class="list-group-item"><i class="fas fa-lg fa-money-bill-wave"></i>
<span class="fw-bold">Currencies: </span>${
    Object.values(currencies)[0].name
  }, <span>${Object.values(currencies)[0].symbol}</span></li>
    <li class="list-group-item"><i class="fa-solid fa-people-group"></i>
<span class="fw-bold">Population: </span>${population.toLocaleString(
    "en-US"
  )}</li>
    <li class="list-group-item"><i class="fa-sharp fa-solid fa-road-barrier"></i>
<span class="fw-bold">Borders: </span>${borders ? borders : "None"}</li>
    <li class="list-group-item"><i class="fa-solid fa-map-location-dot"></i> <span class="fw-bold">MAP: </span><a href="${googleMaps}" target="_blank">Go to Google Map</a></li>
  </ul>
  
`;
});