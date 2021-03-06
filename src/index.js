import './style.css';

const baseUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api';
const scoreList = document.getElementById('scores-list');
const refreshButton = document.getElementById('refresh');

const getScores = async () => {
  try {
    const response = await fetch(`${baseUrl}/games/I2dld6bFpfO3V6aFFp3g/scores`);
    const data = await response.json();
    scoreList.innerHTML = data.result.map((score) => `<li>${score.user}: <span>${score.score}</span></li>`).join('');
  } catch (error) {
    scoreList.innerHTML = '<li>No scores found</li>';
  }
};

getScores();

const postRecord = async (record) => {
  await fetch(`${baseUrl}/games/I2dld6bFpfO3V6aFFp3g/scores`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(record),
  });
};

const addScoreForm = document.getElementById('add-score-form');
addScoreForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  const record = {
    user: formData.get('user'),
    score: formData.get('score'),
  };
  postRecord(record).then(() => {
    event.target.reset();
    getScores();
  });
});

refreshButton.addEventListener('click', () => {
  getScores();
});
