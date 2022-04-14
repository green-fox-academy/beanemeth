// Create current timestamp
const timestamp = Date.now();

// Convert timestamp to date/time
const date = new Date(timestamp);

// Show date/time in the user's timezone
console.log(date.toLocaleString());
console.log(timestamp)