/*
* Ajax Control Toolkit Autocomplete plug-in 0.1.0
*
* Copyright (c) 2011 Christian Wenz
*
* Dual licensed under the MIT and GPL licenses:
*   http://www.opensource.org/licenses/mit-license.php
*   http://www.gnu.org/licenses/gpl.html
*/

(function ($) {
    $.fn.actAutocomplete = function (options) {
        var settings = {
            // maximum number of elements to return from the service
            count: 10
        };
        if (options) {
            $.extend(settings, options);
        }

        return this.each(function () {
            if (settings.servicePath && settings.serviceMethod) {
                $(this).autocomplete({
                    source: function (request, response) {
                        var term = request.term;
                        $.ajaxSettings.contentType = "application/json";
                        $.ajax({
                            type: "POST",
                            url: settings.servicePath + "/" + settings.serviceMethod,
                            data: JSON.stringify({ prefixText: term, count: settings.count }),
                            format: "json",
                            contentType: "application/json; charset=utf-8",
                            success: function (result) {
                                response.apply(this, [result.d]);
                            }
                        });
                    }
                });
            } else {
                throw "You need to set the servicePath and serviceMethod options!";
            }
        });
    }
})(jQuery);