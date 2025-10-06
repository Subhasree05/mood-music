document.addEventListener('DOMContentLoaded', function() {
  const fixedBar = document.getElementById('fixedBar');
  const saveEntryBtn = document.getElementById('saveEntry');
  const journalEntryTextarea = document.getElementById('journalEntry');
  let selectedDate; // Variable to store the selected date

  // Create calendar grid
  const calendarDiv = document.getElementById('calendar');
  const journalForm = document.getElementById('journalForm');

  for (let i = 1; i <= 31; i++) {
      const dateDiv = document.createElement('div');
      dateDiv.classList.add('date');
      dateDiv.textContent = i;
      dateDiv.setAttribute('data-date', i);
      dateDiv.addEventListener('click', function() {
          selectedDate = this.getAttribute('data-date');
          showJournalForm();
      });
      calendarDiv.appendChild(dateDiv);
  }

  // Show journal form for selected date
  function showJournalForm() {
      journalForm.style.display = 'block';
      journalEntryTextarea.focus();
      journalEntryTextarea.value = ''; // Clear previous entry
  }

  // Save journal entry
  saveEntryBtn.addEventListener('click', function() {
      const entry = journalEntryTextarea.value.trim();
      if (entry) {
          // For demonstration purposes, let's just log the entry
          console.log('Saved entry for date:', selectedDate, '-', entry);
          // You can save this entry to a database or perform any other action here
          journalForm.style.display = 'none'; // Hide form after saving
      } else {
          alert('Please enter a journal entry.');
      }
  });

  // Event handling for fixed bar and modal
  fixedBar.addEventListener('click', openCalendar);

  const closeIcon = document.querySelector('.close');
  closeIcon.addEventListener('click', closeCalendar);

  function openCalendar() {
      const modal = document.getElementById('calendarModal');
      modal.style.display = 'flex';
  }

  function closeCalendar() {
      const modal = document.getElementById('calendarModal');
      modal.style.display = 'none';
  }
 
  
});
function navigateToPage(happy) {
  window.location.href = happy;
}


document.addEventListener('DOMContentLoaded', function() {
  // Your existing code

  // Add event listener to the angry image
  const angryImage = document.getElementById('angry2');
  angryImage.addEventListener('click', function() {
      navigateToAngryPage('angry.html'); // Change to the correct HTML file name
  });
});

// Function to navigate to the angry HTML page
function navigateToAngryPage(angry) {
  window.location.href = angry;
}
document.addEventListener('DOMContentLoaded', function() {
  // Your existing code

  // Add event listener to the angry image
  const sleepyImage = document.getElementById('sleepy');
  sleepyImage.addEventListener('click', function() {
      navigateToAngryPage('sleepy.html'); // Change to the correct HTML file name
  });
});

// Function to navigate to the angry HTML page
function navigateToAngryPage(sleepy) {
  window.location.href = sleepy;
}