document.addEventListener("DOMContentLoaded", () => {

    // MENU MOBILE

    const hamburger =
        document.getElementById("hamburger");

    const nav =
        document.getElementById("nav");

    hamburger.addEventListener("click", () => {

        nav.classList.toggle("active");

    });

    document
        .querySelectorAll("#nav a")
        .forEach(link => {

            link.addEventListener("click", () => {

                nav.classList.remove("active");

            });

        });

    // DARK MODE

    const themeToggle =
        document.getElementById("themeToggle");

    const savedTheme =
        localStorage.getItem("theme");

    if (savedTheme === "dark") {

        document.body.classList.add("dark");
        themeToggle.textContent = "☀️";

    }

    themeToggle.addEventListener("click", () => {

        document.body.classList.toggle("dark");

        const isDark =
            document.body.classList.contains("dark");

        localStorage.setItem(
            "theme",
            isDark ? "dark" : "light"
        );

        themeToggle.textContent =
            isDark ? "☀️" : "🌙";

    });

    // NOTÍCIAS DINÂMICAS

    const news = [

        {
            title: "Agricultura de Precisão cresce no Brasil",
            image: "https://picsum.photos/600/400?1",
            text: "Tecnologias modernas aumentam a produtividade e reduzem desperdícios."
        },

        {
            title: "Drones revolucionam o monitoramento agrícola",
            image: "https://picsum.photos/600/400?2",
            text: "Drones permitem análises detalhadas e aplicações localizadas."
        },

        {
            title: "Sensores inteligentes auxiliam produtores",
            image: "https://picsum.photos/600/400?3",
            text: "Sensores ópticos, térmicos e elétricos ajudam na tomada de decisões."
        },

        {
            title: "Pulverização inteligente reduz custos",
            image: "https://picsum.photos/600/400?4",
            text: "Taxas variáveis de aplicação aumentam a eficiência operacional."
        },

        {
            title: "Automação agrícola ganha espaço",
            image: "https://picsum.photos/600/400?5",
            text: "Máquinas conectadas oferecem mais precisão e controle."
        },

        {
            title: "Sustentabilidade impulsiona inovação",
            image: "https://picsum.photos/600/400?6",
            text: "Novas tecnologias ajudam a produzir mais com menor impacto ambiental."
        }

    ];

    const newsContainer =
        document.getElementById("newsContainer");

    newsContainer.innerHTML =
        news.map(item => `

        <article class="news-card">

            <img src="${item.image}" alt="${item.title}">

            <div class="news-content">

                <span class="category">
                    Agricultura
                </span>

                <h3>${item.title}</h3>

                <p>${item.text}</p>

            </div>

        </article>

    `).join("");

});