const readline = require('readline');

// Define predefined questions and answers
const qaPairs = {
  'How are you?': 'I am fine, thank you!',
  'What is your name?': 'I am a Node.js chatbot.',
  // Add more predefined questions and answers
};

// Create readline interface for stdin and stdout
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Function to get user input
const getUserInput = () => {
  rl.question('You: ', (input) => {
    if (input.toLowerCase() === 'exit' || input.toLowerCase() === 'quit') {
      rl.close();
    } else {
      const response = qaPairs[input] || "Sorry, I don't understand that.";
      console.log('Chatbot:', response);
      getUserInput();
    }
  });
};

// Start interaction
getUserInput();

// Close the readline interface
rl.on('close', () => {
  console.log('Goodbye!');
  process.exit(0);
});