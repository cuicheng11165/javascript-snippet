var addEntity=function(key,value,description){
	$('.ave-field-group > input').val(key).trigger('change');
	$('.ave-field-group > textarea[id="Value"]').val(value).trigger('change')
	$('.ave-field-group > textarea[id="Description"]').val(description).trigger('change');
	$('.ave-field-group > select[id="Attachment"]').val('variable roles 涉及词条统计.xlsx').trigger('change');
	$('input#saveTest.aui-button.aui-button-subtle').click();
}
