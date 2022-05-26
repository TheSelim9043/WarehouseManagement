purchaseDetailsSearchTableCreatorFile = 'model/purchase/purchaseDetailsSearchTableCreator.php';

customerDetailsSearchTableCreatorFile = 'model/customer/customerDetailsSearchTableCreator.php';

itemDetailsSearchTableCreatorFile = 'model/item/itemDetailsSearchTableCreator.php';

vendorDetailsSearchTableCreatorFile = 'model/vendor/vendorDetailsSearchTableCreator.php';

saleDetailsSearchTableCreatorFile = 'model/sale/saleDetailsSearchTableCreator.php';



purchaseReportsSearchTableCreatorFile = 'model/purchase/purchaseReportsSearchTableCreator.php';

customerReportsSearchTableCreatorFile = 'model/customer/customerReportsSearchTableCreator.php';

itemReportsSearchTableCreatorFile = 'model/item/itemReportsSearchTableCreator.php';

vendorReportsSearchTableCreatorFile = 'model/vendor/vendorReportsSearchTableCreator.php';

saleReportsSearchTableCreatorFile = 'model/sale/saleReportsSearchTableCreator.php';



vendorLastInsertedIDFile = 'model/vendor/populateLastVendorID.php';

customerLastInsertedIDFile = 'model/customer/populateLastCustomerID.php';

purchaseLastInsertedIDFile = 'model/purchase/populateLastPurchaseIDForPurchaseTab.php';

saleLastInsertedIDFile = 'model/sale/populateLastSaleIDForSaleTab.php';

itemLastInsertedIDFile = 'model/item/populateLastProductID.php';



showPurchaseIDSuggestionsFile = 'model/purchase/showPurchaseIDs.php';

showSaleIDSuggestionsFile = 'model/sale/showSaleIDs.php';

showVendorIDSuggestionsFile = 'model/vendor/showVendorIDs.php';

showCustomerIDSuggestionsFile = 'model/customer/showCustomerIDs.php';

showCustomerIDSuggestionsForSaleTabFile = 'model/customer/showCustomerIDsForSaleTab.php';



showItemNumberSuggestionsFile = 'model/item/showItemNumber.php';

showItemNumberSuggestionsForImageTabFile = 'model/item/showItemNumberForImageTab.php';

showItemNumberForPurchaseTabFile = 'model/item/showItemNumberForPurchaseTab.php';

showItemNumberForSaleTabFile = 'model/item/showItemNumberForSaleTab.php';

showItemNamesFile = 'model/item/showItemNames.php';



getItemStockFile = 'model/item/getItemStock.php';

getItemNameFile = 'model/item/getItemName.php';

updateImageFile = 'model/image/updateImage.php';

deleteImageFile = 'model/image/deleteImage.php';



purchaseFilteredReportCreatorFile = 'model/purchase/purchaseFilteredReportTableCreator.php';

saleFilteredReportCreatorFile = 'model/sale/saleFilteredReportTableCreator.php';



$(document).ready(function(){
	$('.chosenSelect').chosen({ width: "95%"});
	
	$('.invTooltip').tooltip(); 
	
	$('#addCustomer').on('click', function(){
		addCustomer();
	});
	
	$('#addVendor').on('click', function(){
		addVendor();
	});
	
	$('#addItem').on('click', function(){
		addItem();
	});
	
	$('#addPurchase').on('click', function(){
		addPurchase();
	});
	
	$('#addSaleButton').on('click', function(){
		addSale();
	});
	
	$('#updateItemDetailsButton').on('click', function(){
		updateItem();
	});
	
	$('#updateCustomerDetailsButton').on('click', function(){
		updateCustomer();
	});
	
	$('#updateVendorDetailsButton').on('click', function(){
		updateVendor();
	});
	
	$('#updatePurchaseDetailsButton').on('click', function(){
		updatePurchase();
	});
	
	$('#updateSaleDetailsButton').on('click', function(){
		updateSale();
	});
	
	$('#deleteItem').on('click', function(){
		bootbox.confirm('Are you sure you want to delete permanently?', function(result){
			if(result){
				deleteItem();
			}
		});
	});
	
	$('#deleteCustomerButton').on('click', function(){
		bootbox.confirm('Are you sure you want to delete permanently?', function(result){
			if(result){
				deleteCustomer();
			}
		});
	});
	
	$('#deleteVendorButton').on('click', function(){
		bootbox.confirm('Are you sure you want to delete permanently?', function(result){
			if(result){
				deleteVendor();
			}
		});
	});
	
	$('#itemDetailsItemName').keyup(function(){
		showSuggestions('itemDetailsItemName', showItemNamesFile, 'itemDetailsItemNameSuggestionsDiv');
	});
	
	
	$(document).on('click', '#itemDetailsItemNamesSuggestionsList li', function(){
		$('#itemDetailsItemName').val($(this).text());
		$('#itemDetailsItemNamesSuggestionsList').fadeOut();
	});
	
	$('#itemDetailsItemNumber').keyup(function(){
		showSuggestions('itemDetailsItemNumber', showItemNumberSuggestionsFile, 'itemDetailsItemNumberSuggestionsDiv');
	});
	
	
	$(document).on('click', '#itemDetailsItemNumberSuggestionsList li', function(){
		$('#itemDetailsItemNumber').val($(this).text());
		$('#itemDetailsItemNumberSuggestionsList').fadeOut();
		getItemDetailsToPopulate();
	});
	

	$('#saleDetailsItemNumber').keyup(function(){
		showSuggestions('saleDetailsItemNumber', showItemNumberForSaleTabFile, 'saleDetailsItemNumberSuggestionsDiv');
	});
	

	$(document).on('click', '#saleDetailsItemNumberSuggestionsList li', function(){
		$('#saleDetailsItemNumber').val($(this).text());
		$('#saleDetailsItemNumberSuggestionsList').fadeOut();
		getItemDetailsToPopulateForSaleTab();
	});
	
	
	$('#itemImageItemNumber').keyup(function(){
		showSuggestions('itemImageItemNumber', showItemNumberSuggestionsForImageTabFile, 'itemImageItemNumberSuggestionsDiv');
	});
	
	
	$(document).on('click', '#itemImageItemNumberSuggestionsList li', function(){
		$('#itemImageItemNumber').val($(this).text());
		$('#itemImageItemNumberSuggestionsList').fadeOut();
		getItemName('itemImageItemNumber', getItemNameFile, 'itemImageItemName');
	});
	
	
	$('#itemClear').on('click', function(){
		$('#imageContainer').empty();
	});
	
	
	$('#saleClear').on('click', function(){
		$('#saleDetailsImageContainer').empty();
	});
	
	
	$('#purchaseFilterClear').on('click', function(){
		reportsPurchaseTableCreator('purchaseReportsTableDiv', purchaseReportsSearchTableCreatorFile, 'purchaseReportsTable');
	});
	
	
	$('#saleFilterClear').on('click', function(){
		reportsSaleTableCreator('saleReportsTableDiv', saleReportsSearchTableCreatorFile, 'saleReportsTable');
	});
	
	
	
	$('#purchaseDetailsItemNumber').keyup(function(){
		showSuggestions('purchaseDetailsItemNumber', showItemNumberForPurchaseTabFile, 'purchaseDetailsItemNumberSuggestionsDiv');
	});
	
	
	$(document).on('click', '#purchaseDetailsItemNumberSuggestionsList li', function(){
		$('#purchaseDetailsItemNumber').val($(this).text());
		$('#purchaseDetailsItemNumberSuggestionsList').fadeOut();
		
		getItemName('purchaseDetailsItemNumber', getItemNameFile, 'purchaseDetailsItemName');
		
		getItemStockToPopulate('purchaseDetailsItemNumber', getItemStockFile, 'purchaseDetailsCurrentStock');
	});
	
	$('#customerDetailsCustomerID').keyup(function(){
		showSuggestions('customerDetailsCustomerID', showCustomerIDSuggestionsFile, 'customerDetailsCustomerIDSuggestionsDiv');
	});
	
	
	$(document).on('click', '#customerDetailsCustomerIDSuggestionsList li', function(){
		$('#customerDetailsCustomerID').val($(this).text());
		$('#customerDetailsCustomerIDSuggestionsList').fadeOut();
		getCustomerDetailsToPopulate();
	});
	

	$('#saleDetailsCustomerID').keyup(function(){
		showSuggestions('saleDetailsCustomerID', showCustomerIDSuggestionsForSaleTabFile, 'saleDetailsCustomerIDSuggestionsDiv');
	});
	
	
	$(document).on('click', '#saleDetailsCustomerIDSuggestionsList li', function(){
		$('#saleDetailsCustomerID').val($(this).text());
		$('#saleDetailsCustomerIDSuggestionsList').fadeOut();
		getCustomerDetailsToPopulateSaleTab();
	});
	
	
	$('#vendorDetailsVendorID').keyup(function(){
		showSuggestions('vendorDetailsVendorID', showVendorIDSuggestionsFile, 'vendorDetailsVendorIDSuggestionsDiv');
	});
	
	
	$(document).on('click', '#vendorDetailsVendorIDSuggestionsList li', function(){
		$('#vendorDetailsVendorID').val($(this).text());
		$('#vendorDetailsVendorIDSuggestionsList').fadeOut();
		getVendorDetailsToPopulate();
	});
	
	
	$('#purchaseDetailsPurchaseID').keyup(function(){
		showSuggestions('purchaseDetailsPurchaseID', showPurchaseIDSuggestionsFile, 'purchaseDetailsPurchaseIDSuggestionsDiv');
	});
	
	$(document).on('click', '#purchaseDetailsPurchaseIDSuggestionsList li', function(){
		$('#purchaseDetailsPurchaseID').val($(this).text());
		$('#purchaseDetailsPurchaseIDSuggestionsList').fadeOut();
		getPurchaseDetailsToPopulate();
	});
	
	
	$('#saleDetailsSaleID').keyup(function(){
		showSuggestions('saleDetailsSaleID', showSaleIDSuggestionsFile, 'saleDetailsSaleIDSuggestionsDiv');
	});
	
	
	$(document).on('click', '#saleDetailsSaleIDSuggestionsList li', function(){
		$('#saleDetailsSaleID').val($(this).text());
		$('#saleDetailsSaleIDSuggestionsList').fadeOut();
		getSaleDetailsToPopulate();
	});


	$('#updateImageButton').on('click', function(){
		processImage('imageForm', updateImageFile, 'itemImageMessage');
	});
	
	$('#deleteImageButton').on('click', function(){
		processImage('imageForm', deleteImageFile, 'itemImageMessage');
	});
	
	$('.datepicker').datepicker({
		format: 'yyyy-mm-dd',
		todayHighlight: true,
		todayBtn: 'linked',
		orientation: 'bottom left'
	});
	
	$('#purchaseDetailsQuantity, #purchaseDetailsUnitPrice').change(function(){
		calculateTotalInPurchaseTab();
	});

	$('#saleDetailsDiscount, #saleDetailsQuantity, #saleDetailsUnitPrice').change(function(){
		calculateTotalInSaleTab();
	});
	
	$(document).on('click', function(){
		$('.suggestionsList').fadeOut();
	});

	searchTableCreator('itemDetailsTableDiv', itemDetailsSearchTableCreatorFile, 'itemDetailsTable');
	searchTableCreator('purchaseDetailsTableDiv', purchaseDetailsSearchTableCreatorFile, 'purchaseDetailsTable');
	searchTableCreator('customerDetailsTableDiv', customerDetailsSearchTableCreatorFile, 'customerDetailsTable');
	searchTableCreator('saleDetailsTableDiv', saleDetailsSearchTableCreatorFile, 'saleDetailsTable');
	searchTableCreator('vendorDetailsTableDiv', vendorDetailsSearchTableCreatorFile, 'vendorDetailsTable');
	
	reportsTableCreator('itemReportsTableDiv', itemReportsSearchTableCreatorFile, 'itemReportsTable');
	reportsPurchaseTableCreator('purchaseReportsTableDiv', purchaseReportsSearchTableCreatorFile, 'purchaseReportsTable');
	reportsTableCreator('customerReportsTableDiv', customerReportsSearchTableCreatorFile, 'customerReportsTable');
	reportsSaleTableCreator('saleReportsTableDiv', saleReportsSearchTableCreatorFile, 'saleReportsTable');
	reportsTableCreator('vendorReportsTableDiv', vendorReportsSearchTableCreatorFile, 'vendorReportsTable');
	
	$(document).on('mouseover', '.itemDetailsHover', function(){
		$('.itemDetailsHover').popover({
			container: 'body',
			title: 'Item Details',
			trigger: 'hover',
			html: true,
			placement: 'right',
			content: fetchData
		});
	});
	
	$('#searchTablesRefresh, #reportsTablesRefresh').on('click', function(){
		searchTableCreator('itemDetailsTableDiv', itemDetailsSearchTableCreatorFile, 'itemDetailsTable');
		searchTableCreator('purchaseDetailsTableDiv', purchaseDetailsSearchTableCreatorFile, 'purchaseDetailsTable');
		searchTableCreator('customerDetailsTableDiv', customerDetailsSearchTableCreatorFile, 'customerDetailsTable');
		searchTableCreator('vendorDetailsTableDiv', vendorDetailsSearchTableCreatorFile, 'vendorDetailsTable');
		searchTableCreator('saleDetailsTableDiv', saleDetailsSearchTableCreatorFile, 'saleDetailsTable');
		
		reportsTableCreator('itemReportsTableDiv', itemReportsSearchTableCreatorFile, 'itemReportsTable');
		reportsPurchaseTableCreator('purchaseReportsTableDiv', purchaseReportsSearchTableCreatorFile, 'purchaseReportsTable');
		reportsTableCreator('customerReportsTableDiv', customerReportsSearchTableCreatorFile, 'customerReportsTable');
		reportsTableCreator('vendorReportsTableDiv', vendorReportsSearchTableCreatorFile, 'vendorReportsTable');
		reportsSaleTableCreator('saleReportsTableDiv', saleReportsSearchTableCreatorFile, 'saleReportsTable');
	});
	
	
	$('#showPurchaseReport').on('click', function(){
		filteredPurchaseReportTableCreator('purchaseReportStartDate', 'purchaseReportEndDate', purchaseFilteredReportCreatorFile, 'purchaseReportsTableDiv', 'purchaseFilteredReportsTable');
	});
	
	$('#showSaleReport').on('click', function(){
		filteredSaleReportTableCreator('saleReportStartDate', 'saleReportEndDate', saleFilteredReportCreatorFile, 'saleReportsTableDiv', 'saleFilteredReportsTable');
	});
	
});


function fetchData(){
	var fetch_data = '';
	var element = $(this);
	var id = element.attr('id');
	
	$.ajax({
		url: 'model/item/getItemDetailsForPopover.php',
		method: 'POST',
		async: false,
		data: {id:id},
		success: function(data){
			fetch_data = data;
		}
	});
	return fetch_data;
}


function processImage(imageFormID, scriptPath, messageDivID){
	var form = $('#' + imageFormID)[0];
	var formData = new FormData(form);
	$.ajax({
		url: scriptPath,
		method: 'POST',
		data: formData,
		contentType: false,
		processData: false,
		success: function(data){
			$('#' + messageDivID).html(data);
		}
	});
}

function searchTableCreator(tableContainerDiv, tableCreatorFileUrl, table){
	var tableContainerDivID = '#' + tableContainerDiv;
	var tableID = '#' + table;
	$(tableContainerDivID).load(tableCreatorFileUrl, function(){
		$(tableID).DataTable();
	});
}


function reportsTableCreator(tableContainerDiv, tableCreatorFileUrl, table){
	var tableContainerDivID = '#' + tableContainerDiv;
	var tableID = '#' + table;
	$(tableContainerDivID).load(tableCreatorFileUrl, function(){
		$(tableID).DataTable({
			dom: 'lBfrtip',
			buttons: [
				'copy',
				'csv', 'excel',
				{extend: 'pdf', orientation: 'landscape', pageSize: 'LEGAL'},
				'print'
			]
		});
	});
}


function reportsPurchaseTableCreator(tableContainerDiv, tableCreatorFileUrl, table){
	var tableContainerDivID = '#' + tableContainerDiv;
	var tableID = '#' + table;
	$(tableContainerDivID).load(tableCreatorFileUrl, function(){
		$(tableID).DataTable({
			dom: 'lBfrtip',
			buttons: [
				'copy',
				{extend: 'csv', footer: true, title: 'Purchase Report'},
				{extend: 'excel', footer: true, title: 'Purchase Report'},
				{extend: 'pdf', footer: true, orientation: 'landscape', pageSize: 'LEGAL', title: 'Purchase Report'},
				{extend: 'print', footer: true, title: 'Purchase Report'},
			],
			"footerCallback": function ( row, data, start, end, display ) {
				var api = this.api(), data;
	 
				var intVal = function ( i ) {
					return typeof i === 'string' ?
						i.replace(/[\$,]/g, '')*1 :
						typeof i === 'number' ?
							i : 0;
				};
	 
				quantityTotal = api
					.column( 6 )
					.data()
					.reduce( function (a, b) {
						return intVal(a) + intVal(b);
					}, 0 );
	 
				quantityFilteredTotal = api
					.column( 6, { page: 'current'} )
					.data()
					.reduce( function (a, b) {
						return intVal(a) + intVal(b);
					}, 0 );
				
				unitPriceTotal = api
					.column( 7 )
					.data()
					.reduce( function (a, b) {
						return intVal(a) + intVal(b);
					}, 0 );
				
				unitPriceFilteredTotal = api
					.column( 7, { page: 'current'} )
					.data()
					.reduce( function (a, b) {
						return intVal(a) + intVal(b);
					}, 0 );
					
				fullPriceTotal = api
					.column( 8 )
					.data()
					.reduce( function (a, b) {
						return intVal(a) + intVal(b);
					}, 0 );
				
				fullPriceFilteredTotal = api
					.column( 8, { page: 'current'} )
					.data()
					.reduce( function (a, b) {
						return intVal(a) + intVal(b);
					}, 0 );
	 
				$( api.column( 6 ).footer() ).html(quantityFilteredTotal +' ('+ quantityTotal +' total)');
				$( api.column( 7 ).footer() ).html(unitPriceFilteredTotal +' ('+ unitPriceTotal +' total)');
				$( api.column( 8 ).footer() ).html(fullPriceFilteredTotal +' ('+ fullPriceTotal +' total)');
			}
		});
	});
}


function reportsSaleTableCreator(tableContainerDiv, tableCreatorFileUrl, table){
	var tableContainerDivID = '#' + tableContainerDiv;
	var tableID = '#' + table;
	$(tableContainerDivID).load(tableCreatorFileUrl, function(){
		$(tableID).DataTable({
			dom: 'lBfrtip',
			buttons: [
				'copy',
				{extend: 'csv', footer: true, title: 'Sale Report'},
				{extend: 'excel', footer: true, title: 'Sale Report'},
				{extend: 'pdf', footer: true, orientation: 'landscape', pageSize: 'LEGAL', title: 'Sale Report'},
				{extend: 'print', footer: true, title: 'Sale Report'},
			],
			"footerCallback": function ( row, data, start, end, display ) {
				var api = this.api(), data;
	 
				var intVal = function ( i ) {
					return typeof i === 'string' ?
						i.replace(/[\$,]/g, '')*1 :
						typeof i === 'number' ?
							i : 0;
				};
	 
				quantityTotal = api
					.column( 7 )
					.data()
					.reduce( function (a, b) {
						return intVal(a) + intVal(b);
					}, 0 );
	 
				quantityFilteredTotal = api
					.column( 7, { page: 'current'} )
					.data()
					.reduce( function (a, b) {
						return intVal(a) + intVal(b);
					}, 0 );
				
				unitPriceTotal = api
					.column( 8 )
					.data()
					.reduce( function (a, b) {
						return intVal(a) + intVal(b);
					}, 0 );
				
				unitPriceFilteredTotal = api
					.column( 8, { page: 'current'} )
					.data()
					.reduce( function (a, b) {
						return intVal(a) + intVal(b);
					}, 0 );
					
				fullPriceTotal = api
					.column( 9 )
					.data()
					.reduce( function (a, b) {
						return intVal(a) + intVal(b);
					}, 0 );
				
				fullPriceFilteredTotal = api
					.column( 9, { page: 'current'} )
					.data()
					.reduce( function (a, b) {
						return intVal(a) + intVal(b);
					}, 0 );
	 
				$( api.column( 7 ).footer() ).html(quantityFilteredTotal +' ('+ quantityTotal +' total)');
				$( api.column( 8 ).footer() ).html(unitPriceFilteredTotal +' ('+ unitPriceTotal +' total)');
				$( api.column( 9 ).footer() ).html(fullPriceFilteredTotal +' ('+ fullPriceTotal +' total)');
			}
		});
	});
}


function filteredSaleReportTableCreator(startDate, endDate, scriptPath, tableDIV, tableID){
	var startDate = $('#' + startDate).val();
	var endDate = $('#' + endDate).val();

	$.ajax({
		url: scriptPath,
		method: 'POST',
		data: {
			startDate:startDate,
			endDate:endDate,
		},
		success: function(data){
			$('#' + tableDIV).empty();
			$('#' + tableDIV).html(data);
		},
		complete: function(){
			$('#' + tableID).DataTable({
				dom: 'lBfrtip',
				buttons: [
					'copy',
					{extend: 'csv', footer: true, title: 'Sale Report'},
					{extend: 'excel', footer: true, title: 'Sale Report'},
					{extend: 'pdf', footer: true, orientation: 'landscape', pageSize: 'LEGAL', title: 'Sale Report'},
					{extend: 'print', footer: true, title: 'Sale Report'},
				],
				"footerCallback": function ( row, data, start, end, display ) {
					var api = this.api(), data;
		 
					var intVal = function ( i ) {
						return typeof i === 'string' ?
							i.replace(/[\$,]/g, '')*1 :
							typeof i === 'number' ?
								i : 0;
					};
		 
					quantityTotal = api
						.column( 7 )
						.data()
						.reduce( function (a, b) {
							return intVal(a) + intVal(b);
						}, 0 );
		 
					quantityFilteredTotal = api
						.column( 7, { page: 'current'} )
						.data()
						.reduce( function (a, b) {
							return intVal(a) + intVal(b);
						}, 0 );
					
					unitPriceTotal = api
						.column( 8 )
						.data()
						.reduce( function (a, b) {
							return intVal(a) + intVal(b);
						}, 0 );
					
					unitPriceFilteredTotal = api
						.column( 8, { page: 'current'} )
						.data()
						.reduce( function (a, b) {
							return intVal(a) + intVal(b);
						}, 0 );
						
					fullPriceTotal = api
						.column( 9 )
						.data()
						.reduce( function (a, b) {
							return intVal(a) + intVal(b);
						}, 0 );
					
					fullPriceFilteredTotal = api
						.column( 9, { page: 'current'} )
						.data()
						.reduce( function (a, b) {
							return intVal(a) + intVal(b);
						}, 0 );
		 
					$( api.column( 7 ).footer() ).html(quantityFilteredTotal +' ('+ quantityTotal +' total)');
					$( api.column( 8 ).footer() ).html(unitPriceFilteredTotal +' ('+ unitPriceTotal +' total)');
					$( api.column( 9 ).footer() ).html(fullPriceFilteredTotal +' ('+ fullPriceTotal +' total)');
				}
			});
		}
	});
}


function filteredPurchaseReportTableCreator(startDate, endDate, scriptPath, tableDIV, tableID){
	var startDate = $('#' + startDate).val();
	var endDate = $('#' + endDate).val();

	$.ajax({
		url: scriptPath,
		method: 'POST',
		data: {
			startDate:startDate,
			endDate:endDate,
		},
		success: function(data){
			$('#' + tableDIV).empty();
			$('#' + tableDIV).html(data);
		},
		complete: function(){
			$('#' + tableID).DataTable({
				dom: 'lBfrtip',
				buttons: [
					'copy',
					{extend: 'csv', footer: true, title: 'Purchase Report'},
					{extend: 'excel', footer: true, title: 'Purchase Report'},
					{extend: 'pdf', footer: true, orientation: 'landscape', pageSize: 'LEGAL', title: 'Purchase Report'},
					{extend: 'print', footer: true, title: 'Purchase Report'}
				],
				"footerCallback": function ( row, data, start, end, display ) {
					var api = this.api(), data;
		 
					var intVal = function ( i ) {
						return typeof i === 'string' ?
							i.replace(/[\$,]/g, '')*1 :
							typeof i === 'number' ?
								i : 0;
					};
		 
					quantityTotal = api
						.column( 6 )
						.data()
						.reduce( function (a, b) {
							return intVal(a) + intVal(b);
						}, 0 );
		 
					quantityFilteredTotal = api
						.column( 6, { page: 'current'} )
						.data()
						.reduce( function (a, b) {
							return intVal(a) + intVal(b);
						}, 0 );
					
					unitPriceTotal = api
						.column( 7 )
						.data()
						.reduce( function (a, b) {
							return intVal(a) + intVal(b);
						}, 0 );
					
					unitPriceFilteredTotal = api
						.column( 7, { page: 'current'} )
						.data()
						.reduce( function (a, b) {
							return intVal(a) + intVal(b);
						}, 0 );
					
					fullPriceTotal = api
						.column( 8 )
						.data()
						.reduce( function (a, b) {
							return intVal(a) + intVal(b);
						}, 0 );
					
					fullPriceFilteredTotal = api
						.column( 8, { page: 'current'} )
						.data()
						.reduce( function (a, b) {
							return intVal(a) + intVal(b);
						}, 0 );
		 
					$( api.column( 6 ).footer() ).html(quantityFilteredTotal +' ('+ quantityTotal +' total)');
					$( api.column( 7 ).footer() ).html(unitPriceFilteredTotal +' ('+ unitPriceTotal +' total)');
					$( api.column( 8 ).footer() ).html(fullPriceFilteredTotal +' ('+ fullPriceTotal +' total)');
				}
			});
		}
	});
}


function calculateTotalInPurchaseTab(){
	var quantityPT = $('#purchaseDetailsQuantity').val();
	var unitPricePT = $('#purchaseDetailsUnitPrice').val();
	$('#purchaseDetailsTotal').val(Number(quantityPT) * Number(unitPricePT));
}


function calculateTotalInSaleTab(){
	var quantityST = $('#saleDetailsQuantity').val();
	var unitPriceST = $('#saleDetailsUnitPrice').val();
	var discountST = $('#saleDetailsDiscount').val();
	$('#saleDetailsTotal').val(Number(unitPriceST) * ((100 - Number(discountST)) / 100) * Number(quantityST));
}


function addCustomer() {
	var customerDetailsCustomerFullName = $('#customerDetailsCustomerFullName').val();
	var customerDetailsCustomerEmail = $('#customerDetailsCustomerEmail').val();
	var customerDetailsCustomerMobile = $('#customerDetailsCustomerMobile').val();
	var customerDetailsCustomerPhone2 = $('#customerDetailsCustomerPhone2').val();
	var customerDetailsCustomerAddress = $('#customerDetailsCustomerAddress').val();
	var customerDetailsCustomerAddress2 = $('#customerDetailsCustomerAddress2').val();
	var customerDetailsCustomerCity = $('#customerDetailsCustomerCity').val();
	var customerDetailsCustomerDistrict = $('#customerDetailsCustomerDistrict option:selected').text();
	var customerDetailsGender = $('#customerDetailsGender option:selected').text();
	
	$.ajax({
		url: 'model/customer/insertCustomer.php',
		method: 'POST',
		data: {
			customerDetailsCustomerFullName:customerDetailsCustomerFullName,
			customerDetailsCustomerEmail:customerDetailsCustomerEmail,
			customerDetailsCustomerMobile:customerDetailsCustomerMobile,
			customerDetailsCustomerPhone2:customerDetailsCustomerPhone2,
			customerDetailsCustomerAddress:customerDetailsCustomerAddress,
			customerDetailsCustomerAddress2:customerDetailsCustomerAddress2,
			customerDetailsCustomerCity:customerDetailsCustomerCity,
			customerDetailsCustomerDistrict:customerDetailsCustomerDistrict,
			customerDetailsGender:customerDetailsGender,
		},
		success: function(data){
			$('#customerDetailsMessage').fadeIn();
			$('#customerDetailsMessage').html(data);
		},
		complete: function(data){
			populateLastInsertedID(customerLastInsertedIDFile, 'customerDetailsCustomerID');
			searchTableCreator('customerDetailsTableDiv', customerDetailsSearchTableCreatorFile, 'customerDetailsTable');
			reportsTableCreator('customerReportsTableDiv', customerReportsSearchTableCreatorFile, 'customerReportsTable');
		}
	});
}


function addVendor() {
	var vendorDetailsVendorFullName = $('#vendorDetailsVendorFullName').val();
	var vendorDetailsVendorEmail = $('#vendorDetailsVendorEmail').val();
	var vendorDetailsVendorMobile = $('#vendorDetailsVendorMobile').val();
	var vendorDetailsVendorPhone2 = $('#vendorDetailsVendorPhone2').val();
	var vendorDetailsVendorAddress = $('#vendorDetailsVendorAddress').val();
	var vendorDetailsVendorAddress2 = $('#vendorDetailsVendorAddress2').val();
	var vendorDetailsVendorCity = $('#vendorDetailsVendorCity').val();
	var vendorDetailsVendorDistrict = $('#vendorDetailsVendorDistrict option:selected').text();
	var vendorDetailsStatus = $('#vendorDetailsStatus option:selected').text();
	
	$.ajax({
		url: 'model/vendor/insertVendor.php',
		method: 'POST',
		data: {
			vendorDetailsVendorFullName:vendorDetailsVendorFullName,
			vendorDetailsVendorEmail:vendorDetailsVendorEmail,
			vendorDetailsVendorMobile:vendorDetailsVendorMobile,
			vendorDetailsVendorPhone2:vendorDetailsVendorPhone2,
			vendorDetailsVendorAddress:vendorDetailsVendorAddress,
			vendorDetailsVendorAddress2:vendorDetailsVendorAddress2,
			vendorDetailsVendorCity:vendorDetailsVendorCity,
			vendorDetailsVendorDistrict:vendorDetailsVendorDistrict,
			vendorDetailsStatus:vendorDetailsStatus,
		},
		success: function(data){
			$('#vendorDetailsMessage').fadeIn();
			$('#vendorDetailsMessage').html(data);
		},
		complete: function(data){
			populateLastInsertedID(vendorLastInsertedIDFile, 'vendorDetailsVendorID');
			searchTableCreator('vendorDetailsTableDiv', vendorDetailsSearchTableCreatorFile, 'vendorDetailsTable');
			reportsTableCreator('vendorReportsTableDiv', vendorReportsSearchTableCreatorFile, 'vendorReportsTable');
		}
	});
}


function addItem() {
	var itemDetailsItemNumber = $('#itemDetailsItemNumber').val();
	var itemDetailsItemName = $('#itemDetailsItemName').val();
	var itemDetailsDiscount = $('#itemDetailsDiscount').val();
	var itemDetailsQuantity = $('#itemDetailsQuantity').val();
	var itemDetailsUnitPrice = $('#itemDetailsUnitPrice').val();
	var itemDetailsDescription = $('#itemDetailsDescription').val();
	
	$.ajax({
		url: 'model/item/insertItem.php',
		method: 'POST',
		data: {
			itemDetailsItemNumber:itemDetailsItemNumber,
			itemDetailsItemName:itemDetailsItemName,
			itemDetailsDiscount:itemDetailsDiscount,
			itemDetailsQuantity:itemDetailsQuantity,
			itemDetailsUnitPrice:itemDetailsUnitPrice,
			itemDetailsDescription:itemDetailsDescription,
		},
		success: function(data){
			$('#itemDetailsMessage').fadeIn();
			$('#itemDetailsMessage').html(data);
		},
		complete: function(){
			populateLastInsertedID(itemLastInsertedIDFile, 'itemDetailsProductID');
			getItemStockToPopulate('itemDetailsItemNumber', getItemStockFile, itemDetailsTotalStock);
			searchTableCreator('itemDetailsTableDiv', itemDetailsSearchTableCreatorFile, 'itemDetailsTable');
			reportsTableCreator('itemReportsTableDiv', itemReportsSearchTableCreatorFile, 'itemReportsTable');
		}
	});
}


function addPurchase() {
	var purchaseDetailsItemNumber = $('#purchaseDetailsItemNumber').val();
	var purchaseDetailsPurchaseDate = $('#purchaseDetailsPurchaseDate').val();
	var purchaseDetailsItemName = $('#purchaseDetailsItemName').val();
	var purchaseDetailsQuantity = $('#purchaseDetailsQuantity').val();
	var purchaseDetailsUnitPrice = $('#purchaseDetailsUnitPrice').val();
	var purchaseDetailsVendorName = $('#purchaseDetailsVendorName').val();
	
	$.ajax({
		url: 'model/purchase/insertPurchase.php',
		method: 'POST',
		data: {
			purchaseDetailsItemNumber:purchaseDetailsItemNumber,
			purchaseDetailsPurchaseDate:purchaseDetailsPurchaseDate,
			purchaseDetailsItemName:purchaseDetailsItemName,
			purchaseDetailsQuantity:purchaseDetailsQuantity,
			purchaseDetailsUnitPrice:purchaseDetailsUnitPrice,
			purchaseDetailsVendorName:purchaseDetailsVendorName,
		},
		success: function(data){
			$('#purchaseDetailsMessage').fadeIn();
			$('#purchaseDetailsMessage').html(data);
		},
		complete: function(){
			getItemStockToPopulate('purchaseDetailsItemNumber', getItemStockFile, 'purchaseDetailsCurrentStock');
			populateLastInsertedID(purchaseLastInsertedIDFile, 'purchaseDetailsPurchaseID');
			searchTableCreator('purchaseDetailsTableDiv', purchaseDetailsSearchTableCreatorFile, 'purchaseDetailsTable');
			reportsPurchaseTableCreator('purchaseReportsTableDiv', purchaseReportsSearchTableCreatorFile, 'purchaseReportsTable');
			searchTableCreator('itemDetailsTableDiv', itemDetailsSearchTableCreatorFile, 'itemDetailsTable');
			reportsTableCreator('itemReportsTableDiv', itemReportsSearchTableCreatorFile, 'itemReportsTable');
		}
	});
}


function addSale() {
	var saleDetailsItemNumber = $('#saleDetailsItemNumber').val();
	var saleDetailsItemName = $('#saleDetailsItemName').val();
	var saleDetailsDiscount = $('#saleDetailsDiscount').val();
	var saleDetailsQuantity = $('#saleDetailsQuantity').val();
	var saleDetailsUnitPrice = $('#saleDetailsUnitPrice').val();
	var saleDetailsCustomerID = $('#saleDetailsCustomerID').val();
	var saleDetailsCustomerName = $('#saleDetailsCustomerName').val();
	var saleDetailsSaleDate = $('#saleDetailsSaleDate').val();
	
	$.ajax({
		url: 'model/sale/insertSale.php',
		method: 'POST',
		data: {
			saleDetailsItemNumber:saleDetailsItemNumber,
			saleDetailsItemName:saleDetailsItemName,
			saleDetailsDiscount:saleDetailsDiscount,
			saleDetailsQuantity:saleDetailsQuantity,
			saleDetailsUnitPrice:saleDetailsUnitPrice,
			saleDetailsCustomerID:saleDetailsCustomerID,
			saleDetailsCustomerName:saleDetailsCustomerName,
			saleDetailsSaleDate:saleDetailsSaleDate,
		},
		success: function(data){
			$('#saleDetailsMessage').fadeIn();
			$('#saleDetailsMessage').html(data);
		},
		complete: function(){
			getItemStockToPopulate('saleDetailsItemNumber', getItemStockFile, 'saleDetailsTotalStock');
			populateLastInsertedID(saleLastInsertedIDFile, 'saleDetailsSaleID');
			searchTableCreator('saleDetailsTableDiv', saleDetailsSearchTableCreatorFile, 'saleDetailsTable');
			reportsSaleTableCreator('saleReportsTableDiv', saleReportsSearchTableCreatorFile, 'saleReportsTable');
			searchTableCreator('itemDetailsTableDiv', itemDetailsSearchTableCreatorFile, 'itemDetailsTable');
			reportsTableCreator('itemReportsTableDiv', itemReportsSearchTableCreatorFile, 'itemReportsTable');
		}
	});
}

function getItemDetailsToPopulate(){
	
	
	$.ajax({
		url: 'model/item/populateItemDetails.php',
		method: 'POST',
		data: {itemNumber:itemNumber},
		dataType: 'json',
		success: function(data){
			$('#itemDetailsProductID').val(data.productID);
			$('#itemDetailsItemName').val(data.itemName);
			$('#itemDetailsDiscount').val(data.discount);
			$('#itemDetailsTotalStock').val(data.stock);
			$('#itemDetailsUnitPrice').val(data.unitPrice);
			$('#itemDetailsDescription').val(data.description);

			
			
		}
	});
}



function getItemDetailsToPopulateForSaleTab(){
	
	
	$.ajax({
		url: 'model/item/populateItemDetails.php',
		method: 'POST',
		data: {itemNumber:itemNumber},
		dataType: 'json',
		success: function(data){
			$('#saleDetailsItemName').val(data.itemName);
			$('#saleDetailsDiscount').val(data.discount);
			$('#saleDetailsTotalStock').val(data.stock);
			$('#saleDetailsUnitPrice').val(data.unitPrice);

			
		},
		complete: function() {
			calculateTotalInSaleTab();
		}
	});
}

function getItemName(itemNumberTextBoxID, scriptPath, itemNameTextbox){
	var itemNumber = $('#' + itemNumberTextBoxID).val();
	$.ajax({
		url: scriptPath,
		method: 'POST',
		data: {itemNumber:itemNumber},
		dataType: 'json',
		success: function(data){
			$('#' + itemNameTextbox).val(data.itemName);
		},
		error: function (xhr, ajaxOptions, thrownError) {
      }
	});
}

function getItemStockToPopulate(itemNumberTextbox, scriptPath, stockTextbox){
	var itemNumber = $('#' + itemNumberTextbox).val();
	
	$.ajax({
		url: scriptPath,
		method: 'POST',
		data: {itemNumber:itemNumber},
		dataType: 'json',
		success: function(data){
			$('#' + stockTextbox).val(data.stock);
		},
		error: function (xhr, ajaxOptions, thrownError) {
        
      }
	});
}


function populateLastInsertedID(scriptPath, textBoxID){
	$.ajax({
		url: scriptPath,
		method: 'POST',
		dataType: 'json',
		success: function(data){
			$('#' + textBoxID).val(data);
		}
	});
}

function showSuggestions(textBoxID, scriptPath, suggestionsDivID){
	var textBoxValue = $('#' + textBoxID).val();
	
	if(textBoxValue != ''){
		$.ajax({
			url: scriptPath,
			method: 'POST',
			data: {textBoxValue:textBoxValue},
			success: function(data){
				$('#' + suggestionsDivID).fadeIn();
				$('#' + suggestionsDivID).html(data);
			}
		});
	}
}


function deleteItem(){
	var itemDetailsItemNumber = $('#itemDetailsItemNumber').val();
	if(itemDetailsItemNumber != ''){
		$.ajax({
			url: 'model/item/deleteItem.php',
			method: 'POST',
			data: {itemDetailsItemNumber:itemDetailsItemNumber},
			success: function(data){
				$('#itemDetailsMessage').fadeIn();
				$('#itemDetailsMessage').html(data);
			},
			complete: function(){
				searchTableCreator('itemDetailsTableDiv', itemDetailsSearchTableCreatorFile, 'itemDetailsTable');
				reportsTableCreator('itemReportsTableDiv', itemReportsSearchTableCreatorFile, 'itemReportsTable');
			}
		});
	}
}

function deleteCustomer(){
	var customerDetailsCustomerID = $('#customerDetailsCustomerID').val();

	if(customerDetailsCustomerID != ''){
		$.ajax({
			url: 'model/customer/deleteCustomer.php',
			method: 'POST',
			data: {customerDetailsCustomerID:customerDetailsCustomerID},
			success: function(data){
				$('#customerDetailsMessage').fadeIn();
				$('#customerDetailsMessage').html(data);
			},
			complete: function(){
				searchTableCreator('customerDetailsTableDiv', customerDetailsSearchTableCreatorFile, 'customerDetailsTable');
				reportsTableCreator('customerReportsTableDiv', customerReportsSearchTableCreatorFile, 'customerReportsTable');
			}
		});
	}
}


function deleteVendor(){
	var vendorDetailsVendorID = $('#vendorDetailsVendorID').val();
	
	if(vendorDetailsVendorID != ''){
		$.ajax({
			url: 'model/vendor/deleteVendor.php',
			method: 'POST',
			data: {vendorDetailsVendorID:vendorDetailsVendorID},
			success: function(data){
				$('#vendorDetailsMessage').fadeIn();
				$('#vendorDetailsMessage').html(data);
			},
			complete: function(){
				searchTableCreator('vendorDetailsTableDiv', vendorDetailsSearchTableCreatorFile, 'vendorDetailsTable');
				reportsTableCreator('vendorReportsTableDiv', vendorReportsSearchTableCreatorFile, 'vendorReportsTable');
			}
		});
	}
}

function getCustomerDetailsToPopulate(){
	var customerDetailsCustomerID = $('#customerDetailsCustomerID').val();
	$.ajax({
		url: 'model/customer/populateCustomerDetails.php',
		method: 'POST',
		data: {customerID:customerDetailsCustomerID},
		dataType: 'json',
		success: function(data){
			$('#customerDetailsCustomerFullName').val(data.fullName);
			$('#customerDetailsCustomerMobile').val(data.mobile);
			$('#customerDetailsCustomerPhone2').val(data.phone2);
			$('#customerDetailsCustomerEmail').val(data.email);
			$('#customerDetailsCustomerAddress').val(data.address);
			$('#customerDetailsCustomerAddress2').val(data.address2);
			$('#customerDetailsCustomerCity').val(data.city);
			$('#customerDetailsCustomerDistrict').val(data.district).trigger("chosen:updated");
			$('#customerDetailsGender').val(data.gender).trigger("chosen:updated");
		}
	});
}

function getCustomerDetailsToPopulateSaleTab(){
	var customerDetailsCustomerID = $('#saleDetailsCustomerID').val();
	
	$.ajax({
		url: 'model/customer/populateCustomerDetails.php',
		method: 'POST',
		data: {customerID:customerDetailsCustomerID},
		dataType: 'json',
		success: function(data){
			$('#saleDetailsCustomerName').val(data.fullName);
		}
	});
}



function getVendorDetailsToPopulate(){
	var vendorDetailsVendorID = $('#vendorDetailsVendorID').val();
	
	$.ajax({
		url: 'model/vendor/populateVendorDetails.php',
		method: 'POST',
		data: {vendorDetailsVendorID:vendorDetailsVendorID},
		dataType: 'json',
		success: function(data){
			$('#vendorDetailsVendorFullName').val(data.fullName);
			$('#vendorDetailsVendorMobile').val(data.mobile);
			$('#vendorDetailsVendorPhone2').val(data.phone2);
			$('#vendorDetailsVendorEmail').val(data.email);
			$('#vendorDetailsVendorAddress').val(data.address);
			$('#vendorDetailsVendorAddress2').val(data.address2);
			$('#vendorDetailsVendorCity').val(data.city);
			$('#vendorDetailsVendorDistrict').val(data.district).trigger("chosen:updated");
			$('#vendorDetailsGender').val(data.gender).trigger("chosen:updated");
		}
	});
}

function getPurchaseDetailsToPopulate(){
	var purchaseDetailsPurchaseID = $('#purchaseDetailsPurchaseID').val();
	
	$.ajax({
		url: 'model/purchase/populatePurchaseDetails.php',
		method: 'POST',
		data: {purchaseDetailsPurchaseID:purchaseDetailsPurchaseID},
		dataType: 'json',
		success: function(data){
			$('#purchaseDetailsItemNumber').val(data.itemNumber);
			$('#purchaseDetailsPurchaseDate').val(data.purchaseDate);
			$('#purchaseDetailsItemName').val(data.itemName);
			$('#purchaseDetailsQuantity').val(data.quantity);
			$('#purchaseDetailsUnitPrice').val(data.unitPrice);
			$('#purchaseDetailsVendorName').val(data.vendorName).trigger("chosen:updated");
		},
		complete: function(){
			calculateTotalInPurchaseTab();
			getItemStockToPopulate('purchaseDetailsItemNumber', getItemStockFile, 'purchaseDetailsCurrentStock');
		}
	});
}


function getSaleDetailsToPopulate(){
	var saleDetailsSaleID = $('#saleDetailsSaleID').val();
	
	$.ajax({
		url: 'model/sale/populateSaleDetails.php',
		method: 'POST',
		data: {saleDetailsSaleID:saleDetailsSaleID},
		dataType: 'json',
		success: function(data){
			$('#saleDetailsItemNumber').val(data.itemNumber);
			$('#saleDetailsCustomerID').val(data.customerID);
			$('#saleDetailsCustomerName').val(data.customerName);
			$('#saleDetailsItemName').val(data.itemName);
			$('#saleDetailsSaleDate').val(data.saleDate);
			$('#saleDetailsDiscount').val(data.discount);
			$('#saleDetailsQuantity').val(data.quantity);
			$('#saleDetailsUnitPrice').val(data.unitPrice);
		},
		complete: function(){
			calculateTotalInSaleTab();
			getItemStockToPopulate('saleDetailsItemNumber', getItemStockFile, 'saleDetailsTotalStock');
		}
	});
}


function updateItem() {
	var itemDetailsItemNumber = $('#itemDetailsItemNumber').val();
	var itemDetailsItemName = $('#itemDetailsItemName').val();
	var itemDetailsDiscount = $('#itemDetailsDiscount').val();
	var itemDetailsQuantity = $('#itemDetailsQuantity').val();
	var itemDetailsUnitPrice = $('#itemDetailsUnitPrice').val();
	var itemDetailsDescription = $('#itemDetailsDescription').val();
	
	$.ajax({
		url: 'model/item/updateItemDetails.php',
		method: 'POST',
		data: {
			itemNumber:itemDetailsItemNumber,
			itemDetailsItemName:itemDetailsItemName,
			itemDetailsDiscount:itemDetailsDiscount,
			itemDetailsQuantity:itemDetailsQuantity,
			itemDetailsUnitPrice:itemDetailsUnitPrice,
			itemDetailsDescription:itemDetailsDescription,
		},
		success: function(data){
			var result = $.parseJSON(data);
			$('#itemDetailsMessage').fadeIn();
			$('#itemDetailsMessage').html(result.alertMessage);
			if(result.newStock != null){
				$('#itemDetailsTotalStock').val(result.newStock);
			}
		},
		complete: function(){
			searchTableCreator('itemDetailsTableDiv', itemDetailsSearchTableCreatorFile, 'itemDetailsTable');			
			searchTableCreator('purchaseDetailsTableDiv', purchaseDetailsSearchTableCreatorFile, 'purchaseDetailsTable');
			searchTableCreator('saleDetailsTableDiv', saleDetailsSearchTableCreatorFile, 'saleDetailsTable');
			reportsTableCreator('itemReportsTableDiv', itemReportsSearchTableCreatorFile, 'itemReportsTable');
			reportsPurchaseTableCreator('purchaseReportsTableDiv', purchaseReportsSearchTableCreatorFile, 'purchaseReportsTable');
			reportsSaleTableCreator('saleReportsTableDiv', saleReportsSearchTableCreatorFile, 'saleReportsTable');
		}
	});
}


function updateCustomer() {
	var customerDetailsCustomerID = $('#customerDetailsCustomerID').val();
	var customerDetailsCustomerFullName = $('#customerDetailsCustomerFullName').val();
	var customerDetailsCustomerMobile = $('#customerDetailsCustomerMobile').val();
	var customerDetailsCustomerPhone2 = $('#customerDetailsCustomerPhone2').val();
	var customerDetailsCustomerAddress = $('#customerDetailsCustomerAddress').val();
	var customerDetailsCustomerEmail = $('#customerDetailsCustomerEmail').val();
	var customerDetailsCustomerAddress2 = $('#customerDetailsCustomerAddress2').val();
	var customerDetailsCustomerCity = $('#customerDetailsCustomerCity').val();
	var customerDetailsCustomerDistrict = $('#customerDetailsCustomerDistrict').val();
	var customerDetailsGender = $('#customerDetailsGender option:selected').text();
	
	$.ajax({
		url: 'model/customer/updateCustomerDetails.php',
		method: 'POST',
		data: {
			customerDetailsCustomerID:customerDetailsCustomerID,
			customerDetailsCustomerFullName:customerDetailsCustomerFullName,
			customerDetailsCustomerMobile:customerDetailsCustomerMobile,
			customerDetailsCustomerPhone2:customerDetailsCustomerPhone2,
			customerDetailsCustomerAddress:customerDetailsCustomerAddress,
			customerDetailsCustomerEmail:customerDetailsCustomerEmail,
			customerDetailsCustomerAddress2:customerDetailsCustomerAddress2,
			customerDetailsCustomerCity:customerDetailsCustomerCity,
			customerDetailsCustomerDistrict:customerDetailsCustomerDistrict,
			customerDetailsGender:customerDetailsGender,
		},
		success: function(data){
			$('#customerDetailsMessage').fadeIn();
			$('#customerDetailsMessage').html(data);
		},
		complete: function(){
			searchTableCreator('customerDetailsTableDiv', customerDetailsSearchTableCreatorFile, 'customerDetailsTable');
			reportsTableCreator('customerReportsTableDiv', customerReportsSearchTableCreatorFile, 'customerReportsTable');
			searchTableCreator('saleDetailsTableDiv', saleDetailsSearchTableCreatorFile, 'saleDetailsTable');
			reportsSaleTableCreator('saleReportsTableDiv', saleReportsSearchTableCreatorFile, 'saleReportsTable');
		}
	});
}


function updateVendor() {
	var vendorDetailsVendorID = $('#vendorDetailsVendorID').val();
	var vendorDetailsVendorFullName = $('#vendorDetailsVendorFullName').val();
	var vendorDetailsVendorMobile = $('#vendorDetailsVendorMobile').val();
	var vendorDetailsVendorPhone2 = $('#vendorDetailsVendorPhone2').val();
	var vendorDetailsVendorAddress = $('#vendorDetailsVendorAddress').val();
	var vendorDetailsVendorEmail = $('#vendorDetailsVendorEmail').val();
	var vendorDetailsVendorAddress2 = $('#vendorDetailsVendorAddress2').val();
	var vendorDetailsVendorCity = $('#vendorDetailsVendorCity').val();
	var vendorDetailsVendorDistrict = $('#vendorDetailsVendorDistrict').val();
	
	$.ajax({
		url: 'model/vendor/updateVendorDetails.php',
		method: 'POST',
		data: {
			vendorDetailsVendorID:vendorDetailsVendorID,
			vendorDetailsVendorFullName:vendorDetailsVendorFullName,
			vendorDetailsVendorMobile:vendorDetailsVendorMobile,
			vendorDetailsVendorPhone2:vendorDetailsVendorPhone2,
			vendorDetailsVendorAddress:vendorDetailsVendorAddress,
			vendorDetailsVendorEmail:vendorDetailsVendorEmail,
			vendorDetailsVendorAddress2:vendorDetailsVendorAddress2,
			vendorDetailsVendorCity:vendorDetailsVendorCity,
			vendorDetailsVendorDistrict:vendorDetailsVendorDistrict,
		},
		success: function(data){
			$('#vendorDetailsMessage').fadeIn();
			$('#vendorDetailsMessage').html(data);
		},
		complete: function(){
			searchTableCreator('purchaseDetailsTableDiv', purchaseDetailsSearchTableCreatorFile, 'purchaseDetailsTable');
			searchTableCreator('vendorDetailsTableDiv', vendorDetailsSearchTableCreatorFile, 'vendorDetailsTable');
			reportsPurchaseTableCreator('purchaseReportsTableDiv', purchaseReportsSearchTableCreatorFile, 'purchaseReportsTable');
			reportsTableCreator('vendorReportsTableDiv', vendorReportsSearchTableCreatorFile, 'vendorReportsTable');
		}
	});
}


function updatePurchase() {
	var purchaseDetailsItemNumber = $('#purchaseDetailsItemNumber').val();
	var purchaseDetailsPurchaseDate = $('#purchaseDetailsPurchaseDate').val();
	var purchaseDetailsItemName = $('#purchaseDetailsItemName').val();
	var purchaseDetailsQuantity = $('#purchaseDetailsQuantity').val();
	var purchaseDetailsUnitPrice = $('#purchaseDetailsUnitPrice').val();
	var purchaseDetailsPurchaseID = $('#purchaseDetailsPurchaseID').val();
	var purchaseDetailsVendorName = $('#purchaseDetailsVendorName').val();
	
	$.ajax({
		url: 'model/purchase/updatePurchase.php',
		method: 'POST',
		data: {
			purchaseDetailsItemNumber:purchaseDetailsItemNumber,
			purchaseDetailsPurchaseDate:purchaseDetailsPurchaseDate,
			purchaseDetailsItemName:purchaseDetailsItemName,
			purchaseDetailsQuantity:purchaseDetailsQuantity,
			purchaseDetailsUnitPrice:purchaseDetailsUnitPrice,
			purchaseDetailsPurchaseID:purchaseDetailsPurchaseID,
			purchaseDetailsVendorName:purchaseDetailsVendorName
		},
		success: function(data){
			$('#purchaseDetailsMessage').fadeIn();
			$('#purchaseDetailsMessage').html(data);
		},
		complete: function(){
			getItemStockToPopulate('purchaseDetailsItemNumber', getItemStockFile, 'purchaseDetailsCurrentStock');
			searchTableCreator('purchaseDetailsTableDiv', purchaseDetailsSearchTableCreatorFile, 'purchaseDetailsTable');
			reportsPurchaseTableCreator('purchaseReportsTableDiv', purchaseReportsSearchTableCreatorFile, 'purchaseReportsTable');
			searchTableCreator('itemDetailsTableDiv', itemDetailsSearchTableCreatorFile, 'itemDetailsTable');
			reportsTableCreator('itemReportsTableDiv', itemReportsSearchTableCreatorFile, 'itemReportsTable');
		}
	});
}


function updateSale() {
	var saleDetailsItemNumber = $('#saleDetailsItemNumber').val();
	var saleDetailsSaleDate = $('#saleDetailsSaleDate').val();
	var saleDetailsItemName = $('#saleDetailsItemName').val();
	var saleDetailsQuantity = $('#saleDetailsQuantity').val();
	var saleDetailsUnitPrice = $('#saleDetailsUnitPrice').val();
	var saleDetailsSaleID = $('#saleDetailsSaleID').val();
	var saleDetailsCustomerName = $('#saleDetailsCustomerName').val();
	var saleDetailsDiscount = $('#saleDetailsDiscount').val();
	var saleDetailsCustomerID = $('#saleDetailsCustomerID').val();
	
	$.ajax({
		url: 'model/sale/updateSale.php',
		method: 'POST',
		data: {
			saleDetailsItemNumber:saleDetailsItemNumber,
			saleDetailsSaleDate:saleDetailsSaleDate,
			saleDetailsItemName:saleDetailsItemName,
			saleDetailsQuantity:saleDetailsQuantity,
			saleDetailsUnitPrice:saleDetailsUnitPrice,
			saleDetailsSaleID:saleDetailsSaleID,
			saleDetailsCustomerName:saleDetailsCustomerName,
			saleDetailsDiscount:saleDetailsDiscount,
			saleDetailsCustomerID:saleDetailsCustomerID,
		},
		success: function(data){
			$('#saleDetailsMessage').fadeIn();
			$('#saleDetailsMessage').html(data);
		},
		complete: function(){			
			getItemStockToPopulate('saleDetailsItemNumber', getItemStockFile, 'saleDetailsTotalStock');
			searchTableCreator('saleDetailsTableDiv', saleDetailsSearchTableCreatorFile, 'saleDetailsTable');
			reportsSaleTableCreator('saleReportsTableDiv', saleReportsSearchTableCreatorFile, 'saleReportsTable');
			searchTableCreator('itemDetailsTableDiv', itemDetailsSearchTableCreatorFile, 'itemDetailsTable');
			reportsTableCreator('itemReportsTableDiv', itemReportsSearchTableCreatorFile, 'itemReportsTable');
		}
	});
}