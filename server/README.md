# budget_backend

This project uses Java Spring boot
You will need to install JDK 8 as well as the spring tool suite
<https://spring.io/guides/gs/sts/>

Clone the repository and open in Spring tool suite update the project by right clicking the top folder and wait for maven to build it.
run the project and it should come up on localhost:8080

MYSQL DB TEST SCRIPT

Spring is set-up to build the mySQL database, all you need to do is create the database. It initially builds anything new to the database, then updates even if you shut Spring down and start it back up.

## Budget Database Creation

```sql
CREATE Database moolah;
```

NOTES:

Ids are Long values autogenerated from within Spring.
Make sure Id's in message body null for POST requests and the correct userId for PUT requests.

ERROR MESSAGES:

```sql
Format example
{
    "timestamp": "2019-04-20T05:28:22.921+0000",
    "message": "No transactions found.",
    "details": "uri=/users/1/accounts/6/transactions"
}
```

  There are three types of non-default errors:
    ResourceNotFoundException (custom) - message says user not found. 
    PasswordMismatchException - message say password incorrect.
    NullPointerException - messages says resource not found.

## Entrypoints

### Users

#### Login

Will return Long = userId if submitted password == password stored in DB for that user, or Long = 0 if not. 

```sql
  Post request to url: localhost:8080/users/login
  Body
  {
        "userName": "bigone2",
        "password": "R%&$F^",
  }
```

#### Get All Users

```sql
GET request to URL: localhost:8080/users
```

#### Get User

```sql
GET request to URL: localhost:8080/users/{userId}
```

#### Delete User

```sql
DELETE request to URL: localhost:8080/users/{userId}
```

#### Add User

```sql
POST request to URL: localhost:8080/users
    {
        "userId": null,
        "userName": "bigone2",
        "email": "BillyBob@monkey.com",
        "password": "R%&$F^",
        "firstName": "Billy",
        "lastName": "Bob",
        "dateCreated": "2019-01-14"
    }
```

#### Update User

```sql
PUT request to URL: localhost:8080/users/{userId}
   {
        "userId": {userId},
        "userName": "UpdatedYeah",
        "email": "BillyBob@monkey.com",
        "password": "R%&$F^",
        "firstName": "Billy",
        "lastName": "Bob",
        "dateCreated": "2019-01-14"
    }
```

#### Update Specific User Fields

Any number of, combination, and/or order of fields below. 

```sql
PUT request to URL: localhost:8080/users/{userId}/update
   {
        "email": "BillyBob@monkey.com",
        "password": "R%&$F^",
        "firstName": "Billy",
        "lastName": "Bob"
    }
```

### Accounts

#### Get All Accounts of User

```sql
GET request to URL: localhost:8080/users/{userId}/accounts
```

#### Get Account

```sql
GET request to URL: localhost:8080/users/{userId}/accounts/{accountId}
```

#### Delete Account

```sql
DELETE request to URL: localhost:8080/users/{userId}/accounts/{accountId}
```

#### Add Account

```sql
POST request to URL: localhost:8080/users/{userId}/accounts
    {
        "accountId": null,
        "accountName": "bigone77",
        "accountType": "Checking",
        "bankName": "bigBank",
        "balance": 7777.77
    }  
```

#### Update Account

```sql
PUT request to URL: localhost:8080/users/{userId}/accounts/{accountId}
    {
        "accountId": {accountId},
        "accountName": "updated77",
        "accountType": "Savings",
        "bankName": "UpdatedBank",
        "balance": 777777.77
    }
```

### Transactions

#### Get All Transactions of User

```sql
GET request to URL: localhost:8080/users/{userId}/transactions
```

#### Get All Transactions of Account

```sql
GET request to URL: localhost:8080/users/{userId}/accounts/{accountId}/transactions
```

#### Get Transaction

```sql
GET request to URL: localhost:8080/users/{userId}/accounts/{accountId}/transactions/{transactionId}
```

#### Delete Transaction

```sql
DELETE request to URL: localhost:8080/users/{userId}/accounts/{accountId}/transactions/{transactionId}
```

#### Add Transaction

```sql
POST request to URL: localhost:8080/users/{userId}/accounts/{accountId}/transactions
    {
        "transactionId": null,
        "date": "2019-01-14",
        "category": "$Money",
        "amount": 77.77
    }
```

#### Update Transaction

```sql
PUT request to URL: localhost:8080/users/{userId}/accounts/{accountId}/transactions/{transactionId}
    {
        "transactionId": {transactionId},
        "date": "2019-01-14",
        "category": "$Money",
        "amount": 7.77
    }
```

### Budgets

#### Get All Budgets of User

```sql
GET request to URL: localhost:8080/users/{userId}/budgets
```

#### Get Budget

```sql
GET request to URL: localhost:8080/users/{userId}/budgets/{budgetId}
```

#### Delete Budget

```sql
DELETE request to URL: localhost:8080/users/{userId}/budgets/{budgetId}
```

#### Add Budget

```sql
POST request to URL: localhost:8080/users/{userId}/budgets
    {
        "budgetId": null,
        "category": "Groceries",
        "spentAmount": 0,
        "maxAmount": 7777.77
    }
```

#### Update Budget

```sql
PUT request to URL: localhost:8080/users/{userId}/budgets/{budgetId}
    {
        "budgetId": null,
        "category": "Gas",
        "spentAmount": 3535.35,
        "maxAmount": 7777.77
    }
```

### Categories

#### Get All Categories of User

```sql
GET request to URL: localhost:8080/users/{userId}/categories
```

#### Get Category

```sql
GET request to URL: localhost:8080/users/{userId}/categories/{categoryId}
```

#### Delete Category

```sql
DELETE request to URL: localhost:8080/users/{userId}/categories/{categoryId}
```

#### Add Category

```sql
POST request to URL: localhost:8080/users/{userId}/categories/{categoryId}
    {
        "categoryId": null,
        "name": "Groceries",
        "userId": 0
    }
```

#### Update Category

```sql
PUT request to URL: localhost:8080/users/{userId}/categories/{categoryId}
    {
        "categoryId": null,
        "name": "Food",
        "userId": 0
    }
```