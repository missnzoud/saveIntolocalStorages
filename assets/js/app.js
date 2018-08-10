//variable
const tweetList = document.getElementById("tweet-list");


evenListeners();
// event listeners
  /* form submission*/
function evenListeners() {
    document.querySelector('#form').addEventListener('submit', newtweet);
    
    /*remove buton from the list*/
    tweetList.addEventListener('click', removeTweet);
    
    /* document*/
    document.addEventListener('DOMContentLoaded',localStorageOnload);
    
}



//functions
function newtweet(e) {
    
e.preventDefault(); 
  //read the textarea value.  
const tweet = document.getElementById('tweet').value;
    
    //create remove button
    const removeBtn = document.createElement('a');
    removeBtn.classList='remove-tweet';
    removeBtn.textContent='X';    
    //create li element
   const li = document.createElement('li')                              ;
   li.textContent= tweet;

    
    //add the remove button to the tweetlist;
    li.appendChild(removeBtn);
    
    
    // add to the list;
    tweetList.appendChild(li);
    
    //add to local storage
    addTweetLocalStorage(tweet);
    
    // print and alert
    alert('tweet added');
    
    this.reset();
}

// remove tweet from the  DOM;
function removeTweet(e) {
   // console.log(e.target.classList);
    if(e.target.classList.contains('remove-tweet')){
        e.target.parentElement.remove();
}
    //remove from a storage.
   removeTweetLocalStorage(e.target.parentElement.textContent);
}

// add the tweet into localStorage
function addTweetLocalStorage(tweet){
    //console.log("hello world");
    let tweets = getTweetsFromStorage();
   // console.log(tweets);
    //add the tweet into array
    tweets.push(tweet);
    //convert tweet arrays into the string.
    localStorage.setItem('tweets', JSON.stringify( tweets ) );
}

function getTweetsFromStorage(){
    let tweets;
    const tweetsLS = localStorage.getItem('tweets');
    if(tweetsLS === null){
        tweets = [];
    } else {
        tweets = JSON.parse( tweetsLS );
    }
    return tweets;
}
// print localstorage onload;
function localStorageOnload() {
    let tweets = getTweetsFromStorage();
   // console.log(tweets);
    //loop throught and then print the values;
    tweets.forEach(function(tweet){
        
     const removeBtn = document.createElement('a');
    removeBtn.classList='remove-tweet';
    removeBtn.textContent='X';    
    //create li element
   const li = document.createElement('li')                              ;
   li.textContent= tweet;

    
    //add the remove button to the tweetlist;
    li.appendChild(removeBtn);
    
    
    // add to the list;
    tweetList.appendChild(li);
        
                   
                   })
}
//remove the tweet from local storage
function removeTweetLocalStorage(tweet){
    //console.log(tweet);
    //get tweet from the storage;
   let tweets = getTweetsFromStorage(); 
     console.log(tweets);
    //remove tweet from the storage;
    const tweetDelete = tweet.substring( 0, tweet.length -1 );
   // console.log(tweetDelete);
    //loop throught the tweet and remove the tweet that is equal
      tweets.forEach(function(tweetLS, index) {
          if(tweetDelete === tweetLS) {
              tweets.splice(index, 1);
          }
      });
    //save the data
      localStorage.setItem('tweets', JSON.stringify(tweets) );
    }