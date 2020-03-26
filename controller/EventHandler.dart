import '../domain/TubularSegment.dart';

/// Class for handling events.
abstract class EventHandler {

  /// Event for attempting to log in to the application.
  void loginAttempt(String user, String password);

  /// Fetch global containers from Tools.
  void fetchGlobalContainers();

  /// Event triggered when a file is uploaded to the app.
  void fileUploaded(Map<String, dynamic> uploadedJson);

  /// Event triggered when a text file is saved.
  ///
  /// Returns the contents of the saved file.
  String textFileSaved();

  /// Event triggered when an item is added to the cart.
  void itemAddedToCart(TubularSegment tubularSegment);

  /// View changed.
  void viewChanged(String newView);

  /// Log out of the application.
  void logOut();
}