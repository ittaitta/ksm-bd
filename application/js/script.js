//congratulationアニメーション
document.addEventListener("DOMContentLoaded", function() {
    setTimeout(() => {
        const congratsMessage = document.getElementById("congrats-message");
        congratsMessage.style.animation = "fadeIn 2s ease-in-out forwards";
        congratsMessage.addEventListener("click", function() {
            this.style.animation = "fadeOut 1s ease-in-out forwards";
            setTimeout(() => {
                this.style.display = "none";
            }, 1000);
        });
    }, 100);
});

//congratulation時背景ぼかし
document.addEventListener("DOMContentLoaded", function() {
    const blurOverlay = document.getElementById("blur-overlay");
    const congratsMessage = document.getElementById("congrats-message");

    setTimeout(() => {
        congratsMessage.style.animation = "fadeIn 2s ease-in-out forwards";
        blurOverlay.classList.add("visible");
    }, 100);

    congratsMessage.addEventListener("click", function() {
        this.style.animation = "fadeOut 1s ease-in-out forwards";
        blurOverlay.classList.remove("visible");
        setTimeout(() => {
            this.style.display = "none";
        }, 1000);
    });
});

//ヘッダーもぼかすために追加
document.getElementById('congrats-message').addEventListener('click', function () {
    this.style.opacity = 0;
    document.getElementById('wrapper').style.opacity = 1;
  });


//アンケート
document.querySelectorAll(".question-container").forEach(container => {
    container.querySelectorAll(".option").forEach(option => {
      option.addEventListener("click", function() {
        // ここに送信処理を追加
        console.log("選択肢: " + this.getAttribute("data-value"));
  
        container.querySelector(".question").classList.add("hidden");
        container.querySelector(".message").classList.remove("hidden");
      });
    });
  });
  

  
//カルーセル
document.addEventListener("DOMContentLoaded", function() {
    const prevButton = document.getElementById("prev");
    const nextButton = document.getElementById("next");
    const carouselItems = document.querySelectorAll(".carousel-item");
  
    let currentIndex = 0;
  
    function changeSlide(newIndex) {
      carouselItems[currentIndex].classList.remove("active");
      carouselItems[newIndex].classList.add("active");
      currentIndex = newIndex;
    }
  
    prevButton.addEventListener("click", function() {
      const newIndex = currentIndex === 0 ? carouselItems.length - 1 : currentIndex - 1;
      changeSlide(newIndex);
    });
  
    nextButton.addEventListener("click", function() {
      const newIndex = currentIndex === carouselItems.length - 1 ? 0 : currentIndex + 1;
      changeSlide(newIndex);
    });
  });

  

//パスワード
  document.addEventListener("DOMContentLoaded", function () {
    const passwordMessage = document.getElementById("password-message");
    const content = document.getElementById("content");
    const passwordInput = document.getElementById("password-input");
    const submitPassword = document.getElementById("submit-password");
  
    const correctPassword = "20002023"; // ここに正しいパスワードを設定してください
  
    submitPassword.addEventListener("click", function () {
      if (passwordInput.value === correctPassword) {
        passwordMessage.style.display = "none";
        content.classList.remove("blur");
      } else {
        alert("Incorrect password. Please try again.");
      }
    });
  });

  