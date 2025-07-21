// Izarra Villareal CS 81 JavaScript Module 5 Assignment 5A: Code Review

// Initializes an array of hobby log entries
const hobbyLog = [
  { day: "Monday", hobby: "drawing", minutes: 30, mood: "focused" },
  { day: "Tuesday", hobby: "reading", minutes: 20, mood: "relaxed" },
  { day: "Wednesday", hobby: "gaming", minutes: 45, mood: "excited" },
  { day: "Thursday", hobby: "drawing", minutes: 25, mood: "creative" },
  { day: "Friday", hobby: "reading", minutes: 35, mood: "calm" }
];

// This function calculates the total time spent on hobbies and receives the log as a parameter
function totalTime(log) {
  return log.reduce((sum, session) => sum + session.minutes, 0); // This is using the higher-order function reduce to sum up the minutes from each session in the log and then returns the total time spent on hobbies.
}

// This function returns a list of unique hobbies from the log using the log as a parameter
function uniqueHobbies(log) {
  const names = log.map(entry => entry.hobby); // This is using the higher-order function map to create a new array containing only the hobby names from each entry in the log.
  return [...new Set(names)]; // The uniqueHobbies function returns a new array containing only the unique hobby names by converting the array of names into a Set (which automatically removes duplicates) and then spreading the Set back into an array.
}

// This function filters sessions longer than a specified number of minutes using the log and minimum minutes as parameters
function longSessions(log, minMinutes) {
  return log.filter(entry => entry.minutes > minMinutes); // This is using the higher-order function filter to create a new array containing only the entries from the log where the minutes spent on the hobby is greater than the specified minMinutes and then returns that filtered array.
}

// This function counts how many times a specific mood appears in the log using the log and mood type as parameters
function countMood(log, moodType) {
  return log.filter(entry => entry.mood === moodType).length; // This is using the higher-order function filter to create a new array containing only the entries from the log where the mood matches the specified moodType and then returns the length of that filtered array, which represents how many times that mood appears in the log.
}

// Example usage and output
console.log("Total time spent:", totalTime(hobbyLog), "minutes"); // Returns Total time spent: 155 minutes
console.log("Unique hobbies:", uniqueHobbies(hobbyLog)); // Returns Unique hobbies: [ 'drawing', 'reading', 'gaming' ]
console.log("Sessions longer than 30 min:", longSessions(hobbyLog, 30)); // Returns Sessions longer than 30 min: [ { day: 'Wednesday', hobby: 'gaming', minutes: 45, mood: 'excited' }, { day: 'Friday', hobby: 'reading', minutes: 35, mood: 'calm' } ]
console.log("Number of relaxed sessions:", countMood(hobbyLog, "relaxed")); // Returns Number of relaxed sessions: 1