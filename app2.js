
const axios = require("axios");

function getFakeJSON(){
    const options = {
        method: 'GET',
        url: 'https://jsonplaceholder.typicode.com/posts/',
        params : {       
            id : 1,
        },
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        }
      };
      
      axios.request(options).then(function (response) {
          console.log(response.data);
      }).catch(function (error) {
          console.error(error);
      });
}

function getRandomActivity(){
    const options = {
        method: 'GET',
        url: 'http://www.boredapi.com/api/activity/',
        params : {},
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        }
      };
      
      axios.request(options).then(function (response) {
          console.log(response.data);
      }).catch(function (error) {
          console.error(error);
      });
}

function getActivityByType(){
    const options = {
        method: 'GET',
        url: 'http://www.boredapi.com/api/activity/',
        params : {
            "type": "recreational"
        },
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        }
      };
      
      axios.request(options).then(function (response) {
          console.log(response.data);
      }).catch(function (error) {
          console.error(error);
      });
}

function getActivity(){
    const options = {
        method: 'GET',
        url: 'http://13.214.210.75:5000/notes',
        params : {
        },
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        }
      };
      
      axios.request(options).then(function (response) {
          console.log(response.data);
          console.log(response.data.data);
      }).catch(function (error) {
          console.error(error);
      });
}

function postActivity(){
    const options = {
        method: 'POST',
        url: 'http://13.214.210.75:5000/notes',
        data : {
            title : "Mandi",
            body : "Harus mandi setiap hari supaya badan sehat",
            tags : [
                "air", "mandi", "sehat",
            ],
        },
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        }
      };
      
      axios.request(options).then(function (response) {
          console.log(response.data);
          console.log(response.data.data);
      }).catch(function (error) {
          console.error(error);
      });
}

//// API Fake Generate Random JSON
// getFakeJSON() 

//// API get Activity
// getRandomActivity()
// getActivityByType()

/// API acitivity
getActivity()
// postActivity()
