import 'dart:html';

import 'controller/AppController.dart';

AppController _controller;
AppController get controller => _controller;

void main() {
  // Retrieve the main div of index-file.
  var mainUiContainer = querySelector('#main');

  // Create controller with this main element.
  _controller = AppController(mainUiContainer);
  _controller.initializeState();

  // Build UI.
  _controller.buildUi();
}
