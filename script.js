const header = document.getElementById("header");
const title = document.getElementById("title");
const excerpt = document.getElementById("excerpt");
const profile_img = document.getElementById("profile_img");
const name = document.getElementById("name");
const date = document.getElementById("date");

const animated_bgs = document.querySelectorAll(".animated-bg");
const animated_bgs_texts = document.querySelectorAll(".animated-bg-text");

const today = new Date().getFullYear();
// dd = String(today.getDate()).padStart(2, "0"),
// mm = String(today.getMonth() + 1).padStart(2, "0"),

//SETTING TIMEOUT TO DELAY BEFORE CALLING getData() function
setTimeout(getData(), 3000);

function getData() {
  //DISPLAYING HEADER IMAGE
  header.innerHTML =
    '<img src="https://images.unsplash.com/photo-1541480601022-2308c0f02487?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt=""/>';
  //DISPLAYING TITLE
  title.innerHTML = "Some title here";
  excerpt.innerHTML =
    "Some words can occupy this space for now until I have dynamically created the Javascript.";
  //USERS INFO FROM API
  profile_img.innerHTML =
    '<img src="https://randomuser.me/api/portraits/men/45.jpg" alt="users" />';
  //NEW PROFILE NAME
  name.innerHTML = "Joseph Yobo";
  date.innerHTML = `${today}`;

  //ADDING THE ANIMATION CLASS to loop through and remove the class from the html tags
  animated_bgs.forEach((bg) => bg.classList.remove("animated-bg"));
  animated_bgs_texts.forEach((bg) => bg.classList.remove("animated-bg-text"));
}
