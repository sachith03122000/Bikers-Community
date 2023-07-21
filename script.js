// JavaScript code for the bikers community website

// Sample data
const sampleUser = {
    name: 'John Doe',
    username: 'johndoe',
    email: 'john@example.com'
  };
  
  const samplePosts = [
    {
      title: 'First Post',
      content: 'This is the content of the first post.',
      author: 'Jane Smith'
    },
    {
      title: 'Second Post',
      content: 'This is the content of the second post.',
      author: 'John Doe'
    }
  ];
  
  const sampleEvents = [
    {
      title: 'Bike Race',
      date: '2023-08-10',
      location: 'Central Park'
    },
    {
      title: 'Mountain Biking Trip',
      date: '2023-09-15',
      location: 'Rocky Mountains'
    }
  ];
  
  // Function to display user profile
  function displayUserProfile(user) {
    const userProfileContainer = document.getElementById('user-profile');
    userProfileContainer.innerHTML = `
      <h2>${user.name}</h2>
      <p>Username: ${user.username}</p>
      <p>Email: ${user.email}</p>
    `;
  }
  
  // Function to display forum posts
  function displayForumPosts(posts) {
    const forumPostsContainer = document.getElementById('forum-posts');
    let html = '<h2>Forum Posts</h2>';
    posts.forEach(post => {
      html += `
        <div class="post">
          <h3>${post.title}</h3>
          <p>${post.content}</p>
          <p>By: ${post.author}</p>
        </div>
      `;
    });
    forumPostsContainer.innerHTML = html;
  }
  
  // Function to display events
  function displayEvents(events) {
    const eventsContainer = document.getElementById('events');
    let html = '<h2>Upcoming Events</h2>';
    events.forEach(event => {
      html += `
        <div class="event">
          <h3>${event.title}</h3>
          <p>Date: ${event.date}</p>
          <p>Location: ${event.location}</p>
        </div>
      `;
    });
    eventsContainer.innerHTML = html;
  }
  
  // Function to initialize the application
  function initializeApp() {
    displayUserProfile(sampleUser);
    displayForumPosts(samplePosts);
    displayEvents(sampleEvents);
  }
  
  // Initialize the application
  initializeApp();
  