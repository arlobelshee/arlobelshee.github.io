module.exports.register = function (Handlebars, opt, params) {
	'use strict';

	var pretty_print = function (obj) {
		var to_string = Object.prototype.toString,
			new_line = "<br>", space = "&nbsp;", tab = 2,
			buffer = "",
			//Second argument is indent
			indent = arguments[1] || 0,
			//For better performance, Cache indentStr for a given indent.
			indent_str = (function (n) {
				var str = "";
				while (n--) {
					str += space;
				}
				return str;
			})(indent);

		if (!obj || (typeof obj !== "object" && typeof obj !== "function")) {
			//any non-object ( Boolean, String, Number), null, undefined, NaN
			buffer += obj;
		} else if (to_string.call(obj) === "[object Date]") {
			buffer += "[Date] " + obj;
		} else if (to_string.call(obj) === "[object RegExp") {
			buffer += "[RegExp] " + obj;
		} else if (to_string.call(obj) === "[object Function]") {
			buffer += "[Function] " + obj;
		} else if (to_string.call(obj) === "[object Array]") {
			var idx = 0, len = obj.length;
			buffer += "[" + new_line;
			while (idx < len) {
				buffer += [
					indent_str, idx, ": ",
					pretty_print(obj[idx], indent + tab)
				].join("");
				buffer += "<br>";
				idx++;
			}
			buffer += indent_str + "]";
		} else { //Handle Object
			var prop;
			buffer += "{" + new_line;
			for (prop in obj) {
				buffer += [
					indent_str, prop, ": ",
					(indent > 0) ? "{...}" : pretty_print(obj[prop], indent + tab)
				].join("");
				buffer += new_line;
			}
			buffer += indent_str + "}";
		}

		return buffer;
	};

	Handlebars.registerHelper('pretty_print', pretty_print);
};