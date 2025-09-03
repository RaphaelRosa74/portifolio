// Dados das habilidades
const skillsData = {
    python: {
        description: "Possuo competências sólidas na linguagem, adquiridas tanto por meio de cursos especializados quanto por meio de projetos pessoais, os quais estão disponíveis para visualização em meu perfil no GitHub. Essa experiência consolidou minha proficiência na utilização eficaz da ferramenta, destacando minha capacidade de aplicar conceitos e resolver problemas de forma eficiente e estruturada.",
        link: "https://github.com/RaphaelRosa74/ByteBank"
    },

    htmlcss: {
        description: "Tenho habilidades em HTML e CSS, com experiência na criação de páginas web semânticas, responsivas e com estilização moderna. Utilizo técnicas como Flexbox e Grid para desenvolver layouts atraentes e funcionais, e estou sempre em busca de aprender mais sobre as melhores práticas e novas tecnologias.",
        link: "https://github.com/RaphaelRosa74/projeto-social"
    },
    javascript: {
        description: "Possuo conhecimentos intermediários em JavaScript, com experiência em desenvolvimento de funcionalidades interativas para páginas web. Estou sempre buscando aprimorar minhas habilidades em frameworks como React e Node.js.",
        link: "https://github.com/RaphaelRosa74/projeto-idade"
    },
    react: {
        description: "Possuo conhecimentos em domínio em React com foco em componentes reutilizáveis, gerenciamento de estado (Context API/hooks), integração com APIs REST e otimização com hooks modernos",
        link: "https://github.com/RaphaelRosa74/miniblog"
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