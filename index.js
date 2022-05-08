// Add your code here

const formData = {
    dogName: "Byron",
    dogBreed: "Poodle",
  };
  
  function submitData(name, email) {
    const postUser = {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        "name": name,
        "email": email
    })
  };  
    
    return fetch("http://localhost:3000/users", postUser)
    .then(res => res.json())
    .then(obj => document.querySelector('body').innerHTML = obj.id)
    .catch(function (error) {
      alert('Unauthorized Access')
      document.querySelector('body').append(error.message)
    })
  }    
  
  const configurationObject = {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(formData),
  };
  
  fetch("http://localhost:3000/dogs", configurationObject)
    .then(function (response) {
      return response.json();
    })
    .then(function (object) {
      console.log(object);
    })
    .catch(function (error) {
      alert("Bad things! Ragnarők!");
      console.log(error.message);
    });