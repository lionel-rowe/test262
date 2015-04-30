// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: >
    Math.atan, recommended that implementations use the approximation
    algorithms for IEEE 754 arithmetic contained in fdlibm
es5id: 15.8.2.4_A6
description: >
    Checking if Math.atan is approximately equals to its mathematical
    values on the set of 64 argument values; all the sample values is
    calculated with LibC
includes:
    - math_precision.js
    - math_isequal.js
---*/

// CHECK#1
var vnum = 64;
var x = new Array();
x[0] = -16.00000000000000000000;
x[1] = -15.49206349206349200000;
x[2] = -14.98412698412698400000;
x[3] = -14.47619047619047600000;
x[4] = -13.96825396825396800000;
x[5] = -13.46031746031746000000;
x[6] = -12.95238095238095300000;
x[7] = -12.44444444444444500000;
x[8] = -11.93650793650793700000;
x[9] = -11.42857142857142900000;
x[10] = -10.92063492063492100000;
x[11] = -10.41269841269841300000;
x[12] = -9.90476190476190510000;
x[13] = -9.39682539682539720000;
x[14] = -8.88888888888888930000;
x[15] = -8.38095238095238140000;
x[16] = -7.87301587301587350000;
x[17] = -7.36507936507936560000;
x[18] = -6.85714285714285770000;
x[19] = -6.34920634920634970000;
x[20] = -5.84126984126984180000;
x[21] = -5.33333333333333390000;
x[22] = -4.82539682539682600000;
x[23] = -4.31746031746031810000;
x[24] = -3.80952380952381020000;
x[25] = -3.30158730158730230000;
x[26] = -2.79365079365079440000;
x[27] = -2.28571428571428650000;
x[28] = -1.77777777777777860000;
x[29] = -1.26984126984127070000;
x[30] = -0.76190476190476275000;
x[31] = -0.25396825396825484000;
x[32] = 0.25396825396825307000;
x[33] = 0.76190476190476275000;
x[34] = 1.26984126984126890000;
x[35] = 1.77777777777777860000;
x[36] = 2.28571428571428470000;
x[37] = 2.79365079365079440000;
x[38] = 3.30158730158730050000;
x[39] = 3.80952380952381020000;
x[40] = 4.31746031746031630000;
x[41] = 4.82539682539682600000;
x[42] = 5.33333333333333210000;
x[43] = 5.84126984126984180000;
x[44] = 6.34920634920634800000;
x[45] = 6.85714285714285770000;
x[46] = 7.36507936507936380000;
x[47] = 7.87301587301587350000;
x[48] = 8.38095238095237960000;
x[49] = 8.88888888888888930000;
x[50] = 9.39682539682539540000;
x[51] = 9.90476190476190510000;
x[52] = 10.41269841269841100000;
x[53] = 10.92063492063492100000;
x[54] = 11.42857142857142700000;
x[55] = 11.93650793650793700000;
x[56] = 12.44444444444444300000;
x[57] = 12.95238095238095300000;
x[58] = 13.46031746031745900000;
x[59] = 13.96825396825396800000;
x[60] = 14.47619047619047400000;
x[61] = 14.98412698412698400000;
x[62] = 15.49206349206349000000;
x[63] = 16.00000000000000000000;



var y = new Array();
y[0] = -1.50837751679893930000;
y[1] = -1.50633657314382670000;
y[2] = -1.50415785436419310000;
y[3] = -1.50182694519358660000;
y[4] = -1.49932735026103090000;
y[5] = -1.49664010557682300000;
y[6] = -1.49374329974393950000;
y[7] = -1.49061147949358030000;
y[8] = -1.48721490565349580000;
y[9] = -1.48351861384543530000;
y[10] = -1.47948121756761840000;
y[11] = -1.47505336756015580000;
y[12] = -1.47017574693777100000;
y[13] = -1.46477643093971600000;
y[14] = -1.45876736436890870000;
y[15] = -1.45203959426707030000;
y[16] = -1.44445671565255360000;
y[17] = -1.43584570229039390000;
y[18] = -1.42598382855595760000;
y[19] = -1.41457960835077490000;
y[20] = -1.40124433129607070000;
y[21] = -1.38544837679920190000;
y[22] = -1.36645204745321510000;
y[23] = -1.34319210978762000000;
y[24] = -1.31408799636151090000;
y[25] = -1.27669520176831860000;
y[26] = -1.22705270315911450000;
y[27] = -1.15838588519750950000;
y[28] = -1.05840686648415900000;
y[29] = -0.90372394590298166000;
y[30] = -0.65107672144448037000;
y[31] = -0.24870998909352368000;
y[32] = 0.24870998909352202000;
y[33] = 0.65107672144448037000;
y[34] = 0.90372394590298100000;
y[35] = 1.05840686648415900000;
y[36] = 1.15838588519750910000;
y[37] = 1.22705270315911450000;
y[38] = 1.27669520176831840000;
y[39] = 1.31408799636151090000;
y[40] = 1.34319210978761980000;
y[41] = 1.36645204745321510000;
y[42] = 1.38544837679920190000;
y[43] = 1.40124433129607070000;
y[44] = 1.41457960835077490000;
y[45] = 1.42598382855595760000;
y[46] = 1.43584570229039390000;
y[47] = 1.44445671565255360000;
y[48] = 1.45203959426707030000;
y[49] = 1.45876736436890870000;
y[50] = 1.46477643093971600000;
y[51] = 1.47017574693777100000;
y[52] = 1.47505336756015580000;
y[53] = 1.47948121756761840000;
y[54] = 1.48351861384543530000;
y[55] = 1.48721490565349580000;
y[56] = 1.49061147949358030000;
y[57] = 1.49374329974393950000;
y[58] = 1.49664010557682300000;
y[59] = 1.49932735026103090000;
y[60] = 1.50182694519358660000;
y[61] = 1.50415785436419310000;
y[62] = 1.50633657314382670000;
y[63] = 1.50837751679893930000;




var val;
for (var i = 0; i < vnum; i++)
{
	val = Math.atan(x[i]);
	if (!isEqual(val, y[i]))
	{
		$ERROR("\nx = " + x[i] + "\nlibc.atan(x) = " + y[i] + "\nMath.atan(x) = " + Math.atan(x[i]) + "\nMath.abs(libc.atan(x) - Math.atan(x)) > " + prec + "\n\n"); 
	}
}
