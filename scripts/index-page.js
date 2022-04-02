let commentsArray = [
    {
        name: 'Connor Walton',
        timestamp: '02/17/2021',
        comment: 'This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.'
    },
    {
        name: 'Emilie Beach',
        timestamp: '01/09/2021',
        comment: 'I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.'
    },
    {
        name: 'Miles Acosta',
        timestamp: '12/20/2020',
        comment: "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough."
    }
]

 let render = () => {
     let commentList = document.getElementById('list');
     list.innerHTML = '';

     for (let i = 0; i < commentsArray.length; i++) {
         let comments = commentsArray[i];
         let commentName = comments.name;
         let commentText = comments.comment;
         let commentDate = comments.timestamp;

         let commentItem = document.createElement('li');
         let nameOfComment = document.createElement('div');
         let textOfComment = document.createElement('div');
         let dateOfComment = document.createElement('div');
         let photoOfComment = document.createElement('img');
         let imageDiv = document.createElement('div');
         let nameDateCommentDiv = document.createElement('div');
         let nameDateDiv = document.createElement('div');
        
         nameOfComment.innerText = commentName;
         textOfComment.innerText = commentText;
         dateOfComment.innerText = commentDate;

         commentItem.appendChild(imageDiv);
         imageDiv.appendChild(photoOfComment);
         commentItem.appendChild(nameDateCommentDiv);
         nameDateCommentDiv.appendChild(nameDateDiv);
         nameDateDiv.appendChild(nameOfComment);
         nameDateDiv.appendChild(dateOfComment);
         nameDateCommentDiv.appendChild(textOfComment);
         commentList.appendChild(commentItem);
        
         nameOfComment.classList.add('comment-section__name');
         textOfComment.classList.add('comment-section__text');
         dateOfComment.classList.add('comment-section__date');
         photoOfComment.classList.add('comment-section__photo');
         commentItem.classList.add('comment-section__list');
         nameDateCommentDiv.classList.add('comment-section__content');
         nameDateDiv.classList.add('comment-section__name-date');
    };
};

let displayComment = () => {
    let commentInput = document.getElementById('comment');
    let nameInput = document.getElementById('name');
    let dateInput = new Date();

    let comment = commentInput.value;
    commentInput.value = '';

    let date = (dateInput.getMonth()+1)+'/'+(dateInput.getDate())+'/'+dateInput.getFullYear();

    let name = nameInput.value;
    nameInput.value = '';

    const commentObject = {
        name: name,
        comment: comment,
        timestamp: date
    };
    commentsArray.unshift(commentObject);
    render();
};

render();

let button = document.getElementById('submit-button');

button.addEventListener('click', displayComment);
