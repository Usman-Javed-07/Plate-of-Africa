// Data for the cards
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
  
  // Event listener for each card's content-text to toggle the summary and rotate the icon
  document.querySelectorAll(".content-text").forEach(function (contentText) {
    contentText.addEventListener("click", function () {
      let parent = this.parentElement;
      let summary = parent.querySelector("summary");
      let icon = parent.querySelector(".icon-up");
  
      parent.classList.toggle("show");
      icon.classList.toggle("rotate");
    });
  });
  

