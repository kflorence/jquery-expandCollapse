# jQuery.expandCollapse

    $('body:not(#portfolio) ul.subnav').expandCollapse({
        updateText: false,
        updateClass: false,
        startHidden: true,
        expandAnimation: {
          properties: { height: "show" },
          options: { duration: "fast" }
        },
        collapseAnimation: {
          properties: { height: "hide" },
          options: { duration: "slow" }
        }
    });

The jQuery.expandCollapse plugin automatically attaches to any jQuery object and binds a click event to that object's "trigger" element that will expand or collapse the element upon clicking. There are plenty of options to keep usage flexible.

## Options

    {
      updateText: true,
      updateClass: true,
      startHidden: false,
      triggerElement: ".trigger",
      expandClass: "expand",
      collapseClass: "collapse",
      textElement: ".trigger",
      expandText: "expand",
      collapseText: "collapse",
      expandAnimation: {
        properties: { height : "show" },
        options: { duration: 0 }
      },
      collapseAnimation: {
        properties: { height : "hide" },
        options: { duration: 0 },
      }
    }

* **updateText** _Boolean_
  whether or not to update the trigger element's text on click (uses the values from expandText and collapseText).
* **updateClass** _Boolean_
  whether or not to update the trigger element's class on click (uses the values from expandClass and collapseClass).
* **startHidden** _Boolean_
  whether or not to automatically hide any matched elements. This is useful for graceful degrading, in case the user has javaScript turned off and you still want your toggled elements to show up.
* **triggerTag** _String_
  An HTML string representing the kind of element to use as the trigger element (if triggerElement was not given).
* **triggerElement** _String, jQuery_
  The element to use as the trigger element. If not given, one will be created for you.
* **expandClass** _String_
  The name of the class to apply to the trigger element when the target is hidden.
* **collapseClass** _String_
  The name of the class to apply to the trigger element when the target is visible.
* **textElement** _String, jQuery_
  The element that contains the text we will be changing on expand and collapse.
* **expandText** _String_
  The text to display when the target element is hidden.
* **collapseText** _String_
  The text to display when the target element is visible.
* **expandAnimation** _Object_
  An object containing settings for jQuery's [.animate()](http://api.jquery.com/animate/) that will be used when expanding.
* **collapseAnimation** _Object_
  An object containing settings for jQuery's [.animate()](http://api.jquery.com/animate/) that will be used when collapsing.

## Requirements

jQuery.expandCollapse requires:

* jQuery version 1.1.0+

## Compatibility

As far as I know this works cross-browser and cross-platform.

## License

Copyright (C) 2011 Kyle Florence  
Dual licensed under the MIT and BSD licenses.
