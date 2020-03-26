import 'dart:html';

import '../controller/EventHandler.dart';
import '../domain/TubularSegment.dart';
import '../navigation/Navigatable.dart';

class ShopView implements Navigatable {

  final EventHandler _eventHandler;

  final List<TubularSegment> _tubularSegments = [];

  ShopView(this._eventHandler);

  // ***** Methods ****** //

  void add(TubularSegment tubularSegment) {
    _tubularSegments.add(tubularSegment);
  }

  // ***** Implemented interface methods ***** //

  @override
  Element getMainElement() {
    return Element.div()
        ..children.add(
          ButtonElement()
              ..setInnerHtml('Fetch Data')
              ..onClick.listen((event) {
                _eventHandler.fetchGlobalContainers();
              })
        );
  }

  @override
  String getNavigationMenuDisplayName() {
    return getName();
  }

  @override
  String getRelativeUrl() {
    return '#shop';
  }

  @override
  String getName() {
    return 'Shop';
  }
}