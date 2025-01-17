const books = [
    {
      title: 'Book',
      author: 'Name'
    },
    {
      title: 'Book2',
      author: 'Name2'
    }
  ]

const getTheTitles = function(books) {
    const titles = books.map(item => item.title)

    console.log(titles)
    return titles

};


getTheTitles(books)
// Do not edit below this line
module.exports = getTheTitles;
