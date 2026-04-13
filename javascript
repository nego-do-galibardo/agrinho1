// Função para trocar de aba (SPA)
function switchTab(tabId) {
    // Esconde todas as abas
    document.querySelectorAll('.tab-content').forEach(tab => {
        tab.classList.remove('active');
    });
    // Desativa todos os botões
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.classList.remove('active');
    });

    // Ativa a aba e o botão correspondente
    document.getElementById(tabId).classList.add('active');
    const activeBtn = document.querySelector(`[data-target="${tabId}"]`);
    if (activeBtn) activeBtn.classList.add('active');
}

document.addEventListener('DOMContentLoaded', () => {
    // Listener para os botões de navegação
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const target = btn.getAttribute('data-target');
            switchTab(target);
        });
    });

    // Modo Escuro
    document.getElementById('theme-toggle').addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
    });

    // Lógica do Simulador
    const form = document.getElementById('complex-sim');
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const area = parseFloat(document.getElementById('area').value);
        const fCultura = parseFloat(document.getElementById('cultura').value);
        const fPlantio = parseFloat(document.getElementById('plantio').value);
        const fIrrigacao = parseFloat(document.getElementById('irrigacao').value);

        // Cálculo: (Plantio + Irrigação) transform
