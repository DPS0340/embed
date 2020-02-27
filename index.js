const button = document.getElementById("convert");
const inputArea = document.getElementById("inputArea");

function changeValue(id, ctx) {
    const elem = document.getElementById(id);
    elem.innerText = ctx;
}

function changeInnerHtml(id, html) {
    const elem = document.getElementById(id);
    elem.innerHTML = html;
}

function show() {
    document.getElementById("output")
        .style
        .display = "grid";
}

function hide() {
    document.getElementById("output")
        .style
        .display = "none";
}

function parse() {
    const val = inputArea.value;
    const res = val
        .replace("<iframe", "<embed")
        .replace("</iframe>", "</embed>");
    return res;
}

button.addEventListener("click", function() {
    const res = parse();
    if (res) {
        changeValue("convertSpan", res);
        changeInnerHtml("previewDiv", res);
        show();
    }
});