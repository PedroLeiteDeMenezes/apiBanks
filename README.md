# Banks Pedro API

## Overview
The **Banks Pedro API** is a RESTful API designed for managing banking operations, including user accounts, transactions, and financial services. This API provides a secure and efficient way for clients to interact with their bank accounts through a modern digital banking platform.

## Features
- **User Management:** Create, update, and delete user accounts.
- **Account Operations:** Check balance.
- **Secure Authentication:** Implemented with token-based authentication for secure access.

## Technologies Used
- **Node.js:** JavaScript runtime for building the server.
- **Express.js:** Web framework for building the RESTful API.
- **Sequelize:** ORM for interacting with the database (MySQL/MariaDB).
- **JWT (JSON Web Tokens):** For secure user authentication.
- **Multer:** For handling file uploads (if applicable).
- **dotenv:** For managing environment variables.

## Installation
1. **Clone the repository:**
    ```bash
    git clone https://github.com/yourusername/banks-pedro-api.git
    cd banks-pedro-api
    ```
2. **Install dependencies:**
    ```bash
    npm install
    ```
3. **Create a `.env` file** in the root directory and add your database configuration:
    ```plaintext
    DATABASE=gacha
    DATABASE_HOST=localhost
    DATABASE_PORT=3308
    DATABASE_USERNAME=root
    DATABASE_PASSWORD=your_password
    ```
4. **Run migrations:**
    ```bash
    npx sequelize-cli db:migrate
    ```
5. **Start the server:**
    ```bash
    npm run dev
    ```

## API Endpoints

### User Management
- **Create User:** `POST /api/users`
- **Get User by ID:** `GET /api/users/:id`
- **Update User:** `PUT /api/users/:id`
- **Delete User:** `DELETE /api/users/:id`

### Account Operations
- **Get Account Balance:** `GET /api/accounts/:accountId/balance`
- **Deposit Funds:** `POST /api/accounts/:accountId/deposit`
- **Withdraw Funds:** `POST /api/accounts/:accountId/withdraw`
- **Transfer Funds:** `POST /api/accounts/transfer`

### Transaction History
- **Get Transactions:** `GET /api/accounts/:accountId/transactions`

## Contributing
Contributions are welcome! If you have suggestions for improvements or additional features, please create an issue or submit a pull request.

## License
This project is licensed under the MIT License.
