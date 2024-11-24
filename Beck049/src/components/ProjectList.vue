<template>
    <div class="project-card" v-for="project in projects" :key="project.id">
        <div class="project-content">
          <div class="project-thumbnail"></div>
          <div class="project-details">
            <h2>{{ project.name }}</h2>
            <p>{{ project.description }}</p>
            <div class="project-footer">
                <div class="project-stack">
                    <img
                    v-for="(tech, index) in project.stack"
                    :key="index"
                    :src="`./src/components/icons/${tech}.png`"
                    :alt="tech"
                    class="stack-icon"
                    />
                </div>
                <div class="project-links">
                    <a v-if="project.website" :href="project.website" target="_blank">Website</a>
                    <a v-if="project.github" :href="project.github" target="_blank">GitHub</a>
                </div>
            </div>
          </div>
        </div>
      </div>
</template>


<script>
export default {
  data() {
    return {
      projects: [
        {
          id: 1,
          name: "Project One",
          description:
            "Lorem ipsum odor amet, consectetuer adipiscing elit. Commodo dapibus primis ullamcorper curabitur pulvinar ac nisl. Per urna fermentum mollis parturient nascetur mollis dui ultricies.",
          stack: ["html", "css", "javascript"],
          website: "#",
          github: "#",
        },
        {
          id: 2,
          name: "Project Two",
          description:
            "Lorem ipsum odor amet, consectetuer adipiscing elit. Commodo dapibus primis ullamcorper curabitur pulvinar ac nisl. Per urna fermentum mollis parturient nascetur mollis dui ultricies.",
          stack: ["vue", "mongodb"],
          website: "#",
          github: null,
        },
      ],
    };
  },
};
</script>

<style scoped>

.project-card {
  display: flex;
  flex-direction: column;
  background: #444;
  border-radius: 10px;
  padding: 20px;
  margin-bottom: 20px;
}

.project-content {
  display: flex;
  align-items: flex-start;
}

.project-thumbnail {
  background: #ccc;
  width: 150px;
  height: 150px;
  border-radius: 10px;
  margin-right: 20px;
}

.project-details {
  flex: 1;
}

h2 {
  margin: 0 0 10px 0;
}

p {
  margin: 0 0 10px 0;
  font-size: 14px;
  line-height: 1.5;
}
.project-footer {
    display: flex; /* Enable flexbox for the footer */
    justify-content: space-between; /* Space out stack and links */
    align-items: center; /* Align items vertically in the center */
    margin-top: 1rem; /* Optional: Adds space above the footer */
}

.project-stack {
  display: flex; /* Allows proper alignment of icons */
  gap: 10px;
  margin: 10px 0;
}

.stack-icon {
    width: 30px; /* Adjust width as needed */
    height: 30px; /* Adjust height as needed */
    margin-right: 10px; /* Add spacing between icons */
    object-fit: contain; /* Ensures proper scaling of the images */
  }

.project-links a {
  color: #0af;
  text-decoration: none;
  margin-right: 15px;
}

.project-links a:hover {
  text-decoration: underline;
}
</style>
