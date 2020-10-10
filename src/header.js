export default function createHeader() {
    document.body.style.background = "linear-gradient(to right, #d98338 0%, #f0f0f0 100%)";

    // header div 
    const headerContainer = document.createElement("header");

    // restaurant image
    const restaurantImg = document.createElement("img");
    restaurantImg.setAttribute("src", "/images/header-img.png");
    restaurantImg.setAttribute("id", "header-img");

    // restaurant title 
    const restaurantTitle = document.createElement("h1");
    restaurantTitle.setAttribute("id", "header-title");
    restaurantTitle.textContent = "Taro's Kitchen";

    // nav
    const nav = document.createElement("div");
    nav.setAttribute("id", "navbar");

    // home button w icon
    const homeBtn = document.createElement("button");
    const homeIcon = document.createElement("i");
    homeBtn.setAttribute("id", "home-btn");
    homeIcon.classList.add("fas", "fa-home");
    homeBtn.appendChild(homeIcon);

    // menu button w icon
    const menuBtn = document.createElement("button");
    const menuIcon = document.createElement("i");
    menuBtn.setAttribute("id", "menu-btn");
    menuIcon.classList.add("fas", "fa-book-open");
    menuBtn.appendChild(menuIcon);
    
    // about button w icon
    const aboutBtn = document.createElement("button");
    const aboutIcon = document.createElement("i");
    aboutBtn.setAttribute("id", "about-btn");
    aboutIcon.classList.add("fas", "fa-info");
    aboutBtn.appendChild(aboutIcon);

    nav.appendChild(homeBtn);
    nav.appendChild(menuBtn);
    nav.appendChild(aboutBtn);

    headerContainer.appendChild(restaurantImg);
    headerContainer.appendChild(restaurantTitle);
    headerContainer.appendChild(nav);
    return headerContainer;
}