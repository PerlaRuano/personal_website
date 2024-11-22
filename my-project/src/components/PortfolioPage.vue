<template>
    <div class="portfolio">
      <h2>My GitHub Repositories</h2>
      <p v-if="loading">Loading...</p>
      <p v-if="error" class="error">{{ error }}</p>
      <ul v-if="repositories.length > 0">
        <li v-for="repo in repositories" :key="repo.id" class="repo-item">
          <a :href="repo.html_url" target="_blank">{{ repo.name }}</a>
          <p>{{ repo.description || 'No description available' }}</p>
          <p><strong>Language:</strong> {{ repo.language || 'N/A' }}</p>
          <p><strong>Last updated:</strong> {{ formatDate(repo.updated_at) }}</p>
        </li>
      </ul>
      <p v-else>No repositories found.</p>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    name: 'Portfolio',
    data() {
      return {
        repositories: [],
        loading: true,
        error: '',
      };
    },
    mounted() {
      this.fetchRepositories();
    },
    methods: {
      async fetchRepositories() {
        try {
          const response = await axios.get(
            'https://api.github.com/users/{your-github-username}/repos'
          );
          this.repositories = response.data;
        } catch (error) {
          this.error = 'Failed to load repositories. Please try again later.';
        } finally {
          this.loading = false;
        }
      },
      formatDate(date) {
        const options = { year: 'numeric', month: 'short', day: 'numeric' };
        return new Date(date).toLocaleDateString(undefined, options);
      },
    },
  };
  </script>
  
  <style scoped>
  .portfolio {
    max-width: 800px;
    margin: auto;
    padding: 20px;
    background-color: white;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  }
  
  h2 {
    text-align: center;
  }
  
  .repo-item {
    padding: 15px;
    border-bottom: 1px solid #ddd;
  }
  
  .repo-item a {
    font-weight: bold;
    color: #002f6c;
    text-decoration: none;
  }
  
  .repo-item a:hover {
    text-decoration: underline;
  }
  
  .error {
    color: red;
    text-align: center;
  }
  
  @media (max-width: 600px) {
    .portfolio {
      padding: 15px;
    }
  }
  </style>
  
  
  