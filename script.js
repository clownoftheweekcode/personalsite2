let mainCont = document.querySelector(".mainCont");
function home() {
    mainCont.innerHTML = `<h3 class = "header">ABOUT</h3>
                    <p>
                        Hello! I'm 17 and I am going into my senior year of highschool soon. <br>
                        I enjoy making things and coding, although im not very great at it. <br>
                        I enjoy reading manga, watching anime from time to time, listening to music, and drawing. <br>
                        I usually listen to visual kei, japanese metal, and japanese rock. <br>
                        My favorite anime's are Jojo's Bizarre Adventure and Dr Stone. <br>
                        My favorite bands are DEXCORE, ONE OK ROCK, JILUKA, guruguru eigaken, and a few others. <br>
                    </p>`;
}
function projects() {
    mainCont.innerHTML = `
    <h3 class = "header">PROJECTS</h3>
    <div class = "project" onclick = 'window.location.href = "https://github.com/clownoftheweekcode/webOS.git"'>
            <img src = "./images/webOSThumb.jpg">
            <p>webOS</p>
        </div>
        <div class = "project" onclick = 'window.location.href = "https://github.com/clownoftheweekcode/yahtzee-game.git"'>
            <img src = "./images/yahtzeeGameCropThumb.png">
            <p>Yahtzee game</p>
        </div>`;
}
function artwork() {
    mainCont.innerHTML = `
    <h3 class = "header">ARTWORK</h3>
    <div class = "artwork">
                    <img src = "./images/catGuy.webp">
                </div>
                <div class = "artwork">
                    <img src = "./images/OneOkRockContestEntry2.webp">
                </div>`;
}
function favorites() {
    mainCont.innerHTML = `
    <h3 class = "header">FAVORITES</h3>
    <p>I am in many different fandoms, a few are JJBA, Hannibal (nbc), Dexter, Dr Stone, Tokyo Ghoul, TGCF, pet shop of horrors, and MANY more!</p>
    <p>my favorite characters in the few i listed are:</p>
    <ul>
    <li>
    <!-- <img src = "./images/brunoBGremove.png"> -->
    Bruno Bucciarati
    </li>
    <li>Joseph Joestar</li>
    <li>Shishio Tsukasa</li>
    <li>Stanley Snyder</li>
    <li>Seidou Takizawa</li>
    <li>Hua Cheng</li>
    <li>Count D</li>
    </ul>
    `;

}
