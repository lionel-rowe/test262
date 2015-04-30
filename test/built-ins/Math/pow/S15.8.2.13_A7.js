// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: If abs(x)==1 and y is +Infinity, Math.pow(x,y) is NaN
es5id: 15.8.2.13_A7
description: >
    Checking if Math.pow(x,y) is NaN, where abs(x)==1 and y is
    +Infinity
includes: [$FAIL.js]
---*/

// CHECK#1

var y = +Infinity;
var x = new Array();
x[0] = -1;
x[1] = 1
var xnum = 2;

for (var i = 0; i < xnum; i++)
{
	if (!isNaN(Math.pow(x[i],y)))
	{
		$FAIL("#1: isNaN(Math.pow(" + x[i] + ", " + y + ")) === false");
	}
}
