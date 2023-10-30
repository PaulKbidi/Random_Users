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

    const userGender =
      user.gender === "male"
        ? "<img class='male' src='male.png' alt='logo genre homme'>"
        : "<img class='female' src='female.png' alt='logo genre femme'>";
    const userName = `${user.name.title} ${user.name.first} ${user.name.last}`;
    const userEmail = user.email;
    const userImg = user.picture.medium;

    userCard.innerHTML = `
            <img class="user-img" src="${userImg}" alt="Photo de profil">
            <p>${userGender}</p>
            <p>${userName}</p>
            <p>${userEmail}</p>
        `;

    userList.appendChild(userCard);
  });
}