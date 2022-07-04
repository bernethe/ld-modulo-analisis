// number thousands separator
export const numberThousandsSeparator = (number, separator = ',') => {
	return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, separator);
};

export const stringWithDecimals = (number, decimals) => {
	const string = number.toFixed(decimals);
	return string;
};

export const PMT = (ir, np, pv, fv, type) => {
	if (ir === 0) {
		return -(pv + fv) / np;
	}
	let pmt = 0;
	if (type === 1) {
		pmt = ir * pv * (1 + ir) ** np / ((1 + ir) ** np - 1);
	} else {
		pmt = ir * (pv * (1 + ir) - fv) / ((1 + ir) ** np - 1);
	}
	return pmt;
};