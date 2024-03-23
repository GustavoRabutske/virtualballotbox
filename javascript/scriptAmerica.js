document.addEventListener("DOMContentLoaded", function() {
  // Selecione todos os elementos com a classe 'hoverable'
  var hoverableElements = document.querySelectorAll('.hoverable');

  // Cria a caixa de tooltip
  var tooltip = document.createElement("div");
  tooltip.className = "tooltip";
  document.body.appendChild(tooltip);

  // Adiciona eventos de mouse a cada elemento hoverable
  hoverableElements.forEach(function(element) {
    element.addEventListener("mouseover", function(event) {
      // Mostra o tooltip
      tooltip.innerHTML = element.getAttribute("title");
      tooltip.style.display = "block";

      // Calcula a posição do tooltip
      var mouseX = event.clientX;
      var mouseY = event.clientY;
      var tooltipWidth = tooltip.offsetWidth;
      var tooltipHeight = tooltip.offsetHeight;

      // Define a posição do tooltip diretamente acima do cursor do mouse
      tooltip.style.left = (mouseX - tooltipWidth / 2) + "px";
      tooltip.style.top = (mouseY - tooltipHeight) + "px";
    });

    element.addEventListener("mouseout", function() {
      // Esconde o tooltip
      tooltip.style.display = "none";
    });
  });
});




  
  // Exibir os nomes dos candidatos 1 e 2
  function mostrarCandidato1() {
    // Captura o valor do input
    var nomeDigitado = document.querySelector('.nomeCandidato1').value;

    // Seleciona todos os elementos com a classe 'nomePessoa'
    var elementosNome = document.querySelectorAll('.nomeCandidato1');

    // Atualiza o conteúdo de cada elemento com o valor do input
    elementosNome.forEach(function (elemento) {
      elemento.textContent = nomeDigitado;
    });
  }

  function mostrarCandidato2() {
    // Captura o valor do input
    var nomeDigitado = document.querySelector('.nomeCandidato2').value;

    // Seleciona todos os elementos com a classe 'nomePessoa'
    var elementosNome = document.querySelectorAll('.nomeCandidato2');

    // Atualiza o conteúdo de cada elemento com o valor do input
    elementosNome.forEach(function (elemento) {
      elemento.textContent = nomeDigitado;
    });
  }

  // Exibir a imagem dos candidatos
  function exibirImagem(imagemId, inputId, containerId, nomeClass) {
    const fileInput = document.getElementById(inputId);
    const imagePreview = document.getElementById(imagemId);
    const imagensContainer = document.getElementById(containerId);

    // Verificar se é uma imagem
    const allowedTypes = ['image/jpeg', 'image/png', 'image/gif'];
    const file = fileInput.files[0];

    if (file && allowedTypes.includes(file.type)) {
        const reader = new FileReader();

        reader.onload = (e) => {
            imagePreview.src = e.target.result;
            displayUploadedImages(e.target.result, imagensContainer, nomeClass);
        };

        reader.readAsDataURL(file);
    } else {
        alert("Por favor, selecione um arquivo de imagem válido (JPEG, PNG, GIF).");
        fileInput.value = ''; // Limpar o campo de arquivo para evitar a substituição do arquivo inválido
    }
}

function displayUploadedImages(imageSrc, container, nomeClass) {
    // Limpar o conteúdo anterior antes de adicionar uma nova imagem
    container.innerHTML = '';

    const imageElement = document.createElement('img');
    imageElement.src = imageSrc;
    imageElement.classList.add('candidato-imagem');
    container.appendChild(imageElement);

    const nomeElement = document.querySelector(`.${nomeClass}`);
}

// Abrir fechar janela da simulação do estado
document.addEventListener('DOMContentLoaded', function () {
  // Função para abrir e fechar modal
  function toggleModal(modalId) {
      var modal = document.getElementById(modalId);
      // Verifica se o modal existe antes de tentar manipulá-lo
      if (modal) {
          modal.style.display = modal.style.display === 'none' ? 'block' : 'none';
      }
  }

  // Lista de estados
  var estados = [
    'AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY'
  ];
  

  // Adicione ouvintes de evento de clique aos <path>
  estados.forEach(function (estado) {
      var pathElement = document.getElementById('US-' + estado);
      // Verifica se o elemento path existe antes de adicionar o ouvinte de evento
      if (pathElement) {
          pathElement.addEventListener('click', function () {
              toggleModal('simular' + estado);
          });
      }
  });

  // Adicione um ouvinte de evento de clique no documento para fechar a modal
  document.addEventListener('click', function (event) {
      var modais = estados.map(estado => 'simular' + estado);

      // Verifique se o clique não foi dentro de nenhuma das modais ou dos paths
      if (!modais.some(modalId => document.getElementById(modalId)?.contains(event.target)) &&
          !modais.some(modalId => event.target === document.getElementById(`US-${modalId.substring(7)}`))) {
          // Oculte todas as modais se o clique foi fora delas
          modais.forEach(modalId => {
              var modal = document.getElementById(modalId);
              // Verifica se o modal existe e não contém o elemento clicado
              if (modal && !modal.contains(event.target)) {
                  modal.style.display = 'none';
              }
          });
      }
  });
});

 

// cores de campanha! nome e cor do range
// Função para ser chamada no carregamento da página
document.addEventListener('DOMContentLoaded', function () {
  // Chama a função de mudança de cor inicialmente para configurar as cores padrão
  changeColor('nomeCandidato1', 'range1');
  changeColor('nomeCandidato2', 'range2');
});

function changeColor(nomeCandidatoClass, rangeClass) {
  var selectElement = document.getElementById("corCampanha" + nomeCandidatoClass.slice(-1));
  var selectedColor = selectElement.value;

  var nomeCandidatoElements = document.querySelectorAll("." + nomeCandidatoClass);
  var rangeElements = document.querySelectorAll("." + rangeClass);

  if (selectedColor === "azul") {
     nomeCandidatoElements.forEach(function (element) {
        element.style.color = "#99CCFF";
     });

     rangeElements.forEach(function (element) {
        element.style.background = "#99CCFF";
     });
  } else if (selectedColor === "vermelho") {
     nomeCandidatoElements.forEach(function (element) {
        element.style.color = "#FFCCCC";
     });

     rangeElements.forEach(function (element) {
        element.style.background = "#FFCCCC";
     });
  } else {
     // Se a opção for "default", configure para cinza
     nomeCandidatoElements.forEach(function (element) {
        element.style.color = "#333";
     });

     rangeElements.forEach(function (element) {
        element.style.background = "#333";
     });
  }
}

window.onload = function() {
  // Obtém todos os elementos input do tipo range na página
  var inputsRange = document.querySelectorAll('input[type="range"]');

  // Itera sobre cada input range e define o passo para 0.01
  inputsRange.forEach(function(input) {
      input.step = 0.01;
  });
};


