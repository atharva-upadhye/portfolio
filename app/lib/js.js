let data = {
  "certificates": [
    {
      "name": "Responsive Web Design",
      "link": "https://www.freecodecamp.org/certification/atharva-u-01/responsive-web-design"
    },
    {
      "name": "JavaScript Algorithms and Data Structures",
      "link": "https://www.freecodecamp.org/certification/atharva-u-01/javascript-algorithms-and-data-structures"
    }
  ]
}

let certificatesSection = document.getElementById("certificates")
let certificateComponent = ele => {
  return `<li><a href="${ele.link}">${ele.name}</a></li>`;
}
data.certificates.forEach(element => {
  certificatesSection.innerHTML += certificateComponent(element);

});