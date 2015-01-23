PartialsJS
=========================
PartialsJS is a JavaScript library for creating a partial layouts and master pages for almost web technologies with less a mount of efforts.

###Partials Syntax
header.html
```
<header>
<h1>PartialsJS</h1>
</header>
<hr/>
```
footer.html
```
<footer>
<small>Copyrights ;&copy 2014</small>
</footer>
```
index.html
```
<html>
<head>
	<title>PartialsJS</title>
	<script src="partials.js"></script>
</head>
<body>
	<div data-include="header.html"></div>
	<p>Content goes here ...</p>
	<div data-include="footer.html"></div>
</body>
</html>
```

> **Hint:** data-include: Is a property used to include a partial layout.