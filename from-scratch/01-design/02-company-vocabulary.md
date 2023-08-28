# Company Vocabulary

API Details for the Company API

## Action Elements
Notes::
 * [R] indicates a required value
 * [D] indicates a default value

 * listCompanies
 * createCompany
   * companyName[R], streetAddress, city, stateProvince, postalCode, country(US[D]), telephone, email[R], status(pending[D])[R]
 * readCompany
   * companyId[R]
 * update
   * companyId[R], companyName[R], streetAddress, city, stateProvince, postalCode, country(US), telephone, email[R], status[R]
 * changeStatus
   * companyId[R], status[R]  
 * deleteCompany
   * companyId[R]
 * filterCompanies
   * status, country, state/province, companyName

## Data Elements
Notes::
 * [E] indicates an enumerator value
 * [G] indicates a server-generated value 
 * [U] indicates a unique value (UUID)
  
 * companyId[U]
 * companyName
 * streetAddress
 * city
 * stateProvince
 * postalCode
 * country
 * telephone
 * email
 * status[E]
 * dateCreated[G]
 * dateUpdated[G]

## Enumerator Elements
Notes::
 * [D] indicates a default value
 
 * status
   * pending[D]
   * active
   * suspended
   * closed
   
