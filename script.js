function verificar() {
    const anoInput = document.getElementById('ano');
    const resuladoDiv = document.getElementById('resultado');

    const ano = parseInt(anoInput.value);

    if (isNaN(ano)) {
        resuladoDiv.textContent = 'Por favor, digite um ano válido.';
        return;
    }

    if ((ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0)) {
        resuladoDiv.textContent = `${ano} é um ano bissexto.`;
    } else {
        resuladoDiv.textContent = `${ano} não é um ano bissexto.`;
    }
}
