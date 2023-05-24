import { getComment, addComment } from './apiInvolvement.js';

const commentsPopup = (data) => {
  const commentsBtn = document.querySelectorAll('.comments-btn');
  commentsBtn.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      data.forEach((item) => {
        if (item.show.id.toString() === btn.id) {
          const body = document.querySelector('body');
          const main = document.createElement('div');
          const closeBtn = document.createElement('button');
          main.className = 'main';
          closeBtn.className = 'close';
          closeBtn.innerHTML = '<i class="fa-solid fa-xmark fa-xl"></i>';
          const popup = document.createElement('div');
          popup.className = 'popup';
          popup.innerHTML = `
          <div class="popup-items">
            <img src="${item.show.image.medium}" alt="${item.show.name}">
            <h2>${item.show.name}</h2>
            <div class="details">
              <div class="details-item">
                <li>Language: ${item.show.language}</li>
                <li>Premiered: ${item.show.premiered}</li>
              </div>
              <div class="details-item">
                <li>Rating: ${item.show.rating.average}</li>
                <li>Genre: ${item.show.genres}</li>
              </div>
            </div>
            <div>
              <h3>Comments</h3>
              <div class="comment-list"></div>
              
              
            </div>
            <div>
              Add Comment
              <form action="#" class="add-comment">
                    <div class="form-group">
                        <input type="text" name="name" id="name" placeholder="Your Name" />
                    </div>
                    <div class="form-group">

                        <input type="textarea" name="comment" id="comment" placeholder="Your Insight" />
                        <small></small>
                    </div>
                    <div class="form-group">
                        <input type="submit" name="add" id="add" value="Submit" />
                    </div>
                </form>
            </div>

          </div>
        `;
          popup.appendChild(closeBtn);
          main.appendChild(popup);
          body.appendChild(main);

          const close = document.querySelector('.close');
          close.addEventListener('click', () => {
            body.removeChild(main);
          });

          getComment(item.show.id).then((commentData) => {
            commentData.forEach((mycomment) => {
              const singleComment = document.createElement('p');

              const commentList = document.querySelector('.comment-list');
              singleComment.innerHTML = `${mycomment.creation_date} ${mycomment.username}: ${mycomment.comment}`;
              commentList.appendChild(singleComment);
            });
          });

          const name = document.getElementById('name');
          const comment = document.getElementById('comment');
          const form = document.querySelector('.add-comment');

          form.addEventListener('submit', async (e) => {
            // const myStudent = new Student(name.value, score.value);
            const msg = document.querySelector('small');

            e.preventDefault();
            // myStudent.storeStudent();

            if (name.value && comment.value !== '') {
              msg.innerText = '';
              addComment(item.show.id, name.value, comment.value);
            } else {
              msg.innerText = '* name and comment required';
            }

            form.reset();
          });
        }
      });
    });
  });
};

export default commentsPopup;
