const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZmM1ZjlmMzJhOTgxMjhhZjA0OTU2NzFiYjdlYzQyYiIsInN1YiI6IjY1YTJjODYzMzk1NDlhMDEyMzEwNzIzZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0vyNO-fieRoxnb2rC3Buu4dUrayTKdciP6V49qF9Cck'
  }
};

fetch('https://api.themoviedb.org/3/authentication', options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));