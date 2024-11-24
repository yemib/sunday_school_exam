var questions = [
  {
    question: `1.	The word Spirit in Hebrew tongue according to lesson 1 is _________________ `,
    options: [`Elohim`, `Ruach`, `Dunamis`   ],
    answer: 1
  },

    {
      question: `2.	Whoever abides in Him does not _________, Whoever ________ has neither seen Him nor known Him.1 John 3:6 (NKJV)`,
      options: [`Him, Sin `, `Sin, Sin`, `Lie, Lie`  ,  `Lie, Sin` ],
      answer: 1
    }
    ,

    {
      question: `3.	Spiritual practices that do not conform to true Christianity according to lesson 2 is __________ `,
      options: [`Spirituality`, `Alternative Spirituality `, `Alternative Christianity `  ,  ` Spiritualism ` ],
      answer: 1
    }
    ,

    {
      question: `4.	Jesus said unto him, I am the way, the truth, and the life: no man comes unto the father, but by me. `,
      options: [`John 6:14 `, `John 14:6 `, `John 6:4 `  ,  `John 4:6 ` ],
      answer: 1
    },

    {
      question: `5.	According to lesson 5, A God-pleaser refers to someone who does things that bring __________ `,
      options: [`Disrepute to God `, `Pleasure to God `, `Request to God`  ,  ` Pleasure to Man` ],
      answer: 1
    },

    {
      question: `6.	According to lesson 6, Men-pleaser refers to someone who strives to _________ `,
      options: [`Please God `, `Please Men `, `Please Satan `  ,  ` Please Men and God ` ],
      answer: 1
    },

    {
      question: `7.	According to lesson 7 ___________ is the belief in and worship of a superhuman- with controlling power, especially a personal God or gods `,
      options: [`Spirituality `, `Religion`, `Christianity`  ,  `Faith  ` ],
      answer: 1
    },

    {
      question: `8.	What is the topic of Lesson 8 __________`,
      options: [`Men Pleasers `, `The Redemption Package`, `Consecration`  ,  `Christian Faith ` ],
      answer: 1
    },

    {
      question: `9. Let your _________ be known unto all men. The Lord is at hand.” Philippians 4:5(NJV) `,
      options: [`Life`, `Moderation`, `Spirit`  ,  ` Act` ],
      answer: 1
    },

    {
      question: `10. According to lesson 10, God resists the ___________ `,
      options: [`Pride`, `Proud`, `Strong`  ,  ` Powerful` ],
      answer: 1
    },

    {
      question: `11. Lesson 11 topic is _________`,
      options: [`Divine Resistance `, `Consecration`, `Christian Living `  ,  `Cultural Christianity ` ],
      answer: 1
    },

    {
      question: `12. According to lesson 12, _________ are nominal believers who superficially identify themselves as Christians but do not truly adhere to the tenets of the Christian faith`,
      options: [`Christianity and Socialism `, `Cultural Christianity `, `Christianity`  ,  `Consecration  ` ],
      answer: 1
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
  
  
  
  
  
  