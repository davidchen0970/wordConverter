document.getElementById('btnUpperCase').addEventListener('click', convertToUpperCase);
document.getElementById('btnLowerCase').addEventListener('click', convertToLowerCase);
document.getElementById('btnCapitalize').addEventListener('click', capitalizeFirstLetter);
document.getElementById('btnRemoveEnters').addEventListener('click', removeEnters);
document.getElementById('btnCapitalizeWordsExceptPrepositions').addEventListener('click', capitalizeWordsExceptPrepositions);
document.getElementById('btnCopy').addEventListener('click', copyToClipboard);

function convertToUpperCase() {
    const inputText = document.getElementById('inputText').value;
    const outputText = inputText.toUpperCase();
    document.getElementById('outputText').value = outputText;
}

function convertToLowerCase() {
    const inputText = document.getElementById('inputText').value;
    const outputText = inputText.toLowerCase();
    document.getElementById('outputText').value = outputText;
}

function capitalizeFirstLetter() {
    const inputText = document.getElementById('inputText').value;
    const outputText = inputText.charAt(0).toUpperCase() + inputText.slice(1);
    document.getElementById('outputText').value = outputText;
}

function removeEnters() {
    const inputText = document.getElementById('inputText').value;
    const outputText = inputText.replace(/[\r\n]+/g, ' ');
    document.getElementById('outputText').value = outputText;
}

function capitalizeWordsExceptPrepositions() {
    const inputText = document.getElementById('inputText').value;
    const lines = inputText.split('\n');

    const prepositionsAndConjunctions = ['and', 'but', 'or', 'on', 'in', 'at', 'with', 'for', 'to', 'of', 'as', 'by'];

    const outputLines = lines.map(line => {
        const words = line.split(/\s+/);
        return words.map((word, index) => {
            const lowercaseWord = word.toLowerCase();
            if (index === 0 || !prepositionsAndConjunctions.includes(lowercaseWord)) {
                return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
            } else {
                return lowercaseWord;
            }
        }).join(' ');
    });

    const outputText = outputLines.join('\n');
    document.getElementById('outputText').value = outputText;
}

function copyToClipboard() {
    const outputText = document.getElementById('outputText');
    outputText.select();
    outputText.setSelectionRange(0, 99999);
    document.execCommand('copy');

    // 顯示提示訊息
    alert('結果已複製到剪貼簿！');
}
