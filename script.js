//watch video ღილაკზე დაჭერისას ვიდეოს გამოტანა.
let hidden_container = document.getElementById("hidden_container");
let watch_btn = document.getElementById("watch_btn");
let but_l = document.getElementById("but_l");
let hidden_video = document.getElementById("hidden_video");

watch_btn.addEventListener("click", () => {
  hidden_container.style.display = "block";
});

//ვიდეოს გათიშვის ღილაკი
but_l.addEventListener("click", () => {
  hidden_container.style.display = "none";
});

//ვიდეოს დასრულების შემდეგ ავტომატურად ჩახურვა
hidden_video.addEventListener("ended", () => {
  hidden_container.style.display = "none";
});

//ბურგერზე დაჭერისას დამატებითი ინფორმაციის გამოტანა
let head_burg = document.getElementById("head_burg");
let head_hidden_info = document.getElementById("head_hidden_info");
let head_ul_hid = document.getElementById("head_ul_hid");
head_burg.addEventListener("click", () => {
  head_hidden_info.classList.toggle("head_hidden_info_plus");
  setTimeout(() => {
    head_ul_hid.classList.toggle("head_ul_hid_plus");
  }, 70);
});

//ბურგერზე დაჭერისას კონსტრუქციული ცვლილება.
let burg_line = document.getElementById("burg_line");
let burg_line_sec = document.getElementById("burg_line_sec");
let burg_line_thr = document.getElementById("burg_line_thr");

head_burg.addEventListener("click", () => {
  burg_line.classList.toggle("burg_line_plus");
  burg_line_sec.classList.toggle("burg_line_sec_plus");
  burg_line_thr.classList.toggle("burg_line_thr_plus");
});
