# jQuery Bootstrap Dialog

The [bootstrap][] library from twitter is amazing. This is a jquery plugin to create bootstrap dialogs. Its API is very similar to that of jQuery UI dialog. It is still in initial stages, but quite usable. 

## Example

``` javascript
$("<p>Hello Twitter Bootstrap</p>").bootstrap_dialog({
  title: "Twitter Bootstrap Dialog", 
  ok: function(){ $(this).bootstrap_dialog("close"); }
  });
```
![Example](http://i.imgur.com/c5Xzm.png)

[bootstrap]: http://twitter.github.com/bootstrap