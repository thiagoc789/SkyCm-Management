/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function ValidarSociedadInven(context) {
	
	let color = context.evaluateTargetPath('#Page:Inventario2/#Control:FC_color/#Value')
	let pagina = '';
	
	if(color){
		 pagina = '/SkyCM_V2/Pages/V2-Consultas/PageInvenDesord.page'
	}else{
		 pagina = '/SkyCM_V2/Pages/V2-Consultas/PageInvensinColor.page'
	}
	return pagina
}
