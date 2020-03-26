import 'dart:html';

import '../controller/EventHandler.dart';
import '../navigation/Navigatable.dart';

class SaveView implements Navigatable {

  final EventHandler _eventHandler;

  SaveView(this._eventHandler);

  // ***** Implemented interface methods ***** //

  @override
  Element getMainElement() {
    return Element.div()
      ..innerHtml = 'Save items from cart: '
      ..children.add(
          ButtonElement()
              ..innerHtml = 'Download cart'
              ..onClick.listen((event) {
                var fileContent = _eventHandler.textFileSaved();
                AnchorElement(href: 'data:text/plain;charset=utf-8, $fileContent')
                  ..setAttribute('download', 'cart.json')
                  ..click();
              })
      );
  }

  @override
  String getNavigationMenuDisplayName() {
    return getName();
  }

  @override
  String getRelativeUrl() {
    return '#save';
  }

  @override
  String getName() {
    return 'Save';
  }

}