const fs = require('fs');
const path = require('path');
const markdownIt = require('markdown-it');

const template = 
`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <link href="../../styles/style.css" rel="stylesheet">
    <title>{{title}}</title>
</head>
<body>
    <div class="page-wrapper">
        <header>
            <nav>
                <img src="../../images/logo.png" alt="Logo">
                <ul>
                    <li><a class="link nav-link" href="../../index.html">Home</a></li>
                    <li><a class="link nav-link" href="../languages/html.html">HTML</a></li>
                    <li><a class="link nav-link" href="../languages/css.html">CSS</a></li>
                    <li><a class="link nav-link" href="../languages/javascript.html">JavaScript</a></li>
                    <li><a class="link nav-link" href="../languages/python.html">Python</a></li>
                    <li><a class="link nav-link" href="../languages/c.html">C</a></li>
                    <li><a class="link nav-link" href="../frameworks/react.html">React</a></li>
                    <li><a class="link nav-link" href="../frameworks/nodejs.html">Node.js</a></li>
                </ul>
            </nav>
        </header>
        <main>
            <div class="container introduction">
                {{contentHTML}}
            </div>
        </main>
        <footer>
            <p>Made by Lsbn - All rights reserved</p>
        </footer>
    </div>
    <script src="../../scripts/main.js"></script>
</body>
</html>`

const mdPath = 'md/languages/python.md';

function convertFile(mdPath) {
    const md = new markdownIt;

    const mdContent = fs.readFileSync(mdPath, 'utf-8');
    const htmlContent = md.render(mdContent);
    
    let htmlTemplate = template.replace('{{contentHTML}}', htmlContent);
    
    const filename = path.basename(mdPath, '.md');
    const title = filename.charAt(0).toUpperCase() + filename.slice(1);

    htmlTemplate = htmlTemplate.replace('{{title}}', title);

    const relativePath = path.relative('md', path.dirname(mdPath));
    const outputDir = path.join('pages', relativePath);
    const outputPath = path.join(outputDir, `${filename}.html`);

    if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
    }

    try {
        fs.writeFileSync(outputPath, htmlTemplate);
        console.log(`File created: ${outputPath}`);
    } catch (error) {
        console.error(`An error occurred: ${error.message}`);
    }
    
}


function processDirectory(directoryPath) {
    const items = fs.readdirSync(directoryPath);
    
    items.forEach(item => {
        const itemPath = path.join(directoryPath, item);
        
        const stats = fs.statSync(itemPath);
        
        if (stats.isDirectory()) {
            processDirectory(itemPath);
        } else if (stats.isFile() && path.extname(itemPath) === '.md') {
            convertFile(itemPath);
        }
    });
}

processDirectory('md');
