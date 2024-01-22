// Copyright (C) 2024 Kevin Gibbons. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-uint8array.frombase64into
description: Uint8Array.fromBase64Into takes into account the offset of the target Uint8Array
includes: [compareArray.js]
features: [uint8array-base64]
---*/

var base = new Uint8Array([255, 255, 255, 255, 255, 255, 255]);
var subarray = base.subarray(2, 5);

var result = Uint8Array.fromBase64Into('Zm9vYmFy', subarray);
assert.sameValue(result.read, 4);
assert.sameValue(result.written, 3);
assert.compareArray(subarray, [102, 111, 111]);
assert.compareArray(base, [255, 255, 102, 111, 111, 255, 255]);
