
function updateOutput(){
    const htmlCode = document.getElementById('html-code');
    const cssCode = document.getElementById('css-code');
    const jsCode = document.getElementById('js-code');
    const output = document.getElementById('output');

    output.contentDocument.body.innerHTML = htmlCode.value + "<style>" + cssCode.value+ "</style>";
    output.contentWindow.eval(jsCode.value);
}



function downloadCode() {
    const htmlCode = document.getElementById('html-code').value;
    const cssCode = document.getElementById('css-code').value;
    const jsCode = document.getElementById('js-code').value;
    
    const code = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <style>${cssCode}</style>
        </head>
        <body>
            ${htmlCode}
            <script>${jsCode}<\/script>
        </body>
        </html>
    `;
    
    const blob = new Blob([code], { type: 'text/html' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'code.html';
    link.click();
}
