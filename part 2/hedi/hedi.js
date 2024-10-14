//Créez une nouvelle méthode dans l’objet hedi qui s’appelle getSummary et
//qui retourne une phrase de ce type :
//« Hedi is a 46 years old teacher, and he has a driver’s licence. »

let hedi = {
  firstName: "Hedi",
  lastName: "Rivas",
  birthYear: 1991,
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"],
  hasDriversLicence: true,
  licence: function () {
    if (this.hasDriversLicence === true) {
      return "has";
    } else {
      return "has not";
    }
  },
  calcAge: function (currentyear) {
    this.age = currentyear - this.birthYear;
    return this.age;
  },
  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge(2024)} years old ${
      this.job
    }, and he ${this.licence()} a driver’s licence.`;
  },
};

console.log(hedi.getSummary());
