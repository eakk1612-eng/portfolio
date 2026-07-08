// ================================
// Navbar Shadow เมื่อ Scroll
// ================================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.style.boxShadow = "0 5px 20px rgba(0,0,0,.15)";

    } else {

        header.style.boxShadow = "0 2px 15px rgba(0,0,0,.08)";

    }

    // ตรวจว่าเปิด Dark Mode หรือไม่
    if (document.body.classList.contains("dark")) {

        header.style.background = "#1b1b1b";

    } else {

        header.style.background = "#ffffff";

    }

});
// ================================
// Active Menu
// ================================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") == "#" + current) {
            link.classList.add("active");
        }

    });

});

// ================================
// Fade In Animation
// ================================

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

});

const hidden = document.querySelectorAll(
    ".card,.project-card,.certificate,.activity-gallery img,.about-container"
);

hidden.forEach((el) => observer.observe(el));

// ================================
// Back To Top Button
// ================================

const topBtn = document.createElement("button");

topBtn.innerHTML = "↑";

topBtn.id = "topBtn";

document.body.appendChild(topBtn);

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

});

topBtn.onclick = () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

};

// ================================
// Typing Effect
// ================================

const text =
    [
        "Computer Engineering Student",
        "Web Developer",
        "AI Developer",
        "Software Engineer"
    ];

let index = 0;
let char = 0;

const typing = document.querySelector(".hero-text h2");

function typeEffect() {

    if (char < text[index].length) {

        typing.innerHTML += text[index].charAt(char);

        char++;

        setTimeout(typeEffect, 80);

    } else {

        setTimeout(eraseEffect, 1500);

    }

}

function eraseEffect() {

    if (char > 0) {

        typing.innerHTML = text[index].substring(0, char - 1);

        char--;

        setTimeout(eraseEffect, 40);

    } else {

        index++;

        if (index >= text.length) {

            index = 0;

        }

        setTimeout(typeEffect, 300);

    }

}

typing.innerHTML = "";

typeEffect();

// ================================
// Certificate Zoom
// ================================

const certificates = document.querySelectorAll(".certificate img");

certificates.forEach(img => {

    img.addEventListener("click", () => {

        const overlay = document.createElement("div");

        overlay.style.position = "fixed";
        overlay.style.left = "0";
        overlay.style.top = "0";
        overlay.style.width = "100%";
        overlay.style.height = "100%";
        overlay.style.background = "rgba(0,0,0,.8)";
        overlay.style.display = "flex";
        overlay.style.justifyContent = "center";
        overlay.style.alignItems = "center";
        overlay.style.zIndex = "9999";

        const image = document.createElement("img");

        image.src = img.src;
        image.style.maxWidth = "80%";
        image.style.maxHeight = "80%";
        image.style.borderRadius = "15px";

        overlay.appendChild(image);

        document.body.appendChild(overlay);

        overlay.onclick = () => {

            overlay.remove();

        };

    });

});
const darkBtn = document.getElementById("darkMode");

darkBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {

        darkBtn.classList.remove("fa-moon");
        darkBtn.classList.add("fa-sun");

    } else {

        darkBtn.classList.remove("fa-sun");
        darkBtn.classList.add("fa-moon");

    }

});

// ================================
// Console Message
// ================================

console.log("Welcome to Phuree Portfolio");
const modal = document.getElementById("projectModal");

const projects = {

    chatbot: {

        title: "CPE AI Chatbot",

        description: "AI Chatbot สำหรับเว็บไซต์สาขาวิศวกรรมคอมพิวเตอร์ โดยใช้ RAG, FastAPI, FAISS และ Machine Learning เพื่อค้นหาข้อมูลและตอบคำถามจากเว็บไซต์ของสาขา",

        tech: "Python • FastAPI • HTML • CSS • JavaScript • SQLite • AI",

        github: "https://github.com/eakk1612-eng",

        demo: "#",

        images: [
            "images/chatbot1.png",
            "images/chatbot2.png",
            "images/chatbot3.png",


        ]

    },

    chemistry: {

        title: "Chemistry App",

        description: "Application สำหรับเรียนวิชาเคมี ประกอบด้วยตารางธาตุ การคำนวณสารละลาย สมการเคมี และการคำนวณมวลโมเลกุล พัฒนาด้วย Android Studio",

        tech: "Java • Android Studio • Firebase",

        github: "https://github.com/eakk1612-eng",

        demo: "#",

        images: [
            "images/chemistry1.png",
            "images/chemistry2.png",
            "images/chemistry3.png"
        ]

    },

    romestead: {

        title: "Romestead",

        description: "เกมแนว Adventure พัฒนาด้วย Unity และภาษา C# โดยใช้หลักการ Object-Oriented Programming มีระบบต่อสู้ ระบบเก็บไอเทม และระบบ Quest",

        tech: "Unity • C# • OOP",

        github: "https://github.com/eakk1612-eng",

        demo: "#",

        images: [
            "images/library1.png",
            "images/library2.png",
            "images/library3.png"
        ]

    }

};

function openProject(project) {

    modal.style.display = "block";

    document.getElementById("modalTitle").innerHTML = project.title;

    document.getElementById("modalDescription").innerHTML = project.description;

    document.getElementById("modalTech").innerHTML = project.tech;

    document.getElementById("githubBtn").href = project.github;

    document.getElementById("demoBtn").href = project.demo;

    document.getElementById("mainImage").src = project.images[0];

    const thumbnails = document.getElementById("thumbnailContainer");

    thumbnails.innerHTML = "";

    project.images.forEach((img) => {

        const image = document.createElement("img");

        image.src = img;

        image.onclick = function () {

            document.getElementById("mainImage").src = img;

        };

        thumbnails.appendChild(image);

    });

}

document.querySelector(".close").onclick = function () {

    modal.style.display = "none";

}

window.onclick = function (e) {

    if (e.target == modal) {

        modal.style.display = "none";

    }

}

document.addEventListener("keydown", (e) => {

    if (e.key === "Escape") {

        modal.style.display = "none";

    }

});
