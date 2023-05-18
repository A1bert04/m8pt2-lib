// Funcio per calcular la mitjana d'un array de numeros
export default function calcAverage(arr) {
    let sum = 0
    arr.forEach((item) => {
        sum += item
    })
    return sum / arr.length
}
