const hurleyCircle = document.getElementById("hurleyCircle");
const shuttleworthCircle = document.getElementById("shuttleworthCircle");
const gloverCircle = document.getElementById("gloverCircle");
const ansariCircle = document.getElementById("ansariCircle");
const artHurley = document.getElementById("artHurley");
const artShuttleworth = document.getElementById("artShuttleworth");
const artGlover = document.getElementById("artGlover");
const artAnsari = document.getElementById("artAnsari");
const imgHurley = document.getElementById("imgHurley");
const imgShuttleworth = document.getElementById("imgShuttleworth");
const imgGlover = document.getElementById("imgGlover");
const imgAnsari = document.getElementById("imgAnsari");

hurleyCircle.addEventListener("click", function () {
  hurleyCircle.classList.remove("bg-slate-500");
  hurleyCircle.classList.add("bg-white");
  artHurley.classList.remove("hidden");
  artHurley.classList.add("flex");
  imgHurley.classList.remove("hidden");
  imgHurley.classList.add("flex");

  shuttleworthCircle.classList.remove("bg-white");
  shuttleworthCircle.classList.add("bg-slate-500");
  artShuttleworth.classList.remove("flex");
  artShuttleworth.classList.add("hidden");
  imgShuttleworth.classList.remove("flex");
  imgShuttleworth.classList.add("hidden");

  gloverCircle.classList.remove("bg-white");
  gloverCircle.classList.add("bg-slate-500");
  artGlover.classList.remove("flex");
  artGlover.classList.add("hidden");
  imgGlover.classList.remove("flex");
  imgGlover.classList.add("hidden");

  ansariCircle.classList.remove("bg-white");
  ansariCircle.classList.add("bg-slate-500");
  artAnsari.classList.remove("flex");
  artAnsari.classList.add("hidden");
  imgAnsari.classList.remove("flex");
  imgAnsari.classList.add("hidden");
});

shuttleworthCircle.addEventListener("click", function () {
  shuttleworthCircle.classList.remove("bg-slate-500");
  shuttleworthCircle.classList.add("bg-white");
  hurleyCircle.classList.remove("bg-white");
  hurleyCircle.classList.add("bg-slate-500");
  gloverCircle.classList.remove("bg-white");
  gloverCircle.classList.add("bg-slate-500");
  ansariCircle.classList.remove("bg-white");
  ansariCircle.classList.add("bg-slate-500");
  
  artShuttleworth.classList.remove("hidden");
  artShuttleworth.classList.add("flex");
  artHurley.classList.remove("flex");
  artHurley.classList.add("hidden");
  artGlover.classList.remove("flex");
  artGlover.classList.add("hidden");
  artAnsari.classList.remove("flex");
  artAnsari.classList.add("hidden");
  
  imgShuttleworth.classList.remove("hidden");
  imgShuttleworth.classList.add("flex");
  imgHurley.classList.remove("flex");
  imgHurley.classList.add("hidden");
  imgGlover.classList.remove("flex");
  imgGlover.classList.add("hidden");
  imgAnsari.classList.remove("flex");
  imgAnsari.classList.add("hidden");
});

gloverCircle.addEventListener("click", function () {
  gloverCircle.classList.remove("bg-slate-500");
  gloverCircle.classList.add("bg-white");
  hurleyCircle.classList.remove("bg-white");
  hurleyCircle.classList.add("bg-slate-500");
  shuttleworthCircle.classList.remove("bg-white");
  shuttleworthCircle.classList.add("bg-slate-500");
  ansariCircle.classList.remove("bg-white");
  ansariCircle.classList.add("bg-slate-500");

  artGlover.classList.remove("hidden");
  artGlover.classList.add("flex");
  artHurley.classList.remove("flex");
  artHurley.classList.add("hidden");
  artShuttleworth.classList.remove("flex");
  artShuttleworth.classList.add("hidden");
  artAnsari.classList.remove("flex");
  artAnsari.classList.add("hidden");

  imgGlover.classList.remove("hidden");
  imgGlover.classList.add("flex");
  imgHurley.classList.remove("flex");
  imgHurley.classList.add("hidden");
  imgShuttleworth.classList.remove("flex");
  imgShuttleworth.classList.add("hidden");
  imgAnsari.classList.remove("flex");
  imgAnsari.classList.add("hidden");
});

ansariCircle.addEventListener("click", function () {
  ansariCircle.classList.remove("bg-slate-500");
  ansariCircle.classList.add("bg-white");
  hurleyCircle.classList.remove("bg-white");
  hurleyCircle.classList.add("bg-slate-500");
  shuttleworthCircle.classList.remove("bg-white");
  shuttleworthCircle.classList.add("bg-slate-500");
  gloverCircle.classList.remove("bg-white");
  gloverCircle.classList.add("bg-slate-500");

  artAnsari.classList.remove("hidden");
  artAnsari.classList.add("flex");
  artHurley.classList.remove("flex");
  artHurley.classList.add("hidden");
  artShuttleworth.classList.remove("flex");
  artShuttleworth.classList.add("hidden");
  artGlover.classList.remove("flex");
  artGlover.classList.add("hidden");

  imgAnsari.classList.remove("hidden");
  imgAnsari.classList.add("flex");
  imgHurley.classList.remove("flex");
  imgHurley.classList.add("hidden");
  imgShuttleworth.classList.remove("flex");
  imgShuttleworth.classList.add("hidden");
  imgGlover.classList.remove("flex");
  imgGlover.classList.add("hidden");
});
