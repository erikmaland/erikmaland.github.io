import 'dart:html';

/// Mixin implying View functionality
mixin BhaBuilderView {
  /// View name
  String getName();

  /// Get main element of view
  Element getMainElement();
}