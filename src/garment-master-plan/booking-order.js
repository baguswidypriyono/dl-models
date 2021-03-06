'use strict';

var BaseModel = require('model-toolkit').BaseModel;
var BookingItem = require('./booking-order-item');

module.exports = class BookingOrder extends BaseModel {
    constructor(source) {
        super('booking-order', '1.0.0');

        // Define properties.   
        this.code='';
        this.bookingDate = new Date();
        this.deliveryDate = new Date();

        this.garmentBuyerId={};
        this.garmentBuyerName='';
        this.garmentBuyerCode='';

        this.garmentSectionId={};
        this.garmentSectionName='';
        this.garmentSectionCode='';

        this.orderQuantity=0;
        this.remark = '';
        this.isMasterPlan=false;
        this.isCanceled=false;

        this.expiredBookingOrder=0;
        this.expiredDeletedDate=null;
        this.canceledDate= null;

        this.items=[];
        this.canceledItems=[];

        this.canceledBookingOrder = 0;
        this.canceledDate = null;

        this.copy(source);

        this.items = (this.items || []).map(item => new BookingItem(item));
        this.canceledItems = (this.canceledItems || []).map((item) => {
            var bookingItem = new BookingItem(item);
            bookingItem.canceledDate = item.canceledDate ? new Date(item.canceledDate) : new Date();
            return bookingItem;
        });
    }
};
