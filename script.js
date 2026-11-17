
const homePage = document.getElementById("home-page");
const projectPage = document.getElementById("project-page");

const backButton = document.getElementById("back-button");
const projectNumber = document.getElementById("project-number");
const projectTitle = document.getElementById("project-title");
const projectDescription = document.getElementById("project-description");

let currentRoom = null;

// Şimdilik örnek proje bilgileri.
// Daha sonra kendi projelerimizin isimlerini ve metinlerini yazacağız.




const projects = {
  "01": {
    title: "ILMEK",
    description: "A fashion runway venue in Fatih, Istanbul, designed for fashion shows and brand events, with a restaurant on the lower floor.",
    images: [
      { src: "images/01-ilmek/01.jpg", caption: "Main Perspective" },
      { src: "images/01-ilmek/02.jpg", caption: "Floor Plan" },
      { src: "images/01-ilmek/03.jpg", caption: "Section Drawing" },
      { src: "images/01-ilmek/04.jpg", caption: "Physical Model" },
      { src: "images/01-ilmek/05.jpg", caption: "Design Process" },
      { src: "images/01-ilmek/06.jpg", caption: "Interior Perspective" },
      { src: "images/01-ilmek/07.jpg", caption: "Architectural Drawing" },
      { src: "images/01-ilmek/08.jpg", caption: "Additional View" }
    ]
  },

  "02": {
    title: "MENEKŞE",
    description: "An ongoing adaptive reuse project transforming the historic Menekşe Match Factory into a Museum of Rights exploring justice and social equality.",
    images: [
      { src: "images/02-menekse/01.jpg", caption: "Main Perspective" },
      { src: "images/02-menekse/02.jpg", caption: "Floor Plan" },
      { src: "images/02-menekse/03.jpg", caption: "Section Drawing" },
      { src: "images/02-menekse/04.jpg", caption: "Physical Model" },
      { src: "images/02-menekse/05.jpg", caption: "Design Process" },
      { src: "images/02-menekse/06.jpg", caption: "Perspective" },
      { src: "images/02-menekse/07.jpg", caption: "Additional View" }
    ]
  },

  "03": {
    title: "RAKKS-I MEKAN",
    description: "A flexible cultural venue that transforms throughout the day, functioning as a conference and work space by day and a nightclub by night.",
    images: [
      { src: "images/03-rakks-i-mekan/01.jpg", caption: "Main Perspective" },
      { src: "images/03-rakks-i-mekan/02.jpg", caption: "Floor Plan" },
      { src: "images/03-rakks-i-mekan/03.jpg", caption: "Section Drawing" },
      { src: "images/03-rakks-i-mekan/04.jpg", caption: "Physical Model" },
      { src: "images/03-rakks-i-mekan/05.jpg", caption: "Design Process" },
      { src: "images/03-rakks-i-mekan/06.jpg", caption: "Perspective" },
      { src: "images/03-rakks-i-mekan/07.jpg", caption: "Additional View" }
    ]
  },

  "04": {
    title: "SALT & BASS",
    description: "A two-storey dental clinic in Güzelbahçe, İzmir, designed to bring together functional healthcare spaces and a welcoming atmosphere.",
    images: [
      { src: "images/04-salt-bass/01.jpg", caption: "Main Perspective" },
      { src: "images/04-salt-bass/02.jpg", caption: "Floor Plan" },
      { src: "images/04-salt-bass/03.jpg", caption: "Section Drawing" },
      { src: "images/04-salt-bass/04.jpg", caption: "Physical Model" },
      { src: "images/04-salt-bass/05.jpg", caption: "Design Process" },
      { src: "images/04-salt-bass/06.jpg", caption: "Interior Perspective" },
      { src: "images/04-salt-bass/07.jpg", caption: "Additional View" }
    ]
  },

  "05": {
    title: "GÜZELBAHÇE DİŞ KLİNİĞİ",
    description: "An architectural design project exploring the spatial organization and atmosphere of a dental clinic.",
    images: [
      { src: "images/05-guzelbahce-dis-klinigi/01.jpg", caption: "Main Perspective" },
      { src: "images/05-guzelbahce-dis-klinigi/02.jpg", caption: "Floor Plan" },
      { src: "images/05-guzelbahce-dis-klinigi/03.jpg", caption: "Section Drawing" },
      { src: "images/05-guzelbahce-dis-klinigi/04.jpg", caption: "Elevation Drawing" },
      { src: "images/05-guzelbahce-dis-klinigi/05.jpg", caption: "Physical Model" },
      { src: "images/05-guzelbahce-dis-klinigi/06.jpg", caption: "Interior Perspective" },
      { src: "images/05-guzelbahce-dis-klinigi/07.jpg", caption: "Additional View" }
    ]
  }
};




// Daha önce ziyaret edilen odaları hatırla.
let visitedRooms = [];
let finalShown = false;


// Bir odaya tıklanınca proje sayfasını aç.
document.querySelectorAll(".room").forEach(room => {
  room.addEventListener("click", () => {
    currentRoom = room.dataset.room;

    projectNumber.textContent = currentRoom;
    projectTitle.textContent = projects[currentRoom].title;
    projectDescription.textContent = projects[currentRoom].description;


const gallery = document.getElementById("project-gallery");

gallery.innerHTML = "";

projects[currentRoom].images.forEach((image, index) => {
  const item = document.createElement("div");

  item.className = "project-image";

  if (index === 0 || index % 4 === 0) {
    item.classList.add("wide");
  }

  const img = document.createElement("img");
  img.src = image.src;
  img.alt = image.caption || "Project image";

  item.appendChild(img);
  gallery.appendChild(item);
});


    homePage.classList.add("hidden");
    projectPage.classList.remove("hidden");

    window.scrollTo(0, 0);
  });
});


// Projeden ana plana geri dön.

backButton.addEventListener("click", () => {

  if (currentRoom && !visitedRooms.includes(currentRoom)) {
    visitedRooms.push(currentRoom);
  }

  drawVisitedRooms();

  projectPage.classList.add("hidden");
  homePage.classList.remove("hidden");

  window.scrollTo(0, 0);

  if (visitedRooms.length === 5 && !finalShown) {
    finalShown = true;

    setTimeout(() => {
      document.body.classList.add("final-active");
    }, 700);
  }
});

// Final ekranından projelere geri dön.
document.getElementById("return-projects").addEventListener("click", () => {

  document.body.classList.remove("final-active");

  window.scrollTo(0, 0);

});



// Ziyaret edilmiş odanın içine küçük bir mimari çizim yerleştir.



function drawVisitedRooms() {

  const roomImages = {
    "01": {
      src: "images/plan-fragments/01.jpg",
      x: 100, y: 80, width: 400, height: 200
    },
    "02": {
      src: "images/plan-fragments/02.jpg",
      x: 500, y: 80, width: 400, height: 200
    },
    "03": {
      src: "images/plan-fragments/03.jpg",
      x: 100, y: 400, width: 265, height: 200
    },
    "04": {
      src: "images/plan-fragments/04.jpg",
      x: 365, y: 400, width: 270, height: 200
    },
    "05": {
      src: "images/plan-fragments/05.jpg",
      x: 635, y: 400, width: 265, height: 200
    }
  };

  document.querySelectorAll(".room").forEach(room => {

    const number = room.dataset.room;
    const art = room.querySelector(".room-art");
    const label = room.querySelector(".room-number");
    const image = roomImages[number];

    if (visitedRooms.includes(number)) {

      label.style.opacity = "0";
      room.classList.add("visited");

      art.innerHTML = `
        <svg x="${image.x}" y="${image.y}"
             width="${image.width}" height="${image.height}"
             viewBox="${image.x} ${image.y} ${image.width} ${image.height}"
             overflow="hidden">
          <image href="${image.src}"
                 x="${image.x}" y="${image.y}"
                 width="${image.width}" height="${image.height}"
                 preserveAspectRatio="xMidYMid slice"/>
        </svg>
      `;

    } else {

      label.style.opacity = "1";
      room.classList.remove("visited");
      art.innerHTML = "";

    }
  });
}


  









