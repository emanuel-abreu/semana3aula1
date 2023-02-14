/* 

function imprime () {
    return 'brasil'
}


let impressora = () => { return 'argentina'}
///\\\


const impressorona = ()=>'bolívia'

console.log(imprime())
console.log(impressora())
console.log(impressorona())




const userEmail = 'reinaldo@teste.com.br';
const userPass = '123456';

let user = document.getElementById('email').value;
let pass = document.getElementById('password').value
let msg = document.getElementById('error')
let btn = document.getElementById('submit')
const form = document.getElementById('form-login');



form.addEventListener('submit', event => {
        event.preventDefault()
        event.stopPropagation();  
        console.log('user '+user)

    if (user == '' || pass == ''){
        console.log('vazio '+user)
            msg.innerText = user+' Todos os campos são obrigarórios'
            msg.hidden = false
       
     }else if(user == userEmail && pass == userPass){
        console.log('logou')
     }else{
        console.log('senha invalida')       
     }
    
})

     */

/* function soma(nome, dinheiro = 0) {
  const pessoa = {
    nome,
    dinheiro,
  };
  return pessoa;
}

console.log(soma("gabriel", 50));
 */
/* 
const { matricula, ...resto } = {
  matricula: "0212380155-2020-2-00132-167-0045468-44",
  dataLavratura: "2016-08-10",
  dataInsercao: "2020-08-11T16:43:11",
  dataCelebracao: "2020-08-11",
  conjuges: [
    {
      nome: "ALINE SILVA",
      sexo: "FEMININO",
      dataNascimento: "2000-01-15",
      naturalidade: {
        uf: "RJ",
        municipio: "ARMACAO DOS BUZIOS",
        codigoIBGE: 330023,
      },
      documentos: [
        {
          tipo: "CPF",
          numero: "10917400704",
          dataEmissao: "2018-03-12",
        },
        {
          tipo: "RG",
          numero: "12345M",
        },
      ],
      filiacao: [
        {
          nome: "MARIA SILVA",
          sexo: "FEMININO",
        },
        {
          nome: "SILVANO SILVA",
          sexo: "MASCULINO",
        },
      ],
    },
    {
      nome: "JORGE ISAIAS",
      sexo: "MASCULINO",
      dataNascimento: "1998-02-18",
      naturalidade: {
        uf: "RJ",
        municipio: "ARMACAO DOS BUZIOS",
        codigoIBGE: 330023,
      },
      documentos: [
        {
          tipo: "CPF",
          numero: " 00929946014",
        },
      ],
      filiacao: [
        {
          nome: "JUSSARA ISAIAS",
          sexo: "FEMININO",
        },
        {
          nome: "WAGNER ISAIAS",
          sexo: "MASCULINO",
        },
      ],
    },
  ],
  possuiRegistrosAnteriores: "true",
};

console.log(resto);

const [numero1,numero2,...rest] = [1, 2, 3, 4, 5, 6, 7, 8];

console.log(rest) */




/* let aluno = {}
function getFormValues() {
    aluno.email = document.forms.flogin.email
    aluno.password = document.forms.flogin.pwd

    console.log(aluno)
}

document.querySelector("#form-login").addEventListener('submit', (e) => {
    e.preventDefault()
    getFormValues()
}) */;
/* 
const {[3]:numero} = [1,2,3,4,5];
console.log(numero)

 */

/* const pioresAlunos = ['tales','gabriel','ursula','fernanda']
const alunosMaisOuMenos = ['reinaldo','andrei']
const melhoreAlunos = [...pioresAlunos,...alunosMaisOuMenos,'glauton','karine']
console.log(melhoreAlunos)

const identidade = {
    nome:'Rodolfo',
    rg:6565656
}
const contaBancaria = {
    agencia:'12',
    conta:'1233'
}

const dadosAgrupados = {
    ...identidade,
    ...contaBancaria
}
console.log(dadosAgrupados) */

const numeros = [1,2,3,4,4,5,5,5,6,6,66,7,8,9,9,9,]
let conjunto = new Set(numeros)
conjunto.add()
conjunto.delete(1)
conjunto.has(4)
conjunto.clear()
console.log(conjunto)