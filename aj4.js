// publishing books before 2010 and name of author in capital

const books = [
    { title: 'Book 1', author: 'author 1', year: 2005 },
    { title: 'Book 2', author: 'author 2', year: 2012 },
    { title: 'Book 3', author: 'author 3', year: 2008 },
    { title: 'Book 4', author: 'author 4', year: 2015 },
    { title: 'Book 5', author: 'author 5', year: 2011 }
  ];

  let modifiedlist = books.filter((books)=>books.year>=2010).map((books)=>{
    return {title:books.title,
           author:books.author.toUpperCase(),
            year:books.year
    
    
    }
  })
  console.log(modifiedlist);




  