export default function (first, second, options) {
	return first === second
		? options.fn(this)
		: options.inverse(this);
};
