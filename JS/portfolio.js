let work1 = document.getElementById("work1");
let work2 = document.getElementById("work2");
let work3 = document.getElementById("work3");
let work4 = document.getElementById("work4");
let work5 = document.getElementById("work5");
let work6 = document.getElementById("work6");

work1.addEventListener("click", function () {
  showModal("work1", "project1", "project1");
});
work2.addEventListener("click", function () {
  showModal("work2", "project2", "project2");
});
work3.addEventListener("click", function () {
  showModal("work3", "project3", "project3");
});
work4.addEventListener("click", function () {
  showModal("work4", "project4", "project4");
});
work5.addEventListener("click", function () {
  showModal("work5", "project5", "project5");
});
work6.addEventListener("click", function () {
  showModal("work6", "project6", "project6");
});
function showModal(imageId, title, desc) {
  let modal = document.getElementById("myModal");
  let modalImg = document.getElementById("MyImg");
  let modalTitle = document.getElementById("modalTitle");
  let modalDesc = document.getElementById("descTitle");
  modalTitle.textContent = title;
  modalDesc.textContent = desc;
  let img = document.getElementById(imageId);
  modalImg.src = img.querySelector("img").src;
  modal.style.display = "block";
  document.body.style.overflow = "hidden";
}
let closeModal = document.getElementById("closeModal");
closeModal.addEventListener("click", function () {
  let modal = document.getElementById("myModal");
  modal.style.display = "none";
  document.body.style.overflow = "";
});

let all = document.getElementById("all");
let design = document.getElementById("design");
let brand = document.getElementById("brand");
let photos = document.getElementById("photos");

let filters = [all, design, brand, photos];

filters.forEach((e) => {
  e.addEventListener("click", function () {
    filters.forEach((x) => x.classList.remove("active"));
    this.classList.add("active");
  });
});

all.addEventListener("click", function () {
  work1.style.display = "block";
  work2.style.display = "block";
  work3.style.display = "block";
  work4.style.display = "block";
  work5.style.display = "block";
  work6.style.display = "block";
});
design.addEventListener("click", function () {
  work1.style.display = "none";
  work2.style.display = "none";
  work3.style.display = "none";
  work4.style.display = "block";
  work5.style.display = "block";
  work6.style.display = "block";
});
brand.addEventListener("click", function () {
  work1.style.display = "block";
  work2.style.display = "none";
  work3.style.display = "block";
  work4.style.display = "none";
  work5.style.display = "block";
  work6.style.display = "none";
});
photos.addEventListener("click", function () {
  work1.style.display = "none";
  work2.style.display = "block";
  work3.style.display = "none";
  work4.style.display = "block";
  work5.style.display = "none";
  work6.style.display = "block";
});
