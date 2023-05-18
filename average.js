export default function calcAverage(arr) {
    let sum
    arr.forEach((item) => {
        sum += item
    })
    return sum / arr.length
}
