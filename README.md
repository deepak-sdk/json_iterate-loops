Document - 

JavaScript Document object is an object that provides access to all HTML elements of a document. When an HTML document is loaded into a browser window, 
then it becomes a document object. The document object stores the elements of an HTML document, such as HTML, HEAD, BODY, and other HTML tags as objects.
A document object is a child object of the Window object, which refers to the browser.You can access a document object either using window.document 
property or using object directly.

If we want to create an element, Document Object provides different collection elements, such as anchor and Links which helps you to count the number
of specific elements.The Document Object also provides various properties such as URL, bgcolor, etc. which will allow you to retrieve the details of 
a document and various methods such as open(), close(), write(), getElementById(), getElementByName(), etc. which allow you to perform various 
tasks like opening an HTML document to display output and writing a text on Web Page.

Some of the Document Object Properties -

<script>
		  document.write(document.domain +"<br>")       //returns the domain name of the server from which the document has originated
			document.write(document.lastModified +"<br>") //returns the date on which document was last modified
			document.write(document.documentMode +"<br>") //returns the mode used by the browser to process the document
			document.write(document.title +"<br>")        //returns the name of the HTML document defined between the starting and ending tags of the TITLE element
</script>


Some of the Document Object Methods  - 

<script>
      document.open();                                          // opens an HTML document to display the output
		  document.write("Hello" +"<br>");                          // Writes HTML expressions or JavaScript code into an HTML document
			document.getElementById("demo").innerHTML = "Set by ID";  // returns the reference of first element of an HTML document with the specified id.
</script>


Window - 

The global object of JavaScript in the browser is the window object. It means that all variables and functions declared globally with the var keyword 
become the properties and methods of the window object. For example:

var counter = 1;
var showCounter = () => console.log("counter");
window.showCounter();
console.log(window.counter);

Since the counter variable and the showCounter() function are declared globally with the var keyword, they are automatically added to the window object. 
If you don’t want to pollute the window object, you can use the let keyword to declare variables and functions.

we've used the alert() method in our scripts to show popup messages. This is a method of the window object.


JavaScript Window Screen -

The window.screen object contains information about the user's screen such as resolution (i.e. width and height of the screen), color depth, pixel depth, etc.

Since window object is at the top of the scope chain, so properties of the window.screen object can be accessed without specifying the window. prefix,
for example window.screen.width can be written as screen.width




