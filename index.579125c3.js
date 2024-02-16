function progressive_add(dom, total) {
    const end = 15;
    let cnt = 0;
    let interval = setInterval(()=>{
        dom.innerText = Math.ceil(total * cnt / end).toString();
        if (cnt++ >= end) clearInterval(interval);
    }, 50);
}
const onAppear = {
    "chart": (element)=>{
        element.style.animation = "appear 1s ease-out";
    },
    "statistic": (element)=>{
        let count = document.getElementById("count");
        progressive_add(count, 100);
    },
    "best": (element)=>{
        progressive_add(document.getElementById("best_pos"), 10);
    },
    "worst": (element)=>{
        progressive_add(document.getElementById("worst_pos"), 10);
    }
};
function update() {
    let sections = document.querySelectorAll(".section");
    sections.forEach((section)=>{
        if (section.offsetTop < window.scrollY + 800) {
            if (!section.classList.contains("active")) {
                section.classList.add("active");
                if (typeof onAppear[section.id] === "function") onAppear[section.id](section);
            }
        }
    });
}
window.onload = ()=>{
    update();
    document.addEventListener("scroll", update);
};
window.onclose = ()=>{
    document.removeEventListener("scroll", update);
};

//# sourceMappingURL=index.579125c3.js.map
