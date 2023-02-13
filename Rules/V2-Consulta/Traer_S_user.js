/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function Traer_S_user(context) {
	var pageProxy = context.getPageProxy();
	var appClientData = pageProxy.getAppClientData(); //VARIABLE GLOBAL NIVEL APLICACION

	var pernr = context.evaluateTargetPath("#Application/#ClientData/#Property:UserId");
	var dialog = context.nativescript.uiDialogsModule;
	var pernr2 = pernr.toUpperCase()




	return context.read('/SkyCM_V2/Services/SkyCM_V2.service', 'VENDORINFO', [], `$filter=USRID eq '${pernr2}'`).then((results) => {
		if (results && results.length > 0) {
			let prod = results.getItem(0);
			var per = prod.PERNR_SCP;

			appClientData.UserId = per;
			dialog.alert(appClientData.UserId)
			pageProxy.redraw();
			appClientData.nombre = prod.VORNA;
			//CAMBIO



			return per;

		} else {
			dialog.alert('PERNR CAMBIó')
			return 0;
		}
	});
}
