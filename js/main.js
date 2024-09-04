/*
  Name: Anay Abhijit Joshi
  M-ID: M14391356
  Date: September 1, 2024

  CS 5167: User Interface 1
*/

// console.log("Hello!  This is your javascript file."); 


document.addEventListener("DOMContentLoaded", function () {

  // Here are the arrays of objects, with each JS object having 6 properties in it
  const users_data = [
    {
      local_date_time: "09/01/2024, 17:45 PM",
      first_last_name: "Anay Joshi",
      image_of_the_day: "anay.jpg",
      todays_journal_entry: "I am Anay Joshi!",
      hours_of_sleep: 11,
      feelings: ["Happy", "Stressed"],
    },
    {
      local_date_time: "09/02/2024, 19:05 PM",
      first_last_name: "Anay Joshi",
      image_of_the_day: "joshi.jpg",
      todays_journal_entry: "Dr. Jillian Aurisano is my Professor!",
      hours_of_sleep: 5,
      feelings: ["Happy"],
    },
    {
      local_date_time: "09/03/2024, 15:29 PM",
      first_last_name: "Anay Joshi",
      image_of_the_day: "cs5167.jpg",
      todays_journal_entry: "This course is super-super nice...",
      hours_of_sleep: 3.5,
      feelings: ["Sad", "Stressed", "Happy"],
    },
  ];

  // Accessing the elements in the DOM using their unique IDs
  const user_sleep_hours = document.querySelector('input[type="number"]');
  const average_sleep_in_hours = document.getElementById("average-sleep-in-hours");
  const selected_feelings = document.querySelectorAll('.feeling input[type="checkbox"]');
  const different_feelings_count = document.getElementById("different-feelings");
  const users_data_collection = document.getElementById("users-data");
  const submit_button = document.getElementById("submit-button");

  // Adding listeners to page elements to detect events
  user_sleep_hours.addEventListener("input", updatedSleepHoursChanges);
  selected_feelings.forEach((checkbox) => {checkbox.addEventListener("change", updatedFeelings);});
  submit_button.addEventListener("click", user_submitted_entry);

  // Here is the function which calculates the average sleep in hours of the user
  function updateAverageSleepInHours() {
    // Referred online from w3schools for reduce() method
    const user_total_sleep_in_hours = users_data.reduce(
      (sum_of_sleep_hours, user_entry) => sum_of_sleep_hours + user_entry.hours_of_sleep, 0);
    // Calculate the average sleep (sum of data points/number of data points) and round the average upto 4 decimal places
    const average_user_sleep = (user_total_sleep_in_hours / users_data.length).toFixed(4);
    // Display the average number of hours of sleep
    average_sleep_in_hours.textContent = `User Slept for an average of: '${average_user_sleep}' hours.`;
  }

  // Displays previous user entry(ies) on the UI
  function notePreviousUserEntries() {
    users_data_collection.innerHTML = "";
    // Loop through each user and assign the entry-card, which is a visual block/container of the UI
    users_data.forEach((user_entry) => {
    const user_data_history = document.createElement("div");
    user_data_history.className = "entry-card";
    // Referred to GeeksForGeeks
    user_data_history.innerHTML = `
        <p><strong>Local Date:</strong> ${user_entry.local_date_time}</p>
        <p><strong>Name(First Last):</strong> ${user_entry.first_last_name}</p>
        <p><strong>Today's Journal Entry:</strong> ${user_entry.todays_journal_entry}</p>
        <p><strong>Hours of Sleep:</strong> ${user_entry.hours_of_sleep}</p>
        <p><strong>Feelings:</strong> ${user_entry.feelings.join(", ")}</p>
        <br>
    `;
    users_data_collection.appendChild(user_data_history);
  });
  }

  function updatedFeelingsUI() {
    // Referred online from w3schools for reduce() method
    const number_of_feelings = users_data.reduce((counts, user_entry) => {
      // Loop thorugh each of the different feeling chosen by the user
      user_entry.feelings.forEach((feelings) => {
        counts[feelings] = (counts[feelings] || 0) + 1;
      });
      return counts;  // Return the 'counts' object
    }, {});

    // Referred a YouTube video and w3school website for textContent property...
    // Maps the formatted string and joins using ","
    different_feelings_count.textContent = `User's Different Feelings (Number of Times): ${Object.entries(number_of_feelings)
      .map(([feelings, count]) => `"${feelings}: ${count}"`)
      .join(", ")}`;
  }

  // Let's update the hours of sleep as per the User's Entry
  function updatedSleepHoursChanges() {
    /*
       The parseInt method parses a value as a string and returns the first integer.
       10 = Decimal
       If the input is blank/empty, then default to 0
       Referred to w3schools.com
    */
    const hours_of_sleep = parseInt(user_sleep_hours.value, 10) || 0;

    // Referred online from w3schools and GeeksForGeeks
    const today = new Date().toISOString().split("T")[0];

    // Let's find today's entry in the "users_data" which is an array of objects by matching it with the 
    // local date time, i.e., accessing the property of the object
    let user_today_entry = users_data.find((user_entry) => user_entry.local_date_time === today);
    
    // If not found, then create a new entry
    if (!user_today_entry) {
      user_today_entry = {
          local_date_time: today,
          first_last_name: "",
          image_of_the_day: "",
          todays_journal_entry: "",
          hours_of_sleep: 0,
          feelings: [],
      };
      // Add this new array into "users_data"
      users_data.push(user_today_entry);
    }
    // Update the hours of sleep
    user_today_entry.hours_of_sleep = hours_of_sleep;

    // Now, it's time to work for the program, so it will update the average sleep hours and notes down the previous user entries
    updateAverageSleepInHours();
    notePreviousUserEntries();
  }

  // Update the different feelings chosen/selected by the user
  function updatedFeelings() {
    // Referred online from w3schools and GeeksForGeeks
    const today = new Date().toISOString().split("T")[0];

    // Let's find today's entry in the "users_data" which is an array of objects by matching it with the 
    // local date time, i.e., accessing the property of the object
    let user_today_entry = users_data.find((user_entry) => user_entry.local_date_time === today);
    
    // If not found, then create a new entry
    if (!user_today_entry) {
      user_today_entry = {
          local_date_time: today,
          first_last_name: "",
          image_of_the_day: "",
          todays_journal_entry: "",
          hours_of_sleep: 0,
          feelings: [],
      };
      // Add this new array into "users_data"
      users_data.push(user_today_entry);
    }

    // Update the different feelings of the user by mapping the values mentioned in "index.html" and 
    // filtering out thre checked box(es) which are being selected by the user
    user_today_entry.feelings = Array.from(selected_feelings)
      .filter((checkbox) => checkbox.checked)
      .map((checkbox) => checkbox.value);

    // Now, it's time to work for the program, so it will update the average sleep hours and notes down the previous user entries
    updatedFeelingsUI();
    notePreviousUserEntries();
  }


  function user_submitted_entry() {
    // Referred online from w3schools and GeeksForGeeks
    const today = new Date().toISOString().split("T")[0];

    // const name = document.getElementById("first-last-name").value || "User's Name";

    // Let's find today's entry in the "users_data" which is an array of objects by matching it with the 
    // local date time, i.e., accessing the property of the object
    let user_today_entry = users_data.find((user_entry) => user_entry.local_date_time === today);

    // If not found, then create a new entry
    if (!user_today_entry) {
      user_today_entry = {
          local_date_time: today,
          first_last_name: "User's Name", // Let's keep it anonymous
          image_of_the_day: "",   // Not Required/Necessary
          todays_journal_entry: "User's journal entry", // Let's keep it anonymous
          hours_of_sleep: parseInt(user_sleep_hours.value, 10) || 0,
          // Filter the checkbox(es) and map the values accordingly from "index.html"
          feelings: Array.from(selected_feelings)
              .filter((checkbox) => checkbox.checked)
              .map((checkbox) => checkbox.value),
      };
      users_data.push(user_today_entry);
    } 
    else {
      /*
       The parseInt method parses a value as a string and returns the first integer.
       10 = Decimal
       If the input is blank/empty, then default to 0
       Referred to w3schools.com
    */
      user_today_entry.hours_of_sleep = parseInt(user_sleep_hours.value, 10) || 0;
      // Filter the checkbox(es) and map the values accordingly from "index.html"
      user_today_entry.feelings = Array.from(selected_feelings)
        .filter((checkbox) => checkbox.checked)
        .map((checkbox) => checkbox.value);
      // user_today_entry.first_last_name == name;
    }

    // Again, it's time for the program to work, so calling the functions which are defined earlier.
    updateAverageSleepInHours();
    updatedFeelingsUI();
    notePreviousUserEntries();
  }

  // This code should be able to run without ensuring the DOM is being loaded again, and these functions should
  // only be triggered by the user's entries. Therefore, calling the function directly.
  // Referred online as I didn't know the difference of calling the functions and using event listeners.

  // Most importantly, this JS code will only run after the DOM is being fully loaded 
  // and parsed by the browser because of the first line of code on line 12
  updateAverageSleepInHours();
  updatedFeelingsUI();
  notePreviousUserEntries();
});