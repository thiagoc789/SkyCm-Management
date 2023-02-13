var clientAPI;
//var geolocation = require('nativescript-geolocation');
//var Accuracy = require('tns-core-modules/ui/enums').Accuracy;
import * as geolocation from "@nativescript/geolocation";
import { CoreTypes } from "@nativescript/core";
export default function Geo(clientAPI) {
	var campolat = clientAPI.evaluateTargetPath("#Page:VisitaConfirmar/#Control:FC_Latitud_Vendor");
	var valorlat = clientAPI.evaluateTargetPath("#Page:VisitaConfirmar/#Control:FC_Latitud_Vendor/#Value");
	var valorlong = clientAPI.evaluateTargetPath("#Page:VisitaConfirmar/#Control:FC_Longitud_Vendor/#Value");
	var campolong = clientAPI.evaluateTargetPath("#Page:VisitaConfirmar/#Control:FC_Longitud_Vendor");

	if (valorlat == "" || valorlong == "" || valorlat === null || valorlong === null) {

		var logger = clientAPI.getLogger();

		console.log("Current Log Level: " + logger.getLevel());
		var locationIsEnabled = geolocation.isEnabled();

		if (!locationIsEnabled) {
			geolocation.enableLocationRequest();
		}
		return geolocation.getCurrentLocation({
			//desiredAccuracy: Accuracy.high,
			desiredAccuracy: CoreTypes.Accuracy.high,
			updateDistance: 5,
			timeout: 11000
		}).then(function (loc) {
			if (loc) {
				console.log(loc);
				console.log('\nCurrent Location: (' + loc.latitude + ',' + loc.longitude + ')');
				logger.log(loc.toString());

				var locMessage = loc.latitude;
				logger.log('Current Location: ' + locMessage, 'INFO');
				var result = loc.latitude.toString();
				campolat.setValue(result);
				var result2 = loc.longitude.toString();
				campolong.setValue(result2);
				// alert("se lleno lat y long")
				return clientAPI.executeAction('/SkyCM_V2/Actions/Message/Progress/ProgressCalculandoUbicacion.action');

			}

		}, function (e) {
			logger.log(e.message, 'ERROR');
		});
	} else {
		return clientAPI.executeAction('/SkyCM_V2/Actions/Message/Progress/ProgressCalculandoUbicacion.action');
	}

}