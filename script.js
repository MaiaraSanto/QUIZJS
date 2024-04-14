document.addEventListener("DOMContentLoaded", function() {
    const perguntas = [
        {
            pergunta: 'Qual é a capital do Brasil?',
            opcoes: ['Brasília', 'Rio de Janeiro', 'São Paulo'],
            resposta: 'Brasília'
        },
        {
            pergunta: 'Quem escreveu "Dom Quixote"?',
            opcoes: ['William Shakespeare', 'Luís de Camões', 'Miguel de Cervantes'],
            resposta: 'Miguel de Cervantes'
        },
        {
            pergunta: 'Qual é o maior planeta do Sistema Solar?',
            opcoes: ['Terra', 'Júpiter', 'Vênus'],
            resposta: 'Júpiter'
        },
        {
            pergunta: 'Qual é a raiz quadrada de 16?',
            opcoes: ['2', '4', '8'],
            resposta: '4'
        },
        {
            pergunta: 'Qual é o símbolo químico do ouro?',
            opcoes: ['O', 'Au', 'Ag'],
            resposta: 'Au'
        },
        {
            pergunta: 'Quem pintou a Mona Lisa?',
            opcoes: ['Leonardo da Vinci', 'Vincent van Gogh', 'Pablo Picasso'],
            resposta: 'Leonardo da Vinci'
        },
        {
            pergunta: 'Quantos continentes existem?',
            opcoes: ['5', '6', '7'],
            resposta: '7'
        },
        {
            pergunta: 'Em que país nasceu o escritor Franz Kafka?',
            opcoes: ['Alemanha', 'Áustria', 'República Tcheca'],
            resposta: 'República Tcheca'
        },
        {
            pergunta: 'Qual é o rio mais longo do mundo?',
            opcoes: ['Amazonas', 'Nilo', 'Yangtzé'],
            resposta: 'Nilo'
        },
        {
            pergunta: 'Qual é o maior animal terrestre?',
            opcoes: ['Elefante africano', 'Girafa', 'Tubarão-baleia'],
            resposta: 'Elefante africano'
        },
        {
            pergunta: 'Qual é o segundo elemento mais abundante na crosta terrestre?',
            opcoes: ['Oxigênio', 'Silício', 'Alumínio'],
            resposta: 'Silício'
        },
        {
            pergunta: 'Qual é o maior oceano do mundo?',
            opcoes: ['Atlântico', 'Pacífico', 'Índico'],
            resposta: 'Pacífico'
        },
        {
            pergunta: 'Qual é o estado brasileiro com maior número de municípios?',
            opcoes: ['São Paulo', 'Minas Gerais', 'Rio Grande do Sul'],
            resposta: 'Minas Gerais'
        },
        {
            pergunta: 'Qual é a cidade mais populosa do mundo?',
            opcoes: ['Pequim', 'Tóquio', 'Xangai'],
            resposta: 'Tóquio'
        },
        {
            pergunta: 'Quem foi o autor de "Romeu e Julieta"?',
            opcoes: ['William Shakespeare', 'Charles Dickens', 'Jane Austen'],
            resposta: 'William Shakespeare'
        },
        {
            pergunta: 'Qual é a montanha mais alta do mundo?',
            opcoes: ['Everest', 'K2', 'Kangchenjunga'],
            resposta: 'Everest'
        },
        {
            pergunta: 'Qual é o nome do navegador português que descobriu o caminho marítimo para a Índia?',
            opcoes: ['Bartolomeu Dias', 'Vasco da Gama', 'Pedro Álvares Cabral'],
            resposta: 'Vasco da Gama'
        },
        {
            pergunta: 'Qual é a velocidade da luz no vácuo?',
            opcoes: ['299.792.458 metros por segundo', '300.000.000 metros por segundo', '200.000.000 metros por segundo'],
            resposta: '299.792.458 metros por segundo'
        },
        {
            pergunta: 'Quem foi o primeiro presidente dos Estados Unidos?',
            opcoes: ['George Washington', 'Thomas Jefferson', 'Abraham Lincoln'],
            resposta: 'George Washington'
        },
        {
            pergunta: 'Qual é a fórmula química da água?',
            opcoes: ['H2O', 'CO2', 'NH3'],
            resposta: 'H2O'
        },
        {
            pergunta: 'Qual é o livro mais vendido de todos os tempos?',
            opcoes: ['Dom Quixote', 'A Bíblia', 'Harry Potter e a Pedra Filosofal'],
            resposta: 'A Bíblia'
        },
        {
            pergunta: 'Qual é o maior deserto do mundo?',
            opcoes: ['Saara', 'Atacama', 'Antártica'],
            resposta: 'Antártica'
        },
        {
            pergunta: 'Quantas casas decimais tem o número pi?',
            opcoes: ['Duas', 'Cinco', 'Infinitas'],
            resposta: 'Infinitas'
        },
        {
            pergunta: 'Qual é o elemento químico mais leve?',
            opcoes: ['Hidrogênio', 'Hélio', 'Lítio'],
            resposta: 'Hidrogênio'
        },
        {
            pergunta: 'Quem escreveu "1984"?',
            opcoes: ['George Orwell', 'Aldous Huxley', 'Ray Bradbury'],
            resposta: 'George Orwell'
        },
        {
            pergunta: 'Qual é a cidade mais antiga do mundo?',
            opcoes: ['Jerusalém', 'Damasco', 'Cairo'],
            resposta: 'Damasco'
        },
        {
            pergunta: 'Quem pintou "A Noite Estrelada"?',
            opcoes: ['Vincent van Gogh', 'Pablo Picasso', 'Claude Monet'],
            resposta: 'Vincent van Gogh'
        },
        {
            pergunta: 'Qual é a segunda língua mais falada do mundo?',
            opcoes: ['Espanhol', 'Inglês', 'Hindi'],
            resposta: 'Espanhol'
        },
        {
            pergunta: 'Qual é o nome da casa onde vive a rainha da Inglaterra?',
            opcoes: ['Palácio de Buckingham', 'Palácio de Westminster', 'Palácio de Windsor'],
            resposta: 'Palácio de Buckingham'
        },
        {
            pergunta: 'Quem escreveu "A Origem das Espécies"?',
            opcoes: ['Charles Darwin', 'Galileu Galilei', 'Isaac Newton'],
            resposta: 'Charles Darwin'
        },
        {
            pergunta: 'Qual é o menor país do mundo?',
            opcoes: ['Mônaco', 'Vaticano', 'San Marino'],
            resposta: 'Vaticano'
        },
        {
            pergunta: 'Qual é a velocidade máxima permitida em uma via expressa no Brasil?',
            opcoes: ['100 km/h', '110 km/h', '120 km/h'],
            resposta: '110 km/h'
        },
        {
            pergunta: 'Quantos ossos tem o corpo humano?',
            opcoes: ['206', '212', '198'],
            resposta: '206'
        },
        {
            pergunta: 'Qual é o país com maior número de rios no mundo?',
            opcoes: ['Brasil', 'Rússia', 'Canadá'],
            resposta: 'Brasil'
        },
        {
            pergunta: 'Quem foi o primeiro ser humano a viajar para o espaço?',
            opcoes: ['Yuri Gagarin', 'Neil Armstrong', 'Buzz Aldrin'],
            resposta: 'Yuri Gagarin'
        },
        {
            pergunta: 'Qual é o ponto mais alto do Brasil?',
            opcoes: ['Monte Roraima', 'Pico da Neblina', 'Pico Paraná'],
            resposta: 'Pico da Neblina'
        },
        {
            pergunta: 'Qual é o maior animal do mundo?',
            opcoes: ['Baleia-azul', 'Elefante africano', 'Tubarão-baleia'],
            resposta: 'Baleia-azul'
        },
        {
            pergunta: 'Qual é o número atômico do carbono?',
            opcoes: ['6', '8', '12'],
            resposta: '6'
        },
        {
            pergunta: 'Quem foi o primeiro astronauta a caminhar na Lua?',
            opcoes: ['Neil Armstrong', 'Buzz Aldrin', 'Michael Collins'],
            resposta: 'Neil Armstrong'
        },
        {
            pergunta: 'Qual é o maior lago do mundo em volume de água?',
            opcoes: ['Mar Cáspio', 'Lago Superior', 'Lago Baikal'],
            resposta: 'Lago Baikal'
        },
        {
            pergunta: 'Quantos planetas existem no Sistema Solar?',
            opcoes: ['8', '9', '10'],
            resposta: '8'
        },
        {
            pergunta: 'Qual é o rio mais longo do mundo?',
            opcoes: ['Amazonas', 'Nilo', 'Mississipi'],
            resposta: 'Nilo'
        },
        {
            pergunta: 'Qual é o maior felino do mundo?',
            opcoes: ['Tigre', 'Leão', 'Onça-pintada'],
            resposta: 'Tigre'
        },
        {
            pergunta: 'Qual é o país mais populoso do mundo?',
            opcoes: ['China', 'Índia', 'Estados Unidos'],
            resposta: 'China'
        },
        {
            pergunta: 'Quem foi o criador da teoria da relatividade?',
            opcoes: ['Isaac Newton', 'Albert Einstein', 'Stephen Hawking'],
            resposta: 'Albert Einstein'
        },
        {
            pergunta: 'Qual é o maior animal terrestre?',
            opcoes: ['Elefante africano', 'Girafa', 'Rinoceronte'],
            resposta: 'Elefante africano'
        },
        {
            pergunta: 'Qual é a cidade mais antiga do mundo?',
            opcoes: ['Damasco', 'Jerusalém', 'Atenas'],
            resposta: 'Damasco'
        },
        {
            pergunta: 'Quem pintou "A Última Ceia"?',
            opcoes: ['Leonardo da Vinci', 'Pablo Picasso', 'Vincent van Gogh'],
            resposta: 'Leonardo da Vinci'
        },
        {
            pergunta: 'Quantos planetas do Sistema Solar possuem anéis?',
            opcoes: ['2', '3', '4'],
            resposta: '4'
        },
        {
            pergunta: 'Quem foi o primeiro presidente do Brasil?',
            opcoes: ['Deodoro da Fonseca', 'Getúlio Vargas', 'Juscelino Kubitschek'],
            resposta: 'Deodoro da Fonseca'
        },
        {
            pergunta: 'Qual é o maior mamífero do mundo?',
            opcoes: ['Baleia-azul', 'Elefante africano', 'Girafa'],
            resposta: 'Baleia-azul'
        },
        {
            pergunta: 'Qual é o ponto mais baixo da Terra?',
            opcoes: ['Marianas Trench', 'Vale da Morte', 'Lago Baikal'],
            resposta: 'Marianas Trench'
        },
        {
            pergunta: 'Qual é o animal terrestre mais rápido?',
            opcoes: ['Guepardo', 'Antílope', 'Leão'],
            resposta: 'Guepardo'
        }
    
    ];

    let currentQuestionIndex = 0;
    const totalQuestions = perguntas.length;
    let pontos = 0;

    const quizContainer = document.getElementById('quizContainer');
    const questionContainer = document.getElementById('questionContainer');
    const optionsContainer = document.getElementById('optionsContainer');
    const resultContainer = document.getElementById('resultContainer');
    const questionText = document.getElementById('questionText');
    const resultText = document.getElementById('resultText');
    const returnButton = document.getElementById('returnButton');
    const returnToQuestionsButton = document.getElementById('returnToQuestionsButton');

    function showQuestion() {
        const currentQuestion = perguntas[currentQuestionIndex];
        questionText.textContent = currentQuestion.pergunta;

        optionsContainer.innerHTML = '';
        currentQuestion.opcoes.forEach(opcao => {
            const optionInput = document.createElement('input');
            optionInput.type = 'radio';
            optionInput.name = 'opcao';
            optionInput.value = opcao;
            optionsContainer.appendChild(optionInput);

            const optionLabel = document.createElement('label');
            optionLabel.textContent = opcao;
            optionsContainer.appendChild(optionLabel);
            optionsContainer.appendChild(document.createElement('br'));
        });
    }

    function showResult() {
        questionContainer.style.display = 'none';
        resultContainer.style.display = 'block';

        resultText.textContent = `Você acertou ${pontos} de ${totalQuestions} perguntas.`;
    }

    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    function showQuestions() {
        currentQuestionIndex = 0;
        pontos = 0;
        showQuestion();
        questionContainer.style.display = 'block';
        resultContainer.style.display = 'none';
    }

    function processAnswer() {
        const selectedOption = document.querySelector('input[name="opcao"]:checked');

        if (!selectedOption) {
            alert('Por favor, selecione uma opção.');
            return;
        }

        const resposta = selectedOption.value;
        const currentQuestion = perguntas[currentQuestionIndex];

        if (resposta === currentQuestion.resposta) {
            pontos++;
        }

        currentQuestionIndex++;

        if (currentQuestionIndex < totalQuestions) {
            showQuestion();
        } else {
            showResult();
        }
    }

    // Evento de clique no botão "Responder"
    document.getElementById('questionForm').addEventListener('submit', function(event) {
        event.preventDefault();
        processAnswer();
    });

    // Evento de clique no botão "Retornar ao Início" no contêiner de resultado
    returnButton.addEventListener('click', function() {
        showQuestions();
        scrollToTop();
    });

    // Evento de clique no botão "Retornar ao Início" no contêiner de perguntas
    returnToQuestionsButton.addEventListener('click', function() {
        showQuestions();
        scrollToTop();
    });

    // Evento de clique no botão "Retornar ao Início" no contêiner de perguntas
returnToQuestionsButton.addEventListener('click', function() {
    showQuestions();
    scrollToTop();
    quizContainer.classList.add('slideIn', 'shine');
});


    // Exibir a primeira pergunta ao iniciar
    showQuestion();
});



