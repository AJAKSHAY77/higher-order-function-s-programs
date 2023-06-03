//url validation using regex
  function isValidURL(url){
   

    let pattern =  /^(http:\/\/|https:\/\/)[a-zA-Z0-9\-._~:/?#[\]@!$&'()*+,;=]+[a-zA-Z]+$/;

    if(pattern.test(url)){
        console.log("valid url");
    }
    else{
        console.log("invalid url");
    }

  }
  isValidURL("http://www.example.com");
isValidURL("https://example.com");
isValidURL("http://1234.com");
isValidURL("ftp://example.com");

