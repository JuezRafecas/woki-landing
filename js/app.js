window.addEventListener("load", function () {
    //Funcionalidad menu hamburguesa
    document.querySelector("#toggle").addEventListener("click", function () {
        this.classList.toggle("active");
        let overlay = document.querySelector("#overlay");
        overlay.classList.toggle("open");
    });
    this.document
        .querySelector(".funcionalidades-mobile")
        .addEventListener("click", function () {
            document.querySelector("#toggle").classList.remove("active");
            document.querySelector("#overlay").classList.remove("open");
        });
        this.document
        .querySelector(".funcionalidades-mobile-1")
        .addEventListener("click", function () {
            document.querySelector("#toggle").classList.remove("active");
            document.querySelector("#overlay").classList.remove("open");
        });
        this.document
        .querySelector(".funcionalidades-mobile-2")
        .addEventListener("click", function () {
            document.querySelector("#toggle").classList.remove("active");
            document.querySelector("#overlay").classList.remove("open");
        });
    //Scroll del header
    const body = document.querySelector(".background-header");
    const scrollUp = "scroll-up";
    const scrollDown = "scroll-down";
    let lastScroll = 500;
    window.addEventListener("scroll", () => {
        const currentScroll = window.pageYOffset;
        if (
            currentScroll > lastScroll &&
            !body.classList.contains(scrollDown) &&
            currentScroll > 500
        ) {
            // down
            body.classList.remove(scrollUp);
            body.classList.add(scrollDown);
        } else if (
            currentScroll < lastScroll &&
            body.classList.contains(scrollDown)
        ) {
            // up
            body.classList.remove(scrollDown);
            body.classList.add(scrollUp);
        }
        lastScroll = currentScroll;
    });
})