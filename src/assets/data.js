const scriptsData = [
    {
      titulo: "Captação de perguntas e resposta - provas estacio",
      descricao: "Faz a separação automatica de perguntas e respostas e baixa um documento para o usuario",
      script: "(function(){var _0x1a2b=document.querySelectorAll('[data-testid^=\"question-\"]'),_0x1a2c=[];_0x1a2b.forEach(function(_0x1a2d){var _0x1a2e=_0x1a2d.querySelector('[data-testid=\"question-typography\"]'),_0x1a2f=_0x1a2e?_0x1a2e.innerText.trim():\"\";if(!_0x1a2f)return;var _0x1a30=_0x1a2d.querySelectorAll('button[data-testid^=\"alternative-\"]'),_0x1a31=\"\";_0x1a30.forEach(function(_0x1a32){var _0x1a33=_0x1a32.querySelector('[data-testid=\"circle-letter\"] p'),_0x1a34=_0x1a33?_0x1a33.innerText.trim():\"\",_0x1a35=_0x1a32.querySelector('[data-testid=\"question-typography\"]'),_0x1a36=_0x1a35?_0x1a35.innerText.trim():\"\";if(!_0x1a34&&!_0x1a36)return;_0x1a31+=_0x1a34+\": \"+_0x1a36+\"\\n\"});var _0x1a37=_0x1a2f+\"\\n\"+_0x1a31.trim();_0x1a2c.push(_0x1a37)});console.log(_0x1a2c);var _0x1a38=_0x1a2c.join(\"\\n\\n\"),_0x1a39=new Blob([_0x1a38],{type:\"text/plain;charset=utf-8\"}),_0x1a3a=URL.createObjectURL(_0x1a39),_0x1a3b=document.createElement(\"a\");_0x1a3b.href=_0x1a3a,_0x1a3b.download=\"questoes.txt\",document.body.appendChild(_0x1a3b),_0x1a3b.click(),document.body.removeChild(_0x1a3b),URL.revokeObjectURL(_0x1a3a)})();"
    },
];

export default scriptsData;
  