import {  gql  } from "@apollo/client/core/core.cjs";

export const PRODUCT_INFO_FRAGMENT = gql`
 fragment productDetails on orderdetails {
  product_info: product {
    productname
  }
}
`;

export default gql`
  query OrderQuery($empid: Int) {
    orders(where: {employeeid: {_eq: $empid}}) {
      customerid
      orderdetails {
        ...productDetails
      }
    }
  }

  ${PRODUCT_INFO_FRAGMENT}
`;