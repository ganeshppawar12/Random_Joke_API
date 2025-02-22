const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Enable CORS
app.use(cors());

// Predefined jokes array
const jokes = [
    "Why don’t scientists trust atoms? Because they make up everything!",
    "What do you call fake spaghetti? An impasta!",
    "Why did the scarecrow win an award? Because he was outstanding in his field!",
    "Why don't skeletons fight each other? They don't have the guts!",
    "Why couldn't the bicycle stand up by itself? It was two-tired!"
];

// Route to get a random joke
app.get('/api/jokes/random', (req, res) => {
    const randomIndex = Math.floor(Math.random() * jokes.length);
    res.json({ joke: jokes[randomIndex] });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
