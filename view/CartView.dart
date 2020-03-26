import 'dart:html';

import '../domain/TubularSegment.dart';
import '../navigation/Navigatable.dart';

class CartView implements Navigatable {

  Element _mainElement;

  final List<TubularSegment> _cart = [];


  CartView() {
    _mainElement = Element.div();
  }

  List<TubularSegment> get cart => _cart;

  // ***** Methods ****** //

  void addElement(TubularSegment element) {
    _cart.add(element);
  }

  // ***** Implemented interface methods ***** //

  @override
  Element getMainElement() {
    _mainElement.children.clear();
    _cart.forEach((item) =>
        _mainElement.children.add(Element.div()..innerHtml += item.toHtml())
    );
    return _mainElement;
  }

  @override
  String getNavigationMenuDisplayName() {
    return getName();
  }

  @override
  String getRelativeUrl() {
    return '#cart';
  }

  @override
  String getName() {
    return 'Cart';
  }
}