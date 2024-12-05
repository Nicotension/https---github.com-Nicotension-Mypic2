let obj = {
    fname: "John",
    lname: "Doe",
    age: 18,
    gym: true,
};

let objJson = `{
    "fname": "John",
    "lname": "Doe",
    "age": 18,
    "gym": true
}`;

let newObj = JSON.parse(objJson);

let students = `[
  {
   "pic": "https://cdn.pixabay.com/photo/2020/05/24/02/00/barber-shop-5212059_640.jpg",
   "fname": "John",
   "lname": "Doe",
   "age": 18,
   "gym": true
  },
  {
   "pic": "https://cdn.pixabay.com/photo/2015/09/08/17/35/man-930397_640.jpg",
   "fname": "Martin",
   "lname": "Thomas",
   "age": 26,
   "gym": true
  },
  {
   "pic": "https://cdn.pixabay.com/photo/2018/03/27/15/04/women-3266211_1280.jpg",
   "fname": "Katherin",
   "lname": "Ized",
   "age": 33,
   "gym": false
  },
  {
   "pic": "https://cdn.pixabay.com/photo/2024/09/06/19/43/halloween-9028375_640.jpg",
   "fname": "Julianne",
   "lname": "Wölfgang",
   "age": 24,
   "gym": true
  },
  {
   "pic": "https://cdn.pixabay.com/photo/2015/06/20/13/55/man-815795_640.jpg",
   "fname": "Philip",
   "lname": "Gand",
   "age": 34,
   "gym": false
  },
    {
   "pic": "https://cdn.pixabay.com/photo/2016/11/21/14/53/man-1845814_640.jpg",
   "fname": "Jakob",
   "lname": "Nehmar",
   "age": 29,
   "gym": true
  },
     {
   "pic": "https://cdn.pixabay.com/photo/2023/07/26/20/05/gull-8151932_640.jpg",
   "fname": "Jerry",
   "lname": "Smith",
   "age": 39,
   "gym": true
  },  
   {
   "pic": "https://cdn.pixabay.com/photo/2018/01/24/19/49/friendship-day-3104635_1280.jpg",
   "fname": "Lisa",
   "lname": "Jamal",
   "age": 25,
   "gym": true
  },
  {
   "pic": "https://cdn.pixabay.com/photo/2017/12/31/06/16/women-3051614_1280.jpg",
   "fname": "Judith",
   "lname": "Assinger",
   "age": 41,
   "gym": true
  }
]`;

let newStudents = JSON.parse(students);

newStudents.forEach((element) => {
    document.getElementById("result").innerHTML += `<div>
      <div class="card" style="width: 25rem;">
        <img class="pic" src="${element.pic}" class="card-img-top" alt="${element.fname}" style="width: 398px;>
        <div class="card-body">
          <h5 class="card-title">${element.fname} ${element.lname}</h5>
          <p class="card-text">Age: ${element.age}</p>
          <p class="card-text">Gym: ${element.gym ? "Yes" : "No"}</p>
        </div>
         </div>
      </div>`;
});


