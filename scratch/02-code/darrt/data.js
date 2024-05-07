// ****************************************
// data elements for to-do
// properties, requireds, and enums
// 2024-05-01 : mamund
// ****************************************

// this service's message properties
exports.props = [
  'id',
  'title',
  'status',
  'dateDue'
];

// required properties
exports.reqd = ['id','title','status'];

// enumerated properties
exports.enums = [
  {status:['pending','working','completed']}
];

