var questions = [
  {
    question: ` 1. 
The kingdom of God is generally refered to as-
 `,
    options: [`The kingdom of Heaven` , 
      ` A foot stool of God`, 
      `A  place were men seek power` ,  `A visible kingdom of Man` ],
    answer: 0
  },


  {
    question: `2 . Diety is considered a- `,
    options: [`god,  goddess, or Supreme being`,
       `Jesus is not considered one`,
       `God is not a diety`  , 
      `Not to be mentioned in Christianity`
      ],
    answer: 0
  }
  ,

  {
    question: `3. A creature called man `,
    options: [`A body was created  as a container to carry the Spirit and Soul
 `, `Potential`   , `Man is not a tripartite being(spirit soul ,body` , `The soul is a tangible thing
`],
    answer: 0
  }
  ,

  {
    question: `4.  The flesh _______`,
    options: [`The flesh is a stong hold of  Sin`, `The flesh only will go to heaven`, ` The flesh always obey God`  ],
    answer: 0
  }
  ,

  {
    question: `5. I know who IAM `,
    options: [`the character must alien with the declaration made `, `the declaration does not fuel the character of the believer
`  ,  ` the believers is saved by his hard work` ],
    answer: 0
  }
  ,

  {
    question: `6.  What is discipleship `,
    options: [` the term discipleship originally meant Pupil or apprentice`, 
      `A discipline is committed to follow his will ant not God's`,
       `Select who to love and who not to love`   ],
    answer: 0
  }
  ,

  {
    question: `7.	Anyone who will follow the examples of Jesus successfully must be_________ `,
    options: [`Disciplined`,
       `Unserious`  ,
       `Love the World`  
      ],
    answer: 0
  }
  ,

  {
    question: `8. One of the foundamental obligations of a christian is to follow_______ with all men `,
  options: [`Peace`, `Quorel` , `Fast` , `Pray`],
    answer: 0
  }
  ,

  {
    question: `9.	For my mouth shall speak _______ and wickedness is an abormination to my lips.   `,
    options: [`truth`, `prohesy`, `Good things`  ],
    answer: 0
  }
  ,

  {
    question: `10 .	 But he gaveth more Grace wherefore he saith, God ______ the _______, but  giveth ________ unto the humble`,
    options: [`resisteth , proud , Grace`, `welcome,proud,Grace`, `resisteth,prayerful,honour` ],
    answer: 0
  }
  ,
  
 
      
  {
    question: `11 .	  One of these is a way of preventing strife ?  `,
    options: [`Avoid needless arguments`,
       ` Always proof your point`,
      `keep malice `
      ],
    answer: 0
  },

  {
    question: `12 .	 God want us to live a balance life ?`,
    options: [`yes`, `no` ],
    answer: 0
  }
  ,
  

];
  
  var currentQuestion = 0;
  var score = 0;
  
  function displayQuestion() {
    var questionElement = document.getElementById("question");
    var optionsElement = document.getElementById("options");
    var question = questions[currentQuestion];
    
    questionElement.textContent = question.question;
    
    optionsElement.innerHTML = '';
    for (var i = 0; i < question.options.length; i++) {
      var li = document.createElement("li");
      var input = document.createElement("input");
      input.type = "radio";
      input.name = "option";
      input.value = i;
      li.appendChild(input);
      li.appendChild(document.createTextNode(question.options[i]));
      optionsElement.appendChild(li);
    }
  }
  
  function nextQuestion() {
    var options = document.getElementsByName("option");
    
    for (var i = 0; i < options.length; i++) {
      if (options[i].checked) {
        var selectedOption = parseInt(options[i].value);
        
        if (selectedOption === questions[currentQuestion].answer) {
          score++;
        }
        
        options[i].checked = false;
        break;
      }
    }
    
    currentQuestion++;
    
    if (currentQuestion < questions.length) {
      displayQuestion();
    } else {
      displayScore();
    }
  }

  function displayScore() {
  
    var name = document.getElementById('name').value;
    var phone = document.getElementById('phone').value;
    var thanks = document.getElementById("thank");
    thanks.style.display = "block";

    thanks.innerHTML  =  "Thank You ! <br/>  <h3>"+ name +" </h3>";

    var container = document.getElementById("question_container");
    var main_container = document.getElementById("container");
    container.style.display = 'none';
  
    var scoreElement = document.createElement("div");
    scoreElement.id = "score";
    scoreElement.textContent = "Your score: " + score + "/" + questions.length;
    main_container.appendChild(scoreElement);
  
    // Set the score value in the hidden field
    var hiddenField = document.getElementById("score_input");
    hiddenField.value = score.toString();
  
    // Submit the form
  /*   var form = document.querySelector("form");
    form.submit(); */
    submitForm();
  }
  
  function submitForm() {
    //event.preventDefault(); // Prevent form submission
  
    var name = document.getElementById('name').value;
    var phone = document.getElementById('phone').value;
    var score = document.getElementById('score_input').value;
    var class_name = document.getElementById('class_name').value;
  
    var formData = new FormData();
    formData.append('name', name);
    formData.append('phone', phone);
    formData.append('score', score);
    formData.append('class_name', class_name);
  
    fetch('/adult/submit.php', {
      method: 'POST',
      body: formData
    })
    .then(function(response) {
      if (response.ok) {
        //alert('succesful');
        console.log('Form submitted successfully.');
        // Perform any further actions or display success message here
      } else {

        throw new Error('Error submitting form.');
      }
    })
    .catch(function(error) {
      console.log(error);
      // Display error message or handle the error gracefully
    });
  }
  
  // Add event listener to the form submit button
 // document.getElementById('submitBtn').addEventListener('click', submitForm);
  


var timerInterval;

function startTimer(duration) {
  var startTime = Math.floor(Date.now() / 1000); // Get the current timestamp in seconds
  var endTime = startTime + duration;

  timerInterval = setInterval(function() {
    var currentTime = Math.floor(Date.now() / 1000); // Get the current timestamp in seconds
    var remainingTime = endTime - currentTime;

    if (remainingTime <= 0) {
      clearInterval(timerInterval);
      displayScore();
    } else {
      var minutes = Math.floor(remainingTime / 60);
      var seconds = remainingTime % 60;

      // Display the remaining time
      document.getElementById("timer").textContent = "Time Remaining: " + formatTime(minutes) + ":" + formatTime(seconds);
    }
  }, 1000);
}

function formatTime(time) {
  return time < 10 ? "0" + time : time;
}

function startExam(event) {
    event.preventDefault(); // Prevent the default form submission behavior
  
    var name = document.getElementById("name").value;
    var phone = document.getElementById("phone").value;
  
    // Validate participant details
    if (name.trim() === "" || phone.trim() === "") {
      alert("Please provide your name and phone number.");
      return;
    }

    const today = new Date();
    const formattedDate = today.toISOString().split('T')[0];


  
    // Check if the form has already been submitted by this phone number
    var hasSubmitted = localStorage.getItem(phone + formattedDate);
    if (hasSubmitted) {
      alert("You have already submitted the form. Multiple submissions are not allowed.");
      return;
    }
  
    // Mark the form as submitted by this phone number
    localStorage.setItem(phone + formattedDate, "true");
  
    // Hide participant details form and display the exam container
    document.getElementById("participantForm").style.display = "none";
    document.getElementById("examContainer").style.display = "block";
  
    // Start the timer and display the first question
    startTimer(7 * 60); // 1 hour in seconds
    displayQuestion();
  }
  
  // Attach the startExam function to the form's submit event
  document.getElementById("participantForm").addEventListener("submit", startExam);

  // Attach the event handler to the window's beforeunload event
window.addEventListener('beforeunload', function(e) {
    // Cancel the event (prevents the refresh)
    e.preventDefault();
    // Chrome requires the returnValue property to be set
    e.returnValue = '';
  
    // Display a confirmation message to the user
    var confirmationMessage = 'If you reload the page you will be Disqualified?';
    // Most browsers will ignore this message, but it can be helpful in some cases
    return confirmationMessage;
  });
  
  
  
  
  
  