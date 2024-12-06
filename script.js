let hidden_container = document.getElementById("hidden_container");
let watch_btn = document.getElementById("watch_btn");
let but_l = document.getElementById("but_l");
let hidden_video = document.getElementById("hidden_video");

watch_btn.addEventListener("click", () => {
  hidden_container.style.display = "block";
});

but_l.addEventListener("click", () => {
  hidden_container.style.display = "none";
});

hidden_video.addEventListener("ended", () => {
  hidden_container.style.display = "none";
});

let head_burg = document.getElementById("head_burg");
let hid_info = document.getElementById("hid_info");
let Click = true;

head_burg.addEventListener("click", () => {
  if (Click) {
    hid_info.style.display = "block";
  } else {
    hid_info.style.display = "none";
  }
  Click = !Click;
});
