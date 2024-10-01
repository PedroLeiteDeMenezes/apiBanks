<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Banks Pedro API</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            margin: 20px;
            padding: 20px;
            background-color: #f4f4f4;
            border-radius: 8px;
            max-width: 800px;
        }
        h1 {
            color: #333;
        }
        h2 {
            color: #444;
        }
        pre {
            background-color: #e8e8e8;
            padding: 10px;
            border-radius: 5px;
            overflow-x: auto;
        }
        code {
            font-family: monospace;
            background-color: #e8e8e8;
            padding: 2px 4px;
            border-radius: 4px;
        }
    </style>
</head>
<body>

    <h1>Banks Pedro API</h1>

    <h2>Overview</h2>
    <p>
        The <strong>Banks Pedro API</strong> is a RESTful API designed for managing banking operations, including user accounts, transactions, and financial services. 
        This API provides a secure and efficient way for clients to interact with their bank accounts through a modern digital banking platform.
    </p>

    <h2>Features</h2>
    <ul>
        <li><strong>User Management:</strong> Create, update, and delete user accounts.</li>
        <li><strong>Account Operations:</strong> Check balance, make deposits, withdrawals, and transfers.</li>
        <li><strong>Transaction History:</strong> Retrieve a list of transactions for each user.</li>
        <li><strong>Secure Authentication:</strong> Implemented with token-based authentication for secure access.</li>
    </ul>

    <h2>Technologies Used</h2>
    <ul>
        <li><strong>Node.js:</strong> JavaScript runtime for building the server.</li>
        <li><strong>Express.js:</strong> Web framework for building the RESTful API.</li>
        <li><strong>Sequelize:</strong> ORM for interacting with the database (MySQL/MariaDB).</li>
        <li><strong>JWT (JSON Web Tokens):</strong> For secure user authentication.</li>
        <li><strong>Multer:</strong> For handling file uploads (if applicable).</li>
        <li><strong>dotenv:</strong> For managing environment variables.</li>
    </ul>

    <h2>Installation</h2>
    <ol>
        <li><strong>Clone the repository:</strong>
            <pre><code>git clone https://github.com/yourusername/banks-pedro-api.git
cd banks-pedro-api</code></pre>
        </li>
        <li><strong>Install dependencies:</strong>
            <pre><code>npm install</code></pre>
        </li>
        <li><strong>Create a <code>.env</code> file</strong> in the root directory and add your database configuration:
            <pre><code>DATABASE=gacha
DATABASE_HOST=localhost
DATABASE_PORT=3308
DATABASE_USERNAME=root
DATABASE_PASSWORD=your_password</code></pre>
        </li>
        <li><strong>Run migrations:</strong>
            <pre><code>npx sequelize-cli db:migrate</code></pre>
        </li>
        <li><strong>Start the server:</strong>
            <pre><code>npm run dev</code></pre>
        </li>
    </ol>

    <h2>API Endpoints</h2>

    <h3>User Management</h3>
    <ul>
        <li><strong>Create User:</strong> <code>POST /api/users</code></li>
        <li><strong>Get User by ID:</strong> <code>GET /api/users/:id</code></li>
        <li><strong>Update User:</strong> <code>PUT /api/users/:id</code></li>
        <li><strong>Delete User:</strong> <code>DELETE /api/users/:id</code></li>
    </ul>

    <h3>Account Operations</h3>
    <ul>
        <li><strong>Get Account Balance:</strong> <code>GET /api/accounts/:accountId/balance</code></li>
        <li><strong>Deposit Funds:</strong> <code>POST /api/accounts/:accountId/deposit</code></li>
        <li><strong>Withdraw Funds:</strong> <code>POST /api/accounts/:accountId/withdraw</code></li>
        <li><strong>Transfer Funds:</strong> <code>POST /api/accounts/transfer</code></li>
    </ul>

    <h3>Transaction History</h3>
    <ul>
        <li><strong>Get Transactions:</strong> <code>GET /api/accounts/:accountId/transactions</code></li>
    </ul>

    <h2>Contributing</h2>
    <p>Contributions are welcome! If you have suggestions for improvements or additional features, please create an issue or submit a pull request.</p>

    <h2>License</h2>
    <p>This project is licensed under the MIT License.</p>

</body>
</html>
