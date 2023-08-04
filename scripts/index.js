var language='notSelected';
var executedHTMLWindow;
var HTMLWindowIsOn=false;

function getSelectedLanguage() {
    var selectedDropdownValue = document.getElementById("languageDropDownMenu").value;
    
    if(selectedDropdownValue==="java"){
        language='java';
        console.log(language);
        monaco.editor.setModelLanguage(monaco.editor.getModels()[0], "java");
        closeHTML();
    } else if (selectedDropdownValue=== "javascript"){
        language= 'javascript';
        console.log(language);
        monaco.editor.setModelLanguage(monaco.editor.getModels()[0], "javascript");
        closeHTML();
    } else if (selectedDropdownValue=== "c"){
        language= 'c';
        console.log(language);
        monaco.editor.setModelLanguage(monaco.editor.getModels()[0], "python");
        closeHTML();
    } else if (selectedDropdownValue=== "c2"){
        language= 'c2';
        console.log(language);
        monaco.editor.setModelLanguage(monaco.editor.getModels()[0], "cpp");
        closeHTML();
    } else if (selectedDropdownValue === "python"){
        language='python';
        console.log(language);
        monaco.editor.setModelLanguage(monaco.editor.getModels()[0], "python");
        closeHTML();
    } else if (selectedDropdownValue === "html"){
        language='html';
        console.log(language);
        monaco.editor.setModelLanguage(monaco.editor.getModels()[0], "html");
    } else {
        language='notSelected';
        return;
    }
}

function getLanguage(){
    return language;
}

function closeHTML(){
    try{
if(HTMLWindowIsOn==true){
    executedHTMLWindow.close();
    HTMLWindowIsOn=false;
    }
}
catch(e){
    console.log("HTML window closed by user");
    HTMLWindowIsOn=false;
}
}

function getSelectedTheme() {
    var selectedTheme = document.getElementById("themeDropDownMenu").value;

    if(selectedTheme==="light"){
        console.log(selectedTheme);
        monaco.editor.setTheme("vs");
    } else if (selectedTheme=== "dark"){
        console.log(selectedTheme);
        monaco.editor.setTheme("vs-dark");
    } else if (selectedTheme === "hclight"){
        console.log(selectedTheme);
        monaco.editor.setTheme("hc-light");
    } else if (selectedTheme === "hcdark"){
        console.log(selectedTheme);
        monaco.editor.setTheme("hc-black");
    } else{
        return;
    }
}