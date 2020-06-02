class txt{
	constructor(){
		this.text = "";
		this.bold = false;
		this.italic = false;
		this.underlined = false;
		this.color = "black";
		this.register = "ab";
		this.onChangeCallback = null;
	}
}

export default class model{
	constructor(){
		this.txt = new txt();
	}

	setText(text){
		this.txt.text = text;
		this.onChangeCallback();
	}

	setColor(color){
		this.txt.color = color;
		this.onChangeCallback();
	}

	setRegister(reg){
		this.txt.register = reg;
		this.onChangeCallback();
	}

	setBold(){
		this.txt.bold = !this.txt.bold;
		this.onChangeCallback();
	}

	setItalic(){
		this.txt.italic = !this.txt.italic;
		this.onChangeCallback();
	}

	setUnderlined(){
		this.txt.underlined = !this.txt.underlined;
		this.onChangeCallback();
	}

	setOnChangeCallback(onChangeCallback) {
        this.onChangeCallback = onChangeCallback;
    }
}