function calcularSustentabilidade() {
    let score = 0;
    
    // Obtém valores dos seletores
    const agua = parseInt(document.getElementById('agua').value);
    const energia = parseInt(document.getElementById('energia').value);
    const arvores = document.getElementById('arvores').checked ? 20 : 0;

    score = agua + energia + arvores;

    // Exibe resultado
    const resDiv = document.getElementById('resultado');
    const scoreSpan = document.getElementById('score');
    const feedback = document.getElementById('feedback');

    resDiv.className = "result-visible";
    scoreSpan.innerText = score;

    if(score >= 80) {
        feedback.innerText = "Excelente! A sua quinta é um modelo de sustentabilidade.";
        feedback.style.color = "green";
    } else if(score >= 40) {
        feedback.innerText = "Bom caminho, mas pode melhorar a gestão de recursos.";
        feedback.style.color = "orange";
    } else {
        feedback.innerText = "Atenção: Precisa implementar mais práticas ecológicas.";
        feedback.style.color = "red";
    }
}
