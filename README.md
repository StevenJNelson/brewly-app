# Brewly

### A web application developed for part of the interview process at Modus Engagement.

This web application allows the user to query the Punk API's beer data and
search for different beers.

Punk API: https://punkapi.com/documentation/v2

### To Run

1. Run "npm i" to install missing node modules
2. Run npm start to launch the application in your browser

### Design

- This simple web application uses the punk API to allow users to search
  for different beers.
- It renders a "Home" component that displays the title and search bar. When
  the user starts typing it uses the API's search feature to build an Axios GET request
  to the API, using the API's built in ability to search for beers by name.
- When search results are displayed, a BeerList component is displayed that render all matching
  beers.
- When the user clicks Details, there is a redirect to the component BeerDetails which displays
  the details of the selected beer including the Beer Name, Tagline, Description, First Brewed Date, ABV,
  IBU, and Photo
