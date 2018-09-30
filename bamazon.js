var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "10black555m",
    database: "bamazon"
});

connection.connect(function(err) {
    if (err) throw err;
    welcome();
});

function welcome() {
    connection.query('SELECT * FROM products', function(err, results) {
        if (err) throw err;
        inquirer
        .prompt([
            {
                name: 'choice',
                type: 'rawlist',
                choices: function() {
                    // These should be in the database.
                    var waresList = [];
                    for (var i = 0; i < results.length; i++) {
                        waresList.push(results[i].product_name);
                        console.log(`ID: ${results[i].ID}, Item: ${results[i].product_name}, $${results[i].price}, Quantity: ${results[i].stock_quantity}`);
                    }
                    return waresList;
                },
                message: 'Here\'s a list of our wares. \nPlease enter the ID of the product you want to purchase.'
            },       
            {
                name: "amount",
                type: "input",
                message: "Please enter the amount you would like to purchase."
            }  
        ]).then(function(answer) {
            var chosenWare;
            for (var i = 0; i < results.length; i++) {
                if (results[i].product_name === answer.choice) {
                    chosenWare = results[i];                } 
            }

            if (chosenWare.stock_quantity >= parseInt(answer.amount)) {
                connection.query(                    
                    "UPDATE products SET ? WHERE ?",
                    [
                        {
                            stock_quantity: chosenWare.stock_quantity -= answer.amount
                        },
                        {
                            id: chosenWare.id
                        }
                    ],
                    function(error) {                        
                        if (error) throw err;
                        // process to sum total
                        console.log(`Your total is $${answer.amount * chosenWare.price}`);
                        console.log("Thank you for your purchase! Take at look at our other wares");
                        welcome();
                    }
                );
            }
            else {
                console.log("Sorry! We don't have enough of that left in stock.");
                welcome();
            }
        });
    });
}