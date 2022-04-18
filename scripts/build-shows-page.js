let showsTable = (array) =>  {
  let mainContainer = document.querySelector(".shows-section");
  let showsTitleContainer = document.createElement("div");
  showsTitleContainer.classList.add("shows-section__title-container");
  mainContainer.appendChild(showsTitleContainer);

  let showTitle = document.createElement("h1");
  showTitle.classList.add("shows-section__title");
  showsTitleContainer.appendChild(showTitle);
  showTitle.innerText = "Shows";

  let showsContainer = document.createElement("div");
  showsContainer.classList.add("shows-section__container-all");
  mainContainer.appendChild(showsContainer);

  let subheaderContainer = document.createElement("div");
  subheaderContainer.classList.add("shows-section__header-container");
  showsContainer.appendChild(subheaderContainer);

  let dateSubheader = document.createElement("h2");
  dateSubheader.classList.add("shows-section__header-container--date");
  subheaderContainer.appendChild(dateSubheader);
  dateSubheader.innerText = "DATES";

  let venueSubheader = document.createElement("h2");
  venueSubheader.classList.add("shows-section__header-container--venue");
  subheaderContainer.appendChild(venueSubheader);
  venueSubheader.innerText = "VENUE";

  let locationSubheader = document.createElement("h2");
  locationSubheader.classList.add("shows-section__header-container--location");
  subheaderContainer.appendChild(locationSubheader);
  locationSubheader.innerText = "LOCATION";

  let buttonSubheader = document.createElement("button");
  buttonSubheader.classList.add("shows-section__header-container--button-header");
  subheaderContainer.appendChild(buttonSubheader);
  buttonSubheader.innerText = "BUY TICKETS";

  for (let i = 0; i < array.length; i++) {
    let showsMainContainer = document.createElement("div");
    showsMainContainer.classList.add("shows-section__container");
    showsContainer.appendChild(showsMainContainer);

    let dateHeader = document.createElement("h3");
    dateHeader.classList.add("shows-section__sub-header");
    showsMainContainer.appendChild(dateHeader);
    dateHeader.innerText = "DATE";

    let date = document.createElement("h3");
    date.classList.add("shows-section__text");
    date.classList.add("shows-section__date");
    showsMainContainer.appendChild(date);
    let actualDate = array[i]["date"];
    let finalDate = parseInt(actualDate);
    date.innerText = new Date(finalDate).toDateString();

    let venueHeader = document.createElement("h3");
    venueHeader.classList.add("shows-section__sub-header");
    showsMainContainer.appendChild(venueHeader);
    venueHeader.innerText = "VENUE";

    let venue = document.createElement("h3");
    venue.classList.add("shows-section__text");
    venue.classList.add("shows-section__venue");
    showsMainContainer.appendChild(venue);
    venue.innerText = array[i]["place"];

    let locationHeader = document.createElement("h3");
    locationHeader.classList.add("shows-section__sub-header");
    showsMainContainer.appendChild(locationHeader);
    locationHeader.innerText = "LOCATION";

    let location = document.createElement("h3");
    location.classList.add("shows-section__text");
    location.classList.add("shows-section__location");
    showsMainContainer.appendChild(location);
    location.innerText = array[i]["location"];

    let buttonContainer = document.createElement("div");
    buttonContainer.classList.add("shows__one-container--button-container");
    showsMainContainer.appendChild(buttonContainer);

    let button = document.createElement("button");
    button.classList.add("shows-section__button");
    buttonContainer.appendChild(button);
    button.innerText = "BUY TICKETS";
  }
  let sectionContainer = document.querySelector(".shows-section__container-all");
  let container = sectionContainer.querySelectorAll('.shows-section__container');
  for (let i = 0; i < container.length; i++) {
      container[i].addEventListener("click", function() {
      let current = document.getElementsByClassName("active");
      if (current.length > 0) { 
        current[0].className = current[0].className.replace(" active", "");
      }
      this.className += " active";
      });
    }
}
const apiKey = "99b6d529-90e7-4d9d-b9b9-ecf971cc9b45";

let showsData = axios.get(
  "https://project-1-api.herokuapp.com/showdates?api_key=99b6d529-90e7-4d9d-b9b9-ecf971cc9b45"
);
showsData.then(run => {
  showsTable(run.data);
  console.log(run.data);
});
showsData.catch(error => {
  console.log("error!!");
});

