const CustomEventEmitter = require('./eventEmitter');
const emitter = new CustomEventEmitter();

// Event listener for 'userLoggedIn'
emitter.on('userLoggedIn', (user) => {
  console.log(`${new Date().toISOString()}: ${user} logged in`);
});

// Event listener for 'userLoggedOut'
emitter.on('userLoggedOut', (user) => {
  console.log(`${new Date().toISOString()}: ${user} logged out`);
});

// Function to simulate user login/logout
function simulateUserActivity() {
  const userId = `USER_${Math.floor(Math.random() * 100)}`;
  const loggedIn = Math.random() > 0.5;

  if (loggedIn) {
    emitter.emit('userLoggedIn', userId);
  } else {
    emitter.emit('userLoggedOut', userId);
  }

  // Simulate next login/logout after a random interval
  setTimeout(simulateUserActivity, Math.random() * 1900 + 100);
}

// Start simulating user activity
simulateUserActivity();
