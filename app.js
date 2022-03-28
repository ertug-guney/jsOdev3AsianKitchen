const menu = [
  {
    id: 1,
    title: "Tteokbokki",
    category: "Korea",
    price: 10.99,
    img:
      "https://twoplaidaprons.com/wp-content/uploads/2020/09/tteokbokki-top-down-view-of-tteokbokki-in-a-bowl-500x500.jpg",
    desc: `Spicy rice cakes, serving with fish cake.`,
  },
  {
    id: 2,
    title: "Chicken Ramen",
    category: "Japan",
    price: 7.99,
    img:
      "https://www.forkknifeswoon.com/wp-content/uploads/2014/10/simple-homemade-chicken-ramen-fork-knife-swoon-01.jpg",
    desc: `Chicken noodle soup, serving with vegetables such as soy bean, green onion. In an optional you can ask for egg. `,
  },
  {
    id: 3,
    title: "Bibimbap",
    category: "Korea",
    price: 8.99,
    img:
      "https://dwellbymichelle.com/wp-content/uploads/2020/05/DWELL-bibimbap.jpg",
    desc: `Boiling vegetables, serving with special hot sauce`,
  },
  {
    id: 4,
    title: "Dan Dan Mian",
    category: "China",
    price: 5.99,
    img:
      "https://www.savingdessert.com/wp-content/uploads/2019/02/Dan-Dan-Noodles-10.jpg",
    desc: `Dan dan noodle, serving with green onion `,
  },
  {
    id: 5,
    title: "Yangzhou Fried Rice",
    category: "China",
    price: 12.99,
    img:
      "https://salu-salo.com/wp-content/uploads/2013/02/Yangzhou-Fried-Rice1.jpg",
    desc: `Yangzhou style fried rice, serving with bean and pickles `,
  },
  {
    id: 6,
    title: "Onigiri",
    category: "Japan",
    price: 9.99,
    img:
      "https://www.manusmenu.com/wp-content/uploads/2017/08/Onigiri-3-1-of-1.jpg",
    desc: `Rice Sandwich, serving with soy sauce`,
  },
  {
    id: 7,
    title: "Jajangmyeon",
    category: "Korea",
    price: 15.99,
    img:
      "https://www.curiouscuisiniere.com/wp-content/uploads/2020/04/Jajangmyeon-Korean-Noodles-in-Black-Bean-Sauce5.1200H-720x540.jpg",
    desc: `Black bean sauce noodle, serving with green onion `,
  },
  {
    id: 8,
    title: "Ma Yi Shang Shu",
    category: "China",
    price: 12.99,
    img:
      "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/F688C2F6-86EC-46C4-B9C7-A6BA01DF7437/Derivates/32E3E72A-F786-406D-AF7F-B30980A9AC6C.jpg",
    desc: `Hot pepper sauce noodle, serving with soy bean and onion`,
  },
  {
    id: 9,
    title: "Doroyaki",
    category: "Japan",
    price: 3.99,
    img:
      "https://www.justonecookbook.com/wp-content/uploads/2011/10/Dorayaki-New-500x400.jpg",
    desc: `Red bean paste dessert, serving with honey.`,
  },
];

// Mevcut html elementlerine ulaşan domların tanımlanması

let menuDOM = document.querySelector('.menu')
let buttonDOM = document.querySelector('.btn-container')
let sectionCenterDOM = document.querySelector('.section-center')


// Butonların oluşturulması
let buttonAll = document.createElement('button')
buttonAll.classList.add("btn", "btn-outline-dark", "btn-item")
buttonAll.setAttribute("data-id", "All")
buttonAll.innerHTML = "All";

let buttonKorea = document.createElement('button')
buttonKorea.classList.add("btn", "btn-outline-dark", "btn-item")
buttonKorea.setAttribute("data-id", "Korea")
buttonKorea.innerHTML = "Korea";

let buttonJapan = document.createElement('button')
buttonJapan.classList.add("btn", "btn-outline-dark", "btn-item")
buttonJapan.setAttribute("data-id", "Japan")
buttonJapan.innerHTML = "Japan";

let buttonChina = document.createElement('button')
buttonChina.classList.add("btn", "btn-outline-dark", "btn-item")
buttonChina.setAttribute("data-id", "China")
buttonChina.innerHTML = "China";

buttonDOM.append(buttonAll, buttonKorea, buttonJapan, buttonChina)

// Sayfa açıldığında tüm menünün açılması

window.addEventListener('load', kitchenSelectl)

function kitchenSelectl(event) {
  event.preventDefault()
  kitchen("All")
}

// All butonuna click edildiğinde tüm menunun görünmesi

let allDOM = document.querySelector(`button[data-id="All"]`)
allDOM.addEventListener('click', kitchenSelecta)

function kitchenSelecta(event) {
  event.preventDefault()
  kitchen("All")
}

// Korea butonuna click edildiğinde Kore yemeklerinin çıkması

let koreaDOM = document.querySelector(`button[data-id="Korea"]`)
koreaDOM.addEventListener('click', kitchenSelectk)

function kitchenSelectk(event) {
  event.preventDefault()

  kitchen("Korea")
}

// Japan butonuna click edildiğinde Japon yemeklerinin çıkması

let japanDOM = document.querySelector(`button[data-id="Japan"]`)
japanDOM.addEventListener('click', kitchenSelectj)

function kitchenSelectj(e) {
  e.preventDefault()

  kitchen("Japan");
}

// China butonuna click edildiğinde Çin yemeklerinin çıkması


let chinaDOM = document.querySelector(`button[data-id="China"]`)
chinaDOM.addEventListener('click', kitchenSelectc)

function kitchenSelectc(ev) {
  ev.preventDefault()

  kitchen("China")
}

// Kitchen fonksiyonu ile ülke menüleri array inin oluşturulması ve sonrasında bu arraye göre html'de menü detaylarını gösteren elementlerin oluşturulması

function kitchen(country) {
  sectionCenterDOM.innerHTML = ""

  if (`${country}` == "All") {
    newMenu = [...menu]
  } else {
    newMenu = menu.filter(newFunc)
    function newFunc(men) {
      return men["category"] === `${country}`;
    }
  }

  for (let i = 0; i < newMenu.length; i++) {
    let divMenuItems = document.createElement("div");
    divMenuItems.classList.add("menu-items", "col-lg-6", "col-sm-12");

    let img = document.createElement("img");
    img.src = newMenu[i]["img"];
    img.alt = newMenu[i]["title"];
    img.classList.add("photo");


    let divMenuInfo = document.createElement("div");
    divMenuInfo.classList.add("menu-info");

    let divMenuTitle = document.createElement("div");
    divMenuTitle.classList.add("menu-title");

    let h4 = document.createElement("h4");
    h4.innerHTML = `${newMenu[i]["title"]}`;

    let h4Price = document.createElement('h4');
    h4Price.classList.add('price');
    h4Price.innerHTML = `${newMenu[i]["price"]}`;

    let divMenuText = document.createElement('div');
    divMenuText.classList.add('menu-text');
    divMenuText.innerHTML = `${newMenu[i]["desc"]}`;

    divMenuTitle.appendChild(h4);
    divMenuTitle.appendChild(h4Price);
    divMenuInfo.appendChild(divMenuTitle);
    divMenuInfo.appendChild(divMenuText);
    divMenuItems.appendChild(img);
    divMenuItems.appendChild(divMenuInfo);
    sectionCenterDOM.appendChild(divMenuItems);
  }
}

