const BusinessPartnerGroup ={
    "BPGroupCode":"F-VA8",          //BP Group Code : *  (ห้ามซ้ำ)
    "BPGroupName":"FA-Vendor",     //BP Group Name : *
    "BPGroupType":"Vendor",       //BP Group Type : *  (Vendor,Customer)
    "ChartofAccount":"21203010",        //Chart of Account : *
    "Status":"Active",     //Status : * (Active.Inactive)
    "SubType":"A"            //Sub Type : * (A,P,SAP)
}

export default BusinessPartnerGroup;


export const BusinessPartner={
    "BPCode":"F-VA8",                //BP Code : *
    "BPName":"Teka Construction",       //BP Name : *
    "BPType1":"S",    //(S=Vendor ,C=Customer )
    "BPType2":"C",   //(C=Company ,I=Private)
    "BPName(EN)":"Teka Construction",  //BP Name (EN) :
    "FederalTaxID":"1234567890127",                  //Federal Tax ID :
    "BPGroup":"V00001",     //BP Group : *
//Tab  Contact Persons
    "ContactPersons":{
        "ContactID":"F-VA8",     //Contact ID :*
        "FirstName":"F-VA8",     //First Name :*
        "LastName":"F-VA8",      //Last Name :*
        "Position":"Tester",   //Position :*
        "Telephone1":"0000000000", //Telephone 1 :*
    }, 
   //Address   Ship To 
    "Address":{
        "BranchID":"1234",     //Branch ID   :*
        "BranchName":"Bangkok",        //Branch Name  :*
        "StreetPOBox":"10",         //Street / PO Box  :*
        "Block":"test",             //Block  :*
        "City":"test",              //City  :*
        "ZipCode":"123456",        //Zip Code  :*
    },    
     //PaymentTerms     
    "PaymentTerms":{
        "PaymentTermsCode":"7Days",         //Payment Terms : *
        "BankCode":"SCB",                   //Bank Code :*
        "BankAccount":"0000000000",        //Bank Account *
        "BankAccountName":"M1",            //Bank Account Name	
        "BICSWIFTCode":"000",             //BIC/SWIFT Code
        "Branch":"True",                  //Branch

    }      
}


