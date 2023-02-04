window.addEventListener("load", () => {
    setTimeout(() => {
        document.getElementById("preloader").classList.add("hidden");
        setTimeout(() => {
            document.body.removeChild(document.getElementById("preloader"));
        }, 200)
    }, 100);
});

const sections = document.querySelectorAll("section");
const navLi = document.querySelectorAll("#nav-links li");

window.onscroll = () => {
    var current = "";

    sections.forEach((section) => {
        const sectionTop = section.offsetTop;

        if (scrollY >= sectionTop - 150) {
            current = section.getAttribute("id");
        }
    });

    navLi.forEach((li) => {
        li.classList.remove("active");
        if (li.classList.contains(current + "-li")) {
            li.classList.add("active");
        }
    });
};

Tu.tScroll({
    't-element': '.fadeUp',
    't-duration': 1
})

Tu.tScroll({
    't-element': '.fadeLeft',
    't-duration': 1
})

Tu.tScroll({
    't-element': '.fadeRight',
    't-duration': 1
})

Tu.tScroll({
    't-element': '.fadeDown',
    't-duration': 1
})