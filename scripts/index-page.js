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

         commentItem.appendChild(nameOfComment);
         commentItem.appendChild(textOfComment);
         commentItem.appendChild(dateOfComment);

         commentList.appendChild(commentItem);
     };
     render();
 };

 render();