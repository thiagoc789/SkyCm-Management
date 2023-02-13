/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function BarcodeScanResult(context) {

    function ejecutar(){
        context.executeAction('/SkyCM_V2/Actions/Checks/V2-Consulta/CheckValidaInventario.action');
    }
    
    var actionResult = context.getActionResult('OpenBarcodeScanner');
    var scannedResult = actionResult.data;
    const splitString = scannedResult.split(";");
	let referencia = splitString[0].split("-")[0];
	let color = splitString[1];
    
    let containerProxy = context.getPageProxy().getControl('FormCellContainer0');
    var selection = containerProxy.getControl('FC_List_Referencia');
    selection.setValue(referencia);
    var colorcampo = containerProxy.getControl('FC_color');
    colorcampo.setValue(color)
    setTimeout(ejecutar, 1501);

}


