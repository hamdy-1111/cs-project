
    // Define your admin credentials here
    const admins = [
        { name: "hamdy", id: "463647338", masterKey: "key" },
        { name: "halim", id: "012345678", masterKey: "key" },
        { name: "mo", id: "123456789", masterKey: "key" },
<<<<<<< HEAD
        { name: "me", id: "000000000", masterKey: "key" },
=======
        { name: "me", id: "000000000", masterKey: "key" }
>>>>>>> 85ce7a39a74120b4279052f1dc2f731c9a90962c
    ];
let masterKey = admins[0].masterKey
console.log(masterKey)
    // Function to hash using SHA-256
    function sha256(input) {
        return CryptoJS.SHA256(input).toString();
    }

// Define regular expressions for admin credentials
const namePattern = /^[a-zA-Z\s]+$/; // Allows only letters and spaces
const idPattern = /^\d+$/; // Allows only digits
const masterKeyPattern = /^[a-zA-Z0-9]+$/; // Allows letters and digits

function validateAdmin() {
    // Retrieve input values
    const adminname = getInputValue("adminname");
    const adminId = getInputValue("adminId");
    const masterKey = getInputValue("masterKey");

    // Validate input using regular expressions
    if (!namePattern.test(adminname)) {
        showError("Invalid admin name. Please enter letters and spaces only." , 'Error!');
        return;
    }

    if (!idPattern.test(adminId)) {
        showError("Invalid admin ID. Please enter digits only." , 'Error!');
        return;
    }

    if (!masterKeyPattern.test(masterKey)) {
        showError("Invalid master key. Please enter letters and digits only." , 'Error!');
        return;
    }

    // Hash and encrypt admin credentials
    const hashedName = sha256(adminname.toLowerCase());
    const hashedId = sha256(adminId);
    const encryptedMasterKey = sha256(masterKey);

    // Find admin in the list
    const admin = admins.find(a => sha256(a.name.toLowerCase()) === hashedName && sha256(a.id) === hashedId && sha256(a.masterKey) === encryptedMasterKey);

    if (admin) {
        // Successful login
        preloader.style.display = 'block';
        // Hide the preloader after 3 seconds
        setTimeout(hidePreloader, 1000);
        hideElement('.auth');
        showElement('.op');
        siem = document.getElementById('siem');
        siem.classList.add('siem');
        siemh2=document.querySelector('#siem h2');
<<<<<<< HEAD
        siemh2.style.display='block'
        // Create the delete all logs button
=======
        siemh2.style.display='block';
                // Create the delete all logs button
>>>>>>> 85ce7a39a74120b4279052f1dc2f731c9a90962c
        const deleteAllLogsButton = document.createElement('button');
        deleteAllLogsButton.textContent = 'Delete all';
        deleteAllLogsButton.id = 'deleteAllLogsButton';
        // Append the button to the document body or any desired container
        siem.appendChild(deleteAllLogsButton);
        document.querySelector('.board img').src='log out.jpeg';
                // Apply updated container styles
        const container = document.querySelector('.container');
        container.classList.add('updated-container');
        const board = document.querySelector('.board');
        board.classList.add('updated-board');
        document.querySelector('.canvas').style.display='flex';
        document.querySelector('.board .btn').style.display='block';
        // Create the outer box element
        const outerBox = document.createElement('div');
        outerBox.classList.add('box');
        // Create the first wave element
        const waveOne = document.createElement('div');
        waveOne.classList.add('wave', '-one');
        // Create the second wave element
        const waveTwo = document.createElement('div');
        waveTwo.classList.add('wave', '-two');
        // Append the wave elements to the outer box
        outerBox.appendChild(waveOne);
        outerBox.appendChild(waveTwo);
        // Append the outer box to the document body
        container.appendChild(outerBox);
        displayLogsFromLocalStorage();
        // Get the current date and time
        const [time, date] = [new Date(), new Date()];
        logs("logged in", '', time, date, adminname);

    } else {
        // Failed login

showError('Invalid credentials.' , 'Login Failed!')
    }
}

// Function to get input value by id
function getInputValue(id) {
    const inputElement = document.getElementById(id);
    return inputElement ? inputElement.value.trim() : '';
}

// Function to show error message with SweetAlert
function showError(message, title) {
    Swal.fire({
        icon: 'info',
        title: title,
        text: message,
        customClass: {
            popup: 'swal2-popup-dark',
            title: 'swal2-title-dark',
            content: 'swal2-content-dark',
            confirmButton: 'swal2-confirm-dark soundButton', // Add the class here
        },
        background: 'rgba(0, 0, 0, 0.53)', // Update background color to match your website
        backdrop: 'rgba(0, 0, 0, 0.5)', // Update backdrop color to match your website
        cancelButtonColor: '#6c757d', // Update cancel button color to match your website
        confirmButtonColor: '#dc3545', // Update confirm button color
        didOpen: () => {
            // Add data-sound attribute after the Swal modal is opened
            const confirmBtn = document.querySelector('.swal2-confirm');
            confirmBtn.setAttribute('data-sound', 'clickSoundGroup1');

            // Set up event listener for the confirm button
            confirmBtn.addEventListener('click', function (event) {
                const soundId = this.getAttribute('data-sound');
                if (soundId) {
                    playSound(soundId);
                }
            });
        }
    });
}

// Function to play sound
function playSound(soundId) {
    const audio = document.getElementById(soundId);
    if (audio) {
        audio.play();
    }
}
// Global function to handle Enter key press event
function handleEnterKeyPress(event, callback) {
    if (event.key === 'Enter') {
        callback();
    }
}


/* sound effects  */
document.addEventListener('DOMContentLoaded', function () {
    // Get all elements with the class 'soundButton' and set up event listeners
    var buttons = document.querySelectorAll('.soundButton');
    buttons.forEach(function (button) {
        button.addEventListener('click', function (event) {
            var soundId = this.getAttribute('data-sound');

            // Check if the element has the 'fileLink' class
            var isFileLink = button.classList.contains('fileLink');

            // Play sound if soundId is defined
            if (soundId) {
                if (isFileLink) {
                    event.preventDefault(); // Prevent the default behavior of the link for file links
                    playSound(soundId);

                    // Continue with the default behavior after a delay (e.g., 500 milliseconds)
                    setTimeout(function () {
                        window.location.href = button.getAttribute('href');
                    }, 500);
                } else {
                    playSound(soundId); // Play sound without preventing the default behavior for regular links
                }
            }
            // Your other functionality here
        });
    });
    function playSound(soundId) {
        var audio = document.getElementById(soundId);
        if (audio) {
            audio.play();
        }
    }
});


// Function to hide element by selector
function hideElement(selector) {
    const element = document.querySelector(selector);
    if (element) {
        element.style.display = 'none';
    }
}

// Function to show element by selector
function showElement(selector) {
    const element = document.querySelector(selector);
    if (element) {
        element.style.display = 'block';
    }
}

// Function to clear output
function clearOutput() {
    document.getElementById('output').textContent = '';
}

        // Function to generate a hashed master key
        function generateHashedMasterKey(userInputMasterKey) {
            return CryptoJS.SHA256(userInputMasterKey).toString();
        }

        // Function to securely store passwords
        function securelyStorePassword(domain, encryptedPassword) {
            // Check if localStorage is supported
            if (typeof(Storage) !== "undefined") {
                // Store the encrypted password securely in localStorage
                localStorage.setItem(domain, encryptedPassword);
                console.log(`Password for ${domain} securely stored.`);
            } else {
                console.error("Sorry, your browser does not support web storage. Password not stored.");
            }
        }

function retrievePassword() {
    const domainInput = document.getElementById('retrieveDomainInput');
    const domain = domainInput.value.trim();

    // Regular expression for domain validation
    const domainPattern = /^[a-zA-Z0-9.-]+\.(com|org|net|info|edu)$/;

    // Check if the domain input matches the domain pattern
    if (!domainPattern.test(domain)) {
        showError("Invalid domain format. Please enter a valid domain name with one of the following extensions: .com, .org, .net, .info, .edu", 'Error!');
        return;
    }

    // Retrieve encrypted password from localStorage
    const encryptedPassword = localStorage.getItem(domain);

    if (!encryptedPassword) {
        showError('Password not found for the given domain.', 'Error!');
        return;
    }

    // Decrypt password and display
    const decryptedPassword = decrypt(encryptedPassword, masterKey);
    domainInput.value = ''; // Clear the domain input field
    const vault = document.querySelector('.vault');
    const cell = document.createElement('div');
    const domainPW = document.createElement('p');
    const domainNM = document.createElement('p');
    cell.classList.add('cell');
    domainPW.classList.add('domainPW');
    domainNM.classList.add('domainNM');
    domainPW.innerHTML = decryptedPassword;
    domainNM.innerHTML = domain;
    vault.appendChild(cell);
    cell.appendChild(domainPW);
    cell.appendChild(domainNM);
    adminname = getInputValue("adminname");
    // Get the current date and time
    const [time, date] = [new Date(), new Date()];
    logs("Retrieved password for ", domain, time, date, adminname);
    console.log(`Retrieved password for ${domain}: ${decryptedPassword}`);
}






        // Function for decryption
        function decrypt(encryptedPassword, masterKey) {
            // This function decrypts the encrypted password using the master key
            const bytes = CryptoJS.AES.decrypt(encryptedPassword, masterKey);
            return bytes.toString(CryptoJS.enc.Utf8);
        }

        // Function to store password
function storePassword() {
    const domainInput = document.getElementById('domain');
    const domain = domainInput.value.trim();
    const password = document.getElementById('password').value;

    // Regular expression for domain validation
    const domainPattern = /^[a-zA-Z0-9.-]+\.(com|org|net|info|edu)$/;

    // Check if the domain input matches the domain pattern
    if (!domainPattern.test(domain)) {
        showError("Invalid domain format. Please enter a valid domain name with one of the following extensions: .com, .org, .net, .info, .edu", 'Error!');
        return;
    }

    // Encrypt password
    const encryptedPassword = encrypt(password, masterKey);
    const adminname = getInputValue("adminname");
    // Get the current date and time
    const [time, date] = [new Date(), new Date()];
    logs("stored password for ", domain, time, date, adminname);
    domainInput.value = ''; // Clear the domain input field
    document.getElementById('password').value = ''; // Clear the password input field
    // Securely store password
    securelyStorePassword(domain, encryptedPassword);
}


        // Function for encryption
        function encrypt(password, masterKey) {
            // This function encrypts the password using a cryptographic algorithm
            const ciphertext = CryptoJS.AES.encrypt(password, masterKey).toString();
            return ciphertext;
        }
        
function setVaultAfterHeight() {
    const vault = document.querySelector('.vault');
    const vaultAfter = document.querySelector('.vault-after');

    const observer = new ResizeObserver(entries => {
        for (let entry of entries) {
            const newHeight = entry.contentRect.height;
            vaultAfter.style.height = newHeight + 'px';
        }
    });

    observer.observe(vault);
}

document.addEventListener("DOMContentLoaded", function() {
    // Add onclick event handler for storing password
    document.getElementById("storeButton").addEventListener("click", storePassword);

    // Add onclick event handler for retrieving password
    document.getElementById("retrieveButton").addEventListener("click", retrievePassword);

    // Toggle sections when buttons are clicked
    document.getElementById("addButton").addEventListener("click", function() {
        toggleSection("passwordInput", "retrieveDomain");
        setVaultAfterHeight(); // Adjust .vault::after height when toggling sections
    });

    document.getElementById("getButton").addEventListener("click", function() {
        toggleSection("retrieveDomain", "passwordInput");
        setVaultAfterHeight(); // Adjust .vault::after height when toggling sections
    });

    // Function to toggle sections
    function toggleSection(showId, hideId) {
        var showSection = document.getElementById(showId);
        var hideSection = document.getElementById(hideId);
        
        showSection.style.display = "block";
        hideSection.style.display = "none";
    }

setVaultAfterHeight();
    
    // Call the setVaultAfterHeight function whenever the window is resized
    window.addEventListener('resize', setVaultAfterHeight);
});





function updateChart() {
    // Retrieve logs from localStorage
    const logsArray = JSON.parse(localStorage.getItem('logs')) || [];

    // Define the actions to count and their corresponding colors
    const actionsToCount = ["logged in", "Retrieved password for", "Stored password for"];
    const actionColors = ["#e91e63", "#03a9f4", "#66bb6a"];

    // Initialize counts object
    const counts = {};

    // Loop through logs to count actions by day
    logsArray.forEach(log => {
        const date = formatDate(log.date); // Format the date
        const action = log.action;

        // Check if the action should be counted
        if (actionsToCount.includes(action)) {
            counts[date] = counts[date] || {};
            counts[date][action] = (counts[date][action] || 0) + 1;
        }
    });

    // Prepare data for Chart.js
    const labels = Object.keys(counts).sort(); // Sort labels chronologically
    const datasets = actionsToCount.map((action, index) => ({
        label: action,
        data: labels.map(date => counts[date]?.[action] || 0),
        backgroundColor: actionColors[index] // Assign color based on index
    }));

    // Create Chart.js chart
    const ctx = document.getElementById('actionChart').getContext('2d');
    const actionChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: datasets
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });
}
<<<<<<< HEAD
=======

// Function to format the date as YYYY-MM-DD
function formatDate(dateString) {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}

// Event listener to update chart on DOMContentLoaded and button clicks
document.addEventListener('DOMContentLoaded', updateChart);
document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', updateChart);
});
>>>>>>> 85ce7a39a74120b4279052f1dc2f731c9a90962c

// Function to format the date as YYYY-MM-DD
function formatDate(dateString) {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}

// Event listener to update chart on DOMContentLoaded and button clicks
document.addEventListener('DOMContentLoaded', updateChart);
document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', updateChart);
});








document.addEventListener('DOMContentLoaded', function() {
    // Call the function to fetch and display logs from localhost
});

function displayLogsFromLocalStorage() {
    // Retrieve logs from local storage
    const logsArray = JSON.parse(localStorage.getItem('logs')) || [];

    // Call the function to display logs on the page
    logsArray.forEach(log => {
        // Create log elements and append them to the page
        logs(log.action, log.domainUrl, log.time, log.date, log.adminname);
    });
}


function logs(action, domainUrl, time, date, adminname) {
    // Call the siem container
    const siemContainer = document.getElementById('siem');

    // Create the actions container
    const actionsContainer = document.createElement('div');
    actionsContainer.classList.add('actions');

    // Create the action paragraph
    const actionParagraph = document.createElement('p');
    actionParagraph.classList.add('action');

    // Create the username span
    const usernameSpan = document.createElement('span');
    usernameSpan.classList.add('who');
    usernameSpan.textContent = `@${adminname}`;
    actionParagraph.appendChild(usernameSpan);

    // Create the domainUrlText
    const domainUrlText = document.createElement('span');
    domainUrlText.classList.add('domainUrl');

    // Add the action description
    actionParagraph.appendChild(document.createTextNode(action));

    // Add the domain URL text
    domainUrlText.appendChild(document.createTextNode(domainUrl));
    actionParagraph.appendChild(domainUrlText);

    // Format the time as HH:mm:ss
    const formattedTime = new Date(time).toLocaleTimeString('en-US', {
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    });

    // Format the date as yyyy-mm-dd
    const formattedDate = new Date(date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
    }).replace(/\//g, '-');

    // Create the time span
    const timeSpan = document.createElement('span');
    timeSpan.classList.add('time');
    timeSpan.textContent = formattedTime;

    // Create the date span
    const dateSpan = document.createElement('span');
    dateSpan.classList.add('date');
    dateSpan.textContent = formattedDate;

    // Append the time and date spans to the action paragraph
    actionParagraph.appendChild(document.createTextNode(' '));
    actionParagraph.appendChild(timeSpan);
    actionParagraph.appendChild(document.createTextNode(' ')); // Add space between time and date
    actionParagraph.appendChild(dateSpan);

    // Append the action paragraph to the actions container
    actionsContainer.appendChild(actionParagraph);


// Function to handle deletion of all logs
function deleteAllLogs() {
    // Open a Swal prompt for the admin to enter the master key
    Swal.fire({
        title: 'Enter Master Key',
        text: 'u gonna delete all the history',
        input: 'password',
        inputAttributes: {
            autocapitalize: 'off',
            autocorrect: 'off'
        },
        showCancelButton: true,
        confirmButtonText: 'Confirm',
        cancelButtonText: 'Cancel',
        showLoaderOnConfirm: true,
        background: 'rgba(0, 0, 0, 0.53)',
        backdrop: 'rgba(0, 0, 0, 0.5)',
        cancelButtonColor: '#6c757d',
        confirmButtonColor: '#dc3545',
        didOpen: () => {
            // Set up event listener for the confirm button
            setupSwalButton('.swal2-confirm');

            // Set up event listener for the cancel button
            setupSwalButton('.swal2-cancel');
        },
        preConfirm: (masterKey) => {
            // Validate the entered master key
            if (sha256(masterKey) === sha256(admins[0].masterKey)) {
                // Remove all action divs from the SIEM container
                const actionDivs = siemContainer.querySelectorAll('.actions');
                actionDivs.forEach(actionDiv => {
                siemContainer.removeChild(actionDiv);
                });

                // Clear the logs from local storage (assuming logs are stored in an array)
                localStorage.removeItem('logs');
            } else {
                Swal.showValidationMessage('Incorrect master key');
            }
        },
        allowOutsideClick: () => !Swal.isLoading()
    });
}

// Add event listener to the delete all logs button
deleteAllLogsButton.addEventListener('click', deleteAllLogs);



// Create the delete icon
const deleteIcon = document.createElement('i');
deleteIcon.classList.add('bx', 'bx-x', 'soundButton');
deleteIcon.setAttribute('data-sound', 'clickSoundGroup1');

// Add event listener to the delete icon
deleteIcon.addEventListener('click', function(event) {
    var soundId = this.getAttribute('data-sound');
    playSound(soundId);
    // Your other delete functionality here
});



// Function to handle deletion of all logs
function deleteAllLogs() {
    // Open a Swal prompt for the admin to enter the master key
    Swal.fire({
        title: 'Enter Master Key',
        text: 'u gonna delete all the history',
        input: 'password',
        inputAttributes: {
            autocapitalize: 'off',
            autocorrect: 'off'
        },
        showCancelButton: true,
        confirmButtonText: 'Confirm',
        cancelButtonText: 'Cancel',
        showLoaderOnConfirm: true,
        background: 'rgba(0, 0, 0, 0.53)',
        backdrop: 'rgba(0, 0, 0, 0.5)',
        cancelButtonColor: '#6c757d',
        confirmButtonColor: '#dc3545',
        didOpen: () => {
            // Set up event listener for the confirm button
            setupSwalButton('.swal2-confirm');

            // Set up event listener for the cancel button
            setupSwalButton('.swal2-cancel');
        },
        preConfirm: (masterKey) => {
            // Validate the entered master key
            if (sha256(masterKey) === sha256(admins[0].masterKey)) {
                // Remove all action divs from the SIEM container
                const actionDivs = siemContainer.querySelectorAll('.actions');
                actionDivs.forEach(actionDiv => {
                siemContainer.removeChild(actionDiv);
                });

                // Clear the logs from local storage (assuming logs are stored in an array)
                localStorage.removeItem('logs');
            } else {
                Swal.showValidationMessage('Incorrect master key');
            }
        },
        allowOutsideClick: () => !Swal.isLoading()
    });
}

// Add event listener to the delete all logs button
deleteAllLogsButton.addEventListener('click', deleteAllLogs);



    // Add onclick event listener to delete the log entry
    deleteIcon.addEventListener('click', function() {
// Function to set up event listeners for Swal buttons
function setupSwalButton(buttonClass) {
    // Find the button element
    const button = document.querySelector(buttonClass);
    
    // Add data-sound attribute after the Swal modal is opened
    button.setAttribute('data-sound', 'clickSoundGroup1');

    // Set up event listener for the button
    button.addEventListener('click', function(event) {
        const soundId = this.getAttribute('data-sound');
        if (soundId) {
            playSound(soundId);
        }
    });
}

// Open a Swal prompt for the admin to enter the master key
Swal.fire({
    title: 'Enter Master Key',
    input: 'password',
    inputAttributes: {
        autocapitalize: 'off',
        autocorrect: 'off'
    },
    showCancelButton: true,
    confirmButtonText: 'Confirm',
    cancelButtonText: 'Cancel',
    showLoaderOnConfirm: true,
    background: 'rgba(0, 0, 0, 0.53)',
    backdrop: 'rgba(0, 0, 0, 0.5)',
    cancelButtonColor: '#6c757d',
    confirmButtonColor: '#dc3545',
    didOpen: () => {
        // Set up event listener for the confirm button
        setupSwalButton('.swal2-confirm');
        
        // Set up event listener for the cancel button
        setupSwalButton('.swal2-cancel');
    },
    preConfirm: (masterKey) => {
        // Validate the entered master key
        if (sha256(masterKey) === sha256(admins[0].masterKey)) {
            // Remove the parent actions container when delete icon is clicked
            siemContainer.removeChild(actionsContainer);
            // Remove the log entry from the local storage
            removeLogFromLocalStorage(action);
        } else {
            Swal.showValidationMessage('Incorrect master key');
        }
    },
    allowOutsideClick: () => !Swal.isLoading()
});

    });

    // Append the delete icon to the actions container
    actionsContainer.appendChild(deleteIcon);

    // Append the heading and actions container to the siem container
    siemContainer.appendChild(actionsContainer);
    actionsContainer.classList.add('typewriter');

    addLogToLocalStorage(action, domainUrl, time, date, adminname)
}


function addLogToLocalStorage(action, domainUrl, time, date, adminname) {
    // Retrieve logs array from local storage or initialize an empty array
    let logsArray = JSON.parse(localStorage.getItem('logs')) || [];

    // Push new log entry to the logs array
    logsArray.push({
        action: action,
        domainUrl: domainUrl,
        time: time,
        date: date,
        adminname: adminname
    });

    // Save updated logs array to local storage
    localStorage.setItem('logs', JSON.stringify(logsArray));
}


function removeLogFromLocalStorage(action) {
    // Retrieve logs array from local storage
    let logsArray = JSON.parse(localStorage.getItem('logs')) || [];

    // Filter out the log entry with the specified action
    logsArray = logsArray.filter(log => log.action !== action);

    // Save updated logs array to local storage
    localStorage.setItem('logs', JSON.stringify(logsArray));
}



const observer =new IntersectionObserver((entries) => {
entries.forEach((entry) =>{
    console.log(entry)
    if (entry.isIntersecting){
         entry.target.classList.add('show')
    }else{
        entry.target.classList.remove('show')
    }
})

});


const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) =>observer.observe(el));

        // Function to hide the preloader
        function hidePreloader() {
            var preloader = document.getElementById('preloader');
            preloader.style.display = 'none';
        }

        // Show the preloader when the window starts loading
        window.addEventListener('load', function() {
            var preloader = document.getElementById('preloader');
            preloader.style.display = 'block';
        });

        // Hide the preloader after 3 seconds
        setTimeout(hidePreloader, 1500);
        
  document.addEventListener('DOMContentLoaded', function() {
    document.addEventListener('click', function(event) {
      const radar = document.querySelector('.radar');
      const radarSize = 1700; // Adjust the radar size as needed
      const boundingRect = document.documentElement.getBoundingClientRect();
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;
      const clickX = event.clientX;
      const clickY = event.clientY;

      // Calculate the center of the radar
      const radarCenterX = viewportWidth / 2;
      const radarCenterY = viewportHeight / 2;

      // Calculate the offsets to position the radar centered around the click
      let xOffset = clickX - radarCenterX;
      let yOffset = clickY - radarCenterY;

      // Limit xOffset and yOffset to specified ranges
      xOffset = Math.max(34, Math.min(xOffset, 182));
      yOffset = Math.max(41, Math.min(yOffset, 172));

      // Set custom properties to adjust pseudo-element position
      radar.style.setProperty('--xOffset', xOffset + 'px');
      radar.style.setProperty('--yOffset', yOffset + 'px');
      // Hide the point after 5 seconds
      setTimeout(function() {
        radar.style.removeProperty('--xOffset');
        radar.style.removeProperty('--yOffset');
      }, 8000);
    });
  });

  document.addEventListener('DOMContentLoaded', function() {
    document.addEventListener('click', function(event) {
      const radar = document.querySelector('.radar');
      const radarSize = 1700; // Adjust the radar size as needed
      const boundingRect = document.documentElement.getBoundingClientRect();
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;
      const clickX = event.clientX;
      const clickY = event.clientY;

      // Calculate the center of the radar
      const radarCenterX = viewportWidth / 2;
      const radarCenterY = viewportHeight / 2;

      // Calculate the offsets to position the radar centered around the click
      let xOffset = clickX - radarCenterX;
      let yOffset = clickY - radarCenterY;

      // Limit xOffset and yOffset to specified ranges
      xOffset = Math.max(34, Math.min(xOffset, 182));
      yOffset = Math.max(41, Math.min(yOffset, 172));

      // Set custom properties to adjust pseudo-element position
      radar.style.setProperty('--xOffset', xOffset + 'px');
      radar.style.setProperty('--yOffset', yOffset + 'px');
      // Hide the point after 5 seconds
      setTimeout(function() {
        radar.style.removeProperty('--xOffset');
        radar.style.removeProperty('--yOffset');
      }, 5000);
    });
  });






