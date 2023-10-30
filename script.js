const userList = document.getElementById("user-list");
const fetchButton = document.getElementById("fetch-users");
const api = "https://randomuser.me/api/?results=20";

fetchButton.addEventListener("click", () => {
  fetch(api)
    .then((response) => response.json())
    .then((data) => {
      afficheUsers(data.results);
      console.log(data.results);
    });
});

function afficheUsers(users) {
  userList.innerHTML = "";

  users.forEach((user) => {
    const userCard = document.createElement("div");
    userCard.classList.add("user-card");

    const userGender = user.gender === "male" ? "Homme" : "Femme";
    const userName = `${user.name.title} ${user.name.first} ${user.name.last}`;
    const userEmail = user.email;
    const userImg = user.picture.medium;

    userCard.innerHTML = `
            <img class="user-img" src="${userImg}" alt="Photo de profil">
            <p>Genre: ${userGender}</p>
            <p>Nom et Prénom:<br> ${userName}</p>
            <p>Email: ${userEmail}
        `;

    userList.appendChild(userCard);
  });
}