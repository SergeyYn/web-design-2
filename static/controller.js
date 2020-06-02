export default class controller{
    constructor(model, view){
        this.model = model;
        this.view = view;
        this.model.setOnChangeCallback((e) => this.onChangeCallback(e));
        document.querySelector('#sB').addEventListener('click', (e)=>this.onClickBold(e));
        document.querySelector('#sI').addEventListener('click', (e)=>this.onClickItalic(e));
        document.querySelector('#sU').addEventListener('click', (e)=>this.onClickUnderlined(e));
        document.querySelector('#SelectColor').addEventListener('change', (e)=>this.onChangeColor(e));
        document.querySelector('#SelectRegister').addEventListener('change', (e)=>this.onChangeRegister(e));
        document.querySelector('#ta').addEventListener('input', (e)=>this.onSetText(e));
    }

    onChangeCallback() {
        document.querySelector('#editor').innerHTML = this.view.toHtml();
    }

    onChangeColor(selectedObj){
        let value = selectedObj.target.options[selectedObj.target.options.selectedIndex].value;
        this.model.setColor(value);
    }
    onChangeRegister(selectedObj){
        let value = selectedObj.target.options[selectedObj.target.options.selectedIndex].value;
        this.model.setRegister(value);
    }
    onClickBold(){
        this.model.setBold();
    }
    onClickItalic(){
        this.model.setItalic();
    }
    onClickUnderlined(){
        this.model.setUnderlined();
    }
    onSetText(obj){
        let value = obj.target.value;
        this.model.setText(value);
    }
}