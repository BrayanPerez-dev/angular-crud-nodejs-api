# Angular CRUD Application

This is an Angular CRUD application built with the HTTP Client Module and the NgZorro UI library. It consumes a Node.js API.

## Requirements

- Node.js (version 14 or higher)
- Angular CLI (version 12 or higher)

## Installation

1. Clone this repository
2. Install dependencies by running `npm install`
3. Start the development server by running `ng serve`
4. Navigate to `http://localhost:4200/`

## Features

- View a list of customers
- Add a new customer
- Edit an existing customer
- Delete a customer

## Usage

### Services

The following services are used in this application:

- `CustomerService`: Handles CRUD operations for customers

### Components

The following components are used in this application:

- `CustomerListComponent`: Displays a list of customers
- `CustomerFormComponent`: Displays a form for adding/editing a customer
- `ModalComponent`: Reusable modal component
- `ButtonComponent`: Reusable button component

### NgZorro UI Library

This application uses the NgZorro UI library for its UI components. The following components are used:

- `nz-list`: Displays a list of customers
- `nz-form`: Displays a form for adding/editing a customer
- `nz-modal`: Reusable modal component
- `nz-button`: Reusable button component
- `nz-popconfirm`: Confirmation dialog for deleting a customer

## API

This application consumes a Node.js API for its data. The following endpoints are used:

- `GET /customers`: Returns a list of customers
- `POST /customers`: Adds a new customer
- `PUT /customers/:id`: Edits an existing customer
- `DELETE /customers/:id`: Deletes a customer

here's an example JSON object from Customer's API:
{
  "customer_id": 1,
  "customer_name": "John Smith",
  "status": true
}

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](https://choosealicense.com/licenses/mit/)