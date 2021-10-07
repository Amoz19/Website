window.onscroll = () => {
    let navBar = document.getElementById("navbar");
    if (window.pageYOffset > 0) {
      navBar.classList.add("fix");
    } else {
      navBar.classList.remove("fix");
    }
  };