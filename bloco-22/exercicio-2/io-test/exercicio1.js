function checksNumber(num) {
    if (typeof num !== 'number') throw new Error('o valor deve ser um número');
    if (num > 0) return 'Positivo'
    if (num < 0) return 'Negativo'
    return 'Neutro'
}

module.exports = checksNumber;