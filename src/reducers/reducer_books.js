// This function is a 'Redux Reducer'
// A Redux Reducer is a function that returns a piece of the application state.
// Returns a list of books that contains an array of objects
export default function() {
  return [
    { title: 'Javascript: The Good Parts', pages: 101 },
    { title: 'Harry Potter', pages: 39 },
    { title: 'The Dark Tower', pages: 85 },
    { title: 'Eloquent Ruby', pages: 1 }
  ]
}