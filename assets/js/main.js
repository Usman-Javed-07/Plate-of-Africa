const cardData = [
  { number: '01', title: 'Celebrate Diversity', summary: 'Showcasing cuisines from North, South, East, and West.' },
  { number: '02', title: 'Plant-Based Excellence', summary: 'add text here' },
  { number: '03', title: 'Authentic Ingredients', summary: 'add text here' },
  { number: '04', title: 'Heritage Keepers', summary: 'add text here' }
];

// Get the container where the cards will be inserted
const container = document.getElementById('cards-container');

// Loop through the card data and generate each card
cardData.forEach((data) => {
  const card = document.createElement('div');
  card.classList.add('found-content');

  card.innerHTML = `
    <div class="content-text">
        <p class="content-number">${data.number}</p>
        <p class="content-para">${data.title}</p>
        <span class="icon-up"><i class="fa-solid fa-chevron-down"></i></span>
    </div>
    <summary class="found-summary">${data.summary}</summary>
  `;

  // Append the created card to the container
  container.appendChild(card);
});

// Event listener for each card's content-text to toggle the summary and close others
document.querySelectorAll(".content-text").forEach((contentText) => {
  contentText.addEventListener("click", function () {
    let parent = this.parentElement;
    let summary = parent.querySelector("summary");
    let icon = parent.querySelector(".icon-up");

    // Close all other summaries first
    document.querySelectorAll(".found-content").forEach((item) => {
      if (item !== parent) {
        item.classList.remove("show");
        item.querySelector("summary").style.maxHeight = "0px";
        item.querySelector(".icon-up").classList.remove("rotate");
      }
    });

    // Toggle the clicked one
    parent.classList.toggle("show");

    if (parent.classList.contains("show")) {
      summary.style.maxHeight = summary.scrollHeight + "px"; // Expand
      icon.classList.add("rotate");
    } else {
      summary.style.maxHeight = "0px"; // Collapse
      icon.classList.remove("rotate");
    }
  });
});

  const chefs = [
    { name: "Mandla", role: "Team Leader", img: "./assets/images/chef2.png" },
    { name: "Amina", role: "Manager", img: "./assets/images/chef3.png" },
    { name: "Eshe", role: "Supervisor", img: "./assets/images/chef4.png" }
  ];

  const chefeContainer = document.querySelector(".chefe");

  chefs.forEach(chef => {
    const chefCardContainer = document.createElement("div");
    chefCardContainer.classList.add("chef-card--container");

    chefCardContainer.innerHTML = `
      <div class="chef-card">
          <div class="chefe-image">
              <img src="${chef.img}" alt="chefe image">
          </div>
          <div class="chef-info">
              <h2>${chef.name}</h2>
              <p>${chef.role}</p>
            
          </div>
      </div>
    `;

    chefeContainer.appendChild(chefCardContainer);
  });