document.addEventListener('DOMContentLoaded', function () {

    // Changing Text Animation
    let words = document.querySelectorAll(".words");
    words.forEach((word) => {
        let letters = word.textContent.split("");
        word.textContent = "";
        letters.forEach((letter) => {
            let span = document.createElement("span");
            span.textContent = letter;
            span.className = "letter";
            word.appendChild(span);
        });
    });

    let currentWordIndex = 0;
    let maxWordIndex = words.length - 1;
    words[currentWordIndex].style.opacity = "1";

    let changeText = () => {
        let currentWord = words[currentWordIndex];
        let nextWordIndex = currentWordIndex === maxWordIndex ? 0 : currentWordIndex + 1;
        let nextWord = words[nextWordIndex];
        
        Array.from(currentWord.children).forEach((letter, i) => {
            setTimeout(() => {
                letter.className = "letter out";
            }, i * 80);
        });

        nextWord.style.opacity = "1";
        Array.from(nextWord.children).forEach((letter, i) => {
            letter.className = "letter behind";
            setTimeout(() => {
                letter.className = "letter in";
            }, 340 + i * 80);
        });

        currentWordIndex = currentWordIndex === maxWordIndex ? 0 : currentWordIndex + 1;
    };

    changeText();
    setInterval(changeText, 3000);

    // Circle Skill Animation
    const circles = document.querySelectorAll('.circle');
    circles.forEach(elem => {
        let dots = elem.getAttribute("data-dots");
        let marked = elem.getAttribute("data-percent");
        let percent = Math.floor((dots * marked) / 100);
        let points = "";
        let rotate = 360 / dots;

        for (let i = 0; i < dots; i++) {
            points += `<div class="points" style="--i:${i}; --rot:${rotate}deg"></div>`;
        }

        elem.innerHTML = points;
        const pointsMarked = elem.querySelectorAll('.points');
        for (let i = 0; i < percent; i++) {
            pointsMarked[i].classList.add('marked');
        }
    });

    // MixItUp Portfolio Section
    var mixer = mixitup('.Portfolio-gallery');

    // Creative Menu
    let menuIcon = document.querySelector("#menu-icon");
    let navlist = document.querySelector(".navlist");

    menuIcon.onclick = () => {
        menuIcon.classList.toggle("box-x");
        navlist.classList.toggle("open");
    };

    window.onclick = () => {
        menuIcon.classList.remove("box-x");
        navlist.classList.remove("open");
    };

    // Sticky Navbar
    const header = document.querySelector("header");
    window.addEventListener("scroll", function () {
        header.classList.toggle("sticky", window.scrollY > 50);
    });

    // Active Menu
    let menuli = document.querySelectorAll('header ul li a');
    let sections = document.querySelectorAll('section');

    function activeMenu() {
        let len = sections.length;
        while (--len && window.scrollY + 97 < sections[len].offsetTop) {}

        menuli.forEach(sec => sec.classList.remove("active"));
        menuli[len].classList.add("active");
    }

    activeMenu();

    window.addEventListener("scroll", activeMenu);

});
// Get all circle elements
const circles = document.querySelectorAll('.circle');

circles.forEach(circle => {
    const dots = parseInt(circle.getAttribute('data-dots'));
    const percent = parseInt(circle.getAttribute('data-percent'));

    // Calculate the number of points to mark
    const pointsToMark = Math.floor((dots * percent) / 100);

    // Create and append the points elements
    const pointsContainer = circle.querySelector('.points-container');
    for (let i = 0; i < dots; i++) {
        const point = document.createElement('div');
        point.className = 'points';
        pointsContainer.appendChild(point);
        if (i < pointsToMark) {
            point.classList.add('marked');
        }
    }
});
