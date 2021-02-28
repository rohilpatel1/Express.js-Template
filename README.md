# Express.js Template

## What this package includes
+ Ejs in HTML files
+ RenderFile Function
+ Default ejs templates

## The RenderFile Function

+ Renders html files as ejs
+ Allows for miltiple ejs templates, quickly, and easy

```js
app.get('/', (req, res) => {
  RenderFile(res, 'filename', {
    key: "value" // pass extra data specifically to "/"
  }
}

```

```html
<h1><%= key %></h1> 
<!-- Displays "value" on the website -->
```

## ejsData file

+ Used for passing ejsData to all files in router

```js
ejsData.helloWorld = 'hi';
```

```html
<h1><%= helloWorld %></h1> <!-- Displays "hi" to the website %>
```