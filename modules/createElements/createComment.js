// import { DateTime } from 'luxon';

export default function createComment(comment) {
  const commentElement = document.createElement('div');
  commentElement.classList.toggle('comment');

  const date = document.createElement('p');
  // const formattedDate = DateTime.fromISO(comment.date).toLocaleString(
  // DateTime.DATE_SHORT
  // );
  // date.textContent = formattedDate;
  date.textContent = comment.date;
  commentElement.appendChild(date);

  const body = document.createElement('p');
  body.textContent = comment.body;
  commentElement.appendChild(body);

  return commentElement;
}
