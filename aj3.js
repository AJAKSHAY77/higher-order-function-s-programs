// converting usd dollars into indian rupess

const itemlist = [
    {item:"milk",price:20},
    {item:"dahi",price:40},
    {item:"paneer",price:60},
    {item:"samosa",price:50},
    {item:"dosa",price:90},
    {item:"dairymilk",price:1000},
]

let indianratelist = itemlist.map((x) => {

    return {item:x.item, price:x.price*80}
      
})
console.log(indianratelist);


