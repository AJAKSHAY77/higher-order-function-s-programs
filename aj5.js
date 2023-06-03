let newregex = /the/gi
let tostring = "the sun rises in the east and sets in the west.the cat chased the mouse through The garden."

const result = newregex.test(tostring)
console.log(result);


let anotherregex =  tostring.match(newregex)
console.log(anotherregex);

let onemoreresult = tostring.replace(newregex,'t-he')
console.log(onemoreresult);



