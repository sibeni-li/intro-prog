# Introduction to HTML

HTML (HyperText Markup Language) is the standard markup language used to create web pages. It forms the backbone of virtually every website on the internet. HTML isn't a programming language, but rather a markup language that defines the structure and content of a web page.

## HTML Basics

### HTML Document Structure

A basic HTML document follows this structure:

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Page Title</title>
</head>
<body>
    <h1>This is a Heading</h1>
    <p>This is a paragraph.</p>
</body>
</html>
```

- `<!DOCTYPE html>`: Declares the document type and HTML version
- `<html>`: The root element of an HTML page
- `<head>`: Contains meta-information about the document
- `<title>`: Specifies the title of the document (shown in browser tab)
- `<body>`: Contains the visible page content

### HTML Elements and Tags

HTML uses "tags" to create elements. Tags are enclosed in angle brackets (`< >`):

- Opening tag: `<tagname>`
- Closing tag: `</tagname>` 
- Content: The information between the opening and closing tags
- Element: The opening tag + content + closing tag

Example: `<h1>This is a heading</h1>`

Some elements are self-closing (empty elements) and don't need a closing tag:
`<img src="image.jpg" alt="Description">`

### Common HTML Elements

#### Headings
HTML offers six levels of headings:

```html
<h1>Heading 1 (largest)</h1>
<h2>Heading 2</h2>
<h3>Heading 3</h3>
<h4>Heading 4</h4>
<h5>Heading 5</h5>
<h6>Heading 6 (smallest)</h6>
```

#### Paragraphs
```html
<p>This is a paragraph.</p>
```

#### Links
```html
<a href="https://www.example.com">Link text</a>
```

#### Images
```html
<img src="image.jpg" alt="Description of image">
```

#### Lists

Unordered list:
```html
<ul>
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
</ul>
```

Ordered list:
```html
<ol>
    <li>First item</li>
    <li>Second item</li>
    <li>Third item</li>
</ol>
```

#### Divs and Spans
Containers for grouping elements:

```html
<div>Block-level container</div>
<span>Inline container</span>
```

### HTML Attributes

Attributes provide additional information about HTML elements:

```html
<tagname attribute="value">Content</tagname>
```

Common attributes:
- `id`: Unique identifier for an element
- `class`: Specifies one or more class names for styling
- `style`: Inline CSS styling
- `src`: Source URL for media elements
- `href`: Hyperlink reference for links
- `alt`: Alternative text for images

Example:
```html
<a href="https://www.example.com" id="main-link" class="button">Visit Example</a>
```

Some attributes don't require values (boolean attributes):

```html
<input type="text" required>
<button disabled>Can't click me</button>
```

## Semantic HTML

Semantic elements clearly describe their meaning to both the browser and the developer:

```html
<header>Header content</header>
<nav>Navigation links</nav>
<main>Main content</main>
<article>Article content</article>
<section>Section content</section>
<aside>Sidebar content</aside>
<footer>Footer content</footer>
```

Using semantic elements improves:
- Accessibility
- SEO
- Code readability
- Browser compatibility

## HTML Forms

Forms allow users to input data:

```html
<form action="/submit" method="post">
    <label for="name">Name:</label>
    <input type="text" id="name" name="name">
    
    <label for="email">Email:</label>
    <input type="email" id="email" name="email">
    
    <input type="submit" value="Submit">
</form>
```

Common form elements:
- `<input>`: Various input types (text, email, password, checkbox, radio, etc.)
- `<textarea>`: Multi-line text input
- `<select>` and `<option>`: Dropdown selection
- `<button>`: Clickable button

The name attribute is crucial for form submission as it identifies the data when sent to the server. Without proper name attributes, your form data won't be correctly processed.

## HTML Tables

Tables for displaying tabular data:

```html
<table>
    <thead>
        <tr>
            <th>Header 1</th>
            <th>Header 2</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Row 1, Cell 1</td>
            <td>Row 1, Cell 2</td>
        </tr>
        <tr>
            <td>Row 2, Cell 1</td>
            <td>Row 2, Cell 2</td>
        </tr>
    </tbody>
</table>
```

## HTML Comments

Comments are not displayed in the browser but help document your code:

```html
<!-- This is a comment -->
```

## HTML Media Elements

HTML5 introduced native support for multimedia:

```html
<!-- Video -->
<video width="320" height="240" controls>
  <source src="movie.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

<!-- Audio -->
<audio controls>
  <source src="sound.mp3" type="audio/mpeg">
  Your browser does not support the audio element.
</audio>

<!-- Canvas for drawing graphics -->
<canvas id="myCanvas" width="200" height="100"></canvas>
```

These elements reduce the need for third-party plugins and provide better integration with web pages.

## HTML and CSS Connection

HTML structures content, while CSS (Cascading Style Sheets) styles it. You can connect CSS to HTML in three ways:

1. Inline styles:
```html
<p style="color: blue; font-size: 16px;">Styled text</p>
```

2. Internal stylesheet:
```html
<head>
    <style>
        p {
            color: blue;
            font-size: 16px;
        }
    </style>
</head>
```

3. External stylesheet:
```html
<head>
    <link rel="stylesheet" href="styles.css">
</head>
```

## Next Steps in Web Development

After learning basic HTML:
1. Learn CSS for styling web pages
2. Learn JavaScript for interactive functionality
3. Explore responsive design techniques
4. Practice building simple websites
5. Learn about accessibility standards

## Tools for HTML Development

- Text editors: Visual Studio Code, Sublime Text, Atom
- Browser developer tools (F12 or right-click > Inspect)
- HTML validators like the W3C Markup Validation Service
- Online code playgrounds: CodePen, JSFiddle, CodeSandbox

Remember that HTML is just the beginning of web development, but it's an essential foundation to master before moving on to more advanced topics.
