vimiumize
=========

Make your webpage hotkey-friendly with this small JavaScript snippet

### Why would I want this?
So you can navigate your webpage in a more comfortable way.

### How do I use it?

Include vimiumize.js and vimiumize.css to your page, and then put class=vimiumize-letter or class=vimiumize-number on a div or nav containing ul>li>a's.

If that's not the kind of links you would like to hotkey'ize, then change what's being queried by letterlist and numberlist inside vimiumize.js.

### Wow, the labels are totally off position.

Yes, indeed. Since webpages usually are different from each other, you'll have to style them so they fit your page. Adjusting left and top in the vimiumize.css file should probably be sufficient.

### How do I choose which links should be labeled?

You'll have to query them yourself and store the list as letterlist and numberlist inside the vimiumize.js file. By default the script queries a's inside li's inside ul's inside a div with class vimiumize-letter or/and vimiumize-number, depending on what sort of hotkey you want.
### Can I get an example?

```
<div class="vimiumize-letter">
    <ul>
        <li><a href="">link</a></li>
        <li><a href="">link</a></li>
        <li><a href="">link</a></li>
        <li><a href="">link</a></li>
        <li><a href="">link</a></li>
    </ul>
</div>
```                
The example above would work straight out of the box

### How does it decide which labels to use?

For vimiumize-number, it goes from 1 to 9. Links after that are simply ignored. 

For vimiumize-letters, it uses the letters in the link name. If the first letter it attempts to use the second letter and so forth. If all letters the link contains are used, it takes the first unused letter in the alphabet. So for the example above, the first link would've had the labels 'l', then 'i', 'n', 'k', and 'a' for the last one.

### I found a bug or have a suggestion for improvement

Great stuff. Why don't you post them on the [issues page](https://github.com/tomfa/vimiumize/issues)?
