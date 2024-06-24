export const setupBusinessPartnerGroupData = {
    bpGroupCode: "Bp01", // BP Group Code : *  (ห้ามซ้ำ) (MAX 6 characters)
    bpGroupName: "BP Group Name", // BP Group Name : *
    bpGroupType: "Customer", // BP Group Type : *  (Vendor,Customer)
    chartOfAccount: "21203002", // Chart of Account : *
    status : "Active", // Status (Active,Inactive)
    subtype :  'เงินทดรองจ่าย', // Sub Type : *
}

export const setupBusinessPartnerData = {
    bpCodeDropdown : "Manual", // default คือ Manual
    bpCode : "M-V1", // BP Code : * (ห้ามซ้ำ)
    bpName : "TeKa Con", // BP Name : *
    bpGroup : "V00002 ผู้ให้บริการ SELECT ", // BP Group : *
    
    //Contact Persons Tab
    contactId : "m1", //Contact ID
    firstName : "mm", //First Name
    lastName : "m", //Last Name

    //Address Tab
    branchId : "1234", //Branch ID
    branchName : "BM", //Branch Name
    streetPOBox : "10", //Street / PO Box
    block : "test", //Block
    city : "test", //City
    zipcode : "123456", //Zip Code

    //Payment Terms Tab
    paymentTerms : "7Days", //Payment Terms : *
}