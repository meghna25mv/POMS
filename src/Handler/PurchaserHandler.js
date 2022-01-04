const express=require('express');
const service=require('../Service/PurchaserService');

/**
 * calling router from express
 */
const router=express.Router();


/**
 *  End points
 */

/**
  * get() to get all the purchase details
  */
router.get('/getDetails',service.getPurchaserDetails);

/**
 * post() to add the purchase details
 */
router.post('/addDetails',service.addPurchaserDetails);

/**
 * get() to get the purchase details according to object id
 */
router.get('/getDetailsById/:id',service.getDetailsById);

/**
 * get() approved details 
 */
router.get('/getApprovedDetails',service.getApprovedDetails);


/**
 * get() rejected details 
 */
 router.get('/getRejectedDetails',service.getRejectedDetails);


/**
 * put() to update the purchase approval according to object id
 */
router.put('/updateApprovalById/:id',service.updateApprovalById);

/**
 * delete() to delete the purchase details using any attribute in body
 */
router.delete('/delete/:id',service.delete);


/**
 * router response for function call
 */
module.exports=router;

