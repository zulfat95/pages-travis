export function cashback(amount) {
    const percent = 0.05;
    let result = amount * percent;

    const limit = 3000;

    if (result > limit) {
        return limit;
    }

    return result;
}
