const myForm = document.querySelector("form"); 

myForm.addEventListener( "submit" , (e) => {
    e.preventDefault(); 
    const userName = document.getElementById("username").value; 
    getData(userName); 
}); 


let getData = async (user) => {

    const datad = await fetch(`https://www.hackerrank.com/rest/hackers/${user}` , {
        mode: 'no-cors',
        headers: {
            'Content-Type': 'application/json'    
          }
    });  
    const result = await datad.json(); 
    console.log(result); 
} 