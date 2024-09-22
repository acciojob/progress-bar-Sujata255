const circles = document.querySelectorAll('.circle');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

let currentActive   
 = 0;

// Initially disable the previous button
prevBtn.disabled = true;

// Function to update the progress bar
function updateProgressBar() {
  circles.forEach((circle, index) => {
    if (index < currentActive) {
      circle.classList.add('active');
    } else {
      circle.classList.remove('active');   

    }
  });

  // Update   
 button states
  if (currentActive === 0) {
    prevBtn.disabled = true;
  } else {
    prevBtn.disabled = false;
  }

  if (currentActive === circles.length - 1) {
    nextBtn.disabled = true;
  } else {
    nextBtn.disabled = false;
  }
}

// Event listeners for buttons
nextBtn.addEventListener('click', () => {
  currentActive++;
  updateProgressBar();
});

prevBtn.addEventListener('click', () => {
  currentActive--;
  updateProgressBar();
});

// Initial update
updateProgressBar();
