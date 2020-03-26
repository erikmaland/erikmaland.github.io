import '../view/BhaBuilderView.dart';

///Abstract class for a view to which it is possible to navigate.
abstract class Navigatable with BhaBuilderView {
  /// Get name that should be displayed in the field of the navigation bar
  /// which can be clicked to display the view.
  String getNavigationMenuDisplayName();

  /// Get relative URL for the view
  String getRelativeUrl();
}