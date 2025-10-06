const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Helper function to check if a string is a number
function isNumber(str) {
    return !isNaN(str) && !isNaN(parseFloat(str));
}

// Helper function to check if a string contains only alphabets
function isAlphabet(str) {
    return /^[a-zA-Z]+$/.test(str);
}

// Helper function to check if a string contains special characters
function isSpecialCharacter(str) {
    return /[^a-zA-Z0-9]/.test(str);
}

// Helper function to create alternating caps string
function createAlternatingCaps(alphabets) {
    // Concatenate all alphabets and reverse
    const concatenated = alphabets.join('').split('').reverse().join('');
    
    // Apply alternating caps (starting with uppercase for first character)
    let result = '';
    for (let i = 0; i < concatenated.length; i++) {
        if (i % 2 === 0) {
            result += concatenated[i].toUpperCase();
        } else {
            result += concatenated[i].toLowerCase();
        }
    }
    return result;
}

// Main POST route
app.post('/bfhl', (req, res) => {
    try {
        const { data } = req.body;
        
        // Validation
        if (!data || !Array.isArray(data)) {
            return res.status(400).json({
                is_success: false,
                error: "Invalid input: 'data' must be an array"
            });
        }

        // Initialize arrays and variables
        const oddNumbers = [];
        const evenNumbers = [];
        const alphabets = [];
        const specialCharacters = [];
        let sum = 0;

        // Process each element in the data array
        data.forEach(item => {
            const itemStr = String(item);
            
            if (isNumber(itemStr)) {
                const num = parseInt(itemStr);
                sum += num;
                
                if (num % 2 === 0) {
                    evenNumbers.push(itemStr);
                } else {
                    oddNumbers.push(itemStr);
                }
            } else if (isAlphabet(itemStr)) {
                alphabets.push(itemStr.toUpperCase());
            } else if (isSpecialCharacter(itemStr)) {
                specialCharacters.push(itemStr);
            }
        });

        // Create concatenated string with alternating caps
        const concatString = createAlternatingCaps(alphabets);

        // Response object
        const response = {
            is_success: true,
            user_id: "bikash_boro_10062003", // Replace with your actual details
            email: "bikashwork@gmail.com", // Replace with your actual email
            roll_number: "112216014", // Replace with your actual roll number
            odd_numbers: oddNumbers,
            even_numbers: evenNumbers,
            alphabets: alphabets,
            special_characters: specialCharacters,
            sum: sum.toString(),
            concat_string: concatString
        };

        res.status(200).json(response);

    } catch (error) {
        console.error('Error processing request:', error);
        res.status(500).json({
            is_success: false,
            error: "Internal server error"
        });
    }
});

// Health check endpoint
app.get('/health', (req, res) => {
    res.status(200).json({
        status: 'OK',
        message: 'Server is running'
    });
});

// Handle 404 for other routes
app.use('*', (req, res) => {
    res.status(404).json({
        is_success: false,
        error: "Route not found"
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    console.log(`API endpoint: http://localhost:${PORT}/bfhl`);
});

module.exports = app;
