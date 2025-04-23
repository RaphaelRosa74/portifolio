// Dados das habilidades
const skillsData = {
    python: {
        description: "Possuo competências sólidas na linguagem, adquiridas tanto por meio de cursos especializados quanto por meio de projetos pessoais, os quais estão disponíveis para visualização em meu perfil no GitHub. Essa experiência consolidou minha proficiência na utilização eficaz da ferramenta, destacando minha capacidade de aplicar conceitos e resolver problemas de forma eficiente e estruturada.",
        link: "https://github.com/RaphaelRosa74/ByteBank"
    },
    sql: {
        description: "Tenho conhecimentos básicos em SQL, com experiência em criação e manipulação de bancos de dados. Participei de projetos que envolviam consultas complexas e otimização de queries.",
        link: "https://github.com/seugithub/projeto-sql"
    },
    html: {
        description: "Possuo habilidades em HTML, com experiência na criação de páginas web responsivas e semânticas. Estou sempre buscando aprender mais sobre as melhores práticas e novas tecnologias.",
        link: "https://github.com/RaphaelRosa74/projeto-social"
    },
    css: {
        description: "Tenho conhecimentos em CSS, com experiência em estilização de páginas web e criação de layouts responsivos. Utilizo técnicas modernas como Flexbox e Grid para criar designs atraentes e funcionais.",
        link: "https://github.com/RaphaelRosa74/projeto-login"
    },
    javascript: {
        description: "Possuo conhecimentos intermediários em JavaScript, com experiência em desenvolvimento de funcionalidades interativas para páginas web. Estou sempre buscando aprimorar minhas habilidades em frameworks como React e Node.js.",
        link: "https://github.com/RaphaelRosa74/projeto-idade"
    },
    react: {
        description: "Possuo conhecimentos em desenvolvimento front-end com React, adquiridos através de cursos e projetos pessoais. Tenho experiência na criação de componentes reutilizáveis, gerenciamento de estado com Context API e integração com APIs REST. Meus projetos incluem aplicações SPA (Single Page Applications) com roteamento dinâmico e hooks modernos.",
        link: "https://github.com/RaphaelRosa74/projeto-costs"
    },
};

// Seleciona todos os elementos de habilidade
const skills = document.querySelectorAll('.skill');
const skillDescription = document.getElementById('skill-description');

// Adiciona um evento de clique a cada habilidade
skills.forEach(skill => {
    skill.addEventListener('click', () => {
        const skillKey = skill.getAttribute('data-skill');
        const skillInfo = skillsData[skillKey];

        // Atualiza a descrição da habilidade
        skillDescription.innerHTML = `
            <p>${skillInfo.description}</p>
            <a href="${skillInfo.link}" target="_blank" class="project-link">Ver Projeto no GitHub</a>
        `;

        // Exibe a descrição da habilidade
        skillDescription.classList.add('active');
    });
});