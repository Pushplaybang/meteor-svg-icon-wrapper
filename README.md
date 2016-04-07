# svg wrapper
conveninece template wrapper for SVGs

## Install
Simple install the package via atmosphere

```sh
meteor add pushplaybang:svg-wrapper
```



## Usage

This package includes a simple blaze template called `svgWrap` that provides a configurable svg wrapper, for embedding svgs in your html templates, without loosing modularity. include it like this:

```html
{{> svgWrap inner="hamburger" fill="#fff" }}
```

## options
These are all optional paramaters for the template, 

* inner (no default)
* class (defaults to an empty string)
* width (defaults to 24)
* height (defaults to 24)
* viewBox (defaults to '0 0 24 24')
* fill (defaults to #222)

## What it the tempalte does

```html
<svg class="" fill="#ffffff" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
    //... your template included here
</svg>
```

## Creating templates to include with this
I generally create an icons.html file with templates, they should only include the inside of the svg you would like to include, like the following:

```html
<template name="hamburger">
  <path d="M0 0h24v24H0z" fill="none"/>
  <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>
</template>
```


Why use this over an icon font? : https://github.com/blog/2112-delivering-octicons-with-svg



### Contributions and Suggestions Welcome!
Have something you think this needs or could use as an improvement, let me know.  add [an issue on github]() or fork and create a pull request.



____



### License [MIT](https://opensource.org/licenses/MIT)
Copyright (c) 2015 Paul van Zyl

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
