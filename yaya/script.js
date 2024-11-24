var questions = [
  {
    question: `1.	You should know that as a ____ chastens his son, so the LORD your ____ you." Deuteronomy 8:5 (NKJV)
`,
    options: [`Human, Correct`, `Man, Chastens`, `Parents, Chasten`  , `Man, chastise` ],
    answer: 1
  },

    {
      question: `2.	Paul was born in AD 10 in the Roman city of _____`,
      options: [`Damascus`, `Tarsus`, `Judea`  ,  `Samaria` ],
      answer: 1
    }
    ,

    {
      question: `3.	For this purpose the Son of God was manifested, that He might destroy the works of the devil. (NKJV)`,
      options: [`John 3:8b`, `1 John 3:8b`, `John 3:8a`  ,  ` 1 John 3:8a` ],
      answer: 1
    }
    ,

    {
      question: `4.	According to lesson 44, the following are the categories of people to submit to except?`,
      options: [`Governing Authorities`, `Husbands submit to your wives`, `Wives submit to Husbands` , `Servants submit to Masters` ],
      answer: 1
    }
    ,

    {
      question: `5.	According to lesson 46, one of the following is a cause of fruitlessness`,
      options: [`Selfless service`, `Ignorance of the sound word of God`, `Dedication`  , `Focus` ],
      answer: 1
    }
    ,


    {
      question: `6.	Which amongst the following is not a pointer to identifying your purpose for living, according to the lesson   `,
      options: [`Submission`, `Potential`, `Passion`   , `Prayer` ],
      answer: 0
    }
    ,

    {
      question: `7.	_____ is the great commission that every believer has been called to do
 `,
      options: [`Worship`, `Evangelism`, `Praise` , `Seed sowing` ],
      answer: 1
    }
    ,

    {
      question: `8.	Another word for Perilous is called `,
      options: [`Charisma`, `Chaledom`, `Chalepos`  , `Chazam`  ],
      answer: 2
    }
    ,

    {
      question: `9.	Will the current heaven and earth last forever?  `,
      options: [`yes`, ` no`, `I am not sure`  ],
      answer: 0
    }
    ,

    {
      question: `10 .	 Will the second coming of Christ be fulfilled according to the Sunday school manual`,
      options: [`yes`, `no`, `I am not sure` ],
      answer: 0
    }
    ,
    
    {
      question: `11 .	 For then shall be _____, such as was  not since the beginning of the world to this time,
       no, nor ever shall be." Matthew 24:21`,
      options: [`great tribulation`, `great enjoyment` ,  'Peace'],
      answer: 0
    }
    ,
        
    {
      question: `12 .	  What does the Millennial Reign of Christ means  ?  `,
      options: [`A thousand years of a glorious Kingdom of Christ`,
         ` Two thousand Years of a glorious Kingdom of Christ`,
        `Four thousand Years of a glorious kingdom of Christ `
        ],
      answer: 0
    }
    
    

    
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
  
    fetch('/yaya/submit.php', {
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
  
  
  
  
  
  