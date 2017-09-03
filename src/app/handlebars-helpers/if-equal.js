export default function (first, second, options) {
    if (first === second) {
        return options.fn(this);
    }

    return options.inverse(this);
}
