vimiumize
=========

Make your webpage hotkey-friendly with this small JavaScript snippet

### What does it do
It makes you able to click certain links on your webpage without having to click them, but by clicking ESC followed by a letter or number. You can see how it works on [the github pages](tomfa.github.io/vimiumize/) by clicking ESC.

### Why would I want this?
So you can navigate your webpage in a more comfortable way.

### How do I use it?

Include vimiumize.js and vimiumize.css to your page, and then put class=vimiumize-letter or class=vimiumize-number on a div or nav containing links.

### Wow, the labels are totally off position.

Yes, indeed. Since webpages usually are different from each other, you'll have to style them so they fit your page. Adjusting left and top in the vimiumize.css file should probably be sufficient.

### How do I choose which links should be labeled?

All links within an element with the class  ```vimiumize-letter``` or ```vimiumize-number``` will be used.

```
<div class="vimiumize-letter">
    <ul>
        <li><a href="">Home</a></li>
        <li><a href="">Products</a></li>
        <li><a href="">Contact</a></li>
        <li><a href="">HPC</a></li>
    </ul>
</div>
```                
The example above would work straight out of the box

### How does it decide which labels to use?

For vimiumize-number, it goes from 1 to 9. Links after that are simply ignored. 

For vimiumize-letters, it uses the letters in the link name. If the first letter it attempts to use the second letter and so forth. If all letters the link contains are used, it takes the first unused letter in the alphabet. So for the example above, the first link would've had the labels 'h', then 'p', 'c', and 'a' for the last one.

### I found a bug or have a suggestion for improvement

Great stuff. Why don't you post them on the [issues page](https://github.com/tomfa/vimiumize/issues)?
