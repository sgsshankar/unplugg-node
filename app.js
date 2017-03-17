var unplugg = require('./unplugg');
var data = [{
	"timestamp": 1458000000,
	"value": 63.422235
}, {
	"timestamp": 1458003600,
	"value": 72.012848
}, {
	"timestamp": 1458007200,
	"value": 90.228838
}, {
	"timestamp": 1458010800,
	"value": 63.096583
}, {
	"timestamp": 1458014400,
	"value": 47.667261
}, {
	"timestamp": 1458018000,
	"value": 69.652997
}, {
	"timestamp": 1458021600,
	"value": 64.702911
}, {
	"timestamp": 1458025200,
	"value": 62.883492
}, {
	"timestamp": 1458028800,
	"value": 275.134977
}, {
	"timestamp": 1458032400,
	"value": 204.24592
}, {
	"timestamp": 1458036000,
	"value": 30.437638
}, {
	"timestamp": 1458039600,
	"value": 65.915515
}, {
	"timestamp": 1458043200,
	"value": 60.647731
}, {
	"timestamp": 1458046800,
	"value": 30.737815
}, {
	"timestamp": 1458050400,
	"value": 36.813539
}, {
	"timestamp": 1458054000,
	"value": 48.769409
}, {
	"timestamp": 1458057600,
	"value": 51.612869
}, {
	"timestamp": 1458061200,
	"value": 52.51391
}, {
	"timestamp": 1458064800,
	"value": 55.178538
}, {
	"timestamp": 1458068400,
	"value": 108.105356
}, {
	"timestamp": 1458072000,
	"value": 305.601636
}, {
	"timestamp": 1458075600,
	"value": 270.042778
}, {
	"timestamp": 1458079200,
	"value": 170.784059
}, {
	"timestamp": 1458082800,
	"value": 57.51227
}, {
	"timestamp": 1458086400,
	"value": 60.109329
}, {
	"timestamp": 1458090000,
	"value": 32.578249
}, {
	"timestamp": 1458093600,
	"value": 0
}, {
	"timestamp": 1458097200,
	"value": 36.821582
}, {
	"timestamp": 1458100800,
	"value": 68.563145
}, {
	"timestamp": 1458104400,
	"value": 54.661686
}, {
	"timestamp": 1458108000,
	"value": 40.885125
}, {
	"timestamp": 1458111600,
	"value": 53.869406
}, {
	"timestamp": 1458115200,
	"value": 245.77256
}, {
	"timestamp": 1458118800,
	"value": 165.604498
}, {
	"timestamp": 1458122400,
	"value": 116.43982
}, {
	"timestamp": 1458126000,
	"value": 46.957329
}];
var forecast_to = 1458136800;
var callback = "http://your.domain/yourcallback";
var apiKey = "";

unplugg.getForcast(apiKey, data, callback, forecast_to).then(function(result) {
	console.log(result);
});