/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function InventarioCampos(clientAPI) {
	var sociedad = clientAPI.evaluateTargetPath("#Page:Inventario2/#Control:FC_SOC/#Value");
	var Prima1 = clientAPI.evaluateTargetPath("#Control:FC_librePrima");
	var Prima2 = clientAPI.evaluateTargetPath("#Control:FC_transPrima");
	var Mex1 = clientAPI.evaluateTargetPath("#Control:FC_transitoMex");
	var viene = clientAPI.evaluateTargetPath("#Control:FC_viene");
	var precio = clientAPI.evaluateTargetPath("#Control:FC_Precio");
	
	switch (sociedad) {
        case "1000":
            Prima1.setVisible(true);
            Prima2.setVisible(true);
            break;
        case "6000":
            Mex1.setVisible(true);
            break;
        case "5000":
            Mex1.setVisible(true);
            break;    
        case "2000":
            viene.setVisible(true);
            precio.setVisible(true);
            break;    

    }
}
