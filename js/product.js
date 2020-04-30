"use strict";
$("#addProduct").click(function() { 
    
    const productNumber = $("#productNumber").val();
    const quantityInStock = $("#quantityInStock").val();
    const name = $('[name=name]').val();
    const suppliers = $("#suppliers").val();
    const unitPrice = $("#unitPrice").val();
    const dateSupplied = $("#dateSupplied").val();
    $(document.body).append('<div id="SummaryDiv"></div>');

    let htmlText = productNumber 
    + "\n" + quantityInStock 
    + "\n" + name 
    + "\n" + suppliers
    + "\n" + unitPrice
    + "\n" + dateSupplied;

    htmlText = htmlText.replace(/\n/g, "<br />");

    $('#SummaryDiv').html(htmlText);
    
    console.log(productNumber);
    console.log(quantityInStock);
    console.log(name);
    console.log(suppliers);
    console.log(unitPrice);
    console.log(dateSupplied);
    
});