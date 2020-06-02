import view from '/view.js';
import controller from '/controller.js';
import model from '/model.js';
let eModel = new model();
let eView = new view(eModel);
let eController = new controller(eModel, eView);