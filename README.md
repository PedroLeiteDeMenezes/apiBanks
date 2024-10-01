<h1>Banks Pedro API</h1>
<h2>Features</h2>
<ul>
  <li>User Management: Create, update, and delete user accounts.</li>
  <li>Account Operations: Check balance, make deposits, withdrawals, and transfers.</li>
  <li>Transaction History: Retrieve a list of transactions for each user.</li>
  <li>Secure Authentication: Implemented with token-based authentication for secure access.</li>
</ul>
<h2>Technologies Used</h2>
<ul>
  <li> Node.js: JavaScript runtime for building the server.</li>
  <li>Express.js: Web framework for building the RESTful API.</li>
  <li>Sequelize: ORM for interacting with the database (MySQL/MariaDB).</li>
  <li>JWT (JSON Web Tokens): For secure user authentication.</li>
  <li>Multer: For handling file uploads (if applicable).</li>
  <li>dotenv: For managing environment variables.</li>
</ul>

<h1>Installation</h1>
git clone https://github.com/yourusername/banks-pedro-api.git
cd banks-pedro-api

<h2>Install dependencies:</h2>
npm install

<h2>Create a .env file in the root directory and add your database configuration:</h2>
DATABASE=gacha
DATABASE_HOST=localhost
DATABASE_PORT=3308
DATABASE_USERNAME=root
DATABASE_PASSWORD=your_password

<h2>Run migrations (if applicable):</h2>
npx sequelize-cli db:migrate

<h2>Start the server:</h2>

API Endpoints
User Management
Create User: POST /api/users
Get User by ID: GET /api/users/:id
Update User: PUT /api/users/:id
Delete User: DELETE /api/users/:id
Account Operations
Get Account Balance: GET /api/accounts/:accountId/balance
Deposit Funds: POST /api/accounts/:accountId/deposit
Withdraw Funds: POST /api/accounts/:accountId/withdraw
Transfer Funds: POST /api/accounts/transfer
Transaction History
Get Transactions: GET /api/accounts/:accountId/transactions
Contributing
Contributions are welcome! If you have suggestions for improvements or additional features, please create an issue or submit a pull request.

License
This project is licensed under the MIT License.
