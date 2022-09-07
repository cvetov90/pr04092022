"use strict";
document.addEventListener("DOMContentLoaded", async () => {
  const urls = [
    "https://randomuser.me/api/",
    "https://random-data-api.com/api/v2/users",
  ];

  const promises = urls.map((url) => fetch(url).then((response) => response.json()))

  const data = await Promise.all(promises)
  console.log(data)

  // let response = await fetch("https://random-data-api.com/api/v2/users");
  // let json = await response.json();
  // let div = document.getElementById("person_info");

  // function showUser(userData) {
  //   Object.entries(userData).forEach(([key, value]) => {
  //     if (typeof value === "object" && value !== null) {
  //       return showUser(value);
  //     } else {
  //       return (div.innerText += `${key} : ${value} \n`);
  //     }
  //   });
  // }

  // showUser(json);
});
