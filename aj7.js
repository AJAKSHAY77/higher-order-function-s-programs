// // Regular expression pattern for valid LinkedIn profile URLs


function isValidLinkedInURL(url){
    let pattern = /^https:\/\/www\.linkedin\.com\/in\/[a-zA-Z0-9_-]{5,30}[a-zA-Z0-9]$/;
   
    if(pattern.test(url)){
        console.log("valid linkedin url");
    }
    else{
        console.log("invalid linkedin url");
    }
}


// Test cases
isValidLinkedInURL("https://www.linkedin.com/in/johndoe123");
isValidLinkedInURL("https://www.linkedin.com/in/jane_doe");
isValidLinkedInURL("https://www.linkedin.com/in/alex-123");
isValidLinkedInURL("https://www.linkedin.com/in/userwithaverylongnameandprofileid");
isValidLinkedInURL("https://www.linkedin.com/profiles/123456");