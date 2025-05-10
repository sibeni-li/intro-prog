# Introduction to CSS

CSS (Cascading Style Sheets) is a style sheet language used to describe the presentation of a document written in HTML. While HTML provides the structure and content of a web page, CSS controls its appearance, layout, and visual formatting.

## CSS Basics

### How CSS Works

CSS works by selecting HTML elements and applying styles to them:

```css
selector {
    property: value;
    property: value;
}
```

- **Selector**: Targets the HTML element(s) to style
- **Property**: The aspect you want to change (color, font, size, etc.)
- **Value**: The specific setting for the property
- **Declaration**: A property-value pair
- **Declaration block**: All declarations inside the curly braces

Example:
```css
p {
    color: blue;
    font-size: 16px;
}
```
This makes all paragraph text blue and 16 pixels in size.

### Adding CSS to HTML

There are three ways to include CSS in your HTML document:

#### 1. Inline CSS
Applied directly to an element using the `style` attribute:

```html
<p style="color: blue; font-size: 16px;">This is blue text.</p>
```

#### 2. Internal CSS
Placed in the `<head>` section of an HTML document inside `<style>` tags:

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

#### 3. External CSS (Recommended)
Stored in a separate `.css` file and linked to the HTML document:

```html
<head>
    <link rel="stylesheet" href="styles.css">
</head>
```

Where `styles.css` might contain:
```css
p {
    color: blue;
    font-size: 16px;
}
```

External CSS is preferred because it:
- Separates content from presentation
- Improves maintainability
- Allows one stylesheet to control multiple pages
- Takes advantage of browser caching

## CSS Selectors

Selectors determine which elements will be styled.

### Basic Selectors

```css
/* Element selector */
p {
    color: blue;
}

/* Class selector */
.highlight {
    background-color: yellow;
}

/* ID selector */
#header {
    font-size: 24px;
}

/* Universal selector */
* {
    margin: 0;
    padding: 0;
}
```

### Combinators

```css
/* Descendant selector (spaces) */
article p {
    font-style: italic;
}

/* Child selector (>) */
section > p {
    font-weight: bold;
}

/* Adjacent sibling selector (+) */
h2 + p {
    margin-top: 20px;
}

/* General sibling selector (~) */
h2 ~ p {
    color: gray;
}
```

### Attribute Selectors

```css
/* Elements with specific attribute */
input[type="text"] {
    border: 1px solid gray;
}

/* Attribute containing specific value */
a[href*="example"] {
    color: green;
}

/* Attribute beginning with specific value */
a[href^="https"] {
    font-weight: bold;
}

/* Attribute ending with specific value */
a[href$=".pdf"] {
    background-image: url('pdf-icon.png');
}
```

### Pseudo-classes and Pseudo-elements

Pseudo-classes select elements based on state or position:

```css
/* Link states */
a:link { color: blue; }
a:visited { color: purple; }
a:hover { color: red; }
a:active { color: green; }

/* Structural pseudo-classes */
li:first-child { font-weight: bold; }
li:last-child { border-bottom: none; }
li:nth-child(odd) { background-color: #f2f2f2; }
```

Pseudo-elements target specific parts of elements:

```css
/* First letter/line */
p::first-letter { font-size: 200%; }
p::first-line { font-variant: small-caps; }

/* Before/after content */
h2::before { content: "→ "; }
h2::after { content: " ←"; }

/* Selection highlighting */
::selection { background-color: yellow; }
```

## CSS Properties

### Text Styling

```css
p {
    color: #333333;              /* Text color */
    font-family: Arial, sans-serif; /* Font family */
    font-size: 16px;             /* Font size */
    font-weight: bold;           /* Font weight: normal, bold, 100-900 */
    font-style: italic;          /* Font style: normal, italic, oblique */
    text-align: center;          /* Text alignment: left, right, center, justify */
    text-decoration: underline;  /* Text decoration: none, underline, line-through */
    text-transform: uppercase;   /* Text case: none, uppercase, lowercase, capitalize */
    line-height: 1.5;            /* Line height */
    letter-spacing: 1px;         /* Space between letters */
    word-spacing: 2px;           /* Space between words */
}
```

### Box Model

Every element in CSS is represented as a rectangular box:

```css
div {
    width: 300px;             /* Content width */
    height: 200px;            /* Content height */
    
    padding: 20px;            /* Space inside the border */
    border: 2px solid black;  /* Border */
    margin: 10px;             /* Space outside the border */
    
    /* Individual sides can be set separately */
    padding-top: 10px;
    border-bottom: 1px dashed gray;
    margin-left: 15px;
}
```

Box sizing property changes how width and height are calculated:
```css
* {
    box-sizing: border-box;  /* Width/height includes padding and border */
}
```

This box-sizing: border-box declaration is commonly added to universal selectors in modern CSS resets as it creates more predictable layouts. With this setting, the specified width and height of an element include the padding and border, not just the content area.

### Background Properties

```css
div {
    background-color: #f0f0f0;
    background-image: url('image.jpg');
    background-repeat: no-repeat;  /* repeat, repeat-x, repeat-y, no-repeat */
    background-position: center;   /* top, right, bottom, left, center, or x% y% */
    background-size: cover;        /* auto, cover, contain, or width/height values */
    background-attachment: fixed;  /* scroll, fixed, local */
    
    /* Shorthand */
    background: #f0f0f0 url('image.jpg') no-repeat center/cover fixed;
}
```

### Display and Positioning

```css
/* Display property */
div {
    display: block;         /* block, inline, inline-block, flex, grid, none */
}

/* Position property */
div {
    position: relative;     /* static, relative, absolute, fixed, sticky */
    top: 10px;
    right: 20px;
    bottom: 10px;
    left: 20px;
    z-index: 1;             /* Controls stacking order */
}

/* Float property */
img {
    float: left;            /* left, right, none */
    clear: both;            /* left, right, both, none */
}
```

## Flexbox

Flexbox is a one-dimensional layout method for arranging items in rows or columns:

```css
/* Container */
.flex-container {
    display: flex;
    flex-direction: row;        /* row, row-reverse, column, column-reverse */
    flex-wrap: wrap;            /* nowrap, wrap, wrap-reverse */
    justify-content: center;    /* flex-start, flex-end, center, space-between, space-around */
    align-items: center;        /* flex-start, flex-end, center, stretch, baseline */
    gap: 10px;                  /* Space between flex items */
}

/* Items */
.flex-item {
    flex-grow: 1;               /* How much item can grow relative to others */
    flex-shrink: 1;             /* How much item can shrink relative to others */
    flex-basis: auto;           /* Initial size before growing/shrinking */
    
    /* Shorthand */
    flex: 1 1 auto;             /* grow shrink basis */
    
    align-self: flex-end;       /* Override align-items for specific item */
    order: 2;                   /* Control order of items */
}
```

## CSS Grid

Grid is a two-dimensional layout system for complex layouts:

```css
/* Container */
.grid-container {
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;          /* Three columns with different fractions */
    grid-template-rows: 100px auto 100px;        /* Three rows with different heights */
    grid-gap: 10px;                              /* Gap between grid cells */
    
    /* Named grid areas */
    grid-template-areas:
        "header header header"
        "sidebar content content"
        "footer footer footer";
}

/* Items */
.header { grid-area: header; }
.sidebar { grid-area: sidebar; }
.content { grid-area: content; }
.footer { grid-area: footer; }

/* Placing items by grid lines */
.item {
    grid-column: 1 / 3;      /* Start at line 1, end at line 3 */
    grid-row: 2 / 4;         /* Start at line 2, end at line 4 */
}
```

## Responsive Design

Responsive design ensures your website looks good on all devices.

### Media Queries

```css
/* Apply styles only for screens with max width of 768px */
@media screen and (max-width: 768px) {
    body {
        font-size: 14px;
    }
    
    .container {
        width: 100%;
    }
}

/* Apply styles only for screens with min width of 1200px */
@media screen and (min-width: 1200px) {
    .container {
        max-width: 1140px;
        margin: 0 auto;
    }
}
```

Mobile-First Approach: Start designing for mobile devices first, then progressively enhance for larger screens. This approach is more efficient as it's easier to adapt mobile designs to desktop than vice versa.

```css
/* Base styles for mobile devices first */
body {
    font-size: 16px;
}
.container {
    width: 100%;
    padding: 0 15px;
}

/* Then enhance for larger screens */
@media screen and (min-width: 768px) {
    .container {
        width: 750px;
        margin: 0 auto;
        padding: 0;
    }
}

@media screen and (min-width: 1200px) {
    .container {
        width: 1140px;
    }
}
```

### Responsive Units

```css
div {
    /* Relative to parent element's font-size */
    width: 10em;
    
    /* Relative to root element's font-size */
    margin: 2rem;
    
    /* Relative to viewport width/height */
    font-size: 2vw;
    height: 50vh;
    
    /* Percentage of parent element */
    max-width: 80%;
}
```

## CSS Custom Properties (Variables)

CSS custom properties (also known as CSS variables) allow you to store specific values to reuse throughout your stylesheet:

```css
/* Declaring variables in the root scope */
:root {
    --primary-color: #3498db;
    --secondary-color: #2ecc71;
    --base-font-size: 16px;
    --heading-font-family: 'Montserrat', sans-serif;
    --body-font-family: 'Open Sans', sans-serif;
}

/* Using the variables */
h1 {
    color: var(--primary-color);
    font-family: var(--heading-font-family);
    font-size: calc(var(--base-font-size) * 2);
}

p {
    color: var(--secondary-color);
    font-family: var(--body-font-family);
    font-size: var(--base-font-size);
}

/* Variables can be scoped to specific elements */
.alert {
    --alert-color: #e74c3c;
    background-color: var(--alert-color);
    color: white;
}

/* Variables can be changed in media queries for responsive design */
@media (prefers-color-scheme: dark) {
    :root {
        --primary-color: #74b9ff;
        --secondary-color: #55efc4;
    }
}
```

Custom properties make your CSS more maintainable and allow for dynamic styling with JavaScript.

## CSS Preprocessors

CSS preprocessors extend CSS with variables, nesting, functions, mixins, and more:

- **Sass/SCSS**: Most mature and widely used
- **Less**: Similar to Sass with different syntax
- **Stylus**: Minimalist syntax with powerful features

Example (SCSS syntax):
```scss
$primary-color: #3498db;
$padding: 15px;

.container {
    max-width: 1200px;
    margin: 0 auto;
    
    .header {
        background-color: $primary-color;
        padding: $padding;
        
        h1 {
            color: white;
            
            &:hover {
                text-decoration: underline;
            }
        }
    }
}
```

## CSS Frameworks

CSS frameworks provide pre-written CSS code for common components and layouts:

- **Bootstrap**: Popular framework with extensive components
- **Tailwind CSS**: Utility-first approach
- **Bulma**: Modern framework with a clean syntax
- **Foundation**: Enterprise-grade framework

## Best Practices

1. **Use a CSS reset or normalize.css** to maintain consistency across browsers
2. **Follow a naming convention** (like BEM: Block, Element, Modifier)
3. **Organize your CSS** with comments and logical grouping
4. **Minimize specificity** to avoid difficult overrides
5. **Use shorthand properties** where appropriate
6. **Avoid !important** unless absolutely necessary
7. **Optimize for performance** by reducing redundant rules
8. **Keep responsive design in mind** from the beginning
9. **Use developer tools** to debug and test CSS
10. **Document your CSS** for other developers

## Tools for CSS Development

- **Browser developer tools** for inspecting and testing CSS
- **CSS validators** like the W3C CSS Validation Service
- **Visual Studio Code** with CSS extensions
- **CSS preprocessor compilers** (Sass, Less, etc.)
- **Online tools** like CodePen, CSS Grid Generator, Flexbox Froggy (learning game)

CSS is a powerful language that allows you to create beautiful, responsive designs. While it may seem simple at first, mastering CSS can take time. The key is to practice regularly and build projects that challenge your skills.
