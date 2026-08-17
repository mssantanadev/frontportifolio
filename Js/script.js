document.addEventListener('DOMContentLoaded', function () {
    var header = document.querySelector('.site-header');
    var menuButton = document.querySelector('.menu-button');
    var nav = document.querySelector('.nav');
    var navLinks = document.querySelectorAll('.nav a');
    var year = document.getElementById('year');
    var languageButtons = document.querySelectorAll('.language-option');

    var translations = {
        'Pular para o conteúdo': 'Skip to content',
        'Menu': 'Menu',
        'Perfil': 'Profile',
        'Trajetória': 'Career',
        'Projetos': 'Projects',
        'Contato': 'Contact',
        'São Paulo · QA + Back-end': 'São Paulo · QA + Back-end',
        'Qualidade de software': 'Software quality',
        'como': 'as',
        'base.': 'foundation.',
        'Desenvolvimento': 'Development',
        'evolução.': 'evolution.',
        'Atuo com': 'I work with',
        'qualidade de software em sistemas financeiros': 'software quality in financial systems',
        'e aplico essa experiência no desenvolvimento de soluções com': 'and apply that experience to building solutions with',
        'C#, ASP.NET Core, APIs e SQL Server.': 'C#, ASP.NET Core, APIs, and SQL Server.',
        'Ver os casos': 'View case studies',
        'Baixar currículo': 'Download résumé',
        'EVIDÊNCIA': 'EVIDENCE',
        'ANTES DO': 'BEFORE',
        'EFEITO': 'EFFECT',
        '01 / Perfil': '01 / Profile',
        'Ler nas entrelinhas': 'Read between the lines',
        'Interface bonita chama atenção.': 'A beautiful interface gets attention.',
        'Sistema confiável mantém.': 'A reliable system keeps it.',
        'Meu olhar para desenvolvimento nasceu do outro lado: testando fluxos, validando dados e encontrando inconsistências antes que elas chegassem ao usuário.': 'My approach to development began on the other side: testing flows, validating data, and finding inconsistencies before they reached users.',
        'Hoje, em paralelo ao trabalho com QA, construo projetos em C# e ASP.NET. Qualidade e desenvolvimento caminham juntos, e uma disciplina torna a outra melhor.': 'Today, alongside my QA work, I build projects in C# and ASP.NET. Quality and development go hand in hand, and each discipline makes the other stronger.',
        'Entender o fluxo': 'Understand the flow',
        'Antes de escrever código, descubro quem usa, onde falha e qual dado realmente importa.': 'Before writing code, I identify who uses it, where it can fail, and which data truly matters.',
        'Testar a hipótese': 'Test the hypothesis',
        'Uma solução só está pronta quando o caminho feliz e os cantos difíceis foram verificados.': 'A solution is only ready once both the happy path and the difficult edge cases have been verified.',
        'Deixar evidência': 'Leave evidence',
        'Documentação, nomes claros e demonstrações tornam o trabalho compreensível para a próxima pessoa.': 'Documentation, clear naming, and demonstrations make the work understandable to the next person.',
        '02 / Trajetória': '02 / Career',
        'Do processo ao sistema': 'From process to system',
        'Minha carreira sempre foi sobre fazer o processo funcionar.': 'My career has always been about making processes work.',
        'O cenário mudou. Saí da linha de produção e cheguei ao software, mas a curiosidade por entender cada etapa ficou.': 'The setting changed. I moved from the production line to software, but my curiosity to understand every step remained.',
        '2022 a 2024': '2022 to 2024',
        'Apontador de Produção': 'Production Coordinator',
        'Operação de chapas CTP, manutenção de processo, atendimento e treinamento. Foi onde aprendi que detalhe técnico e resultado final são a mesma conversa.': 'CTP plate operation, process maintenance, customer service, and training. This is where I learned that technical details and final results are part of the same conversation.',
        'Desde 2024': 'Since 2024',
        'Analista de Testes (QA) Júnior': 'Junior QA Analyst',
        'Testes manuais e automatizados em crédito consignado, consultas T-SQL, validação de dados e colaboração diária com aplicações ASP.NET e a equipe C#.': 'Manual and automated testing for payroll loans, T-SQL queries, data validation, and daily collaboration on ASP.NET applications with the C# team.',
        'Concluído em 2026': 'Completed in 2026',
        'Ciência da Computação': 'Computer Science',
        'Base acadêmica que conectei à prática por meio de projetos próprios em APIs, finanças, banco de dados e aplicações web.': 'An academic foundation I connected to practice through personal projects involving APIs, finance, databases, and web applications.',
        'Caixa de ferramentas atual': 'Current toolkit',
        'Testes manuais e automatizados': 'Manual and automated testing',
        '03 / Projetos': '03 / Projects',
        'O código deixa rastros': 'Code leaves a trail',
        'Casos, não cards.': 'Case studies, not cards.',
        'Cada projeto abaixo tem um problema, uma decisão técnica e uma demonstração. Clique para ver o funcionamento ou abrir o código.': 'Each project below has a problem, a technical decision, and a demonstration. Click to see it in action or explore the code.',
        'CASO 01': 'CASE 01',
        'CASO 02': 'CASE 02',
        'CASO 03': 'CASE 03',
        'CASO 04': 'CASE 04',
        'CASO 05': 'CASE 05',
        'CASO 06': 'CASE 06',
        'CASO 07': 'CASE 07',
        'Ver demonstração': 'Watch demo',
        'Aplicação financeira · projeto principal': 'Financial application · flagship project',
        'Controle de receitas, despesas, metas e investimentos em uma aplicação só. Consome cotações da B3 via API, acompanha carteira e simula rendimentos atrelados ao CDI.': 'Income, expense, goal, and investment management in a single application. It consumes B3 market quotes through an API, tracks portfolios, and simulates CDI-linked returns.',
        'Abrir repositório': 'Open repository',
        'API · domínio que conheço no trabalho': 'API · a domain I know from work',
        'API REST para cadastrar, consultar e excluir propostas, processando prazo, taxa, renda e score de crédito com documentação interativa.': 'REST API for creating, retrieving, and deleting proposals while processing term, rate, income, and credit score, with interactive documentation.',
        'API · dados econômicos em tempo real': 'API · real-time economic data',
        'Consulta SELIC, IPCA e câmbio em fontes externas, mantendo histórico e uma documentação Swagger pronta para exploração.': 'Retrieves SELIC, IPCA, and exchange-rate data from external sources while maintaining history and exploration-ready Swagger documentation.',
        'Aplicação MVC · regras de negócio': 'MVC application · business rules',
        'Simulador bancário com depósitos, saques, transferências e extrato. Um exercício de estado, validação e consistência financeira.': 'Banking simulator with deposits, withdrawals, transfers, and statements. An exercise in state management, validation, and financial consistency.',
        'Sistema web · organização de fluxo': 'Web system · workflow organization',
        'Dashboard de Tarefas': 'Task Dashboard',
        'Sistema MVC para registrar, organizar e acompanhar tarefas com persistência em banco de dados.': 'MVC system for recording, organizing, and tracking tasks with database persistence.',
        'Inteligência Artificial • Automação': 'Artificial Intelligence • Automation',
        'Plataforma inteligente de gerenciamento de chamados que utiliza IA para interpretar solicitações, classificar prioridades, calcular SLA automaticamente e encaminhar atendimentos em tempo real.': 'Intelligent ticket-management platform that uses AI to interpret requests, classify priorities, calculate SLAs automatically, and route support cases in real time.',
        'Aplicação web · dados ambientais': 'Web application · environmental data',
        'Calculadora de Carbono': 'Carbon Calculator',
        'Cálculo e acompanhamento de indicadores de emissão para empresas, com persistência de dados em nuvem.': 'Calculation and tracking of corporate emissions indicators, with cloud data persistence.',
        'DISPONÍVEL': 'AVAILABLE',
        'PARA CONVERSAR': 'TO CONNECT',
        '04 / Contato': '04 / Contact',
        'Tem um sistema para construir ou uma falha difícil de encontrar?': 'Have a system to build or a difficult bug to find?',
        'Currículo': 'Résumé',
        'São Paulo, SP': 'São Paulo, Brazil',
        '· Construído com intenção.': '· Built with intention.'
    };

    var attributeTranslations = {
        'Matheus Santana, início': 'Matheus Santana, home',
        'Navegação principal': 'Main navigation',
        'Princípios de trabalho': 'Work principles',
        'Tecnologias': 'Technologies',
        'Selecionar idioma': 'Select language',
        'Matheus Santana sorrindo, de camisa social clara': 'Matheus Santana smiling in a light dress shirt',
        'Assistir demonstração do Gestor Financeiro no YouTube': 'Watch the Financial Manager demo on YouTube',
        'Tela do projeto Gestor Financeiro': 'Financial Manager project screen',
        'Assistir demonstração da API de Empréstimo Consignado no YouTube': 'Watch the Payroll Loan API demo on YouTube',
        'Documentação da API de Empréstimo Consignado': 'Payroll Loan API documentation',
        'Assistir demonstração da Finance Intelligent API no YouTube': 'Watch the Finance Intelligent API demo on YouTube',
        'Documentação da Finance Intelligent API': 'Finance Intelligent API documentation',
        'Assistir demonstração do MS Bank no YouTube': 'Watch the MS Bank demo on YouTube',
        'Tela do projeto MS Bank': 'MS Bank project screen',
        'Assistir demonstração do Dashboard de Tarefas no YouTube': 'Watch the Task Dashboard demo on YouTube',
        'Tela do Dashboard de Gerenciamento de Tarefas': 'Task Management Dashboard screen',
        'Assistir demonstração do SmartDesk AI no YouTube': 'Watch the SmartDesk AI demo on YouTube',
        'Tela do SmartDesk AI': 'SmartDesk AI screen',
        'Assistir demonstração da Calculadora de Carbono no YouTube': 'Watch the Carbon Calculator demo on YouTube',
        'Tela da Calculadora de Emissão de Carbono': 'Carbon Emissions Calculator screen'
    };

    var textEntries = [];
    var textWalker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
        acceptNode: function (node) {
            var normalizedText = node.nodeValue.replace(/\s+/g, ' ').trim();
            return translations[normalizedText] ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
        }
    });
    var currentTextNode;

    while ((currentTextNode = textWalker.nextNode())) {
        textEntries.push({
            node: currentTextNode,
            pt: currentTextNode.nodeValue.replace(/\s+/g, ' ').trim(),
            leading: currentTextNode.nodeValue.match(/^\s*/)[0],
            trailing: currentTextNode.nodeValue.match(/\s*$/)[0]
        });
    }

    var attributeEntries = [];
    document.querySelectorAll('[aria-label], [alt]').forEach(function (element) {
        ['aria-label', 'alt'].forEach(function (attribute) {
            var value = element.getAttribute(attribute);
            if (value && attributeTranslations[value]) {
                attributeEntries.push({ element: element, attribute: attribute, pt: value });
            }
        });
    });

    function applyLanguage(language) {
        var isEnglish = language === 'en';

        document.documentElement.lang = isEnglish ? 'en' : 'pt-BR';
        document.body.dataset.language = language;
        document.title = isEnglish
            ? 'Matheus Santana | QA, C#, and transparent back-end engineering'
            : 'Matheus Santana | QA, C# e back-end sem caixa-preta';

        var description = document.querySelector('meta[name="description"]');
        var ogTitle = document.querySelector('meta[property="og:title"]');
        var ogDescription = document.querySelector('meta[property="og:description"]');
        if (description) description.content = isEnglish
            ? 'Matheus Santana’s portfolio: QA analyst and C#/.NET back-end developer. Documented projects, APIs, and financial systems built with attention to what happens beneath the interface.'
            : 'Portfólio de Matheus Santana: analista de testes e desenvolvedor back-end C#/.NET. Projetos documentados, APIs e sistemas financeiros construídos com atenção ao que acontece por baixo da interface.';
        if (ogTitle) ogTitle.content = isEnglish ? 'Matheus Santana: evidence before effect' : 'Matheus Santana: evidência antes do efeito';
        if (ogDescription) ogDescription.content = isEnglish
            ? 'QA, C#, and back-end. I find what breaks and build what lasts.'
            : 'QA, C# e back-end. Eu encontro o que quebra e construo o que aguenta.';

        textEntries.forEach(function (entry) {
            var value = isEnglish ? translations[entry.pt] : entry.pt;
            entry.node.nodeValue = entry.leading + value + entry.trailing;
        });

        attributeEntries.forEach(function (entry) {
            entry.element.setAttribute(entry.attribute, isEnglish ? attributeTranslations[entry.pt] : entry.pt);
        });

        var switcher = document.querySelector('.language-switcher');
        if (switcher) switcher.setAttribute('aria-label', isEnglish ? 'Select language' : 'Selecionar idioma');

        languageButtons.forEach(function (button) {
            var isActive = button.dataset.language === language;
            button.classList.toggle('is-active', isActive);
            button.setAttribute('aria-pressed', String(isActive));
        });
    }

    var savedLanguage = 'pt';
    try {
        savedLanguage = localStorage.getItem('portfolio-language') === 'en' ? 'en' : 'pt';
    } catch (error) {
        savedLanguage = 'pt';
    }
    applyLanguage(savedLanguage);

    languageButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            var language = button.dataset.language === 'en' ? 'en' : 'pt';
            applyLanguage(language);
            try { localStorage.setItem('portfolio-language', language); } catch (error) { /* Preference is optional. */ }
        });
    });

    if (year) year.textContent = new Date().getFullYear();

    function updateHeader() {
        header.classList.toggle('is-scrolled', window.scrollY > 20);
    }

    updateHeader();
    window.addEventListener('scroll', updateHeader, { passive: true });

    if (menuButton && nav) {
        menuButton.addEventListener('click', function () {
            var isOpen = menuButton.getAttribute('aria-expanded') === 'true';
            menuButton.setAttribute('aria-expanded', String(!isOpen));
            nav.classList.toggle('is-open', !isOpen);
            document.body.classList.toggle('menu-open', !isOpen);
        });

        navLinks.forEach(function (link) {
            link.addEventListener('click', function () {
                menuButton.setAttribute('aria-expanded', 'false');
                nav.classList.remove('is-open');
                document.body.classList.remove('menu-open');
            });
        });
    }

    var prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    var revealItems = document.querySelectorAll('.reveal');

    if (prefersReducedMotion || !('IntersectionObserver' in window)) {
        revealItems.forEach(function (item) { item.classList.add('is-visible'); });
        return;
    }

    var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px' });

    revealItems.forEach(function (item) { observer.observe(item); });
});
