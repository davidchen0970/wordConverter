document.getElementById('btnUpperCase').addEventListener('click', convertToUpperCase);
document.getElementById('btnLowerCase').addEventListener('click', convertToLowerCase);
document.getElementById('btnCapitalize').addEventListener('click', capitalizeFirstLetter);
document.getElementById('btnRemoveEnters').addEventListener('click', removeEnters);
document.getElementById('btnCapitalizeWordsExceptPrepositions').addEventListener('click', capitalizeWordsExceptPrepositions);

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
  document.getElementById('inputText').value = outputText;
}

function capitalizeWordsExceptPrepositions() {
  const inputText = document.getElementById('inputText').value;
  const lines = inputText.split('\n'); // 將文本按換行符拆分成多行

  // 定義介係詞和助詞列表
  const prepositionsAndConjunctions = ['and', 'but', 'or', 'on', 'in', 'at', 'with', 'for', 'to', 'of', 'as', 'by'];

  // 對每行文本進行處理
  const outputLines = lines.map(line => {
      const words = line.split(/\s+/); // 將每行文本拆分成單詞
      // 對每個單詞進行處理
      const outputWords = words.map(word => {
          const lowercaseWord = word.toLowerCase();
          // 如果單詞不在介係詞和助詞列表中，將其首字母轉換為大寫
          if (!prepositionsAndConjunctions.includes(lowercaseWord)) {
              return word.charAt(0).toUpperCase() + word.slice(1);
          } else {
              return word;
          }
      });
      // 將處理後的單詞重新組合成行文本
      return outputWords.join(' ');
  });

  // 將處理後的行文本重新組合成文本並顯示在輸出文本框中
  const outputText = outputLines.join('\n');
  document.getElementById('outputText').value = outputText;
}

