
const searchbar = document.getElementById('searchbar');
const goButton = document.getElementById('goButton');
const resetChatButton = document.getElementById('resetChatButton');
const chatbox = document.getElementById('chatbox');

async function sendMessageToChatbot(message) {
  try {
    const response = await fetch('/chatbot', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message }),
    });

    if (response.ok) {
      const data = await response.json();
      const chatbotResponse = data.message;

      chatbox.innerHTML += `<p class="user-message">${message}</p>`;
      chatbox.innerHTML += `<p class="chatbot-message">${chatbotResponse}</p>`;
    } else {
      console.error('Error:', response.statusText);
    }
  } catch (error) {
    console.error('Error:', error);
  }
}

async function resetMessageHistory() {
  try {
      const response = await fetch('/reset', {
          method: 'POST',
      });

      if (response.ok) {
          console.log('Message history reset successfully.');
      } else {
          console.error('Error:', response.statusText);
      }
  } catch (error) {
      console.error('Error:', error);
  }
}

// Event listener for the "Go" button
goButton.addEventListener('click', () => {
  const userMessage = searchbar.value;
  if (userMessage) {
    sendMessageToChatbot(userMessage);
    searchbar.value = ''; // Clear the input field
  }
});

// Event listener for the "Reset Chat" button
resetChatButton.addEventListener('click', () => {
  // Clear the chatbox and reset the searchbar
  chatbox.innerHTML = "<p class='chatbot-message'>Hello, I'm VakalatAI. How may I assist you?</p>";
  searchbar.value = '';
  resetMessageHistory();
});

// You can add additional event listeners or functionality as needed
