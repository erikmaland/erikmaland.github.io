import 'dart:convert';
import 'dart:html';

/// Utility class for JSON operations
class JsonUtils {

  static bool isJsonValid(String json) {
    try {
      jsonDecode(json);
    }
    on FormatException catch(e) {
      return false;
    }
    return true;
  }

  /// Convert JSON to navigatable HTML.
  ///
  /// Some callers might need to modify the HTML to suit their needs. The
  /// function argument [transformer] does this; it is called on every element
  /// before it is inserted into the tree. Note that the method guarantees that
  /// the function is called when the element is fully constructed, that is, the
  /// subtree under the element is constructed when the method is called.
  ///
  /// The function returns the root node of this HTML.
  // We ignore missing return, analyzer doesn't seem to tackle recursive
  // functions in this case.
  // ignore: missing_return
  Element toHtml(Map<String, dynamic> json, {Element Function(Element) transformer}) {
    var rootElement = Element.div();
    JsonUtils.getJsonAsDiv(json, rootElement, ' ');
    return rootElement;

    /*transformer ??= (element) => element;
    _data.forEach((key, value) {
      if (value == null) {
        return transformer.call(
            Element.div()
              ..innerHtml = '$key: null,'
              ..setAttribute('class', 'json-primitive')
        );
      }
      else if (value is String) {
        return transformer.call(
            Element.div()
              ..innerHtml = '$key: "$value",'
              ..setAttribute('class', 'json-primitive')
        );
      }
      else if (value is int || value is double || value is bool) {
        return transformer.call(
            Element.div()
              ..innerHtml = '$key: ${value.toString()},'
              ..setAttribute('class', 'json-primitive')
        );
      }
      else if (value is List) {
        var list = transformer.call(
            UListElement()
              ..setAttribute('class', 'json-array')
        );
        value.forEach((element) {
          list.children.add(
            transformer.call(
              Element.tag('<li>')
                ..setAttribute('class', 'json-array-element')
                ..children.add(get(key).toHtml(transformer: transformer))
            )
          );
        });
        return list;
      }
      else if (value is Map) {
        var contentElement = Element.div()
          ..setAttribute('class', 'invisible json-object');
        var buttonElement = Element.div()
          ..children.add(
              ButtonElement()
                ..innerHtml = '+'
                ..setAttribute('class', 'object-toggle-button')
            )
          ..children.add(
              LabelElement()
                ..text = key + ' : '
                ..setAttribute('class', 'json-label')
        );

        return Element.div()
            ..children.add(contentElement)
            ..children.add(buttonElement)
            /*..children.add(transformer.call(
                get(key).toHtml(transformer: transformer))
            )*/;
      }
      // We have encountered an unknown type, abort mission!
      throw Exception('Value $value has unknown type ${value.runtimeType}!');
    }); */
  }

  static void getJsonAsDiv(dynamic decodedJson, Element rootElement,
      String runningTab, [Function(Element) transformer]) {
    if (decodedJson == null) {
      rootElement
        ..innerHtml += 'null,'
        ..setAttribute('class', 'json-primitive')
      ;
      transformer?.call(rootElement);
    }
    else if (decodedJson is String) {
      rootElement
        ..innerHtml += '"$decodedJson",'
        ..setAttribute('class', 'json-primitive'
        );
      transformer?.call(rootElement);
    }
    else if (decodedJson is int || decodedJson is double || decodedJson is bool) {
      rootElement
        ..innerHtml += decodedJson.toString() + ','
        ..setAttribute('class', 'json-primitive'
        );
      transformer?.call(rootElement);
    }
    else if (decodedJson is List) {
      var list = UListElement();
      rootElement.children.add(list);
      decodedJson.forEach((element) {
        var listElement = Element.tag('li')..setAttribute('class', 'json-array');
        list.children.add(listElement);
        getJsonAsDiv(element, listElement, runningTab);
      });
      transformer?.call(rootElement);
    }
    else if (decodedJson is Map) {
      decodedJson.forEach((key, value) {
        var newRootElement = Element.div();
        var infoElement = Element.div();
        if (value is Map) {
          newRootElement
            ..setAttribute('class', 'invisible json-object');
          var collapseButton = ButtonElement();
          infoElement.children.add(
              collapseButton
                ..innerHtml = '+'
                ..setAttribute('class', 'object-toggle-button')
                ..onClick.listen((event) {
                  newRootElement.classes.toggle('invisible');
                  if (newRootElement.classes.contains('invisible')) {
                    collapseButton.innerHtml = '+';
                  }
                  else {
                    collapseButton.innerHtml = '-';
                  }
                })
          );
          infoElement.children
            ..add(LabelElement()
              ..text = key + ' : '
              ..setAttribute('class', 'json-label')
            );

          rootElement.children.add(infoElement);
        }
        else if (value is List) {
          newRootElement
            ..setAttribute('class', 'invisible json-array');
          var collapseButton = ButtonElement();
          infoElement.children.add(
              collapseButton
                ..innerHtml = 'ᐁ'
                ..setAttribute('class', 'array-toggle-button')
                ..onClick.listen((event) {
                  newRootElement.classes.toggle('invisible');
                  if (newRootElement.classes.contains('invisible')) {
                    collapseButton.innerHtml = 'ᐁ';
                  }
                  else {
                    collapseButton.innerHtml = 'ᐃ';
                  }
                })
          );
          infoElement.children
            ..add(LabelElement()
              ..text = key + ' : '
              ..setAttribute('class', 'json-label')
            );

          rootElement.children.add(infoElement);
        }
        else {
          newRootElement
            ..setAttribute('class', 'json-primitive')
            ..innerHtml = '$key : ';
        }

        rootElement.children.add(newRootElement);

        runningTab += '        ';
        getJsonAsDiv(value, newRootElement, runningTab);
        runningTab = runningTab.substring(0, runningTab.length - 4);
        transformer?.call(rootElement);
      });
    }
  }
}