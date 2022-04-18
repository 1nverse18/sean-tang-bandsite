const apiKey = "7213a6eb-4792-4e66-9030-900c82893a39";

const displayComment = (comment) => {

    let commentList = document.getElementById('list');
    commentList.innerHTML = '';

    for (let i = 0; i < comment.length; i++) {
        let postDate = new Date(comment[i]["timestamp"]);
        let finalDate = postDate.getUTCMonth() + 1 + "/" + postDate.getUTCDate() + "/" + postDate.getUTCFullYear();

    let commentItem = document.createElement('li');
    let nameOfComment = document.createElement('div');
    let textOfComment = document.createElement('div');
    let dateOfComment = document.createElement('div');
    let photoOfComment = document.createElement('img');
    let imageDiv = document.createElement('div');
    let nameDateCommentDiv = document.createElement('div');
    let nameDateDiv = document.createElement('div');
   
    nameOfComment.innerText = comment[i]["name"];
    dateOfComment.innerHTML = finalDate;
    textOfComment.innerText = comment[i]["comment"];


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
    }
};

const commentForm = document.getElementById('commentSection');

commentForm.addEventListener("submit", function(e) {
    e.preventDefault();
    let newComment = axios.post("https://project-1-api.herokuapp.com/comments?api_key="+apiKey, {
        name: e.target.name.value,
        comment: e.target.comment.value
    }
    );

    newComment.then((result) => {
        grabComments();
        console.log(result.data);
    });

    let clearForm = document.querySelector(".comment-section");
    clearForm.reset();
});


function grabComments() {
    axios.get(
        "https://project-1-api.herokuapp.com/comments?api_key=7213a6eb-4792-4e66-9030-900c82893a39"
      )
    .then(response => {
        displayComment(response.data.sort(function(x,y) {
            return y.timestamp - x.timestamp;
        }));
        console.log(response.data);
    });
};

grabComments();