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

    let hotlineNumber = this.closest(".single-content")
      .querySelectorAll("h1")[1]
      .innerText.trim();
    console.log("Hotline number:", hotlineNumber);

    let textArea = document.createElement("textarea");
    textArea.value = hotlineNumber;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    document.body.removeChild(textArea);

    alert(`Hotline number ${hotlineNumber} is copied!`);
  });
});

document.querySelectorAll(".call").forEach((item) => {
  item.addEventListener("click", function (e) {
    let presentCoin = parseInt(
      document.getElementById("present-coin").innerText
    );

    let parentElement = item.closest(".single-content");
    let serviceName = parentElement.querySelector("p").innerText;
    let serviceMainName = parentElement.querySelector("h1").innerText;
    let servicePhone =
      parentElement.querySelector("p").nextElementSibling.innerText;
    console.log(serviceName, servicePhone);

    if (presentCoin >= 20) {
      alert(
        `emergency-service-netlify.app says \n📞 Calling ${serviceName} ${servicePhone}...`
      );
      presentCoin = presentCoin - 20;
      document.getElementById("present-coin").innerText = presentCoin;

      let historySection = document.querySelector(".history");
      let newHistoryItem = document.createElement("div");
      newHistoryItem.classList.add("history-item");
      newHistoryItem.innerHTML = `
      <div>
        <div>
          <h1>${serviceMainName}</h1>
          <h1>${servicePhone}</h1>
        </div>
        <div>
          <p>${new Date().toLocaleString()}</p>
        </div> 
      </div>`;
      historySection.appendChild(newHistoryItem);
    } else {
      alert(
        "emergency-service-netlify.app says \n❌ আপনার পর্যাপ্ত কয়েন নেই! কল করতে কমপক্ষে ২০ কয়েন লাগবে।"
      );
    }
  });
});

document.getElementById("clear-history").addEventListener("click", function () {
  const historySection = document.querySelector(".history");
  const historyItems = historySection.querySelectorAll(".history-item");
  historyItems.forEach((item) => item.remove());
});
