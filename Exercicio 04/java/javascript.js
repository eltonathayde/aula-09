function calcular(){
    let nota = parseFloat(document.getElementById('notas').value)
    let nota2= parseFloat(document.getElementById('notas2').value)
    let media = (nota + nota2) / 2
    let resultado= document.getElementById('resultado')

    
    resultado.innerHTML =(` nota do aluno 1 é, ${nota} e nota do aluno 2 é, ${nota2} . a média das notas é  ${media}`)

    

}