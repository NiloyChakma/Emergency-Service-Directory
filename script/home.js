document.querySelectorAll(".heart-icon").forEach((item) => {
  item.addEventListener("click", function (e) {
    let presentHeart = parseInt(
      document.getElementById("present-heart").innerText
    );
    presentHeart = presentHeart + 1;
    document.getElementById("present-heart").innerText = presentHeart;
  });
});
document.querySelectorAll(".copy").forEach((item) => {
  item.addEventListener("click", function (e) {
    let presentCopy = parseInt(
      document.getElementById("number-copied").innerText
    );
    presentCopy = presentCopy + 1;
    document.getElementById("number-copied").innerText = presentCopy;
    console.log(presentCopy);
  });
});