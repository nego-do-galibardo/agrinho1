// Espera o DOM carregar completamente para garantir que os elementos existem
document.addEventListener('DOMContentLoaded', () => {

    /* =========================================
       1. Funcionalidade: Modo Escuro (Usabilidade)
       Atende: Implementou melhorias para o usuário (modo escuro).
       ========================================= */
    const toggleDarkModeBtn = document.getElementById('toggle-dark-mode');
    const body = document.body;

    toggleDarkModeBtn.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        
        // Altera o texto do botão de forma funcional
        if (body.classList.contains('dark-mode')) {
            toggleDarkModeBtn.textContent = '☀️ Claro';
        } else {
            toggleDarkModeBtn.textContent = '🌓 Escuro';
        }
    });

    /* =========================================
       2. Funcionalidade: Simulador Hídrico (Complexidade)
       Atende: Captura evento, usa variáveis, manipula DOM de forma funcional.
       ========================================= */
    const form = document.getElementById('simulador-form');
    const resultadoDiv = document.getElementById('resultado-simulacao');
    const textoResultado = document.getElementById('texto-resultado');

    form.addEventListener('submit', (event) => {
        // Impede o formulário de recarregar a página (comportamento padrão)
        event.preventDefault();

        // Captura e armazena informações do usuário (uso de variáveis)
        const areaHectares = parseFloat(document.getElementById('area').value);
        const tipoTecnologia = document.getElementById('tecnologia').value;
        
        // Lógica de Processamento (Ilustrativa)
        let economiaAguaPercentual = 0;
        let impactoSustentavel = "";

        if (tipoTecnologia === 'gotejamento') {
            economiaAguaPercentual = 60; // Gotejamento economiza até 60%
            impactoSustentavel = "Muito Alto. O gotejamento de precisão reduz drasticamente a evaporação e foca a água diretamente na raiz, garantindo um Agro Forte e um Futuro Sustentável.";
        } else if (tipoTecnologia === 'convencional') {
            economiaAguaPercentual = 10; // Aspersão comum tem muita perda
            impactoSustentavel = "Baixo. A aspersão convencional, embora funcional, perde muita água por evaporação e vento. Para maior equilíbrio, considere tecnologias de precisão.";
        }

        // Calcula uma economia hipotética em Litros (exemplo: 1000L por hectare por dia * economia)
        const economiaLitrosTotal = (areaHectares * 1000 * (economiaAguaPercentual / 100)).toFixed(0);

        // Manipulação Funcional do DOM (Altera o texto e exibe a div)
        // Atende: JS altera o texto de um elemento, mostra uma div.
        textoResultado.innerHTML = `
            Ao utilizar <strong>${tipoTecnologia === 'gotejamento' ? 'Gotejamento de Precisão' : 'Aspersão Comum'}</strong> em sua área de <strong>${areaHectares} hectares</strong>:<br><br>
            • Economia estimada de água: <strong>${economiaAguaPercentual}%</strong>.<br>
            • Impacto Sustentável: <strong>${impactoSustentavel}</strong>
        `;

        // Remove a classe "hidden" do CSS para mostrar o resultado
        resultadoDiv.classList.remove('hidden');
    });
});
