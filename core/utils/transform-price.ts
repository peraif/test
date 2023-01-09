export function splitTheNumber(num: number) {
    const result = num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    const parseNum = parseInt(result.split(' ').join(''));
    if (parseNum >= 1000000) {
        return parseInt(result) + ' M'
    }
    if (parseNum >= 10000) {

        return parseInt(result) + ' K'
    }
    return result;
}