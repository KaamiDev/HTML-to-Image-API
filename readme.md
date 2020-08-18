# HTML to Image
API to convert HTML and CSS code into a lossless image using Node.js with puppeteer and a headless chromium browser.

### How it works
1. HTML and CSS data is substituted into a html template.
1. That template is then opened via a headless browser on the server.
1. A screenshot it taken of the page.
1. Screenshot is converted into a base64 image that is sent as a response.

### GET: `/render`
Sample Request:

```
{
    "html": "<h1>Hello!</h1>"
    "css": "h1 { color: blue; }"
}
```
Sample Response:
```
{
    "image": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAlCAYAAAAnQjt6AAAAAXNSR0..."
}
```