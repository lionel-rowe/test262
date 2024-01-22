// Copyright (C) 2024 Kevin Gibbons. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-uint8array.frombase64into
description: Uint8Array.fromBase64Into does not write to or error on detatched buffers
includes: [detachArrayBuffer.js]
features: [uint8array-base64]
---*/

var target = new Uint8Array([255, 255, 255]);
$DETACHBUFFER(target.buffer);
var result = Uint8Array.fromBase64Into('Zg==', target);
assert.sameValue(result.read, 0);
assert.sameValue(result.written, 0);

var getterCalls = 0;
var targetDetachingOptions = {};
Object.defineProperty(targetDetachingOptions, 'alphabet', {
  get: function() {
    getterCalls += 1;
    $DETACHBUFFER(target.buffer);
    return "base64";
  }
});
var target = new Uint8Array([255, 255, 255]);
var result = Uint8Array.fromBase64Into('Zg==', target, targetDetachingOptions);
assert.sameValue(getterCalls, 1);
assert.sameValue(result.read, 0);
assert.sameValue(result.written, 0);
