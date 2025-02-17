let currentQuestion = 1;

function nextQuestion(questionNumber) {
  const selectedOption = document.querySelector(`input[name="q${questionNumber}"]:checked`);
  if (selectedOption) {
    document.getElementById(`q${questionNumber}`).style.display = 'none';
    currentQuestion++;
    if (currentQuestion <= 30) {
      document.getElementById(`q${currentQuestion}`).style.display = 'block';
    }
  }
}

function calculateResult() {
  const answers = document.querySelectorAll('input[type="radio"]:checked');
  let score = 0;

  answers.forEach(answer => {
    switch (answer.value) {
      case 'A': score += 1; break;
      case 'B': score += 2; break;
      case 'C': score += 3; break;
      case 'D': score += 4; break;
    }
  });

  let resultText = '';
  let resultDescription = '';

  if (score <= 30) {
    resultText = 'You are Result 1: The Calm Thinker';
    resultDescription = 'You handle stressful situations with logic and calmness. You thrive in organized and methodical environments.';
  } else if (score <= 60) {
    resultText = 'You are Result 2: The Supportive Helper';
    resultDescription = 'You are a natural collaborator and enjoy helping others. Your empathetic nature makes you a great team player.';
  } else if (score <= 90) {
    resultText = 'You are Result 3: The Impulsive Adventurer';
    resultDescription = 'You love spontaneity and adventure. Your impulsive nature often leads you to exciting new experiences.';
  } else if (score <= 120) {
    resultText = 'You are Result 4: The Avoidant Escapist';
    resultDescription = 'You tend to avoid conflicts and stressful situations. You find comfort in solitude and personal reflection.';
  } else if (score <= 150) {
    resultText = 'You are Result 5: The Driven Achiever';
    resultDescription = 'You are highly motivated and goal-oriented. Your determination and focus help you achieve great success.';
  } else if (score <= 180) {
    resultText = 'You are Result 6: The Thoughtful Planner';
    resultDescription = 'You prefer to plan and think things through before taking action. Your cautious nature helps you avoid unnecessary risks.';
  } else if (score <= 210) {
    resultText = 'You are Result 7: The Spontaneous Creator';
    resultDescription = 'You are creative and spontaneous. Your innovative ideas often lead to unique and original creations.';
  } else if (score <= 240) {
    resultText = 'You are Result 8: The Logical Analyst';
    resultDescription = 'You approach problems with logic and analysis. Your strategic thinking helps you find effective solutions.';
  } else if (score <= 270) {
    resultText = 'You are Result 9: The Social Butterfly';
    resultDescription = 'You enjoy socializing and connecting with others. Your outgoing personality makes you the life of the party.';
  } else {
    resultText = 'You are Result 10: The Independent Explorer';
    resultDescription = 'You value independence and self-reliance. Your adventurous spirit drives you to explore new horizons.';
  }

  document.getElementById('resultText').innerText = resultText;
  document.getElementById('resultImage').src = `https://example.com/result${Math.ceil(score / 30)}.jpg`;
  document.getElementById('resultDescription').innerText = resultDescription;
  document.getElementById('questions').style.display = 'none';
  document.getElementById('result').style.display = 'block';
}
