module.exports = (sequelize, DataTypes) => {
    const Documents = sequelize.define("Documents", {
        documentTitle: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        documentTime: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    });

    return Documents;
};