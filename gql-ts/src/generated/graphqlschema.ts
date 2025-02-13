export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  numeric: { input: any; output: any; }
  timestamp: { input: any; output: any; }
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']['input']>;
  _gt?: InputMaybe<Scalars['Int']['input']>;
  _gte?: InputMaybe<Scalars['Int']['input']>;
  _in?: InputMaybe<Array<Scalars['Int']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['Int']['input']>;
  _lte?: InputMaybe<Scalars['Int']['input']>;
  _neq?: InputMaybe<Scalars['Int']['input']>;
  _nin?: InputMaybe<Array<Scalars['Int']['input']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']['input']>;
  _gt?: InputMaybe<Scalars['String']['input']>;
  _gte?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']['input']>;
  _in?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']['input']>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']['input']>;
  _lt?: InputMaybe<Scalars['String']['input']>;
  _lte?: InputMaybe<Scalars['String']['input']>;
  _neq?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']['input']>;
  _nin?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']['input']>;
};

/** columns and relationships of "categories" */
export type Categories = {
  __typename?: 'categories';
  categoryid: Scalars['Int']['output'];
  categoryname?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  /** An array relationship */
  products: Array<Products>;
  /** An aggregate relationship */
  products_aggregate: Products_Aggregate;
};


/** columns and relationships of "categories" */
export type CategoriesProductsArgs = {
  distinct_on?: InputMaybe<Array<Products_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Products_Order_By>>;
  where?: InputMaybe<Products_Bool_Exp>;
};


/** columns and relationships of "categories" */
export type CategoriesProducts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Products_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Products_Order_By>>;
  where?: InputMaybe<Products_Bool_Exp>;
};

/** aggregated selection of "categories" */
export type Categories_Aggregate = {
  __typename?: 'categories_aggregate';
  aggregate?: Maybe<Categories_Aggregate_Fields>;
  nodes: Array<Categories>;
};

/** aggregate fields of "categories" */
export type Categories_Aggregate_Fields = {
  __typename?: 'categories_aggregate_fields';
  avg?: Maybe<Categories_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Categories_Max_Fields>;
  min?: Maybe<Categories_Min_Fields>;
  stddev?: Maybe<Categories_Stddev_Fields>;
  stddev_pop?: Maybe<Categories_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Categories_Stddev_Samp_Fields>;
  sum?: Maybe<Categories_Sum_Fields>;
  var_pop?: Maybe<Categories_Var_Pop_Fields>;
  var_samp?: Maybe<Categories_Var_Samp_Fields>;
  variance?: Maybe<Categories_Variance_Fields>;
};


/** aggregate fields of "categories" */
export type Categories_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Categories_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Categories_Avg_Fields = {
  __typename?: 'categories_avg_fields';
  categoryid?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "categories". All fields are combined with a logical 'AND'. */
export type Categories_Bool_Exp = {
  _and?: InputMaybe<Array<Categories_Bool_Exp>>;
  _not?: InputMaybe<Categories_Bool_Exp>;
  _or?: InputMaybe<Array<Categories_Bool_Exp>>;
  categoryid?: InputMaybe<Int_Comparison_Exp>;
  categoryname?: InputMaybe<String_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  products?: InputMaybe<Products_Bool_Exp>;
  products_aggregate?: InputMaybe<Products_Aggregate_Bool_Exp>;
};

/** unique or primary key constraints on table "categories" */
export enum Categories_Constraint {
  /** unique or primary key constraint on columns "categoryid" */
  CategoriesPkey = 'categories_pkey'
}

/** input type for incrementing numeric columns in table "categories" */
export type Categories_Inc_Input = {
  categoryid?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "categories" */
export type Categories_Insert_Input = {
  categoryid?: InputMaybe<Scalars['Int']['input']>;
  categoryname?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  products?: InputMaybe<Products_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Categories_Max_Fields = {
  __typename?: 'categories_max_fields';
  categoryid?: Maybe<Scalars['Int']['output']>;
  categoryname?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Categories_Min_Fields = {
  __typename?: 'categories_min_fields';
  categoryid?: Maybe<Scalars['Int']['output']>;
  categoryname?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "categories" */
export type Categories_Mutation_Response = {
  __typename?: 'categories_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Categories>;
};

/** input type for inserting object relation for remote table "categories" */
export type Categories_Obj_Rel_Insert_Input = {
  data: Categories_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Categories_On_Conflict>;
};

/** on_conflict condition type for table "categories" */
export type Categories_On_Conflict = {
  constraint: Categories_Constraint;
  update_columns?: Array<Categories_Update_Column>;
  where?: InputMaybe<Categories_Bool_Exp>;
};

/** Ordering options when selecting data from "categories". */
export type Categories_Order_By = {
  categoryid?: InputMaybe<Order_By>;
  categoryname?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  products_aggregate?: InputMaybe<Products_Aggregate_Order_By>;
};

/** primary key columns input for table: categories */
export type Categories_Pk_Columns_Input = {
  categoryid: Scalars['Int']['input'];
};

/** select columns of table "categories" */
export enum Categories_Select_Column {
  /** column name */
  Categoryid = 'categoryid',
  /** column name */
  Categoryname = 'categoryname',
  /** column name */
  Description = 'description'
}

/** input type for updating data in table "categories" */
export type Categories_Set_Input = {
  categoryid?: InputMaybe<Scalars['Int']['input']>;
  categoryname?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate stddev on columns */
export type Categories_Stddev_Fields = {
  __typename?: 'categories_stddev_fields';
  categoryid?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Categories_Stddev_Pop_Fields = {
  __typename?: 'categories_stddev_pop_fields';
  categoryid?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Categories_Stddev_Samp_Fields = {
  __typename?: 'categories_stddev_samp_fields';
  categoryid?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "categories" */
export type Categories_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Categories_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Categories_Stream_Cursor_Value_Input = {
  categoryid?: InputMaybe<Scalars['Int']['input']>;
  categoryname?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate sum on columns */
export type Categories_Sum_Fields = {
  __typename?: 'categories_sum_fields';
  categoryid?: Maybe<Scalars['Int']['output']>;
};

/** update columns of table "categories" */
export enum Categories_Update_Column {
  /** column name */
  Categoryid = 'categoryid',
  /** column name */
  Categoryname = 'categoryname',
  /** column name */
  Description = 'description'
}

export type Categories_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Categories_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Categories_Set_Input>;
  /** filter the rows which have to be updated */
  where: Categories_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Categories_Var_Pop_Fields = {
  __typename?: 'categories_var_pop_fields';
  categoryid?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Categories_Var_Samp_Fields = {
  __typename?: 'categories_var_samp_fields';
  categoryid?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Categories_Variance_Fields = {
  __typename?: 'categories_variance_fields';
  categoryid?: Maybe<Scalars['Float']['output']>;
};

/** ordering argument of a cursor */
export enum Cursor_Ordering {
  /** ascending ordering of the cursor */
  Asc = 'ASC',
  /** descending ordering of the cursor */
  Desc = 'DESC'
}

/** columns and relationships of "customers" */
export type Customers = {
  __typename?: 'customers';
  address?: Maybe<Scalars['String']['output']>;
  city?: Maybe<Scalars['String']['output']>;
  contactname?: Maybe<Scalars['String']['output']>;
  country?: Maybe<Scalars['String']['output']>;
  customerid: Scalars['Int']['output'];
  customername?: Maybe<Scalars['String']['output']>;
  /** An array relationship */
  orders: Array<Orders>;
  /** An aggregate relationship */
  orders_aggregate: Orders_Aggregate;
  postalcode?: Maybe<Scalars['String']['output']>;
};


/** columns and relationships of "customers" */
export type CustomersOrdersArgs = {
  distinct_on?: InputMaybe<Array<Orders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Orders_Order_By>>;
  where?: InputMaybe<Orders_Bool_Exp>;
};


/** columns and relationships of "customers" */
export type CustomersOrders_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Orders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Orders_Order_By>>;
  where?: InputMaybe<Orders_Bool_Exp>;
};

/** aggregated selection of "customers" */
export type Customers_Aggregate = {
  __typename?: 'customers_aggregate';
  aggregate?: Maybe<Customers_Aggregate_Fields>;
  nodes: Array<Customers>;
};

/** aggregate fields of "customers" */
export type Customers_Aggregate_Fields = {
  __typename?: 'customers_aggregate_fields';
  avg?: Maybe<Customers_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Customers_Max_Fields>;
  min?: Maybe<Customers_Min_Fields>;
  stddev?: Maybe<Customers_Stddev_Fields>;
  stddev_pop?: Maybe<Customers_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Customers_Stddev_Samp_Fields>;
  sum?: Maybe<Customers_Sum_Fields>;
  var_pop?: Maybe<Customers_Var_Pop_Fields>;
  var_samp?: Maybe<Customers_Var_Samp_Fields>;
  variance?: Maybe<Customers_Variance_Fields>;
};


/** aggregate fields of "customers" */
export type Customers_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Customers_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Customers_Avg_Fields = {
  __typename?: 'customers_avg_fields';
  customerid?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "customers". All fields are combined with a logical 'AND'. */
export type Customers_Bool_Exp = {
  _and?: InputMaybe<Array<Customers_Bool_Exp>>;
  _not?: InputMaybe<Customers_Bool_Exp>;
  _or?: InputMaybe<Array<Customers_Bool_Exp>>;
  address?: InputMaybe<String_Comparison_Exp>;
  city?: InputMaybe<String_Comparison_Exp>;
  contactname?: InputMaybe<String_Comparison_Exp>;
  country?: InputMaybe<String_Comparison_Exp>;
  customerid?: InputMaybe<Int_Comparison_Exp>;
  customername?: InputMaybe<String_Comparison_Exp>;
  orders?: InputMaybe<Orders_Bool_Exp>;
  orders_aggregate?: InputMaybe<Orders_Aggregate_Bool_Exp>;
  postalcode?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "customers" */
export enum Customers_Constraint {
  /** unique or primary key constraint on columns "customerid" */
  CustomersPkey = 'customers_pkey'
}

/** input type for incrementing numeric columns in table "customers" */
export type Customers_Inc_Input = {
  customerid?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "customers" */
export type Customers_Insert_Input = {
  address?: InputMaybe<Scalars['String']['input']>;
  city?: InputMaybe<Scalars['String']['input']>;
  contactname?: InputMaybe<Scalars['String']['input']>;
  country?: InputMaybe<Scalars['String']['input']>;
  customerid?: InputMaybe<Scalars['Int']['input']>;
  customername?: InputMaybe<Scalars['String']['input']>;
  orders?: InputMaybe<Orders_Arr_Rel_Insert_Input>;
  postalcode?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Customers_Max_Fields = {
  __typename?: 'customers_max_fields';
  address?: Maybe<Scalars['String']['output']>;
  city?: Maybe<Scalars['String']['output']>;
  contactname?: Maybe<Scalars['String']['output']>;
  country?: Maybe<Scalars['String']['output']>;
  customerid?: Maybe<Scalars['Int']['output']>;
  customername?: Maybe<Scalars['String']['output']>;
  postalcode?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Customers_Min_Fields = {
  __typename?: 'customers_min_fields';
  address?: Maybe<Scalars['String']['output']>;
  city?: Maybe<Scalars['String']['output']>;
  contactname?: Maybe<Scalars['String']['output']>;
  country?: Maybe<Scalars['String']['output']>;
  customerid?: Maybe<Scalars['Int']['output']>;
  customername?: Maybe<Scalars['String']['output']>;
  postalcode?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "customers" */
export type Customers_Mutation_Response = {
  __typename?: 'customers_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Customers>;
};

/** input type for inserting object relation for remote table "customers" */
export type Customers_Obj_Rel_Insert_Input = {
  data: Customers_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Customers_On_Conflict>;
};

/** on_conflict condition type for table "customers" */
export type Customers_On_Conflict = {
  constraint: Customers_Constraint;
  update_columns?: Array<Customers_Update_Column>;
  where?: InputMaybe<Customers_Bool_Exp>;
};

/** Ordering options when selecting data from "customers". */
export type Customers_Order_By = {
  address?: InputMaybe<Order_By>;
  city?: InputMaybe<Order_By>;
  contactname?: InputMaybe<Order_By>;
  country?: InputMaybe<Order_By>;
  customerid?: InputMaybe<Order_By>;
  customername?: InputMaybe<Order_By>;
  orders_aggregate?: InputMaybe<Orders_Aggregate_Order_By>;
  postalcode?: InputMaybe<Order_By>;
};

/** primary key columns input for table: customers */
export type Customers_Pk_Columns_Input = {
  customerid: Scalars['Int']['input'];
};

/** select columns of table "customers" */
export enum Customers_Select_Column {
  /** column name */
  Address = 'address',
  /** column name */
  City = 'city',
  /** column name */
  Contactname = 'contactname',
  /** column name */
  Country = 'country',
  /** column name */
  Customerid = 'customerid',
  /** column name */
  Customername = 'customername',
  /** column name */
  Postalcode = 'postalcode'
}

/** input type for updating data in table "customers" */
export type Customers_Set_Input = {
  address?: InputMaybe<Scalars['String']['input']>;
  city?: InputMaybe<Scalars['String']['input']>;
  contactname?: InputMaybe<Scalars['String']['input']>;
  country?: InputMaybe<Scalars['String']['input']>;
  customerid?: InputMaybe<Scalars['Int']['input']>;
  customername?: InputMaybe<Scalars['String']['input']>;
  postalcode?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate stddev on columns */
export type Customers_Stddev_Fields = {
  __typename?: 'customers_stddev_fields';
  customerid?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Customers_Stddev_Pop_Fields = {
  __typename?: 'customers_stddev_pop_fields';
  customerid?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Customers_Stddev_Samp_Fields = {
  __typename?: 'customers_stddev_samp_fields';
  customerid?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "customers" */
export type Customers_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Customers_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Customers_Stream_Cursor_Value_Input = {
  address?: InputMaybe<Scalars['String']['input']>;
  city?: InputMaybe<Scalars['String']['input']>;
  contactname?: InputMaybe<Scalars['String']['input']>;
  country?: InputMaybe<Scalars['String']['input']>;
  customerid?: InputMaybe<Scalars['Int']['input']>;
  customername?: InputMaybe<Scalars['String']['input']>;
  postalcode?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate sum on columns */
export type Customers_Sum_Fields = {
  __typename?: 'customers_sum_fields';
  customerid?: Maybe<Scalars['Int']['output']>;
};

/** update columns of table "customers" */
export enum Customers_Update_Column {
  /** column name */
  Address = 'address',
  /** column name */
  City = 'city',
  /** column name */
  Contactname = 'contactname',
  /** column name */
  Country = 'country',
  /** column name */
  Customerid = 'customerid',
  /** column name */
  Customername = 'customername',
  /** column name */
  Postalcode = 'postalcode'
}

export type Customers_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Customers_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Customers_Set_Input>;
  /** filter the rows which have to be updated */
  where: Customers_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Customers_Var_Pop_Fields = {
  __typename?: 'customers_var_pop_fields';
  customerid?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Customers_Var_Samp_Fields = {
  __typename?: 'customers_var_samp_fields';
  customerid?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Customers_Variance_Fields = {
  __typename?: 'customers_variance_fields';
  customerid?: Maybe<Scalars['Float']['output']>;
};

/** columns and relationships of "employees" */
export type Employees = {
  __typename?: 'employees';
  birthdate?: Maybe<Scalars['timestamp']['output']>;
  employeeid: Scalars['Int']['output'];
  firstname?: Maybe<Scalars['String']['output']>;
  lastname?: Maybe<Scalars['String']['output']>;
  notes?: Maybe<Scalars['String']['output']>;
  /** An array relationship */
  orders: Array<Orders>;
  /** An aggregate relationship */
  orders_aggregate: Orders_Aggregate;
  photo?: Maybe<Scalars['String']['output']>;
};


/** columns and relationships of "employees" */
export type EmployeesOrdersArgs = {
  distinct_on?: InputMaybe<Array<Orders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Orders_Order_By>>;
  where?: InputMaybe<Orders_Bool_Exp>;
};


/** columns and relationships of "employees" */
export type EmployeesOrders_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Orders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Orders_Order_By>>;
  where?: InputMaybe<Orders_Bool_Exp>;
};

/** aggregated selection of "employees" */
export type Employees_Aggregate = {
  __typename?: 'employees_aggregate';
  aggregate?: Maybe<Employees_Aggregate_Fields>;
  nodes: Array<Employees>;
};

/** aggregate fields of "employees" */
export type Employees_Aggregate_Fields = {
  __typename?: 'employees_aggregate_fields';
  avg?: Maybe<Employees_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Employees_Max_Fields>;
  min?: Maybe<Employees_Min_Fields>;
  stddev?: Maybe<Employees_Stddev_Fields>;
  stddev_pop?: Maybe<Employees_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Employees_Stddev_Samp_Fields>;
  sum?: Maybe<Employees_Sum_Fields>;
  var_pop?: Maybe<Employees_Var_Pop_Fields>;
  var_samp?: Maybe<Employees_Var_Samp_Fields>;
  variance?: Maybe<Employees_Variance_Fields>;
};


/** aggregate fields of "employees" */
export type Employees_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Employees_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Employees_Avg_Fields = {
  __typename?: 'employees_avg_fields';
  employeeid?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "employees". All fields are combined with a logical 'AND'. */
export type Employees_Bool_Exp = {
  _and?: InputMaybe<Array<Employees_Bool_Exp>>;
  _not?: InputMaybe<Employees_Bool_Exp>;
  _or?: InputMaybe<Array<Employees_Bool_Exp>>;
  birthdate?: InputMaybe<Timestamp_Comparison_Exp>;
  employeeid?: InputMaybe<Int_Comparison_Exp>;
  firstname?: InputMaybe<String_Comparison_Exp>;
  lastname?: InputMaybe<String_Comparison_Exp>;
  notes?: InputMaybe<String_Comparison_Exp>;
  orders?: InputMaybe<Orders_Bool_Exp>;
  orders_aggregate?: InputMaybe<Orders_Aggregate_Bool_Exp>;
  photo?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "employees" */
export enum Employees_Constraint {
  /** unique or primary key constraint on columns "employeeid" */
  EmployeesPkey = 'employees_pkey'
}

/** input type for incrementing numeric columns in table "employees" */
export type Employees_Inc_Input = {
  employeeid?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "employees" */
export type Employees_Insert_Input = {
  birthdate?: InputMaybe<Scalars['timestamp']['input']>;
  employeeid?: InputMaybe<Scalars['Int']['input']>;
  firstname?: InputMaybe<Scalars['String']['input']>;
  lastname?: InputMaybe<Scalars['String']['input']>;
  notes?: InputMaybe<Scalars['String']['input']>;
  orders?: InputMaybe<Orders_Arr_Rel_Insert_Input>;
  photo?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Employees_Max_Fields = {
  __typename?: 'employees_max_fields';
  birthdate?: Maybe<Scalars['timestamp']['output']>;
  employeeid?: Maybe<Scalars['Int']['output']>;
  firstname?: Maybe<Scalars['String']['output']>;
  lastname?: Maybe<Scalars['String']['output']>;
  notes?: Maybe<Scalars['String']['output']>;
  photo?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Employees_Min_Fields = {
  __typename?: 'employees_min_fields';
  birthdate?: Maybe<Scalars['timestamp']['output']>;
  employeeid?: Maybe<Scalars['Int']['output']>;
  firstname?: Maybe<Scalars['String']['output']>;
  lastname?: Maybe<Scalars['String']['output']>;
  notes?: Maybe<Scalars['String']['output']>;
  photo?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "employees" */
export type Employees_Mutation_Response = {
  __typename?: 'employees_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Employees>;
};

/** input type for inserting object relation for remote table "employees" */
export type Employees_Obj_Rel_Insert_Input = {
  data: Employees_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Employees_On_Conflict>;
};

/** on_conflict condition type for table "employees" */
export type Employees_On_Conflict = {
  constraint: Employees_Constraint;
  update_columns?: Array<Employees_Update_Column>;
  where?: InputMaybe<Employees_Bool_Exp>;
};

/** Ordering options when selecting data from "employees". */
export type Employees_Order_By = {
  birthdate?: InputMaybe<Order_By>;
  employeeid?: InputMaybe<Order_By>;
  firstname?: InputMaybe<Order_By>;
  lastname?: InputMaybe<Order_By>;
  notes?: InputMaybe<Order_By>;
  orders_aggregate?: InputMaybe<Orders_Aggregate_Order_By>;
  photo?: InputMaybe<Order_By>;
};

/** primary key columns input for table: employees */
export type Employees_Pk_Columns_Input = {
  employeeid: Scalars['Int']['input'];
};

/** select columns of table "employees" */
export enum Employees_Select_Column {
  /** column name */
  Birthdate = 'birthdate',
  /** column name */
  Employeeid = 'employeeid',
  /** column name */
  Firstname = 'firstname',
  /** column name */
  Lastname = 'lastname',
  /** column name */
  Notes = 'notes',
  /** column name */
  Photo = 'photo'
}

/** input type for updating data in table "employees" */
export type Employees_Set_Input = {
  birthdate?: InputMaybe<Scalars['timestamp']['input']>;
  employeeid?: InputMaybe<Scalars['Int']['input']>;
  firstname?: InputMaybe<Scalars['String']['input']>;
  lastname?: InputMaybe<Scalars['String']['input']>;
  notes?: InputMaybe<Scalars['String']['input']>;
  photo?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate stddev on columns */
export type Employees_Stddev_Fields = {
  __typename?: 'employees_stddev_fields';
  employeeid?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Employees_Stddev_Pop_Fields = {
  __typename?: 'employees_stddev_pop_fields';
  employeeid?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Employees_Stddev_Samp_Fields = {
  __typename?: 'employees_stddev_samp_fields';
  employeeid?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "employees" */
export type Employees_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Employees_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Employees_Stream_Cursor_Value_Input = {
  birthdate?: InputMaybe<Scalars['timestamp']['input']>;
  employeeid?: InputMaybe<Scalars['Int']['input']>;
  firstname?: InputMaybe<Scalars['String']['input']>;
  lastname?: InputMaybe<Scalars['String']['input']>;
  notes?: InputMaybe<Scalars['String']['input']>;
  photo?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate sum on columns */
export type Employees_Sum_Fields = {
  __typename?: 'employees_sum_fields';
  employeeid?: Maybe<Scalars['Int']['output']>;
};

/** update columns of table "employees" */
export enum Employees_Update_Column {
  /** column name */
  Birthdate = 'birthdate',
  /** column name */
  Employeeid = 'employeeid',
  /** column name */
  Firstname = 'firstname',
  /** column name */
  Lastname = 'lastname',
  /** column name */
  Notes = 'notes',
  /** column name */
  Photo = 'photo'
}

export type Employees_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Employees_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Employees_Set_Input>;
  /** filter the rows which have to be updated */
  where: Employees_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Employees_Var_Pop_Fields = {
  __typename?: 'employees_var_pop_fields';
  employeeid?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Employees_Var_Samp_Fields = {
  __typename?: 'employees_var_samp_fields';
  employeeid?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Employees_Variance_Fields = {
  __typename?: 'employees_variance_fields';
  employeeid?: Maybe<Scalars['Float']['output']>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "categories" */
  delete_categories?: Maybe<Categories_Mutation_Response>;
  /** delete single row from the table: "categories" */
  delete_categories_by_pk?: Maybe<Categories>;
  /** delete data from the table: "customers" */
  delete_customers?: Maybe<Customers_Mutation_Response>;
  /** delete single row from the table: "customers" */
  delete_customers_by_pk?: Maybe<Customers>;
  /** delete data from the table: "employees" */
  delete_employees?: Maybe<Employees_Mutation_Response>;
  /** delete single row from the table: "employees" */
  delete_employees_by_pk?: Maybe<Employees>;
  /** delete data from the table: "orderdetails" */
  delete_orderdetails?: Maybe<Orderdetails_Mutation_Response>;
  /** delete single row from the table: "orderdetails" */
  delete_orderdetails_by_pk?: Maybe<Orderdetails>;
  /** delete data from the table: "orders" */
  delete_orders?: Maybe<Orders_Mutation_Response>;
  /** delete single row from the table: "orders" */
  delete_orders_by_pk?: Maybe<Orders>;
  /** delete data from the table: "products" */
  delete_products?: Maybe<Products_Mutation_Response>;
  /** delete single row from the table: "products" */
  delete_products_by_pk?: Maybe<Products>;
  /** delete data from the table: "shippers" */
  delete_shippers?: Maybe<Shippers_Mutation_Response>;
  /** delete single row from the table: "shippers" */
  delete_shippers_by_pk?: Maybe<Shippers>;
  /** delete data from the table: "suppliers" */
  delete_suppliers?: Maybe<Suppliers_Mutation_Response>;
  /** delete single row from the table: "suppliers" */
  delete_suppliers_by_pk?: Maybe<Suppliers>;
  /** insert data into the table: "categories" */
  insert_categories?: Maybe<Categories_Mutation_Response>;
  /** insert a single row into the table: "categories" */
  insert_categories_one?: Maybe<Categories>;
  /** insert data into the table: "customers" */
  insert_customers?: Maybe<Customers_Mutation_Response>;
  /** insert a single row into the table: "customers" */
  insert_customers_one?: Maybe<Customers>;
  /** insert data into the table: "employees" */
  insert_employees?: Maybe<Employees_Mutation_Response>;
  /** insert a single row into the table: "employees" */
  insert_employees_one?: Maybe<Employees>;
  /** insert data into the table: "orderdetails" */
  insert_orderdetails?: Maybe<Orderdetails_Mutation_Response>;
  /** insert a single row into the table: "orderdetails" */
  insert_orderdetails_one?: Maybe<Orderdetails>;
  /** insert data into the table: "orders" */
  insert_orders?: Maybe<Orders_Mutation_Response>;
  /** insert a single row into the table: "orders" */
  insert_orders_one?: Maybe<Orders>;
  /** insert data into the table: "products" */
  insert_products?: Maybe<Products_Mutation_Response>;
  /** insert a single row into the table: "products" */
  insert_products_one?: Maybe<Products>;
  /** insert data into the table: "shippers" */
  insert_shippers?: Maybe<Shippers_Mutation_Response>;
  /** insert a single row into the table: "shippers" */
  insert_shippers_one?: Maybe<Shippers>;
  /** insert data into the table: "suppliers" */
  insert_suppliers?: Maybe<Suppliers_Mutation_Response>;
  /** insert a single row into the table: "suppliers" */
  insert_suppliers_one?: Maybe<Suppliers>;
  /** update data of the table: "categories" */
  update_categories?: Maybe<Categories_Mutation_Response>;
  /** update single row of the table: "categories" */
  update_categories_by_pk?: Maybe<Categories>;
  /** update multiples rows of table: "categories" */
  update_categories_many?: Maybe<Array<Maybe<Categories_Mutation_Response>>>;
  /** update data of the table: "customers" */
  update_customers?: Maybe<Customers_Mutation_Response>;
  /** update single row of the table: "customers" */
  update_customers_by_pk?: Maybe<Customers>;
  /** update multiples rows of table: "customers" */
  update_customers_many?: Maybe<Array<Maybe<Customers_Mutation_Response>>>;
  /** update data of the table: "employees" */
  update_employees?: Maybe<Employees_Mutation_Response>;
  /** update single row of the table: "employees" */
  update_employees_by_pk?: Maybe<Employees>;
  /** update multiples rows of table: "employees" */
  update_employees_many?: Maybe<Array<Maybe<Employees_Mutation_Response>>>;
  /** update data of the table: "orderdetails" */
  update_orderdetails?: Maybe<Orderdetails_Mutation_Response>;
  /** update single row of the table: "orderdetails" */
  update_orderdetails_by_pk?: Maybe<Orderdetails>;
  /** update multiples rows of table: "orderdetails" */
  update_orderdetails_many?: Maybe<Array<Maybe<Orderdetails_Mutation_Response>>>;
  /** update data of the table: "orders" */
  update_orders?: Maybe<Orders_Mutation_Response>;
  /** update single row of the table: "orders" */
  update_orders_by_pk?: Maybe<Orders>;
  /** update multiples rows of table: "orders" */
  update_orders_many?: Maybe<Array<Maybe<Orders_Mutation_Response>>>;
  /** update data of the table: "products" */
  update_products?: Maybe<Products_Mutation_Response>;
  /** update single row of the table: "products" */
  update_products_by_pk?: Maybe<Products>;
  /** update multiples rows of table: "products" */
  update_products_many?: Maybe<Array<Maybe<Products_Mutation_Response>>>;
  /** update data of the table: "shippers" */
  update_shippers?: Maybe<Shippers_Mutation_Response>;
  /** update single row of the table: "shippers" */
  update_shippers_by_pk?: Maybe<Shippers>;
  /** update multiples rows of table: "shippers" */
  update_shippers_many?: Maybe<Array<Maybe<Shippers_Mutation_Response>>>;
  /** update data of the table: "suppliers" */
  update_suppliers?: Maybe<Suppliers_Mutation_Response>;
  /** update single row of the table: "suppliers" */
  update_suppliers_by_pk?: Maybe<Suppliers>;
  /** update multiples rows of table: "suppliers" */
  update_suppliers_many?: Maybe<Array<Maybe<Suppliers_Mutation_Response>>>;
};


/** mutation root */
export type Mutation_RootDelete_CategoriesArgs = {
  where: Categories_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Categories_By_PkArgs = {
  categoryid: Scalars['Int']['input'];
};


/** mutation root */
export type Mutation_RootDelete_CustomersArgs = {
  where: Customers_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Customers_By_PkArgs = {
  customerid: Scalars['Int']['input'];
};


/** mutation root */
export type Mutation_RootDelete_EmployeesArgs = {
  where: Employees_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Employees_By_PkArgs = {
  employeeid: Scalars['Int']['input'];
};


/** mutation root */
export type Mutation_RootDelete_OrderdetailsArgs = {
  where: Orderdetails_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Orderdetails_By_PkArgs = {
  orderdetailid: Scalars['Int']['input'];
};


/** mutation root */
export type Mutation_RootDelete_OrdersArgs = {
  where: Orders_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Orders_By_PkArgs = {
  orderid: Scalars['Int']['input'];
};


/** mutation root */
export type Mutation_RootDelete_ProductsArgs = {
  where: Products_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Products_By_PkArgs = {
  productid: Scalars['Int']['input'];
};


/** mutation root */
export type Mutation_RootDelete_ShippersArgs = {
  where: Shippers_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Shippers_By_PkArgs = {
  shipperid: Scalars['Int']['input'];
};


/** mutation root */
export type Mutation_RootDelete_SuppliersArgs = {
  where: Suppliers_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Suppliers_By_PkArgs = {
  supplierid: Scalars['Int']['input'];
};


/** mutation root */
export type Mutation_RootInsert_CategoriesArgs = {
  objects: Array<Categories_Insert_Input>;
  on_conflict?: InputMaybe<Categories_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Categories_OneArgs = {
  object: Categories_Insert_Input;
  on_conflict?: InputMaybe<Categories_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_CustomersArgs = {
  objects: Array<Customers_Insert_Input>;
  on_conflict?: InputMaybe<Customers_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Customers_OneArgs = {
  object: Customers_Insert_Input;
  on_conflict?: InputMaybe<Customers_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_EmployeesArgs = {
  objects: Array<Employees_Insert_Input>;
  on_conflict?: InputMaybe<Employees_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Employees_OneArgs = {
  object: Employees_Insert_Input;
  on_conflict?: InputMaybe<Employees_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_OrderdetailsArgs = {
  objects: Array<Orderdetails_Insert_Input>;
  on_conflict?: InputMaybe<Orderdetails_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Orderdetails_OneArgs = {
  object: Orderdetails_Insert_Input;
  on_conflict?: InputMaybe<Orderdetails_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_OrdersArgs = {
  objects: Array<Orders_Insert_Input>;
  on_conflict?: InputMaybe<Orders_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Orders_OneArgs = {
  object: Orders_Insert_Input;
  on_conflict?: InputMaybe<Orders_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_ProductsArgs = {
  objects: Array<Products_Insert_Input>;
  on_conflict?: InputMaybe<Products_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Products_OneArgs = {
  object: Products_Insert_Input;
  on_conflict?: InputMaybe<Products_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_ShippersArgs = {
  objects: Array<Shippers_Insert_Input>;
  on_conflict?: InputMaybe<Shippers_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Shippers_OneArgs = {
  object: Shippers_Insert_Input;
  on_conflict?: InputMaybe<Shippers_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_SuppliersArgs = {
  objects: Array<Suppliers_Insert_Input>;
  on_conflict?: InputMaybe<Suppliers_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Suppliers_OneArgs = {
  object: Suppliers_Insert_Input;
  on_conflict?: InputMaybe<Suppliers_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_CategoriesArgs = {
  _inc?: InputMaybe<Categories_Inc_Input>;
  _set?: InputMaybe<Categories_Set_Input>;
  where: Categories_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Categories_By_PkArgs = {
  _inc?: InputMaybe<Categories_Inc_Input>;
  _set?: InputMaybe<Categories_Set_Input>;
  pk_columns: Categories_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Categories_ManyArgs = {
  updates: Array<Categories_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_CustomersArgs = {
  _inc?: InputMaybe<Customers_Inc_Input>;
  _set?: InputMaybe<Customers_Set_Input>;
  where: Customers_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Customers_By_PkArgs = {
  _inc?: InputMaybe<Customers_Inc_Input>;
  _set?: InputMaybe<Customers_Set_Input>;
  pk_columns: Customers_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Customers_ManyArgs = {
  updates: Array<Customers_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_EmployeesArgs = {
  _inc?: InputMaybe<Employees_Inc_Input>;
  _set?: InputMaybe<Employees_Set_Input>;
  where: Employees_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Employees_By_PkArgs = {
  _inc?: InputMaybe<Employees_Inc_Input>;
  _set?: InputMaybe<Employees_Set_Input>;
  pk_columns: Employees_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Employees_ManyArgs = {
  updates: Array<Employees_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_OrderdetailsArgs = {
  _inc?: InputMaybe<Orderdetails_Inc_Input>;
  _set?: InputMaybe<Orderdetails_Set_Input>;
  where: Orderdetails_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Orderdetails_By_PkArgs = {
  _inc?: InputMaybe<Orderdetails_Inc_Input>;
  _set?: InputMaybe<Orderdetails_Set_Input>;
  pk_columns: Orderdetails_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Orderdetails_ManyArgs = {
  updates: Array<Orderdetails_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_OrdersArgs = {
  _inc?: InputMaybe<Orders_Inc_Input>;
  _set?: InputMaybe<Orders_Set_Input>;
  where: Orders_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Orders_By_PkArgs = {
  _inc?: InputMaybe<Orders_Inc_Input>;
  _set?: InputMaybe<Orders_Set_Input>;
  pk_columns: Orders_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Orders_ManyArgs = {
  updates: Array<Orders_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_ProductsArgs = {
  _inc?: InputMaybe<Products_Inc_Input>;
  _set?: InputMaybe<Products_Set_Input>;
  where: Products_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Products_By_PkArgs = {
  _inc?: InputMaybe<Products_Inc_Input>;
  _set?: InputMaybe<Products_Set_Input>;
  pk_columns: Products_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Products_ManyArgs = {
  updates: Array<Products_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_ShippersArgs = {
  _inc?: InputMaybe<Shippers_Inc_Input>;
  _set?: InputMaybe<Shippers_Set_Input>;
  where: Shippers_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Shippers_By_PkArgs = {
  _inc?: InputMaybe<Shippers_Inc_Input>;
  _set?: InputMaybe<Shippers_Set_Input>;
  pk_columns: Shippers_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Shippers_ManyArgs = {
  updates: Array<Shippers_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_SuppliersArgs = {
  _inc?: InputMaybe<Suppliers_Inc_Input>;
  _set?: InputMaybe<Suppliers_Set_Input>;
  where: Suppliers_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Suppliers_By_PkArgs = {
  _inc?: InputMaybe<Suppliers_Inc_Input>;
  _set?: InputMaybe<Suppliers_Set_Input>;
  pk_columns: Suppliers_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Suppliers_ManyArgs = {
  updates: Array<Suppliers_Updates>;
};

/** Boolean expression to compare columns of type "numeric". All fields are combined with logical 'AND'. */
export type Numeric_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['numeric']['input']>;
  _gt?: InputMaybe<Scalars['numeric']['input']>;
  _gte?: InputMaybe<Scalars['numeric']['input']>;
  _in?: InputMaybe<Array<Scalars['numeric']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['numeric']['input']>;
  _lte?: InputMaybe<Scalars['numeric']['input']>;
  _neq?: InputMaybe<Scalars['numeric']['input']>;
  _nin?: InputMaybe<Array<Scalars['numeric']['input']>>;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

/** columns and relationships of "orderdetails" */
export type Orderdetails = {
  __typename?: 'orderdetails';
  /** An object relationship */
  order?: Maybe<Orders>;
  orderdetailid: Scalars['Int']['output'];
  orderid?: Maybe<Scalars['Int']['output']>;
  /** An object relationship */
  product?: Maybe<Products>;
  productid?: Maybe<Scalars['Int']['output']>;
  quantity?: Maybe<Scalars['Int']['output']>;
};

/** aggregated selection of "orderdetails" */
export type Orderdetails_Aggregate = {
  __typename?: 'orderdetails_aggregate';
  aggregate?: Maybe<Orderdetails_Aggregate_Fields>;
  nodes: Array<Orderdetails>;
};

export type Orderdetails_Aggregate_Bool_Exp = {
  count?: InputMaybe<Orderdetails_Aggregate_Bool_Exp_Count>;
};

export type Orderdetails_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Orderdetails_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Orderdetails_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "orderdetails" */
export type Orderdetails_Aggregate_Fields = {
  __typename?: 'orderdetails_aggregate_fields';
  avg?: Maybe<Orderdetails_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Orderdetails_Max_Fields>;
  min?: Maybe<Orderdetails_Min_Fields>;
  stddev?: Maybe<Orderdetails_Stddev_Fields>;
  stddev_pop?: Maybe<Orderdetails_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Orderdetails_Stddev_Samp_Fields>;
  sum?: Maybe<Orderdetails_Sum_Fields>;
  var_pop?: Maybe<Orderdetails_Var_Pop_Fields>;
  var_samp?: Maybe<Orderdetails_Var_Samp_Fields>;
  variance?: Maybe<Orderdetails_Variance_Fields>;
};


/** aggregate fields of "orderdetails" */
export type Orderdetails_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Orderdetails_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "orderdetails" */
export type Orderdetails_Aggregate_Order_By = {
  avg?: InputMaybe<Orderdetails_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Orderdetails_Max_Order_By>;
  min?: InputMaybe<Orderdetails_Min_Order_By>;
  stddev?: InputMaybe<Orderdetails_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Orderdetails_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Orderdetails_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Orderdetails_Sum_Order_By>;
  var_pop?: InputMaybe<Orderdetails_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Orderdetails_Var_Samp_Order_By>;
  variance?: InputMaybe<Orderdetails_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "orderdetails" */
export type Orderdetails_Arr_Rel_Insert_Input = {
  data: Array<Orderdetails_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Orderdetails_On_Conflict>;
};

/** aggregate avg on columns */
export type Orderdetails_Avg_Fields = {
  __typename?: 'orderdetails_avg_fields';
  orderdetailid?: Maybe<Scalars['Float']['output']>;
  orderid?: Maybe<Scalars['Float']['output']>;
  productid?: Maybe<Scalars['Float']['output']>;
  quantity?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "orderdetails" */
export type Orderdetails_Avg_Order_By = {
  orderdetailid?: InputMaybe<Order_By>;
  orderid?: InputMaybe<Order_By>;
  productid?: InputMaybe<Order_By>;
  quantity?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "orderdetails". All fields are combined with a logical 'AND'. */
export type Orderdetails_Bool_Exp = {
  _and?: InputMaybe<Array<Orderdetails_Bool_Exp>>;
  _not?: InputMaybe<Orderdetails_Bool_Exp>;
  _or?: InputMaybe<Array<Orderdetails_Bool_Exp>>;
  order?: InputMaybe<Orders_Bool_Exp>;
  orderdetailid?: InputMaybe<Int_Comparison_Exp>;
  orderid?: InputMaybe<Int_Comparison_Exp>;
  product?: InputMaybe<Products_Bool_Exp>;
  productid?: InputMaybe<Int_Comparison_Exp>;
  quantity?: InputMaybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "orderdetails" */
export enum Orderdetails_Constraint {
  /** unique or primary key constraint on columns "orderdetailid" */
  OrderdetailsPkey = 'orderdetails_pkey'
}

/** input type for incrementing numeric columns in table "orderdetails" */
export type Orderdetails_Inc_Input = {
  orderdetailid?: InputMaybe<Scalars['Int']['input']>;
  orderid?: InputMaybe<Scalars['Int']['input']>;
  productid?: InputMaybe<Scalars['Int']['input']>;
  quantity?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "orderdetails" */
export type Orderdetails_Insert_Input = {
  order?: InputMaybe<Orders_Obj_Rel_Insert_Input>;
  orderdetailid?: InputMaybe<Scalars['Int']['input']>;
  orderid?: InputMaybe<Scalars['Int']['input']>;
  product?: InputMaybe<Products_Obj_Rel_Insert_Input>;
  productid?: InputMaybe<Scalars['Int']['input']>;
  quantity?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate max on columns */
export type Orderdetails_Max_Fields = {
  __typename?: 'orderdetails_max_fields';
  orderdetailid?: Maybe<Scalars['Int']['output']>;
  orderid?: Maybe<Scalars['Int']['output']>;
  productid?: Maybe<Scalars['Int']['output']>;
  quantity?: Maybe<Scalars['Int']['output']>;
};

/** order by max() on columns of table "orderdetails" */
export type Orderdetails_Max_Order_By = {
  orderdetailid?: InputMaybe<Order_By>;
  orderid?: InputMaybe<Order_By>;
  productid?: InputMaybe<Order_By>;
  quantity?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Orderdetails_Min_Fields = {
  __typename?: 'orderdetails_min_fields';
  orderdetailid?: Maybe<Scalars['Int']['output']>;
  orderid?: Maybe<Scalars['Int']['output']>;
  productid?: Maybe<Scalars['Int']['output']>;
  quantity?: Maybe<Scalars['Int']['output']>;
};

/** order by min() on columns of table "orderdetails" */
export type Orderdetails_Min_Order_By = {
  orderdetailid?: InputMaybe<Order_By>;
  orderid?: InputMaybe<Order_By>;
  productid?: InputMaybe<Order_By>;
  quantity?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "orderdetails" */
export type Orderdetails_Mutation_Response = {
  __typename?: 'orderdetails_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Orderdetails>;
};

/** on_conflict condition type for table "orderdetails" */
export type Orderdetails_On_Conflict = {
  constraint: Orderdetails_Constraint;
  update_columns?: Array<Orderdetails_Update_Column>;
  where?: InputMaybe<Orderdetails_Bool_Exp>;
};

/** Ordering options when selecting data from "orderdetails". */
export type Orderdetails_Order_By = {
  order?: InputMaybe<Orders_Order_By>;
  orderdetailid?: InputMaybe<Order_By>;
  orderid?: InputMaybe<Order_By>;
  product?: InputMaybe<Products_Order_By>;
  productid?: InputMaybe<Order_By>;
  quantity?: InputMaybe<Order_By>;
};

/** primary key columns input for table: orderdetails */
export type Orderdetails_Pk_Columns_Input = {
  orderdetailid: Scalars['Int']['input'];
};

/** select columns of table "orderdetails" */
export enum Orderdetails_Select_Column {
  /** column name */
  Orderdetailid = 'orderdetailid',
  /** column name */
  Orderid = 'orderid',
  /** column name */
  Productid = 'productid',
  /** column name */
  Quantity = 'quantity'
}

/** input type for updating data in table "orderdetails" */
export type Orderdetails_Set_Input = {
  orderdetailid?: InputMaybe<Scalars['Int']['input']>;
  orderid?: InputMaybe<Scalars['Int']['input']>;
  productid?: InputMaybe<Scalars['Int']['input']>;
  quantity?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate stddev on columns */
export type Orderdetails_Stddev_Fields = {
  __typename?: 'orderdetails_stddev_fields';
  orderdetailid?: Maybe<Scalars['Float']['output']>;
  orderid?: Maybe<Scalars['Float']['output']>;
  productid?: Maybe<Scalars['Float']['output']>;
  quantity?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "orderdetails" */
export type Orderdetails_Stddev_Order_By = {
  orderdetailid?: InputMaybe<Order_By>;
  orderid?: InputMaybe<Order_By>;
  productid?: InputMaybe<Order_By>;
  quantity?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Orderdetails_Stddev_Pop_Fields = {
  __typename?: 'orderdetails_stddev_pop_fields';
  orderdetailid?: Maybe<Scalars['Float']['output']>;
  orderid?: Maybe<Scalars['Float']['output']>;
  productid?: Maybe<Scalars['Float']['output']>;
  quantity?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "orderdetails" */
export type Orderdetails_Stddev_Pop_Order_By = {
  orderdetailid?: InputMaybe<Order_By>;
  orderid?: InputMaybe<Order_By>;
  productid?: InputMaybe<Order_By>;
  quantity?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Orderdetails_Stddev_Samp_Fields = {
  __typename?: 'orderdetails_stddev_samp_fields';
  orderdetailid?: Maybe<Scalars['Float']['output']>;
  orderid?: Maybe<Scalars['Float']['output']>;
  productid?: Maybe<Scalars['Float']['output']>;
  quantity?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "orderdetails" */
export type Orderdetails_Stddev_Samp_Order_By = {
  orderdetailid?: InputMaybe<Order_By>;
  orderid?: InputMaybe<Order_By>;
  productid?: InputMaybe<Order_By>;
  quantity?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "orderdetails" */
export type Orderdetails_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Orderdetails_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Orderdetails_Stream_Cursor_Value_Input = {
  orderdetailid?: InputMaybe<Scalars['Int']['input']>;
  orderid?: InputMaybe<Scalars['Int']['input']>;
  productid?: InputMaybe<Scalars['Int']['input']>;
  quantity?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate sum on columns */
export type Orderdetails_Sum_Fields = {
  __typename?: 'orderdetails_sum_fields';
  orderdetailid?: Maybe<Scalars['Int']['output']>;
  orderid?: Maybe<Scalars['Int']['output']>;
  productid?: Maybe<Scalars['Int']['output']>;
  quantity?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "orderdetails" */
export type Orderdetails_Sum_Order_By = {
  orderdetailid?: InputMaybe<Order_By>;
  orderid?: InputMaybe<Order_By>;
  productid?: InputMaybe<Order_By>;
  quantity?: InputMaybe<Order_By>;
};

/** update columns of table "orderdetails" */
export enum Orderdetails_Update_Column {
  /** column name */
  Orderdetailid = 'orderdetailid',
  /** column name */
  Orderid = 'orderid',
  /** column name */
  Productid = 'productid',
  /** column name */
  Quantity = 'quantity'
}

export type Orderdetails_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Orderdetails_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Orderdetails_Set_Input>;
  /** filter the rows which have to be updated */
  where: Orderdetails_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Orderdetails_Var_Pop_Fields = {
  __typename?: 'orderdetails_var_pop_fields';
  orderdetailid?: Maybe<Scalars['Float']['output']>;
  orderid?: Maybe<Scalars['Float']['output']>;
  productid?: Maybe<Scalars['Float']['output']>;
  quantity?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "orderdetails" */
export type Orderdetails_Var_Pop_Order_By = {
  orderdetailid?: InputMaybe<Order_By>;
  orderid?: InputMaybe<Order_By>;
  productid?: InputMaybe<Order_By>;
  quantity?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Orderdetails_Var_Samp_Fields = {
  __typename?: 'orderdetails_var_samp_fields';
  orderdetailid?: Maybe<Scalars['Float']['output']>;
  orderid?: Maybe<Scalars['Float']['output']>;
  productid?: Maybe<Scalars['Float']['output']>;
  quantity?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "orderdetails" */
export type Orderdetails_Var_Samp_Order_By = {
  orderdetailid?: InputMaybe<Order_By>;
  orderid?: InputMaybe<Order_By>;
  productid?: InputMaybe<Order_By>;
  quantity?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Orderdetails_Variance_Fields = {
  __typename?: 'orderdetails_variance_fields';
  orderdetailid?: Maybe<Scalars['Float']['output']>;
  orderid?: Maybe<Scalars['Float']['output']>;
  productid?: Maybe<Scalars['Float']['output']>;
  quantity?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "orderdetails" */
export type Orderdetails_Variance_Order_By = {
  orderdetailid?: InputMaybe<Order_By>;
  orderid?: InputMaybe<Order_By>;
  productid?: InputMaybe<Order_By>;
  quantity?: InputMaybe<Order_By>;
};

/** columns and relationships of "orders" */
export type Orders = {
  __typename?: 'orders';
  /** An object relationship */
  customer?: Maybe<Customers>;
  customerid?: Maybe<Scalars['Int']['output']>;
  /** An object relationship */
  employee?: Maybe<Employees>;
  employeeid?: Maybe<Scalars['Int']['output']>;
  orderdate?: Maybe<Scalars['timestamp']['output']>;
  /** An array relationship */
  orderdetails: Array<Orderdetails>;
  /** An aggregate relationship */
  orderdetails_aggregate: Orderdetails_Aggregate;
  orderid: Scalars['Int']['output'];
  /** An object relationship */
  shipper?: Maybe<Shippers>;
  shipperid?: Maybe<Scalars['Int']['output']>;
};


/** columns and relationships of "orders" */
export type OrdersOrderdetailsArgs = {
  distinct_on?: InputMaybe<Array<Orderdetails_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Orderdetails_Order_By>>;
  where?: InputMaybe<Orderdetails_Bool_Exp>;
};


/** columns and relationships of "orders" */
export type OrdersOrderdetails_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Orderdetails_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Orderdetails_Order_By>>;
  where?: InputMaybe<Orderdetails_Bool_Exp>;
};

/** aggregated selection of "orders" */
export type Orders_Aggregate = {
  __typename?: 'orders_aggregate';
  aggregate?: Maybe<Orders_Aggregate_Fields>;
  nodes: Array<Orders>;
};

export type Orders_Aggregate_Bool_Exp = {
  count?: InputMaybe<Orders_Aggregate_Bool_Exp_Count>;
};

export type Orders_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Orders_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Orders_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "orders" */
export type Orders_Aggregate_Fields = {
  __typename?: 'orders_aggregate_fields';
  avg?: Maybe<Orders_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Orders_Max_Fields>;
  min?: Maybe<Orders_Min_Fields>;
  stddev?: Maybe<Orders_Stddev_Fields>;
  stddev_pop?: Maybe<Orders_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Orders_Stddev_Samp_Fields>;
  sum?: Maybe<Orders_Sum_Fields>;
  var_pop?: Maybe<Orders_Var_Pop_Fields>;
  var_samp?: Maybe<Orders_Var_Samp_Fields>;
  variance?: Maybe<Orders_Variance_Fields>;
};


/** aggregate fields of "orders" */
export type Orders_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Orders_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "orders" */
export type Orders_Aggregate_Order_By = {
  avg?: InputMaybe<Orders_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Orders_Max_Order_By>;
  min?: InputMaybe<Orders_Min_Order_By>;
  stddev?: InputMaybe<Orders_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Orders_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Orders_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Orders_Sum_Order_By>;
  var_pop?: InputMaybe<Orders_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Orders_Var_Samp_Order_By>;
  variance?: InputMaybe<Orders_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "orders" */
export type Orders_Arr_Rel_Insert_Input = {
  data: Array<Orders_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Orders_On_Conflict>;
};

/** aggregate avg on columns */
export type Orders_Avg_Fields = {
  __typename?: 'orders_avg_fields';
  customerid?: Maybe<Scalars['Float']['output']>;
  employeeid?: Maybe<Scalars['Float']['output']>;
  orderid?: Maybe<Scalars['Float']['output']>;
  shipperid?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "orders" */
export type Orders_Avg_Order_By = {
  customerid?: InputMaybe<Order_By>;
  employeeid?: InputMaybe<Order_By>;
  orderid?: InputMaybe<Order_By>;
  shipperid?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "orders". All fields are combined with a logical 'AND'. */
export type Orders_Bool_Exp = {
  _and?: InputMaybe<Array<Orders_Bool_Exp>>;
  _not?: InputMaybe<Orders_Bool_Exp>;
  _or?: InputMaybe<Array<Orders_Bool_Exp>>;
  customer?: InputMaybe<Customers_Bool_Exp>;
  customerid?: InputMaybe<Int_Comparison_Exp>;
  employee?: InputMaybe<Employees_Bool_Exp>;
  employeeid?: InputMaybe<Int_Comparison_Exp>;
  orderdate?: InputMaybe<Timestamp_Comparison_Exp>;
  orderdetails?: InputMaybe<Orderdetails_Bool_Exp>;
  orderdetails_aggregate?: InputMaybe<Orderdetails_Aggregate_Bool_Exp>;
  orderid?: InputMaybe<Int_Comparison_Exp>;
  shipper?: InputMaybe<Shippers_Bool_Exp>;
  shipperid?: InputMaybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "orders" */
export enum Orders_Constraint {
  /** unique or primary key constraint on columns "orderid" */
  OrdersPkey = 'orders_pkey'
}

/** input type for incrementing numeric columns in table "orders" */
export type Orders_Inc_Input = {
  customerid?: InputMaybe<Scalars['Int']['input']>;
  employeeid?: InputMaybe<Scalars['Int']['input']>;
  orderid?: InputMaybe<Scalars['Int']['input']>;
  shipperid?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "orders" */
export type Orders_Insert_Input = {
  customer?: InputMaybe<Customers_Obj_Rel_Insert_Input>;
  customerid?: InputMaybe<Scalars['Int']['input']>;
  employee?: InputMaybe<Employees_Obj_Rel_Insert_Input>;
  employeeid?: InputMaybe<Scalars['Int']['input']>;
  orderdate?: InputMaybe<Scalars['timestamp']['input']>;
  orderdetails?: InputMaybe<Orderdetails_Arr_Rel_Insert_Input>;
  orderid?: InputMaybe<Scalars['Int']['input']>;
  shipper?: InputMaybe<Shippers_Obj_Rel_Insert_Input>;
  shipperid?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate max on columns */
export type Orders_Max_Fields = {
  __typename?: 'orders_max_fields';
  customerid?: Maybe<Scalars['Int']['output']>;
  employeeid?: Maybe<Scalars['Int']['output']>;
  orderdate?: Maybe<Scalars['timestamp']['output']>;
  orderid?: Maybe<Scalars['Int']['output']>;
  shipperid?: Maybe<Scalars['Int']['output']>;
};

/** order by max() on columns of table "orders" */
export type Orders_Max_Order_By = {
  customerid?: InputMaybe<Order_By>;
  employeeid?: InputMaybe<Order_By>;
  orderdate?: InputMaybe<Order_By>;
  orderid?: InputMaybe<Order_By>;
  shipperid?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Orders_Min_Fields = {
  __typename?: 'orders_min_fields';
  customerid?: Maybe<Scalars['Int']['output']>;
  employeeid?: Maybe<Scalars['Int']['output']>;
  orderdate?: Maybe<Scalars['timestamp']['output']>;
  orderid?: Maybe<Scalars['Int']['output']>;
  shipperid?: Maybe<Scalars['Int']['output']>;
};

/** order by min() on columns of table "orders" */
export type Orders_Min_Order_By = {
  customerid?: InputMaybe<Order_By>;
  employeeid?: InputMaybe<Order_By>;
  orderdate?: InputMaybe<Order_By>;
  orderid?: InputMaybe<Order_By>;
  shipperid?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "orders" */
export type Orders_Mutation_Response = {
  __typename?: 'orders_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Orders>;
};

/** input type for inserting object relation for remote table "orders" */
export type Orders_Obj_Rel_Insert_Input = {
  data: Orders_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Orders_On_Conflict>;
};

/** on_conflict condition type for table "orders" */
export type Orders_On_Conflict = {
  constraint: Orders_Constraint;
  update_columns?: Array<Orders_Update_Column>;
  where?: InputMaybe<Orders_Bool_Exp>;
};

/** Ordering options when selecting data from "orders". */
export type Orders_Order_By = {
  customer?: InputMaybe<Customers_Order_By>;
  customerid?: InputMaybe<Order_By>;
  employee?: InputMaybe<Employees_Order_By>;
  employeeid?: InputMaybe<Order_By>;
  orderdate?: InputMaybe<Order_By>;
  orderdetails_aggregate?: InputMaybe<Orderdetails_Aggregate_Order_By>;
  orderid?: InputMaybe<Order_By>;
  shipper?: InputMaybe<Shippers_Order_By>;
  shipperid?: InputMaybe<Order_By>;
};

/** primary key columns input for table: orders */
export type Orders_Pk_Columns_Input = {
  orderid: Scalars['Int']['input'];
};

/** select columns of table "orders" */
export enum Orders_Select_Column {
  /** column name */
  Customerid = 'customerid',
  /** column name */
  Employeeid = 'employeeid',
  /** column name */
  Orderdate = 'orderdate',
  /** column name */
  Orderid = 'orderid',
  /** column name */
  Shipperid = 'shipperid'
}

/** input type for updating data in table "orders" */
export type Orders_Set_Input = {
  customerid?: InputMaybe<Scalars['Int']['input']>;
  employeeid?: InputMaybe<Scalars['Int']['input']>;
  orderdate?: InputMaybe<Scalars['timestamp']['input']>;
  orderid?: InputMaybe<Scalars['Int']['input']>;
  shipperid?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate stddev on columns */
export type Orders_Stddev_Fields = {
  __typename?: 'orders_stddev_fields';
  customerid?: Maybe<Scalars['Float']['output']>;
  employeeid?: Maybe<Scalars['Float']['output']>;
  orderid?: Maybe<Scalars['Float']['output']>;
  shipperid?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "orders" */
export type Orders_Stddev_Order_By = {
  customerid?: InputMaybe<Order_By>;
  employeeid?: InputMaybe<Order_By>;
  orderid?: InputMaybe<Order_By>;
  shipperid?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Orders_Stddev_Pop_Fields = {
  __typename?: 'orders_stddev_pop_fields';
  customerid?: Maybe<Scalars['Float']['output']>;
  employeeid?: Maybe<Scalars['Float']['output']>;
  orderid?: Maybe<Scalars['Float']['output']>;
  shipperid?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "orders" */
export type Orders_Stddev_Pop_Order_By = {
  customerid?: InputMaybe<Order_By>;
  employeeid?: InputMaybe<Order_By>;
  orderid?: InputMaybe<Order_By>;
  shipperid?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Orders_Stddev_Samp_Fields = {
  __typename?: 'orders_stddev_samp_fields';
  customerid?: Maybe<Scalars['Float']['output']>;
  employeeid?: Maybe<Scalars['Float']['output']>;
  orderid?: Maybe<Scalars['Float']['output']>;
  shipperid?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "orders" */
export type Orders_Stddev_Samp_Order_By = {
  customerid?: InputMaybe<Order_By>;
  employeeid?: InputMaybe<Order_By>;
  orderid?: InputMaybe<Order_By>;
  shipperid?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "orders" */
export type Orders_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Orders_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Orders_Stream_Cursor_Value_Input = {
  customerid?: InputMaybe<Scalars['Int']['input']>;
  employeeid?: InputMaybe<Scalars['Int']['input']>;
  orderdate?: InputMaybe<Scalars['timestamp']['input']>;
  orderid?: InputMaybe<Scalars['Int']['input']>;
  shipperid?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate sum on columns */
export type Orders_Sum_Fields = {
  __typename?: 'orders_sum_fields';
  customerid?: Maybe<Scalars['Int']['output']>;
  employeeid?: Maybe<Scalars['Int']['output']>;
  orderid?: Maybe<Scalars['Int']['output']>;
  shipperid?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "orders" */
export type Orders_Sum_Order_By = {
  customerid?: InputMaybe<Order_By>;
  employeeid?: InputMaybe<Order_By>;
  orderid?: InputMaybe<Order_By>;
  shipperid?: InputMaybe<Order_By>;
};

/** update columns of table "orders" */
export enum Orders_Update_Column {
  /** column name */
  Customerid = 'customerid',
  /** column name */
  Employeeid = 'employeeid',
  /** column name */
  Orderdate = 'orderdate',
  /** column name */
  Orderid = 'orderid',
  /** column name */
  Shipperid = 'shipperid'
}

export type Orders_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Orders_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Orders_Set_Input>;
  /** filter the rows which have to be updated */
  where: Orders_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Orders_Var_Pop_Fields = {
  __typename?: 'orders_var_pop_fields';
  customerid?: Maybe<Scalars['Float']['output']>;
  employeeid?: Maybe<Scalars['Float']['output']>;
  orderid?: Maybe<Scalars['Float']['output']>;
  shipperid?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "orders" */
export type Orders_Var_Pop_Order_By = {
  customerid?: InputMaybe<Order_By>;
  employeeid?: InputMaybe<Order_By>;
  orderid?: InputMaybe<Order_By>;
  shipperid?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Orders_Var_Samp_Fields = {
  __typename?: 'orders_var_samp_fields';
  customerid?: Maybe<Scalars['Float']['output']>;
  employeeid?: Maybe<Scalars['Float']['output']>;
  orderid?: Maybe<Scalars['Float']['output']>;
  shipperid?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "orders" */
export type Orders_Var_Samp_Order_By = {
  customerid?: InputMaybe<Order_By>;
  employeeid?: InputMaybe<Order_By>;
  orderid?: InputMaybe<Order_By>;
  shipperid?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Orders_Variance_Fields = {
  __typename?: 'orders_variance_fields';
  customerid?: Maybe<Scalars['Float']['output']>;
  employeeid?: Maybe<Scalars['Float']['output']>;
  orderid?: Maybe<Scalars['Float']['output']>;
  shipperid?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "orders" */
export type Orders_Variance_Order_By = {
  customerid?: InputMaybe<Order_By>;
  employeeid?: InputMaybe<Order_By>;
  orderid?: InputMaybe<Order_By>;
  shipperid?: InputMaybe<Order_By>;
};

/** columns and relationships of "products" */
export type Products = {
  __typename?: 'products';
  /** An object relationship */
  category?: Maybe<Categories>;
  categoryid?: Maybe<Scalars['Int']['output']>;
  /** An array relationship */
  orderdetails: Array<Orderdetails>;
  /** An aggregate relationship */
  orderdetails_aggregate: Orderdetails_Aggregate;
  price?: Maybe<Scalars['numeric']['output']>;
  productid: Scalars['Int']['output'];
  productname?: Maybe<Scalars['String']['output']>;
  /** An object relationship */
  supplier?: Maybe<Suppliers>;
  supplierid?: Maybe<Scalars['Int']['output']>;
  unit?: Maybe<Scalars['String']['output']>;
};


/** columns and relationships of "products" */
export type ProductsOrderdetailsArgs = {
  distinct_on?: InputMaybe<Array<Orderdetails_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Orderdetails_Order_By>>;
  where?: InputMaybe<Orderdetails_Bool_Exp>;
};


/** columns and relationships of "products" */
export type ProductsOrderdetails_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Orderdetails_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Orderdetails_Order_By>>;
  where?: InputMaybe<Orderdetails_Bool_Exp>;
};

/** aggregated selection of "products" */
export type Products_Aggregate = {
  __typename?: 'products_aggregate';
  aggregate?: Maybe<Products_Aggregate_Fields>;
  nodes: Array<Products>;
};

export type Products_Aggregate_Bool_Exp = {
  count?: InputMaybe<Products_Aggregate_Bool_Exp_Count>;
};

export type Products_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Products_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Products_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "products" */
export type Products_Aggregate_Fields = {
  __typename?: 'products_aggregate_fields';
  avg?: Maybe<Products_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Products_Max_Fields>;
  min?: Maybe<Products_Min_Fields>;
  stddev?: Maybe<Products_Stddev_Fields>;
  stddev_pop?: Maybe<Products_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Products_Stddev_Samp_Fields>;
  sum?: Maybe<Products_Sum_Fields>;
  var_pop?: Maybe<Products_Var_Pop_Fields>;
  var_samp?: Maybe<Products_Var_Samp_Fields>;
  variance?: Maybe<Products_Variance_Fields>;
};


/** aggregate fields of "products" */
export type Products_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Products_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "products" */
export type Products_Aggregate_Order_By = {
  avg?: InputMaybe<Products_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Products_Max_Order_By>;
  min?: InputMaybe<Products_Min_Order_By>;
  stddev?: InputMaybe<Products_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Products_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Products_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Products_Sum_Order_By>;
  var_pop?: InputMaybe<Products_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Products_Var_Samp_Order_By>;
  variance?: InputMaybe<Products_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "products" */
export type Products_Arr_Rel_Insert_Input = {
  data: Array<Products_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Products_On_Conflict>;
};

/** aggregate avg on columns */
export type Products_Avg_Fields = {
  __typename?: 'products_avg_fields';
  categoryid?: Maybe<Scalars['Float']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
  productid?: Maybe<Scalars['Float']['output']>;
  supplierid?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "products" */
export type Products_Avg_Order_By = {
  categoryid?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  productid?: InputMaybe<Order_By>;
  supplierid?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "products". All fields are combined with a logical 'AND'. */
export type Products_Bool_Exp = {
  _and?: InputMaybe<Array<Products_Bool_Exp>>;
  _not?: InputMaybe<Products_Bool_Exp>;
  _or?: InputMaybe<Array<Products_Bool_Exp>>;
  category?: InputMaybe<Categories_Bool_Exp>;
  categoryid?: InputMaybe<Int_Comparison_Exp>;
  orderdetails?: InputMaybe<Orderdetails_Bool_Exp>;
  orderdetails_aggregate?: InputMaybe<Orderdetails_Aggregate_Bool_Exp>;
  price?: InputMaybe<Numeric_Comparison_Exp>;
  productid?: InputMaybe<Int_Comparison_Exp>;
  productname?: InputMaybe<String_Comparison_Exp>;
  supplier?: InputMaybe<Suppliers_Bool_Exp>;
  supplierid?: InputMaybe<Int_Comparison_Exp>;
  unit?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "products" */
export enum Products_Constraint {
  /** unique or primary key constraint on columns "productid" */
  ProductsPkey = 'products_pkey'
}

/** input type for incrementing numeric columns in table "products" */
export type Products_Inc_Input = {
  categoryid?: InputMaybe<Scalars['Int']['input']>;
  price?: InputMaybe<Scalars['numeric']['input']>;
  productid?: InputMaybe<Scalars['Int']['input']>;
  supplierid?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "products" */
export type Products_Insert_Input = {
  category?: InputMaybe<Categories_Obj_Rel_Insert_Input>;
  categoryid?: InputMaybe<Scalars['Int']['input']>;
  orderdetails?: InputMaybe<Orderdetails_Arr_Rel_Insert_Input>;
  price?: InputMaybe<Scalars['numeric']['input']>;
  productid?: InputMaybe<Scalars['Int']['input']>;
  productname?: InputMaybe<Scalars['String']['input']>;
  supplier?: InputMaybe<Suppliers_Obj_Rel_Insert_Input>;
  supplierid?: InputMaybe<Scalars['Int']['input']>;
  unit?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Products_Max_Fields = {
  __typename?: 'products_max_fields';
  categoryid?: Maybe<Scalars['Int']['output']>;
  price?: Maybe<Scalars['numeric']['output']>;
  productid?: Maybe<Scalars['Int']['output']>;
  productname?: Maybe<Scalars['String']['output']>;
  supplierid?: Maybe<Scalars['Int']['output']>;
  unit?: Maybe<Scalars['String']['output']>;
};

/** order by max() on columns of table "products" */
export type Products_Max_Order_By = {
  categoryid?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  productid?: InputMaybe<Order_By>;
  productname?: InputMaybe<Order_By>;
  supplierid?: InputMaybe<Order_By>;
  unit?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Products_Min_Fields = {
  __typename?: 'products_min_fields';
  categoryid?: Maybe<Scalars['Int']['output']>;
  price?: Maybe<Scalars['numeric']['output']>;
  productid?: Maybe<Scalars['Int']['output']>;
  productname?: Maybe<Scalars['String']['output']>;
  supplierid?: Maybe<Scalars['Int']['output']>;
  unit?: Maybe<Scalars['String']['output']>;
};

/** order by min() on columns of table "products" */
export type Products_Min_Order_By = {
  categoryid?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  productid?: InputMaybe<Order_By>;
  productname?: InputMaybe<Order_By>;
  supplierid?: InputMaybe<Order_By>;
  unit?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "products" */
export type Products_Mutation_Response = {
  __typename?: 'products_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Products>;
};

/** input type for inserting object relation for remote table "products" */
export type Products_Obj_Rel_Insert_Input = {
  data: Products_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Products_On_Conflict>;
};

/** on_conflict condition type for table "products" */
export type Products_On_Conflict = {
  constraint: Products_Constraint;
  update_columns?: Array<Products_Update_Column>;
  where?: InputMaybe<Products_Bool_Exp>;
};

/** Ordering options when selecting data from "products". */
export type Products_Order_By = {
  category?: InputMaybe<Categories_Order_By>;
  categoryid?: InputMaybe<Order_By>;
  orderdetails_aggregate?: InputMaybe<Orderdetails_Aggregate_Order_By>;
  price?: InputMaybe<Order_By>;
  productid?: InputMaybe<Order_By>;
  productname?: InputMaybe<Order_By>;
  supplier?: InputMaybe<Suppliers_Order_By>;
  supplierid?: InputMaybe<Order_By>;
  unit?: InputMaybe<Order_By>;
};

/** primary key columns input for table: products */
export type Products_Pk_Columns_Input = {
  productid: Scalars['Int']['input'];
};

/** select columns of table "products" */
export enum Products_Select_Column {
  /** column name */
  Categoryid = 'categoryid',
  /** column name */
  Price = 'price',
  /** column name */
  Productid = 'productid',
  /** column name */
  Productname = 'productname',
  /** column name */
  Supplierid = 'supplierid',
  /** column name */
  Unit = 'unit'
}

/** input type for updating data in table "products" */
export type Products_Set_Input = {
  categoryid?: InputMaybe<Scalars['Int']['input']>;
  price?: InputMaybe<Scalars['numeric']['input']>;
  productid?: InputMaybe<Scalars['Int']['input']>;
  productname?: InputMaybe<Scalars['String']['input']>;
  supplierid?: InputMaybe<Scalars['Int']['input']>;
  unit?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate stddev on columns */
export type Products_Stddev_Fields = {
  __typename?: 'products_stddev_fields';
  categoryid?: Maybe<Scalars['Float']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
  productid?: Maybe<Scalars['Float']['output']>;
  supplierid?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "products" */
export type Products_Stddev_Order_By = {
  categoryid?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  productid?: InputMaybe<Order_By>;
  supplierid?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Products_Stddev_Pop_Fields = {
  __typename?: 'products_stddev_pop_fields';
  categoryid?: Maybe<Scalars['Float']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
  productid?: Maybe<Scalars['Float']['output']>;
  supplierid?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "products" */
export type Products_Stddev_Pop_Order_By = {
  categoryid?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  productid?: InputMaybe<Order_By>;
  supplierid?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Products_Stddev_Samp_Fields = {
  __typename?: 'products_stddev_samp_fields';
  categoryid?: Maybe<Scalars['Float']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
  productid?: Maybe<Scalars['Float']['output']>;
  supplierid?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "products" */
export type Products_Stddev_Samp_Order_By = {
  categoryid?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  productid?: InputMaybe<Order_By>;
  supplierid?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "products" */
export type Products_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Products_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Products_Stream_Cursor_Value_Input = {
  categoryid?: InputMaybe<Scalars['Int']['input']>;
  price?: InputMaybe<Scalars['numeric']['input']>;
  productid?: InputMaybe<Scalars['Int']['input']>;
  productname?: InputMaybe<Scalars['String']['input']>;
  supplierid?: InputMaybe<Scalars['Int']['input']>;
  unit?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate sum on columns */
export type Products_Sum_Fields = {
  __typename?: 'products_sum_fields';
  categoryid?: Maybe<Scalars['Int']['output']>;
  price?: Maybe<Scalars['numeric']['output']>;
  productid?: Maybe<Scalars['Int']['output']>;
  supplierid?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "products" */
export type Products_Sum_Order_By = {
  categoryid?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  productid?: InputMaybe<Order_By>;
  supplierid?: InputMaybe<Order_By>;
};

/** update columns of table "products" */
export enum Products_Update_Column {
  /** column name */
  Categoryid = 'categoryid',
  /** column name */
  Price = 'price',
  /** column name */
  Productid = 'productid',
  /** column name */
  Productname = 'productname',
  /** column name */
  Supplierid = 'supplierid',
  /** column name */
  Unit = 'unit'
}

export type Products_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Products_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Products_Set_Input>;
  /** filter the rows which have to be updated */
  where: Products_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Products_Var_Pop_Fields = {
  __typename?: 'products_var_pop_fields';
  categoryid?: Maybe<Scalars['Float']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
  productid?: Maybe<Scalars['Float']['output']>;
  supplierid?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "products" */
export type Products_Var_Pop_Order_By = {
  categoryid?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  productid?: InputMaybe<Order_By>;
  supplierid?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Products_Var_Samp_Fields = {
  __typename?: 'products_var_samp_fields';
  categoryid?: Maybe<Scalars['Float']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
  productid?: Maybe<Scalars['Float']['output']>;
  supplierid?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "products" */
export type Products_Var_Samp_Order_By = {
  categoryid?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  productid?: InputMaybe<Order_By>;
  supplierid?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Products_Variance_Fields = {
  __typename?: 'products_variance_fields';
  categoryid?: Maybe<Scalars['Float']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
  productid?: Maybe<Scalars['Float']['output']>;
  supplierid?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "products" */
export type Products_Variance_Order_By = {
  categoryid?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  productid?: InputMaybe<Order_By>;
  supplierid?: InputMaybe<Order_By>;
};

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "categories" */
  categories: Array<Categories>;
  /** fetch aggregated fields from the table: "categories" */
  categories_aggregate: Categories_Aggregate;
  /** fetch data from the table: "categories" using primary key columns */
  categories_by_pk?: Maybe<Categories>;
  /** fetch data from the table: "customers" */
  customers: Array<Customers>;
  /** fetch aggregated fields from the table: "customers" */
  customers_aggregate: Customers_Aggregate;
  /** fetch data from the table: "customers" using primary key columns */
  customers_by_pk?: Maybe<Customers>;
  /** fetch data from the table: "employees" */
  employees: Array<Employees>;
  /** fetch aggregated fields from the table: "employees" */
  employees_aggregate: Employees_Aggregate;
  /** fetch data from the table: "employees" using primary key columns */
  employees_by_pk?: Maybe<Employees>;
  /** An array relationship */
  orderdetails: Array<Orderdetails>;
  /** An aggregate relationship */
  orderdetails_aggregate: Orderdetails_Aggregate;
  /** fetch data from the table: "orderdetails" using primary key columns */
  orderdetails_by_pk?: Maybe<Orderdetails>;
  /** An array relationship */
  orders: Array<Orders>;
  /** An aggregate relationship */
  orders_aggregate: Orders_Aggregate;
  /** fetch data from the table: "orders" using primary key columns */
  orders_by_pk?: Maybe<Orders>;
  /** An array relationship */
  products: Array<Products>;
  /** An aggregate relationship */
  products_aggregate: Products_Aggregate;
  /** fetch data from the table: "products" using primary key columns */
  products_by_pk?: Maybe<Products>;
  /** fetch data from the table: "shippers" */
  shippers: Array<Shippers>;
  /** fetch aggregated fields from the table: "shippers" */
  shippers_aggregate: Shippers_Aggregate;
  /** fetch data from the table: "shippers" using primary key columns */
  shippers_by_pk?: Maybe<Shippers>;
  /** fetch data from the table: "suppliers" */
  suppliers: Array<Suppliers>;
  /** fetch aggregated fields from the table: "suppliers" */
  suppliers_aggregate: Suppliers_Aggregate;
  /** fetch data from the table: "suppliers" using primary key columns */
  suppliers_by_pk?: Maybe<Suppliers>;
};


export type Query_RootCategoriesArgs = {
  distinct_on?: InputMaybe<Array<Categories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Categories_Order_By>>;
  where?: InputMaybe<Categories_Bool_Exp>;
};


export type Query_RootCategories_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Categories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Categories_Order_By>>;
  where?: InputMaybe<Categories_Bool_Exp>;
};


export type Query_RootCategories_By_PkArgs = {
  categoryid: Scalars['Int']['input'];
};


export type Query_RootCustomersArgs = {
  distinct_on?: InputMaybe<Array<Customers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Customers_Order_By>>;
  where?: InputMaybe<Customers_Bool_Exp>;
};


export type Query_RootCustomers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Customers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Customers_Order_By>>;
  where?: InputMaybe<Customers_Bool_Exp>;
};


export type Query_RootCustomers_By_PkArgs = {
  customerid: Scalars['Int']['input'];
};


export type Query_RootEmployeesArgs = {
  distinct_on?: InputMaybe<Array<Employees_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Employees_Order_By>>;
  where?: InputMaybe<Employees_Bool_Exp>;
};


export type Query_RootEmployees_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Employees_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Employees_Order_By>>;
  where?: InputMaybe<Employees_Bool_Exp>;
};


export type Query_RootEmployees_By_PkArgs = {
  employeeid: Scalars['Int']['input'];
};


export type Query_RootOrderdetailsArgs = {
  distinct_on?: InputMaybe<Array<Orderdetails_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Orderdetails_Order_By>>;
  where?: InputMaybe<Orderdetails_Bool_Exp>;
};


export type Query_RootOrderdetails_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Orderdetails_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Orderdetails_Order_By>>;
  where?: InputMaybe<Orderdetails_Bool_Exp>;
};


export type Query_RootOrderdetails_By_PkArgs = {
  orderdetailid: Scalars['Int']['input'];
};


export type Query_RootOrdersArgs = {
  distinct_on?: InputMaybe<Array<Orders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Orders_Order_By>>;
  where?: InputMaybe<Orders_Bool_Exp>;
};


export type Query_RootOrders_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Orders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Orders_Order_By>>;
  where?: InputMaybe<Orders_Bool_Exp>;
};


export type Query_RootOrders_By_PkArgs = {
  orderid: Scalars['Int']['input'];
};


export type Query_RootProductsArgs = {
  distinct_on?: InputMaybe<Array<Products_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Products_Order_By>>;
  where?: InputMaybe<Products_Bool_Exp>;
};


export type Query_RootProducts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Products_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Products_Order_By>>;
  where?: InputMaybe<Products_Bool_Exp>;
};


export type Query_RootProducts_By_PkArgs = {
  productid: Scalars['Int']['input'];
};


export type Query_RootShippersArgs = {
  distinct_on?: InputMaybe<Array<Shippers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Shippers_Order_By>>;
  where?: InputMaybe<Shippers_Bool_Exp>;
};


export type Query_RootShippers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Shippers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Shippers_Order_By>>;
  where?: InputMaybe<Shippers_Bool_Exp>;
};


export type Query_RootShippers_By_PkArgs = {
  shipperid: Scalars['Int']['input'];
};


export type Query_RootSuppliersArgs = {
  distinct_on?: InputMaybe<Array<Suppliers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Suppliers_Order_By>>;
  where?: InputMaybe<Suppliers_Bool_Exp>;
};


export type Query_RootSuppliers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Suppliers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Suppliers_Order_By>>;
  where?: InputMaybe<Suppliers_Bool_Exp>;
};


export type Query_RootSuppliers_By_PkArgs = {
  supplierid: Scalars['Int']['input'];
};

/** columns and relationships of "shippers" */
export type Shippers = {
  __typename?: 'shippers';
  /** An array relationship */
  orders: Array<Orders>;
  /** An aggregate relationship */
  orders_aggregate: Orders_Aggregate;
  phone?: Maybe<Scalars['String']['output']>;
  shipperid: Scalars['Int']['output'];
  shippername?: Maybe<Scalars['String']['output']>;
};


/** columns and relationships of "shippers" */
export type ShippersOrdersArgs = {
  distinct_on?: InputMaybe<Array<Orders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Orders_Order_By>>;
  where?: InputMaybe<Orders_Bool_Exp>;
};


/** columns and relationships of "shippers" */
export type ShippersOrders_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Orders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Orders_Order_By>>;
  where?: InputMaybe<Orders_Bool_Exp>;
};

/** aggregated selection of "shippers" */
export type Shippers_Aggregate = {
  __typename?: 'shippers_aggregate';
  aggregate?: Maybe<Shippers_Aggregate_Fields>;
  nodes: Array<Shippers>;
};

/** aggregate fields of "shippers" */
export type Shippers_Aggregate_Fields = {
  __typename?: 'shippers_aggregate_fields';
  avg?: Maybe<Shippers_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Shippers_Max_Fields>;
  min?: Maybe<Shippers_Min_Fields>;
  stddev?: Maybe<Shippers_Stddev_Fields>;
  stddev_pop?: Maybe<Shippers_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Shippers_Stddev_Samp_Fields>;
  sum?: Maybe<Shippers_Sum_Fields>;
  var_pop?: Maybe<Shippers_Var_Pop_Fields>;
  var_samp?: Maybe<Shippers_Var_Samp_Fields>;
  variance?: Maybe<Shippers_Variance_Fields>;
};


/** aggregate fields of "shippers" */
export type Shippers_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Shippers_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Shippers_Avg_Fields = {
  __typename?: 'shippers_avg_fields';
  shipperid?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "shippers". All fields are combined with a logical 'AND'. */
export type Shippers_Bool_Exp = {
  _and?: InputMaybe<Array<Shippers_Bool_Exp>>;
  _not?: InputMaybe<Shippers_Bool_Exp>;
  _or?: InputMaybe<Array<Shippers_Bool_Exp>>;
  orders?: InputMaybe<Orders_Bool_Exp>;
  orders_aggregate?: InputMaybe<Orders_Aggregate_Bool_Exp>;
  phone?: InputMaybe<String_Comparison_Exp>;
  shipperid?: InputMaybe<Int_Comparison_Exp>;
  shippername?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "shippers" */
export enum Shippers_Constraint {
  /** unique or primary key constraint on columns "shipperid" */
  ShippersPkey = 'shippers_pkey'
}

/** input type for incrementing numeric columns in table "shippers" */
export type Shippers_Inc_Input = {
  shipperid?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "shippers" */
export type Shippers_Insert_Input = {
  orders?: InputMaybe<Orders_Arr_Rel_Insert_Input>;
  phone?: InputMaybe<Scalars['String']['input']>;
  shipperid?: InputMaybe<Scalars['Int']['input']>;
  shippername?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Shippers_Max_Fields = {
  __typename?: 'shippers_max_fields';
  phone?: Maybe<Scalars['String']['output']>;
  shipperid?: Maybe<Scalars['Int']['output']>;
  shippername?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Shippers_Min_Fields = {
  __typename?: 'shippers_min_fields';
  phone?: Maybe<Scalars['String']['output']>;
  shipperid?: Maybe<Scalars['Int']['output']>;
  shippername?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "shippers" */
export type Shippers_Mutation_Response = {
  __typename?: 'shippers_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Shippers>;
};

/** input type for inserting object relation for remote table "shippers" */
export type Shippers_Obj_Rel_Insert_Input = {
  data: Shippers_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Shippers_On_Conflict>;
};

/** on_conflict condition type for table "shippers" */
export type Shippers_On_Conflict = {
  constraint: Shippers_Constraint;
  update_columns?: Array<Shippers_Update_Column>;
  where?: InputMaybe<Shippers_Bool_Exp>;
};

/** Ordering options when selecting data from "shippers". */
export type Shippers_Order_By = {
  orders_aggregate?: InputMaybe<Orders_Aggregate_Order_By>;
  phone?: InputMaybe<Order_By>;
  shipperid?: InputMaybe<Order_By>;
  shippername?: InputMaybe<Order_By>;
};

/** primary key columns input for table: shippers */
export type Shippers_Pk_Columns_Input = {
  shipperid: Scalars['Int']['input'];
};

/** select columns of table "shippers" */
export enum Shippers_Select_Column {
  /** column name */
  Phone = 'phone',
  /** column name */
  Shipperid = 'shipperid',
  /** column name */
  Shippername = 'shippername'
}

/** input type for updating data in table "shippers" */
export type Shippers_Set_Input = {
  phone?: InputMaybe<Scalars['String']['input']>;
  shipperid?: InputMaybe<Scalars['Int']['input']>;
  shippername?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate stddev on columns */
export type Shippers_Stddev_Fields = {
  __typename?: 'shippers_stddev_fields';
  shipperid?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Shippers_Stddev_Pop_Fields = {
  __typename?: 'shippers_stddev_pop_fields';
  shipperid?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Shippers_Stddev_Samp_Fields = {
  __typename?: 'shippers_stddev_samp_fields';
  shipperid?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "shippers" */
export type Shippers_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Shippers_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Shippers_Stream_Cursor_Value_Input = {
  phone?: InputMaybe<Scalars['String']['input']>;
  shipperid?: InputMaybe<Scalars['Int']['input']>;
  shippername?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate sum on columns */
export type Shippers_Sum_Fields = {
  __typename?: 'shippers_sum_fields';
  shipperid?: Maybe<Scalars['Int']['output']>;
};

/** update columns of table "shippers" */
export enum Shippers_Update_Column {
  /** column name */
  Phone = 'phone',
  /** column name */
  Shipperid = 'shipperid',
  /** column name */
  Shippername = 'shippername'
}

export type Shippers_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Shippers_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Shippers_Set_Input>;
  /** filter the rows which have to be updated */
  where: Shippers_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Shippers_Var_Pop_Fields = {
  __typename?: 'shippers_var_pop_fields';
  shipperid?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Shippers_Var_Samp_Fields = {
  __typename?: 'shippers_var_samp_fields';
  shipperid?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Shippers_Variance_Fields = {
  __typename?: 'shippers_variance_fields';
  shipperid?: Maybe<Scalars['Float']['output']>;
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "categories" */
  categories: Array<Categories>;
  /** fetch aggregated fields from the table: "categories" */
  categories_aggregate: Categories_Aggregate;
  /** fetch data from the table: "categories" using primary key columns */
  categories_by_pk?: Maybe<Categories>;
  /** fetch data from the table in a streaming manner: "categories" */
  categories_stream: Array<Categories>;
  /** fetch data from the table: "customers" */
  customers: Array<Customers>;
  /** fetch aggregated fields from the table: "customers" */
  customers_aggregate: Customers_Aggregate;
  /** fetch data from the table: "customers" using primary key columns */
  customers_by_pk?: Maybe<Customers>;
  /** fetch data from the table in a streaming manner: "customers" */
  customers_stream: Array<Customers>;
  /** fetch data from the table: "employees" */
  employees: Array<Employees>;
  /** fetch aggregated fields from the table: "employees" */
  employees_aggregate: Employees_Aggregate;
  /** fetch data from the table: "employees" using primary key columns */
  employees_by_pk?: Maybe<Employees>;
  /** fetch data from the table in a streaming manner: "employees" */
  employees_stream: Array<Employees>;
  /** An array relationship */
  orderdetails: Array<Orderdetails>;
  /** An aggregate relationship */
  orderdetails_aggregate: Orderdetails_Aggregate;
  /** fetch data from the table: "orderdetails" using primary key columns */
  orderdetails_by_pk?: Maybe<Orderdetails>;
  /** fetch data from the table in a streaming manner: "orderdetails" */
  orderdetails_stream: Array<Orderdetails>;
  /** An array relationship */
  orders: Array<Orders>;
  /** An aggregate relationship */
  orders_aggregate: Orders_Aggregate;
  /** fetch data from the table: "orders" using primary key columns */
  orders_by_pk?: Maybe<Orders>;
  /** fetch data from the table in a streaming manner: "orders" */
  orders_stream: Array<Orders>;
  /** An array relationship */
  products: Array<Products>;
  /** An aggregate relationship */
  products_aggregate: Products_Aggregate;
  /** fetch data from the table: "products" using primary key columns */
  products_by_pk?: Maybe<Products>;
  /** fetch data from the table in a streaming manner: "products" */
  products_stream: Array<Products>;
  /** fetch data from the table: "shippers" */
  shippers: Array<Shippers>;
  /** fetch aggregated fields from the table: "shippers" */
  shippers_aggregate: Shippers_Aggregate;
  /** fetch data from the table: "shippers" using primary key columns */
  shippers_by_pk?: Maybe<Shippers>;
  /** fetch data from the table in a streaming manner: "shippers" */
  shippers_stream: Array<Shippers>;
  /** fetch data from the table: "suppliers" */
  suppliers: Array<Suppliers>;
  /** fetch aggregated fields from the table: "suppliers" */
  suppliers_aggregate: Suppliers_Aggregate;
  /** fetch data from the table: "suppliers" using primary key columns */
  suppliers_by_pk?: Maybe<Suppliers>;
  /** fetch data from the table in a streaming manner: "suppliers" */
  suppliers_stream: Array<Suppliers>;
};


export type Subscription_RootCategoriesArgs = {
  distinct_on?: InputMaybe<Array<Categories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Categories_Order_By>>;
  where?: InputMaybe<Categories_Bool_Exp>;
};


export type Subscription_RootCategories_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Categories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Categories_Order_By>>;
  where?: InputMaybe<Categories_Bool_Exp>;
};


export type Subscription_RootCategories_By_PkArgs = {
  categoryid: Scalars['Int']['input'];
};


export type Subscription_RootCategories_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Categories_Stream_Cursor_Input>>;
  where?: InputMaybe<Categories_Bool_Exp>;
};


export type Subscription_RootCustomersArgs = {
  distinct_on?: InputMaybe<Array<Customers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Customers_Order_By>>;
  where?: InputMaybe<Customers_Bool_Exp>;
};


export type Subscription_RootCustomers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Customers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Customers_Order_By>>;
  where?: InputMaybe<Customers_Bool_Exp>;
};


export type Subscription_RootCustomers_By_PkArgs = {
  customerid: Scalars['Int']['input'];
};


export type Subscription_RootCustomers_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Customers_Stream_Cursor_Input>>;
  where?: InputMaybe<Customers_Bool_Exp>;
};


export type Subscription_RootEmployeesArgs = {
  distinct_on?: InputMaybe<Array<Employees_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Employees_Order_By>>;
  where?: InputMaybe<Employees_Bool_Exp>;
};


export type Subscription_RootEmployees_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Employees_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Employees_Order_By>>;
  where?: InputMaybe<Employees_Bool_Exp>;
};


export type Subscription_RootEmployees_By_PkArgs = {
  employeeid: Scalars['Int']['input'];
};


export type Subscription_RootEmployees_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Employees_Stream_Cursor_Input>>;
  where?: InputMaybe<Employees_Bool_Exp>;
};


export type Subscription_RootOrderdetailsArgs = {
  distinct_on?: InputMaybe<Array<Orderdetails_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Orderdetails_Order_By>>;
  where?: InputMaybe<Orderdetails_Bool_Exp>;
};


export type Subscription_RootOrderdetails_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Orderdetails_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Orderdetails_Order_By>>;
  where?: InputMaybe<Orderdetails_Bool_Exp>;
};


export type Subscription_RootOrderdetails_By_PkArgs = {
  orderdetailid: Scalars['Int']['input'];
};


export type Subscription_RootOrderdetails_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Orderdetails_Stream_Cursor_Input>>;
  where?: InputMaybe<Orderdetails_Bool_Exp>;
};


export type Subscription_RootOrdersArgs = {
  distinct_on?: InputMaybe<Array<Orders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Orders_Order_By>>;
  where?: InputMaybe<Orders_Bool_Exp>;
};


export type Subscription_RootOrders_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Orders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Orders_Order_By>>;
  where?: InputMaybe<Orders_Bool_Exp>;
};


export type Subscription_RootOrders_By_PkArgs = {
  orderid: Scalars['Int']['input'];
};


export type Subscription_RootOrders_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Orders_Stream_Cursor_Input>>;
  where?: InputMaybe<Orders_Bool_Exp>;
};


export type Subscription_RootProductsArgs = {
  distinct_on?: InputMaybe<Array<Products_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Products_Order_By>>;
  where?: InputMaybe<Products_Bool_Exp>;
};


export type Subscription_RootProducts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Products_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Products_Order_By>>;
  where?: InputMaybe<Products_Bool_Exp>;
};


export type Subscription_RootProducts_By_PkArgs = {
  productid: Scalars['Int']['input'];
};


export type Subscription_RootProducts_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Products_Stream_Cursor_Input>>;
  where?: InputMaybe<Products_Bool_Exp>;
};


export type Subscription_RootShippersArgs = {
  distinct_on?: InputMaybe<Array<Shippers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Shippers_Order_By>>;
  where?: InputMaybe<Shippers_Bool_Exp>;
};


export type Subscription_RootShippers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Shippers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Shippers_Order_By>>;
  where?: InputMaybe<Shippers_Bool_Exp>;
};


export type Subscription_RootShippers_By_PkArgs = {
  shipperid: Scalars['Int']['input'];
};


export type Subscription_RootShippers_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Shippers_Stream_Cursor_Input>>;
  where?: InputMaybe<Shippers_Bool_Exp>;
};


export type Subscription_RootSuppliersArgs = {
  distinct_on?: InputMaybe<Array<Suppliers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Suppliers_Order_By>>;
  where?: InputMaybe<Suppliers_Bool_Exp>;
};


export type Subscription_RootSuppliers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Suppliers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Suppliers_Order_By>>;
  where?: InputMaybe<Suppliers_Bool_Exp>;
};


export type Subscription_RootSuppliers_By_PkArgs = {
  supplierid: Scalars['Int']['input'];
};


export type Subscription_RootSuppliers_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Suppliers_Stream_Cursor_Input>>;
  where?: InputMaybe<Suppliers_Bool_Exp>;
};

/** columns and relationships of "suppliers" */
export type Suppliers = {
  __typename?: 'suppliers';
  address?: Maybe<Scalars['String']['output']>;
  city?: Maybe<Scalars['String']['output']>;
  contactname?: Maybe<Scalars['String']['output']>;
  country?: Maybe<Scalars['String']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
  postalcode?: Maybe<Scalars['String']['output']>;
  /** An array relationship */
  products: Array<Products>;
  /** An aggregate relationship */
  products_aggregate: Products_Aggregate;
  supplierid: Scalars['Int']['output'];
  suppliername?: Maybe<Scalars['String']['output']>;
};


/** columns and relationships of "suppliers" */
export type SuppliersProductsArgs = {
  distinct_on?: InputMaybe<Array<Products_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Products_Order_By>>;
  where?: InputMaybe<Products_Bool_Exp>;
};


/** columns and relationships of "suppliers" */
export type SuppliersProducts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Products_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Products_Order_By>>;
  where?: InputMaybe<Products_Bool_Exp>;
};

/** aggregated selection of "suppliers" */
export type Suppliers_Aggregate = {
  __typename?: 'suppliers_aggregate';
  aggregate?: Maybe<Suppliers_Aggregate_Fields>;
  nodes: Array<Suppliers>;
};

/** aggregate fields of "suppliers" */
export type Suppliers_Aggregate_Fields = {
  __typename?: 'suppliers_aggregate_fields';
  avg?: Maybe<Suppliers_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Suppliers_Max_Fields>;
  min?: Maybe<Suppliers_Min_Fields>;
  stddev?: Maybe<Suppliers_Stddev_Fields>;
  stddev_pop?: Maybe<Suppliers_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Suppliers_Stddev_Samp_Fields>;
  sum?: Maybe<Suppliers_Sum_Fields>;
  var_pop?: Maybe<Suppliers_Var_Pop_Fields>;
  var_samp?: Maybe<Suppliers_Var_Samp_Fields>;
  variance?: Maybe<Suppliers_Variance_Fields>;
};


/** aggregate fields of "suppliers" */
export type Suppliers_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Suppliers_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Suppliers_Avg_Fields = {
  __typename?: 'suppliers_avg_fields';
  supplierid?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "suppliers". All fields are combined with a logical 'AND'. */
export type Suppliers_Bool_Exp = {
  _and?: InputMaybe<Array<Suppliers_Bool_Exp>>;
  _not?: InputMaybe<Suppliers_Bool_Exp>;
  _or?: InputMaybe<Array<Suppliers_Bool_Exp>>;
  address?: InputMaybe<String_Comparison_Exp>;
  city?: InputMaybe<String_Comparison_Exp>;
  contactname?: InputMaybe<String_Comparison_Exp>;
  country?: InputMaybe<String_Comparison_Exp>;
  phone?: InputMaybe<String_Comparison_Exp>;
  postalcode?: InputMaybe<String_Comparison_Exp>;
  products?: InputMaybe<Products_Bool_Exp>;
  products_aggregate?: InputMaybe<Products_Aggregate_Bool_Exp>;
  supplierid?: InputMaybe<Int_Comparison_Exp>;
  suppliername?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "suppliers" */
export enum Suppliers_Constraint {
  /** unique or primary key constraint on columns "supplierid" */
  SuppliersPkey = 'suppliers_pkey'
}

/** input type for incrementing numeric columns in table "suppliers" */
export type Suppliers_Inc_Input = {
  supplierid?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "suppliers" */
export type Suppliers_Insert_Input = {
  address?: InputMaybe<Scalars['String']['input']>;
  city?: InputMaybe<Scalars['String']['input']>;
  contactname?: InputMaybe<Scalars['String']['input']>;
  country?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  postalcode?: InputMaybe<Scalars['String']['input']>;
  products?: InputMaybe<Products_Arr_Rel_Insert_Input>;
  supplierid?: InputMaybe<Scalars['Int']['input']>;
  suppliername?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Suppliers_Max_Fields = {
  __typename?: 'suppliers_max_fields';
  address?: Maybe<Scalars['String']['output']>;
  city?: Maybe<Scalars['String']['output']>;
  contactname?: Maybe<Scalars['String']['output']>;
  country?: Maybe<Scalars['String']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
  postalcode?: Maybe<Scalars['String']['output']>;
  supplierid?: Maybe<Scalars['Int']['output']>;
  suppliername?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Suppliers_Min_Fields = {
  __typename?: 'suppliers_min_fields';
  address?: Maybe<Scalars['String']['output']>;
  city?: Maybe<Scalars['String']['output']>;
  contactname?: Maybe<Scalars['String']['output']>;
  country?: Maybe<Scalars['String']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
  postalcode?: Maybe<Scalars['String']['output']>;
  supplierid?: Maybe<Scalars['Int']['output']>;
  suppliername?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "suppliers" */
export type Suppliers_Mutation_Response = {
  __typename?: 'suppliers_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Suppliers>;
};

/** input type for inserting object relation for remote table "suppliers" */
export type Suppliers_Obj_Rel_Insert_Input = {
  data: Suppliers_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Suppliers_On_Conflict>;
};

/** on_conflict condition type for table "suppliers" */
export type Suppliers_On_Conflict = {
  constraint: Suppliers_Constraint;
  update_columns?: Array<Suppliers_Update_Column>;
  where?: InputMaybe<Suppliers_Bool_Exp>;
};

/** Ordering options when selecting data from "suppliers". */
export type Suppliers_Order_By = {
  address?: InputMaybe<Order_By>;
  city?: InputMaybe<Order_By>;
  contactname?: InputMaybe<Order_By>;
  country?: InputMaybe<Order_By>;
  phone?: InputMaybe<Order_By>;
  postalcode?: InputMaybe<Order_By>;
  products_aggregate?: InputMaybe<Products_Aggregate_Order_By>;
  supplierid?: InputMaybe<Order_By>;
  suppliername?: InputMaybe<Order_By>;
};

/** primary key columns input for table: suppliers */
export type Suppliers_Pk_Columns_Input = {
  supplierid: Scalars['Int']['input'];
};

/** select columns of table "suppliers" */
export enum Suppliers_Select_Column {
  /** column name */
  Address = 'address',
  /** column name */
  City = 'city',
  /** column name */
  Contactname = 'contactname',
  /** column name */
  Country = 'country',
  /** column name */
  Phone = 'phone',
  /** column name */
  Postalcode = 'postalcode',
  /** column name */
  Supplierid = 'supplierid',
  /** column name */
  Suppliername = 'suppliername'
}

/** input type for updating data in table "suppliers" */
export type Suppliers_Set_Input = {
  address?: InputMaybe<Scalars['String']['input']>;
  city?: InputMaybe<Scalars['String']['input']>;
  contactname?: InputMaybe<Scalars['String']['input']>;
  country?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  postalcode?: InputMaybe<Scalars['String']['input']>;
  supplierid?: InputMaybe<Scalars['Int']['input']>;
  suppliername?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate stddev on columns */
export type Suppliers_Stddev_Fields = {
  __typename?: 'suppliers_stddev_fields';
  supplierid?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Suppliers_Stddev_Pop_Fields = {
  __typename?: 'suppliers_stddev_pop_fields';
  supplierid?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Suppliers_Stddev_Samp_Fields = {
  __typename?: 'suppliers_stddev_samp_fields';
  supplierid?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "suppliers" */
export type Suppliers_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Suppliers_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Suppliers_Stream_Cursor_Value_Input = {
  address?: InputMaybe<Scalars['String']['input']>;
  city?: InputMaybe<Scalars['String']['input']>;
  contactname?: InputMaybe<Scalars['String']['input']>;
  country?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  postalcode?: InputMaybe<Scalars['String']['input']>;
  supplierid?: InputMaybe<Scalars['Int']['input']>;
  suppliername?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate sum on columns */
export type Suppliers_Sum_Fields = {
  __typename?: 'suppliers_sum_fields';
  supplierid?: Maybe<Scalars['Int']['output']>;
};

/** update columns of table "suppliers" */
export enum Suppliers_Update_Column {
  /** column name */
  Address = 'address',
  /** column name */
  City = 'city',
  /** column name */
  Contactname = 'contactname',
  /** column name */
  Country = 'country',
  /** column name */
  Phone = 'phone',
  /** column name */
  Postalcode = 'postalcode',
  /** column name */
  Supplierid = 'supplierid',
  /** column name */
  Suppliername = 'suppliername'
}

export type Suppliers_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Suppliers_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Suppliers_Set_Input>;
  /** filter the rows which have to be updated */
  where: Suppliers_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Suppliers_Var_Pop_Fields = {
  __typename?: 'suppliers_var_pop_fields';
  supplierid?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Suppliers_Var_Samp_Fields = {
  __typename?: 'suppliers_var_samp_fields';
  supplierid?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Suppliers_Variance_Fields = {
  __typename?: 'suppliers_variance_fields';
  supplierid?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to compare columns of type "timestamp". All fields are combined with logical 'AND'. */
export type Timestamp_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamp']['input']>;
  _gt?: InputMaybe<Scalars['timestamp']['input']>;
  _gte?: InputMaybe<Scalars['timestamp']['input']>;
  _in?: InputMaybe<Array<Scalars['timestamp']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['timestamp']['input']>;
  _lte?: InputMaybe<Scalars['timestamp']['input']>;
  _neq?: InputMaybe<Scalars['timestamp']['input']>;
  _nin?: InputMaybe<Array<Scalars['timestamp']['input']>>;
};

export type ProductDetailsFragment = { __typename?: 'orderdetails', product_info?: { __typename?: 'products', productname?: string | null } | null };

export type OrderQueryQueryVariables = Exact<{
  empid?: InputMaybe<Scalars['Int']['input']>;
}>;


export type OrderQueryQuery = { __typename?: 'query_root', orders: Array<{ __typename?: 'orders', customerid?: number | null, orderdetails: Array<{ __typename?: 'orderdetails', product_info?: { __typename?: 'products', productname?: string | null } | null }> }> };
