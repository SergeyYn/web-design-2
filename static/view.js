export default class view{
    constructor(model){
        this.model = model;
    }
    toHtml(){
        const bold = this.model.txt.bold;
        const italic = this.model.txt.italic;
        const underlined = this.model.txt.underlined;
        const color = this.model.txt.color;
        const register = this.model.txt.register;
        let text = this.model.txt.text;
        if(register == "AB")
            text = text.toUpperCase();
        else if(register == "ab")
            text = text.toLowerCase();
        let style = 'style="color:'+ color + ';';
        if(bold)
            style+="font-weight:bold;";
        if(italic)
            style+="font-style:italic;";
        if(underlined)
            style+="text-decoration:underline;";
        return `<div style="word-wrap:inherit;max-width:100%;height:600px;border:1px solid black;"><span ${style}">${text}</span>`;
    }
}