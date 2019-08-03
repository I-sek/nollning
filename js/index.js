// User settings
const gasqueTime = new Date('2019-09-20 18:00');



// Global constants
// Google Maps API key (restricted for use on https://*.isek.se/* only)
const MAPS_API_KEY = 'AIzaSyC3SinPUeSX8OirBR4mS-scUPktb7mtAUU';

// Days range from 0-6 and begin on Sunday
const dayLabels = [
  'SÖN',
  'MÅN',
  'TIS',
  'ONS',
  'TOR',
  'FRE',
  'LÖR',
]


// Setup
window.onload = init;

// Function to run on page load
function init() {
  setInterval(updateTimeLeft, 1000);
  loadWeekData();
}

// Load and insert week data
function loadWeekData() {
  let weekDataHtml = '';
  
  weekData.forEach(week => {
    // Week start
    weekDataHtml += 
      `<div class="row week">
         <div class="col">
           <div class="row week-header">
             <div class="col">
               ${week.title}
             </div>
           </div>`;

    // Days in week
    week.days.forEach((day, index) => {
      const date = new Date(day.date);
      const dayLabel = dayLabels[date.getDay()];
      const extraCss = index % 2 === 0 ? '' : 'odd';
      // FIXME Add link to maps
      weekDataHtml +=
        `<div class="row day-header ${extraCss}" onclick="toggleDay(this)">
          <div class="col">
            <span class="day-label">${dayLabel}</span>
            <span class="day-header-content">${day.header}</span>
          </div>
        </div>
        <div class="row day-body">
          <div class="col">
            <div class="miniheader">
              <div>
                ${dayLabel} ${date.getDate()}/${date.getMonth() + 1}
              </div>
              <div>
                ${day.shortInfo}
              </div>
            </div>
            ${day.body}

            <br><br>

            <!--<a href="https://maps.google.com/?q=${day.geo}" target="_blank" rel="noopener noreferrer">
              <img class="img-fluid" alt="Visa var på Google Maps" src="https://maps.googleapis.com/maps/api/staticmap?markers=${day.geo}&size=560x200&key=${MAPS_API_KEY}">
            </a>-->
          </div>
        </div>`;
    });
    
    // Week end
    weekDataHtml +=
      `  </div>
       </div>`;
  });

  // Add generated html to DOM
  const weekDataTarget = document.getElementById('weekDataTarget');
  weekDataTarget.innerHTML = weekDataHtml;
}

function updateTimeLeft() {
  // Calculate time left
  const now = new Date();
  const timeLeftMillis = gasqueTime - now;
  const days = Math.floor(timeLeftMillis / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeftMillis / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((timeLeftMillis / (1000 * 60)) % 60);
  const seconds = Math.floor((timeLeftMillis / 1000) % 60);

  // Get targets
  const daysSegment = document.getElementById('daysSegment');
  const hoursSegment = document.getElementById('hoursSegment');
  const minutesSegment = document.getElementById('minutesSegment');
  const secondsSegment = document.getElementById('secondsSegment');

  // Fill targets
  daysSegment.innerHTML = ('0' + days).slice(-2);
  hoursSegment.innerHTML = ('0' + hours).slice(-2);
  minutesSegment.innerHTML = ('0' + minutes).slice(-2);
  secondsSegment.innerHTML = ('0' + seconds).slice(-2);
}

function showContent(target, num) {
  if (target.classList.contains('selected')) return;

  // Remove last selection and add to new tab
  document.querySelector('.tab.selected').classList.remove('selected');
  target.classList.add('selected');

  // Hide all content views
  const contentHolders = document.querySelectorAll('.content');
  contentHolders.forEach(content => {
    content.style.display = 'none';
  })

  // Show current content view
  contentHolders[num].style.display = 'block';
}

function toggleDay(caller) {
  // Target body is the next element
  const target = caller.nextElementSibling;

  target.classList.toggle('expanded');
}
