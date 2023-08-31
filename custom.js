// senha do computador: eunãoseiasenha
document.querySelector('title#title').innerText = 'Revisão Obj | Factorys | Constructs'

const newTitle = "<small>Revisão Obj - <p>Factory | Constructs</p></small>"
h1 = () => this.document.getElementById('h1').innerHTML = newTitle
h1()

const assuntos = 'Object.defineProperty e Object.definePropertys'
txt = () => this.document.querySelector('p.texto').innerHTML =
        "Códigos via console - <small><p>Assuto: </p><p>Object.defineProperty e Object.definePropertys</p></small>"
txt()

/************************************************************************************/
//ACESSANDO VALORES DE UM OBJETO
// Ocultar botão refresh
document.querySelector('button#refresh').setAttribute('hidden', 'true')

const chaveNome = 'Raimundo'
const chaveSobrenome = 'Marques'

function Pessoa(nome, sobrenome) {
        this.nome = nome
        this.sobrenome = sobrenome
}

const p1 = new Pessoa(chaveNome, chaveSobrenome)
//console.log(p1)

function refresh() {
        alert("Atualizar")
        window.location.reload(true)
}

function getDados() {
        //alert("Clicou no dados")
        document.querySelector('button#refresh').removeAttribute('hidden')
        document.querySelector('button#btn-send').setAttribute('hidden', 'true')


        /*
        PRIMEIRO EXEMPLO
        function Aluno() {
                const chaveRA = document.querySelector('input#ra')
                this.ra = String(chaveRA.value)

                const chaveCPF = document.querySelector('input#cpf')
                this.cpf = String(chaveCPF.value)

                const chaveCurso = document.querySelector('input#curso')
                this.curso = String(chaveCurso.value)

                const chaveTurma = document.querySelector('input#turma')
                this.turma = String(chaveTurma.value)

                Object.freeze(this)//Trava todo o objeto para que não tenha modificações de valor
        }
        const aluno = new Aluno()
        console.log(aluno)
        */

        //SEGUNDO EXEMPLO
        function Aluno() {
                const chaveRA = document.querySelector('input#ra')
                this.ra = String(chaveRA.value)

                const chaveCPF = document.querySelector('input#cpf')
                this.cpf = String(chaveCPF.value)

                const chaveCurso = document.querySelector('input#curso')
                this.curso = String(chaveCurso.value)

                const chaveTurma = document.querySelector('input#turma')
                this.turma = String(chaveTurma.value)

                // configurando a segurança da variável individualmente
                /*
                Object.defineProperty(this, 'ra', {
                        enumerable: true, //mostra a chave
                        value: this.ra, //valor
                        writable: true, //poder alterar ou não o conteúdo da variável
                        configurable: true //configurável ou não
                })*/

                // configurando a segurança de várias variáveis 
                Object.defineProperties(this, {
                        ra: {
                                enumerable: true, //mostra a chave
                                value: this.ra, //valor
                                writable: true, //poder alterar ou não o conteúdo da variável
                                configurable: true //configurável ou não
                        },
                        cpf: {
                                enumerable: true, //mostra a chave
                                value: this.cpf, //valor
                                writable: false, //poder alterar ou não o conteúdo da variável
                                configurable: true //configurável ou não
                        },
                        curso: {
                                enumerable: true, //mostra a chave
                                value: this.curso, //valor
                                writable: true, //poder alterar ou não o conteúdo da variável
                                configurable: true //configurável ou não
                        },
                        turma: {
                                enumerable: true, //mostra a chave
                                value: this.turma, //valor
                                writable: true, //poder alterar ou não o conteúdo da variável
                                configurable: true //configurável ou não
                        }
                })
        }
        const aluno = new Aluno()
        console.log(aluno)
}

