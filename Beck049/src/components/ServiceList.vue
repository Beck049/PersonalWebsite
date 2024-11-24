<template>
    <div class="service-list">
      <div class="service-card" v-for="service in services" :key="service.id">
        <div class="service-thumbnail"></div>
        <h3 class="service-name">{{ service.name }}</h3>
        <p class="service-description">{{ service.description }}</p>
        <div class="service-footer">
          <div class="service-icons">
            <span v-for="(icon, index) in service.icons" :key="index" class="icon">
              <img :src="`./icons/${icon}.png`" :alt="icon" />
            </span>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "ServiceList",
    data() {
      return {
        services: [
          {
            id: 1,
            name: "Service One",
            description:
              "Lorem ipsum dolor amet, consectetur adipiscing elit. Porttitor eros ac finibus.",
            icons: ["icon1", "icon2", "icon3"],
          },
          {
            id: 2,
            name: "Service Two",
            description:
              "Aptent varius per habitant fames habitant metus dolor cubilia torquent.",
            icons: ["icon1", "icon2", "icon3"],
          },
          {
            id: 3,
            name: "Service Three",
            description:
              "Porttitor eros ac finibus dolor cubilia torquent. Aptent varius gravida aliquam.",
            icons: ["icon1", "icon2", "icon3"],
          },
          {
            id: 4,
            name: "Service Four",
            description:
              "Another sample service description for testing responsiveness.",
            icons: ["icon1", "icon2", "icon3"],
          },
          {
            id: 5,
            name: "Service Five",
            description:
              "A fifth service card to test wrapping behavior in smaller screens.",
            icons: ["icon1", "icon2", "icon3"],
          },
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  /* Container: Responsive Grid Layout */
  .service-list {
    display: grid; /* Enables CSS Grid */
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); /* Dynamic columns */
    gap: 20px; /* Spacing between grid items */
    padding: 20px;
    background-color: #333; /* Matches your color scheme */
    border-radius: 15px;
  }
  
  /* Individual Cards */
  .service-card {
    background: #444; /* Card background */
    color: #fff; /* Text color */
    border-radius: 10px;
    padding: 15px;
    text-align: center;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2); /* Subtle shadow for the cards */
  }
  
  /* Thumbnail Styling */
  .service-thumbnail {
    width: 100px;
    height: 100px;
    margin: 0 auto 15px;
    background: #ccc;
    border-radius: 5px;
  }
  
  /* Card Name */
  .service-name {
    font-size: 18px;
    font-weight: bold;
    color: #89c4f4; /* Light blue text for the name */
    margin-bottom: 10px;
  }
  
  /* Card Description */
  .service-description {
    font-size: 14px;
    line-height: 1.5;
    margin-bottom: 15px;
  }
  
  /* Footer with Icons */
  .service-footer {
    display: flex;
    justify-content: center; /* Aligns the icons in the center */
    gap: 10px;
  }
  
  .service-icons .icon img {
    width: 30px;
    height: 30px;
    object-fit: contain;
  }
  
  /* Responsive Design Tweaks (Optional) */
  @media (max-width: 768px) {
    .service-card {
      padding: 10px;
    }
  }
  </style>
  