'use strict';

var BaseModel = require('model-toolkit').BaseModel;
var uom = require('../master/uom');
module.exports = class DeliveryOrderItemFulfillment extends BaseModel {
    constructor(source) {
        super('delivery-order-item-fulfillment', '1.0.0');

        //Define Properties 
        this.purchaseOrderId = {};
        this.purchaseOrder = {};
        this.productId = {};
        this.product = {};
        this.purchaseOrderQuantity = 0;
        this.purchaseOrderUom = new uom();
        this.deliveredQuantity = 0;
        this.realizationQuantity = [];
        this.remark = '';

        this.copy(source);
    }
};