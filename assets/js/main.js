
document.querySelector(".header-icon").addEventListener("click", function () {
  document.querySelector(".about-section").scrollIntoView({ behavior: "smooth" });
});

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

  // FAQ section 

  document.addEventListener("DOMContentLoaded", () => {
    const faqContainer = document.querySelector(".FAQ-info");

    const faqData = [
        {
            question: "What type of cuisine does Plate of Africa serve?",
            answer: "An AI agent (Artificial Intelligence agent) is a computer system or software entity that can perceive its environment, process information, and take actions to achieve specific goals.",
        },
        {
            question: "Where do you source your ingredients from?",
            answer: "add text here .",
        },
        {
            question: "Do you offer takeout or delivery services?",
            answer: "add text here.",
        },
        {
            question: "How can I provide feedback about my experience?",
            answer: "add text here",
        },
        {
          question: "Is there a dress code at Plate of Africa?",
          answer: "add text here",
      },
    ];

    // Generate FAQ cards dynamically
    faqData.forEach(({ question, answer }) => {
        const faqHTML = `
            <div class="FAQ-message-section">
                <div class="FAQ-content">
                    <p class="FAQ-text">${question}</p>
                    <span class="FAQ-icon"><i class="fa-solid fa-plus"></i></span>
                </div>
                <div class="FAQ-para-wrapper">
                    <p class="FAQ-para">${answer}</p>
                </div>
            </div>
        `;
        faqContainer.innerHTML += faqHTML;
    });

    // Attach event listeners to handle toggle functionality
    document.querySelectorAll(".FAQ-content").forEach((faq) => {
        faq.addEventListener("click", function () {
            const wrapper = this.nextElementSibling;
            const icon = this.querySelector(".FAQ-icon i");

            // Close any open FAQ before opening a new one
            document.querySelectorAll(".FAQ-para-wrapper").forEach((otherWrapper) => {
                if (otherWrapper !== wrapper) {
                    otherWrapper.style.maxHeight = null;
                    otherWrapper.previousElementSibling.querySelector(".FAQ-icon i").classList.replace("fa-minus", "fa-plus");
                    otherWrapper.previousElementSibling.classList.remove("active");
                }
            });

            // Toggle the clicked FAQ
            if (wrapper.style.maxHeight) {
                wrapper.style.maxHeight = null;
                icon.classList.replace("fa-minus", "fa-plus");
                this.classList.remove("active");
            } else {
                wrapper.style.maxHeight = wrapper.scrollHeight + "px";
                icon.classList.replace("fa-plus", "fa-minus");
                this.classList.add("active");
            }
        });
    });
});
document.querySelector(".FAQ-icon").addEventListener("click", function () {
  document.querySelector(".main-header").scrollIntoView({ behavior: "smooth" });
});
