//watch video on a click.
let hidden_container = document.getElementById("hidden_container");
let watch_btn = document.getElementById("watch_btn");
let but_l = document.getElementById("but_l");
let hidden_video = document.getElementById("hidden_video");

watch_btn.addEventListener("click", () => {
  hidden_container.style.display = "block";
});

//close video on click.
but_l.addEventListener("click", () => {
  hidden_container.style.display = "none";
});

//close video when its ended.
hidden_video.addEventListener("ended", () => {
  hidden_container.style.display = "none";
});

//burger menu
let head_burg = document.getElementById("head_burg");
let head_hidden_info = document.getElementById("head_hidden_info");
let head_ul_hid = document.getElementById("head_ul_hid");
head_burg.addEventListener("click", () => {
  head_hidden_info.classList.toggle("head_hidden_info_plus");
  setTimeout(() => {
    head_ul_hid.classList.toggle("head_ul_hid_plus");
  }, 70);
});

// shepe "X" for burger menu.
let burg_line = document.getElementById("burg_line");
let burg_line_sec = document.getElementById("burg_line_sec");

head_burg.addEventListener("click", () => {
  burg_line.classList.toggle("burg_line_plus");
  burg_line_sec.classList.toggle("burg_line_sec_plus");
});

//invalid password for login pass input.
let log_form = document.getElementById("log_form");
let log_pass = document.getElementById("log_pass");
log_form.addEventListener("submit", (value) => {
  value.preventDefault();

  let PasswordValidation =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;

  if (!PasswordValidation.test(log_pass.value)) {
    alert("invalid password");
  } else {
  }
  password.value = "";
});
//password
let log_see_btn = document.getElementById("log_see_btn");
let log_seen = document.getElementById("log_seen");
let log_unseen = document.getElementById("log_unseen");

log_see_btn.addEventListener("click", (e) => {
  e.preventDefault();
  log_unseen.classList.toggle("log_unseen_plus");
  if (log_pass.type === "password") {
    log_pass.type = "text";
  } else {
    log_pass.type = "password";
  }
});
//login
let login_div = document.getElementById("login_div");
let log_container = document.getElementById("log_container");
let rem_btn = document.getElementById("rem_btn");
let login_hidden = document.getElementById("login_hidden");
login_div.addEventListener("click", () => {
  log_container.style.display = "block";
});

rem_btn.addEventListener("click", () => {
  log_container.style.display = "none";
});

login_hidden.addEventListener("click", () => {
  log_container.style.display = "block";
});
//social networks
let facebook = document.getElementById("facebook");
facebook.addEventListener("click", () => {
  window.open("https://www.facebook.com/");
});
let google = document.getElementById("google");
google.addEventListener("click", () => {
  window.open(
    "https://accounts.google.com/v3/signin/identifier?checkedDomains=youtube&continue=https%3A%2F%2Fmyaccount.google.com%3Futm_source%3Daccount-marketing-page%26utm_medium%3Dgo-to-account-button%26gar%3DWzEzMywiMjM2NzM2Il0%26sl%3Dtrue&ddm=1&dsh=S574083505%3A1734179430686867&flowEntry=AccountChooser&flowName=GlifWebSignIn&ifkv=AeZLP99qHuRWaqF6uiIYxzOoUXZf2v2lizJOzwPmOVlbKd08J6Q_-eiqwmmC9RemdTv6KXWVaz0elg&pstMsg=1&service=accountsettings"
  );
});
let linkedin = document.getElementById("linkedin");
linkedin.addEventListener("click", () => {
  window.open(
    "https://www.linkedin.com/login?fromSignIn=true&trk=guest_homepage-basic_nav-header-signin"
  );
});
let gmail = document.getElementById("gmail");
gmail.addEventListener("click", () => {
  window.open("https://workspace.google.com/gmail/");
});

//on click sign up container appear
let head_sign = document.getElementById("head_sign");
let sign_container = document.getElementById("sign_container");
head_sign.addEventListener("click", () => {
  sign_container.style.display = "block";
});
let sign_hidden = document.getElementById("sign_hidden");
sign_hidden.addEventListener("click", () => {
  sign_container.style.display = "block";
});
//sign up visible/unvisible password
let sign_seen = document.getElementById("sign_seen");
let sign_see_btn = document.getElementById("sign_see_btn");
let sign_unseen = document.getElementById("sign_unseen");
let sign_pass = document.getElementById("sign_pass");
sign_see_btn.addEventListener("click", (e) => {
  e.preventDefault();
  sign_unseen.classList.toggle("sign_unseen_plus");
  if (sign_pass.type === "password") {
    sign_pass.type = "text";
  } else {
    sign_pass.type = "password";
  }
});
//sign up visible/unvisible repeat password
let repeat_pass = document.getElementById("repeat_pass");
let repeat_see_btn = document.getElementById("repeat_see_btn");
let repeat_seen = document.getElementById("repeat_seen");
let repeat_unseen = document.getElementById("repeat_unseen");
repeat_see_btn.addEventListener("click", (e) => {
  e.preventDefault();
  repeat_unseen.classList.toggle("sign_unseen_plus");
  if (repeat_pass.type === "password") {
    repeat_pass.type = "text";
  } else {
    repeat_pass.type = "password";
  }
});
//on click div disappeared
let sign_rem_btn = document.getElementById("sign_rem_btn");

sign_rem_btn.addEventListener("click", () => {
  sign_container.style.display = "none";
});
