# How Does A Browser Works!!

1. <strong>What is the main functionality of the browser?</strong>
<p>The primary function of a web browser is to render HTML, the code used to design or "mark up" webpages. Each time a browser loads a web page, it processes the HTML, which may include text, links, and references to images and other items, such as cascading style sheets and JavaScript functions. The browser processes these items, then renders them in the browser window.</p>

<img src="https://github.com/pesto-students/p2-vaibhav-prananshup/blob/week1-excercise-1.2-browser/Week-1/Excercise%201.2-%20Browser/resource/images/how%20browser%20works.JPG">

2. <strong>High Level Components of a browser</strong>
<p>Primary components of a browser are</p>

<p>User Interface – This consists of forward and back button, bookmarks, address bar etc. along with the window that displays the requested page.</p>
<p>Browser engine – It commands action between rendering engine and the user interface.</p>
<p>Rendering engine – The main function of rendering engine is to display the content that is requested. For example, if an HTML content is requested, the engine parses CSS and HTML and when the content is parsed, it is displayed on the screen.</p>

<img src="https://github.com/pesto-students/p2-vaibhav-prananshup/blob/week1-excercise-1.2-browser/Week-1/Excercise%201.2-%20Browser/resource/images/web%20browser%20components.JPG">

3. <strong>Rendering engine and its use.</strong>
<p>When a web page is loaded, the browser first reads the HTML text and constructs DOM Tree from it. Then it processes the CSS whether that is inline, embedded, or external CSS and constructs the CSSOM Tree from it. After these trees are constructed, then it constructs the Render-Tree from it. Once the Render-Tree is constructed, then the browser starts the printing individual elements on the screen.</p>

4. <strong>Parsers (HTML, CSS, etc)</strong>
<p>Parsing is the process of reading HTML content and constructing a DOM tree from it. Hence the process is also called DOM parsing and the program that does that is called the DOM parser.</p>
<p>HTML Parser - The job of the HTML parser is to parse the HTML markup into a parse tree.</p>
<p>Similar to HTML parsing, CSS parsing also starts by tokenizing the CSS source code into tokens, which are then parsed into CSS rules.</p>

5. <strong>Tree construction</strong>
<p>When the browser reads HTML code, whenever it encounters an HTML element like <code>html</code>, <code>body</code>, <code>div</code> etc., it creates a JavaScript object called a Node. Eventually, all HTML elements will be converted to JavaScript objects.</p>
<p>A DOM tree starts from the topmost element which is html element and branches out as per the occurrence and nesting of HTML elements in the document. Whenever an HTML element is found, it creates a DOM node (Node) object from its respective class (constructor function).</p>
<p>A DOM node doesn’t always have to be an HTML element. When the browser creates a DOM tree, it also saves things like comments, attributes, text as separate nodes in the tree. But for the simplicity, we will just consider DOM nodes for HTML elements AKA DOM element.</p>

6. <strong>Order of processing</strong>
<p>Scripts - The model of the web is synchronous. Authors expect scripts to be parsed and executed immediately when the parser reaches a <code>script</code> tag. The parsing of the document halts until the script has been executed. If the script is external then the resource must first be fetched from the network–this is also done synchronously, and parsing halts until the resource is fetched.</p>
<p>Speculative parsing - 
Both WebKit and Firefox do this optimization. While executing scripts, another thread parses the rest of the document and finds out what other resources need to be loaded from the network and loads them. In this way, resources can be loaded on parallel connections and overall speed is improved.</p>
<p>Style sheets - 
Style sheets on the other hand have a different model. Conceptually it seems that since style sheets don't change the DOM tree, there is no reason to wait for them and stop the document parsing.</p>

7. <strong>Layout and Painting</strong>
<ol><li>The DOM and CSSOM trees are combined to form the render tree.</li>
<li>Render tree contains only the nodes required to render the page.</li>
<li>Layout computes the exact position and size of each object.</li>
<li>The last step is paint, which takes in the final render tree and renders the pixels to the screen.</li></ol>

<img src="https://github.com/pesto-students/p2-vaibhav-prananshup/blob/week1-excercise-1.2-browser/Week-1/Excercise%201.2-%20Browser/resource/images/layout%20and%20painting.JPG">