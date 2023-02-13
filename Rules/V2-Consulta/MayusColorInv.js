/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function MayusColorInv(context) {
	let color = context.evaluateTargetPath('#Control:FC_color/#Value');
	
	return color.toUpperCase();
}
