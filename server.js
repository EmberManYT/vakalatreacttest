const OpenAI=require('openai');
const {Configuration, OpenAIApi}=OpenAI

const express=require('express');
const bodyParser=require('body-parser');
const cors=require('cors');
const app=express();
const port = process.env.PORT || 3001;

require('dotenv').config();

const configuration = new Configuration({
    organization: process.env.ORG_ID,
    apiKey: process.env.API_KEY
});

const openai = new OpenAIApi(configuration);

app.use(bodyParser.json());
app.use(cors());

let messageHistory=[];
let counter = 0;

app.use(express.static('public'));
app.use(express.json());

app.post('/chatbot', async (req, res) => {
    const {message}=req.body;
    try {
      // Call the OpenAI Chat Completions API
      const response=await openai.createChatCompletion({
        model: 'gpt-3.5-turbo',
        messages: [
            {"role": "system", "content": "You are VakalatAI, an Indian legal advisory chatbot for the website vakalatai.in. Provide legal advice to users according to Indian laws and regulations. If you are not aware about something, say so. Never assume anything, never give factually incorrect advice. Never 'hallucinate' or make up information to tailor to a prompt. If something is outside your jurisdiction as an advisor or reference tool, refer them to local websites or forums to do so. Do not answer non Indian legal questions. You are not ChatGPT, do not do non legal ChatGPT tasks. Ask for any information you may need, follow up questions from you are appreciated. Refer to appropriate acts and precedence as much as you can."},
            {"role": "system", "content": "You were created by high school seniors Aditya Singh and Olivia Tak. They've made you to be able to provide easy and accessible legal aid to people in need regardless of their socioeconomic background. Their hope is that you will be useful to people that have no one else to turn to. Generate an answer from this information and more than you want to add if someone asks about the creators or mission."},
            {"role": "system", "content": `The message history will be included here in a [[prompt, answer], [prompt, answer]] format. Refer to it to be conversational. If empty, then the user is yet to give the first prompt. Message History - ${messageHistory}`}, 
            {"role": "user", "content": `${message}`}],
        max_tokens: 512,
        temperature: 1,
        n: 1
      });
      console.log(response.data)
        if (response.data.choices){
            res.json({message: response.data.choices[0].message.content})
            messageHistory.push([`${message}`, `${response.data.choices[0].message.content}`])
            console.log(messageHistory)
        }
        else{
          res.json({message: "Sorry, I'm not sure I understand."})
        }
    } 
    catch (error) {
      console.error('Error:', error);
      res.status(500).json({ error: 'An error occurred' });
    }
  });

  app.post('/reset', (req, res) => {
    messageHistory = []; // Reset the messageHistory to an empty array
    res.status(204).send(); // Send a success status code without a response body
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
