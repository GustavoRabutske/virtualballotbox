  // Adicione step 0.01 em todos os input tipo range
  document.addEventListener('DOMContentLoaded', function () {
    // Seleciona todos os elementos <input> do tipo range
    const rangeInputs = document.querySelectorAll('input[type="range"]');

    // Itera sobre os elementos e define o atributo "step" como 0.01
    rangeInputs.forEach(function (input) {
      input.setAttribute('step', '0.01');
    });
  });

  // Abrir fechar seção de informações do projeto
  $(document).ready(function () {
    $("#comoFuncionaBtn").click(function (event) {
      event.stopPropagation();  // Impede a propagação do evento para o documento
      $("#comoFuncionaDiv").fadeToggle("slow");
      $("#tecnologiasUsadasDiv").fadeOut("slow");
    });

    $("#tecnologiasUsadasBtn").click(function (event) {
      event.stopPropagation();
      $("#tecnologiasUsadasDiv").fadeToggle("slow");
      $("#comoFuncionaDiv").fadeOut("slow");
    });

    // Fechar as divs quando clicar fora delas
    $(document).click(function (event) {
      if (!$(event.target).closest('.modal').length) {
        $('.modalIndex').fadeOut("slow");
      }
    });
  });

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
    var estados = ['RS', 'SC', 'PR', 'SP', 'RJ', 'ES', 'MG', 'MT', 'MS', 'GO', 'DF', 'AM', 'RR', 'AC', 'PA', 'TO', 'AP', 'MA', 'BA', 'AL', 'CE', 'PE', 'RN', 'PB', 'SE', 'PI', 'RO'];

    // Adicione ouvintes de evento de clique aos <path>
    estados.forEach(function (estado) {
        var pathElement = document.getElementById('BR-' + estado);
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
            !modais.some(modalId => event.target === document.getElementById(`BR-${modalId.substring(7)}`))) {
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


