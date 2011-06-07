/**
 * jQuery ExpandCollapse Plugin
 *
 * @ Version: 1.0.0
 * @ Requires: jQuery 1.1+
 *
 * @ Author: Kyle Florence (kyle[dot]florence[at]gmail[dot]com)
 * @ Update: February 16, 2011
 */

(function($) {
  // Attach expand/collapse functionality to specified jQuery object(s)
  $.fn.expandCollapse = function(options) {
    options = $.extend({}, $.fn.expandCollapse.options, options);

    // Included in the case of multiple jQuery objects
    return this.each(function() {
      var $target = $(this);

      if (options.triggerElement) {
        var hidden = $target.is(":hidden"),
          $trigger = $(options.triggerElement),
          $text = options.textElement ? $(options.textElement) : $trigger;

        if (options.startHidden) {
          $target.hide();
        }

        if (options.updateText) {
          $text.html(hidden ? options.expandText : options.collapseText);
        }

        if (options.updateClass) {
          $trigger.addClass(hidden ? options.expandClass : options.collapseClass);
        }

        $trigger.bind(options.eventType, function(e) {
          var hidden = $target.is(":hidden"),
            animation = hidden ? options.expandAnimation : options.collapseAnimation;

          // Animate target, #3583 - jQuery < 1.4.3
          $target.animate(animation.properties, $.extend({}, animation.options));

          // Update trigger class if updateClass is on
          if (options.updateClass) {
            $trigger.toggleClass(options.expandClass + " " + options.collapseClass);
          }

          // Update text if updateText is on
          if (options.updateText) {
            $text.html(hidden ? options.collapseText : options.expandText);
          }

          // Make sure we don't go anywhere
          return false;
        });
      }
    });
  };

  // Expose default options globally
  $.fn.expandCollapse.options = {
    updateText: true,
    updateClass: true,
    startHidden: false,
    eventType: "click",
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
      options: { duration: 0 }
    }
  };
})(jQuery);
