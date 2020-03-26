/// Class for tubular segment; that is a cone uniquely defined by its
/// lower and upper diameter and length.
class TubularSegment {
  final double _lowerDiameter, _upperDiameter, _length;

  TubularSegment.fromJson(Map<String, dynamic> json) :
      _lowerDiameter = json['radius1'],
      _upperDiameter = json['radius2'],
      _length = json['length'];

  Map<String, dynamic> toJson() =>
      {'radius1': _lowerDiameter, 'radius2': _upperDiameter, 'length': _length};

  String toHtml() {
    return '<b>Lower Diameter<b>: $_lowerDiameter, '
        '<b>Upper Diameter<b>: $_upperDiameter, '
        '<b>Length<b>: $_length';
  }
}