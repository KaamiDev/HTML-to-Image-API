# HTML to Image
API to convert HTML and CSS code into a lossless png image using Node.js with puppeteer and a headless chromium browser.

### How it works
1. HTML and CSS data is substituted into an html page template.
1. That template is then opened via a headless browser on the server.
1. A screenshot it taken of the html page.
1. The screenshot is converted into a base64 image that is sent as a response.

### POST: `/render`
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