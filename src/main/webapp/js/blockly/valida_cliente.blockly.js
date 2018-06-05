window.blockly = window.blockly || {};
window.blockly.js = window.blockly.js || {};
window.blockly.js.blockly = window.blockly.js.blockly || {};
window.blockly.js.blockly.ValidaCliente = window.blockly.js.blockly.ValidaCliente
		|| {};

/**
 * valida_cliente
 */
window.blockly.js.blockly.ValidaCliente.validar_nota = function() {
	if (this.cronapi.screen.getValueOfField("AlunoPresente.active.nota") > 5) {
		this.cronapi.screen.notify('error', 'Nota deve ser menor que 5');
		this.cronapi.screen
				.changeValueOfField("AlunoPresente.active.nota", '5');
	}
}
