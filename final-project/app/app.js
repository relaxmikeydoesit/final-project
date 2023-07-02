import { changePageContent } from "../model/model.js";

function initListeners(){
    $("nav .nav-links a").on("click", function(e){
        let btnID = e.currentTarget.id;
        changePageContent(btnID);
    });
}

$(document).ready(function(){
    initListeners();
    changePageContent("home");
    });