export default function createHomePage() {
    const homePage = document.createElement("div");
    homePage.setAttribute("id", "home-page");

    // left intro div 
    const intro = document.createElement("div");
    intro.setAttribute("id", "intro");

    const title = document.createElement("h2");
    title.setAttribute("id", "title");

    const description = document.createElement("p");
    description.setAttribute("id", "description");
    
    title.textContent = "Welcome, old friend...";
    description.textContent = "Please have a seat and enjoy a warm, comforting meal";

    intro.appendChild(title);
    intro.appendChild(description);

    // right div img 
    const homeImg = document.createElement("img");
    homeImg.setAttribute("id", "home-img")
    homeImg.setAttribute("src", "/images/home-img.png");
   
    homePage.appendChild(intro);
    homePage.appendChild(homeImg);
    return homePage;
}