const isInsideElectron = () => {
	return window && window["electronAPI"];
};

export default isInsideElectron;
