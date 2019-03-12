var axios = require('axios');
 
axios.get('http://flip1.engr.oregonstate.edu:2438/cs290info')
  .then(response => {
    console.log(response.data);
    console.log(response.data.Course);
    console.log(response.data.Credits);
    console.log(response.data.location);
  })
  .catch(error => {
    console.log(error);
  });

