// The main query as a string
const query = `
  query OrderQuery($empid: Int) {
    orders(where: {employeeid: {_eq: $empid}}) {
      customerid
      orderdetails(distinct_on: productid) {
        product {
          productname
        }
      }
    }
  }
`;
// the variables for our query
const variables = {
    empid: 3
};
// the actual payload
// this must be stringified before posting
const payload = {
    query: query,
    variables: variables
};

// Note that the end point will always be the same
// only the query and variables will change
// =====================================
// NOTE TO SELF:: SHOW ERROR SCENARIO
// =====================================
fetch("http://localhost:8085/v1/graphql", {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        "x-hasura-admin-secret": "admin123"
    },
    body: JSON.stringify(payload)
})
    .then(response => response.json())
    .then(data => {
      
      if(data.errors) {
        const errDetail = data.errors.map(err => err.message);
        console.log("GraphQL ERROR:", JSON.stringify(errDetail, null, 2));
      }else{
        console.log("GraphQL Response:", JSON.stringify(data, null, 2));
      } 
    });