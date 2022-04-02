const showsArray = [
    {
    Date : "Mon Sept 06 2021",
    Venue : "Ronald Lane",
    Location: "San Francisco, CA"
    },
    {
    Date : "Tues Sept 21 2021",
    Venue : "Pier 3 East",
    Location: "San Francisco, CA"
    },
    {
    Date : "Fri Oct 15 2021",
    Venue : "View Lounge",
    Location: "San Francisco, CA"
    },
    {
    Date : "Sat Nov 06 2021",
    Venue : "Hyatt Agency",
    Location: "San Francisco, CA"
    },
    {
    Date : "Fri Nov 26 2021",
    Venue : "Moscow Center",
    Location: "San Francisco, CA"
    },
    {
    Date : "Wed Dec 15 2021",
    Venue : "Press Club",
    Location: "San Francisco, CA"
    }
]

const render = () => {
    // Titles and 1st Show
    let showsTitleDiv = document.createElement('div');
    let showsSubtitleDiv = document.createElement('div');
    let showsSubtitlesDate = document.createElement('p');
    let showsSubtitlesVenue = document.createElement('p');
    let showsSubtitlesLocation = document.createElement('p');
    let showSectionContainer = document.createElement('div');
    let showSectionTitle = document.createElement('h1');
    let showSectionSubheader = document.createElement('p');
    let showSectionDate = document.createElement('p');
    let showSectionButton = document.createElement('button');
    let showSectionSubheaderTwo = document.createElement('p');
    let showSectionVenueName = document.createElement('p');
    let showSectionLocation = document.createElement('p');
    let showSectionLocationName = document.createElement('p');
    let showSectionHeaderSubheader = document.createElement('div');
    let showSectionSubheaderShows = document.createElement('div');

    // 2nd Show
    let showsSectionContainerTwo = document.createElement('div');
    let showsSectionSubheaderThree = document.createElement('p');
    let showSectionDateTwo = document.createElement('p');
    let showsSectionSubheaderFour = document.createElement('p');
    let showsSectionVenueNameTwo = document.createElement('p');
    let showsSectionLocationTwo = document.createElement('p');
    let showsSectionLocationNameTwo = document.createElement('p');
    let showsSectionButtonTwo = document.createElement('button');

    // 3rd Show
    let showsSectionContainerThree = document.createElement('div');
    let showsSectionSubheaderFive = document.createElement('p');
    let showSectionDateThree = document.createElement('p');
    let showsSectionSubheaderSix = document.createElement('p');
    let showsSectionVenueNameThree = document.createElement('p');
    let showsSectionLocationThree = document.createElement('p');
    let showsSectionLocationNameThree = document.createElement('p');
    let showsSectionButtonThree = document.createElement('button');

    // 4th Show
    let showsSectionContainerFour = document.createElement('div');
    let showsSectionSubheaderSeven = document.createElement('p');
    let showSectionDateFour = document.createElement('p');
    let showsSectionSubheaderEight = document.createElement('p');
    let showsSectionVenueNameFour = document.createElement('p');
    let showsSectionLocationFour = document.createElement('p');
    let showsSectionLocationNameFour = document.createElement('p');
    let showsSectionButtonFour = document.createElement('button');
    
    // 5th Show
    let showsSectionContainerFive = document.createElement('div');
    let showsSectionSubheaderNine = document.createElement('p');
    let showSectionDateFive = document.createElement('p');
    let showsSectionSubheaderTen = document.createElement('p');
    let showsSectionVenueNameFive = document.createElement('p');
    let showsSectionLocationFive = document.createElement('p');
    let showsSectionLocationNameFive = document.createElement('p');
    let showsSectionButtonFive = document.createElement('button');

    // 6th Show
    let showsSectionContainerSix = document.createElement('div');
    let showsSectionSubheaderEleven = document.createElement('p');
    let showSectionDateSix = document.createElement('p');
    let showsSectionSubheaderTwelve = document.createElement('p');
    let showsSectionVenueNameSix = document.createElement('p');
    let showsSectionLocationSix = document.createElement('p');
    let showsSectionLocationNameSix = document.createElement('p');
    let showsSectionButtonSix = document.createElement('button');

    // 1st Show Classes
    document.getElementById('showsSection').classList.add('show-section__wrapper');
    showSectionHeaderSubheader.classList.add('show-section__header');
    showSectionSubheaderShows.classList.add('show-section__subheader-shows')
    showsSubtitleDiv.classList.add('show-section__tablet-subtitles');
    showsTitleDiv.classList.add('show-section__tablet-title');
    showsSubtitlesDate.classList.add('show-section__tablet-subtitle');
    showsSubtitlesVenue.classList.add('show-section__tablet-subtitle--venue');
    showsSubtitlesLocation.classList.add('show-section__tablet-subtitle');
    showSectionContainer.classList.add("show-section__container");
    showSectionTitle.classList.add('show-section__title');
    showSectionSubheader.classList.add('show-section__sub-header');
    showSectionDate.classList.add('show-section__date');
    showSectionDate.classList.add('show-section__date--one');
    showSectionSubheaderTwo.classList.add('show-section__sub-header');
    showSectionVenueName.classList.add('show-section__text');
    showSectionLocation.classList.add('show-section__sub-header');
    showSectionLocationName.classList.add('show-section__text');
    showSectionLocationName.classList.add('show-section__location--one');
    showSectionButton.classList.add('show-section__button');

    // 2nd Show Classes
    showsSectionContainerTwo.classList.add('show-section__container');
    showsSectionSubheaderThree.classList.add('show-section__sub-header');
    showSectionDateTwo.classList.add('show-section__date');
    showSectionDateTwo.classList.add('show-section__date--two');
    showsSectionSubheaderFour.classList.add('show-section__sub-header');
    showsSectionVenueNameTwo.classList.add('show-section__text');
    showsSectionLocationTwo.classList.add('show-section__sub-header');
    showsSectionLocationNameTwo.classList.add('show-section__text');
    showsSectionLocationNameTwo.classList.add('show-section__location--two');
    showsSectionButtonTwo.classList.add('show-section__button');

    // 3rd Show Classes
    showsSectionContainerThree.classList.add('show-section__container');
    showsSectionSubheaderFive.classList.add('show-section__sub-header');
    showSectionDateThree.classList.add('show-section__date');
    showSectionDateThree.classList.add('show-section__date--three');
    showsSectionSubheaderSix.classList.add('show-section__sub-header');
    showsSectionVenueNameThree.classList.add('show-section__text');
    showsSectionLocationThree.classList.add('show-section__sub-header');
    showsSectionLocationNameThree.classList.add('show-section__text');
    showsSectionLocationNameThree.classList.add('show-section__location--three');
    showsSectionButtonThree.classList.add('show-section__button');

    // 4th Show Classes
    showsSectionContainerFour.classList.add('show-section__container');
    showsSectionSubheaderSeven.classList.add('show-section__sub-header');
    showSectionDateFour.classList.add('show-section__date');
    showSectionDateFour.classList.add('show-section__date--four');
    showsSectionSubheaderEight.classList.add('show-section__sub-header');
    showsSectionVenueNameFour.classList.add('show-section__text');
    showsSectionLocationFour.classList.add('show-section__sub-header');
    showsSectionLocationNameFour.classList.add('show-section__text');
    showsSectionLocationNameFour.classList.add('show-section__location--four');
    showsSectionButtonFour.classList.add('show-section__button');

    // 5th Show Classes
    showsSectionContainerFive.classList.add('show-section__container');
    showsSectionSubheaderNine.classList.add('show-section__sub-header');
    showSectionDateFive.classList.add('show-section__date');
    showSectionDateFive.classList.add('show-section__date--five');
    showsSectionSubheaderTen.classList.add('show-section__sub-header');
    showsSectionVenueNameFive.classList.add('show-section__text');
    showsSectionLocationFive.classList.add('show-section__sub-header');
    showsSectionLocationNameFive.classList.add('show-section__text');
    showsSectionLocationNameFive.classList.add('show-section__location--five');
    showsSectionButtonFive.classList.add('show-section__button');

    // 6th Show Classes
    showsSectionContainerSix.classList.add('show-section__container');
    showsSectionSubheaderEleven.classList.add('show-section__sub-header');
    showSectionDateSix.classList.add('show-section__date');
    showSectionDateSix.classList.add('show-section__date--six');
    showsSectionSubheaderTwelve.classList.add('show-section__sub-header');
    showsSectionVenueNameSix.classList.add('show-section__text');
    showsSectionLocationSix.classList.add('show-section__sub-header');
    showsSectionLocationNameSix.classList.add('show-section__text');
    showsSectionLocationNameSix.classList.add('show-section__location--six');
    showsSectionButtonSix.classList.add('show-section__button');

    // 1st Text
    showsTitleDiv.innerHTML = 'Shows';
    showsSubtitlesDate.innerHTML = 'DATE';
    showsSubtitlesVenue.innerHTML = 'VENUE';
    showsSubtitlesLocation.innerHTML = 'LOCATION';
    showSectionTitle.innerHTML = 'Shows';
    showSectionSubheader.innerHTML = 'Date';
    showSectionDate.innerHTML = showsArray[0].Date;
    showSectionSubheaderTwo.innerHTML = 'Venue';
    showSectionVenueName.innerHTML = showsArray[0].Venue;
    showSectionLocation.innerHTML = 'Location';
    showSectionLocationName.innerHTML = showsArray[0].Location;
    showSectionButton.innerHTML = 'BUY TICKETS';
    

    // 2nd Text
    showsSectionSubheaderThree.innerHTML ='Date';
    showSectionDateTwo.innerHTML = showsArray[1].Date;
    showsSectionSubheaderFour.innerHTML = 'Venue';
    showsSectionVenueNameTwo.innerHTML = showsArray[1].Venue;
    showsSectionLocationTwo.innerHTML = 'Location';
    showsSectionLocationNameTwo.innerHTML = showsArray[1].Location;
    showsSectionButtonTwo.innerHTML = 'BUY TICKETS';

    // 3rd Text
    showsSectionSubheaderFive.innerHTML ='Date';
    showSectionDateThree.innerHTML = showsArray[2].Date;
    showsSectionSubheaderSix.innerHTML = 'Venue';
    showsSectionVenueNameThree.innerHTML = showsArray[2].Venue;
    showsSectionLocationThree.innerHTML = 'Location';
    showsSectionLocationNameThree.innerHTML = showsArray[2].Location;
    showsSectionButtonThree.innerHTML = 'BUY TICKETS';

    // 4th Text
    showsSectionSubheaderSeven.innerHTML ='Date';
    showSectionDateFour.innerHTML = showsArray[3].Date;
    showsSectionSubheaderEight.innerHTML = 'Venue';
    showsSectionVenueNameFour.innerHTML = showsArray[3].Venue;
    showsSectionLocationFour.innerHTML = 'Location';
    showsSectionLocationNameFour.innerHTML = showsArray[3].Location;
    showsSectionButtonFour.innerHTML = 'BUY TICKETS';

    // 5th Text
    showsSectionSubheaderNine.innerHTML ='Date';
    showSectionDateFive.innerHTML = showsArray[4].Date;
    showsSectionSubheaderTen.innerHTML = 'Venue';
    showsSectionVenueNameFive.innerHTML = showsArray[4].Venue;
    showsSectionLocationFive.innerHTML = 'Location';
    showsSectionLocationNameFive.innerHTML = showsArray[4].Location;
    showsSectionButtonFive.innerHTML = 'BUY TICKETS';

    // 6th Text
    showsSectionSubheaderEleven.innerHTML ='Date';
    showSectionDateSix.innerHTML = showsArray[5].Date;
    showsSectionSubheaderEleven.innerHTML = 'Venue';
    showsSectionVenueNameSix.innerHTML = showsArray[5].Venue;
    showsSectionLocationSix.innerHTML = 'Location';
    showsSectionLocationNameSix.innerHTML = showsArray[5].Location;
    showsSectionButtonSix.innerHTML = 'BUY TICKETS';

    document.getElementById("showsSection").appendChild(showSectionHeaderSubheader);
    // document.getElementById("showsSection").appendChild(showsTitleDiv);
    document.getElementById("showsSection").appendChild(showSectionSubheaderShows);
    // document.getElementById("showsSection").appendChild(showsSubtitleDiv);
    showSectionHeaderSubheader.appendChild(showsTitleDiv);
    showSectionSubheaderShows.appendChild(showsSubtitleDiv);
    showsSubtitleDiv.appendChild(showsSubtitlesDate);
    showsSubtitleDiv.appendChild(showsSubtitlesVenue);
    showsSubtitleDiv.appendChild(showsSubtitlesLocation);
    

    // document.getElementById("showsSection").appendChild(showSectionContainer);
    showSectionSubheaderShows.appendChild(showSectionContainer);
    showSectionContainer.appendChild(showSectionTitle);
    showSectionContainer.appendChild(showSectionSubheader);
    showSectionContainer.appendChild(showSectionDate);
    showSectionContainer.appendChild(showSectionSubheaderTwo);
    showSectionContainer.appendChild(showSectionVenueName);
    showSectionContainer.appendChild(showSectionLocation);
    showSectionContainer.appendChild(showSectionLocationName);
    showSectionContainer.appendChild(showSectionButton);
    
    // document.getElementById("showsSection").appendChild(showsSectionContainerTwo);
    showSectionSubheaderShows.appendChild(showsSectionContainerTwo);
    showsSectionContainerTwo.appendChild(showsSectionSubheaderThree);
    showsSectionContainerTwo.appendChild(showSectionDateTwo);
    showsSectionContainerTwo.appendChild(showsSectionSubheaderFour);
    showsSectionContainerTwo.appendChild(showsSectionVenueNameTwo);
    showsSectionContainerTwo.appendChild(showsSectionLocationTwo);
    showsSectionContainerTwo.appendChild(showsSectionLocationNameTwo);
    showsSectionContainerTwo.appendChild(showsSectionButtonTwo);

    // document.getElementById("showsSection").appendChild(showsSectionContainerThree);
    showSectionSubheaderShows.appendChild(showsSectionContainerThree);
    showsSectionContainerThree.appendChild(showsSectionSubheaderFive);
    showsSectionContainerThree.appendChild(showSectionDateThree);
    showsSectionContainerThree.appendChild(showsSectionSubheaderSix);
    showsSectionContainerThree.appendChild(showsSectionVenueNameThree);
    showsSectionContainerThree.appendChild(showsSectionLocationThree);
    showsSectionContainerThree.appendChild(showsSectionLocationNameThree);
    showsSectionContainerThree.appendChild(showsSectionButtonThree);

    // document.getElementById("showsSection").appendChild(showsSectionContainerFour);
    showSectionSubheaderShows.appendChild(showsSectionContainerFour);
    showsSectionContainerFour.appendChild(showsSectionSubheaderSeven);
    showsSectionContainerFour.appendChild(showSectionDateFour);
    showsSectionContainerFour.appendChild(showsSectionSubheaderEight);
    showsSectionContainerFour.appendChild(showsSectionVenueNameFour);
    showsSectionContainerFour.appendChild(showsSectionLocationFour);
    showsSectionContainerFour.appendChild(showsSectionLocationNameFour);
    showsSectionContainerFour.appendChild(showsSectionButtonFour);

    // document.getElementById("showsSection").appendChild(showsSectionContainerFive);
    showSectionSubheaderShows.appendChild(showsSectionContainerFive);
    showsSectionContainerFive.appendChild(showsSectionSubheaderNine);
    showsSectionContainerFive.appendChild(showSectionDateFive);
    showsSectionContainerFive.appendChild(showsSectionSubheaderTen);
    showsSectionContainerFive.appendChild(showsSectionVenueNameFive);
    showsSectionContainerFive.appendChild(showsSectionLocationFive);
    showsSectionContainerFive.appendChild(showsSectionLocationNameFive);
    showsSectionContainerFive.appendChild(showsSectionButtonFive);

    // document.getElementById("showsSection").appendChild(showsSectionContainerSix);
    showSectionSubheaderShows.appendChild(showsSectionContainerSix);
    showsSectionContainerSix.appendChild(showsSectionSubheaderEleven);
    showsSectionContainerSix.appendChild(showSectionDateSix);
    showsSectionContainerSix.appendChild(showsSectionSubheaderTwelve);
    showsSectionContainerSix.appendChild(showsSectionVenueNameSix);
    showsSectionContainerSix.appendChild(showsSectionLocationSix);
    showsSectionContainerSix.appendChild(showsSectionLocationNameSix);
    showsSectionContainerSix.appendChild(showsSectionButtonSix);
}

render();
