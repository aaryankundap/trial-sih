document.addEventListener("DOMContentLoaded", () => {
    const cont = document.querySelector(".cont");
    const signUpBtn = document.querySelector(".img-btn .m-up");
    const signInBtn = document.querySelector(".img-btn .m-in");
  
    if (cont && signUpBtn && signInBtn) {
      signUpBtn.addEventListener("click", (event) => {
        event.preventDefault(); // Prevent default navigation
        cont.classList.add("s-signup");
      });
  
      signInBtn.addEventListener("click", (event) => {
        event.preventDefault(); // Prevent default navigation
        cont.classList.remove("s-signup");
      });
    }
  });
  