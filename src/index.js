import './style.css';

const scores = [
  { name: 'John', score: 55 },
  { name: 'Mike', score: 65 },
  { name: 'Jane', score: 75 },
  { name: 'Mary', score: 85 },
  { name: 'Tom', score: 95 },
  { name: 'Bob', score: 105 }];

const scoreList = document.getElementById('scores-list');
scoreList.innerHTML = scores.map((score) => `<li>${score.name}: ${score.score}</li>`).join('');
