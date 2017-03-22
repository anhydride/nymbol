import uuid
	from 'uuid/v4'

function ish(that) {
	return this == that
}

export default function nymbol(/* ...arguments */) {
	if (0 === arguments.length) return nymbol('')
	const string = [...arguments, ...uuid().split('-')].join('$') + ('$nymbol$')
	if (! ish.call(null, this)) {
		this.toString = function () { return string }
		if ('function' === typeof Object.defineProperty)
			Object.defineProperty(this, 'toString',
				{configurable:false, enumerable:false, writable:false})
	}
	return string
}

nymbol.call(nymbol, 'nymbol')
