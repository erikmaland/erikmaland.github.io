import 'dart:html';

import '../navigation/Navigatable.dart';

class HomeView implements Navigatable {

  // ***** Implemented interface methods ***** //

  @override
  Element getMainElement() {
    return Element.div()
      ..innerHtml = '<h2>Welcome to the BHA Builder!</h2>';
  }

  @override
  String getNavigationMenuDisplayName() {
    return getName();
  }

  @override
  String getRelativeUrl() {
    return '#';
  }

  @override
  String getName() {
    return 'Home';
  }
}