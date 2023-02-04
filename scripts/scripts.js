window.addEventListener("load", () => {
    setTimeout(() => {
        document.getElementById("preloader").classList.add("hidden");
        setTimeout(() => {
            document.body.removeChild(document.getElementById("preloader"));
        }, 200)
    }, 100);
});

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