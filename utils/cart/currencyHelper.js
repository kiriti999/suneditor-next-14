export function kConverter(num) {
    if (num < 1000 && num > 0) {
        let result;
        result = num.typeof === 'number' ? num : parseInt(num);
        return `${result.toFixed(0)}`
    } else {
        let result;
        const s = (0.1 * Math.floor(num / 100)).toFixed(1);
        result = s.replace('.0', '') + 'k';
        return `${result}`
    }
}