import Sequelize, { Model } from 'sequelize';
import bcryptjs from 'bcryptjs';

export default class User extends Model {
    static init(sequelize) {
        super.init({
            first_name: {
                type: Sequelize.STRING(40),
                allowNull: false,
            },
            last_name: {
                type: Sequelize.STRING(40),
                allowNull: false,
            },
            email: {
                type: Sequelize.STRING(100),
                allowNull: false,
                unique: true,
                validate: {
                    isEmail: true, // Valida se o valor é um email
                },
            },
            password_hash: {
                type: Sequelize.STRING(255),
            },
            password: {
                type: Sequelize.VIRTUAL,
                validate: {
                    len: [6, 50],
                },
            },
            cpf: {
                type: Sequelize.STRING,
                allowNull: false,
                unique: true,
            },
            date_of_birth: {
                type: Sequelize.DATE,
                allowNull: false,
            },
            account_number: {
                type: Sequelize.STRING,
                allowNull: false,
                unique: true,
            },
            agency: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            balance: {
                type: Sequelize.DECIMAL(10, 2),
                allowNull: false,
                defaultValue: 0.00,
            },
            account_type: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            status: {
                type: Sequelize.STRING,
                allowNull: false,
                defaultValue: 'active',
            },
            address: {
                type: Sequelize.STRING,
                allowNull: true, // Defina como true se for opcional
            },
            phone: {
                type: Sequelize.STRING,
                allowNull: true, // Defina como true se for opcional
            },
        }, {
            sequelize,
        });

        this.addHook('beforeSave', async user => {
            if (user.password) {
                user.password_hash = await bcryptjs.hash(user.password, 10);
            }
        });

        return this;
    }

    passwordIsValid(password) {
        return bcryptjs.compare(password, this.password_hash);
    }
}
