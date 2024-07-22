
function updateOutput(){
    const htmlCode = document.getElementById('html-code');
    const cssCode = document.getElementById('css-code');
    const jsCode = document.getElementById('js-code');
    const output = document.getElementById('output');

    output.contentDocument.body.innerHTML = htmlCode.value + "<style>" + cssCode.value+ "</style>";
        //output refers to the iframe element.
        // contentDocument is a property of the iframe that provides access to the document within the iframe.
        // body refers to the <body> element of the document inside the iframe.
        // innerHTML is a property that allows you to set or get the HTML content inside an element.

        //htmlCode.value + "<style>" + cssCode.value + "</style>" combines the HTML code written by the user with the CSS code wrapped in a <style> tag.
        //"<style>" and "</style>" are HTML tags used to define a block of CSS.

    output.contentWindow.eval(jsCode.value);
        //eval is a JavaScript function that evaluates or executes a string of JavaScript code.
        //contentWindow is a property of the iframe that provides access to the window object of the document inside the iframe
}



// example:

// document.body.style.backgroundColor = 'lightblue';
// alert('Hello from the iframe!');



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
