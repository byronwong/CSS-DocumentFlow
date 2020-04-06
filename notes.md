Document Flow
=============

This is the way in which elements flow in the document. 
Things that can affect the document flow include the `display` type and the `position` type. 

## Display block vs inline

### Block elements
- Automatically size to take up the full width
- multiple block level items stack, force element after it on to a new line. 
- Also comes with spacing in between elements.
- Also forces inline elements on to a new line. 
- width, height and margin can be applied.
- adding padding to a block element is in the document flow.
- You can nest inline element in a block element.

### Inline elements
- Automatically size to the content they contain.
- multiple inline elements fit side by side and drop to a new line when there is not enough space
- cannot change the width or height, except images.
- margin-top and margin-bottom have no affect, however margin left and right can be changed.
- adding padding to an inline element happens outside of the document flow.
- adding padding to an inline element inside a block element does not force the block element to resize.
- When padding is applied to an inline element within an inline element, left and right padding is respected but top and bottom padding is ignored on the parent.
- Borders can be applied, border left and right spacing are respected, however top and bottom are ignored although rendered.


### Alternative to float (display: inline-block)
- N: this method does leave some space either side (can't be fixed)
```html
    <div class="wrapper">
        <span>Example</span>
        <span>Example</span>
        <span>Example</span>
        <span>Example</span>
    </div>
```
```scss 
    span {
        display: inline-block;
        width:100px;
        vertical-align: top;
    }
```
