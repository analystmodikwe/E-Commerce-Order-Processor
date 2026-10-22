//  adding 10 different objects
let orders = [
    {
        orderId : 1,
        customerName : "Lesedi Modikwe",
        email: "lesedi123@gmail.com",
        product: "Laptop",
        category: "Electronics",
        price: 9000,
        orderDate: "18 October 2026",
    },
    {
        orderId : 2,
        customerName : "Kamohelo Mokoena",
        email: "kamohelo123@gmail.com",
        product: "TV",
        category: "Electronics",
        price: 15000,
        orderDate: "11 October 2026",
    },
    {
        orderId : 3,
        customerName : "Thandi Nkosi",
        email: "thandi123@gmail.com",
        product: "Smartphone",
        category: "Electronics",
        price: 8000,
        orderDate: "01 October 2026",
    },
    {
        orderId : 4,
        customerName : "Tshepo Nkala",
        email: "tshepo123@gmail.com",
        product: "Fridge",
        category: "large Appliances",
        price: 18000,
        orderDate: "15 October 2026",
    },
    {
        orderId : 5,
        customerName : "Naledi Mabaso",
        email: "naledi123@gmail.com",
        product: "Washing Machine",
        category: "large Appliances",
        price: 12000,
        orderDate: "20 October 2026",
    },
    {
        orderId : 6,
        customerName : "Sipho Dlamini",
        email: "sipho123@gmail.com",
        product: "Microwave",
        category: "large Appliances",
        price: 8000,
        orderDate: "25 October 2026",
    },
    {
        orderId : 7,
        customerName : "Lerato Mokoena",
        email: "lerato123@gmail.com",
        product: "Blender",
        category: "small Appliances",
        price: 5000,
        orderDate: "30 September 2026",
    },
    {
        orderId : 8,
        customerName : "Thabo Mthembu",
        email: "thabo123@gmail.com",
        product: "Toaster",
        category: "small Appliances",
        price: 3000,
        orderDate: "05 September 2026",
    },
    {
        orderId : 9,
        customerName : "Palesa Khumalo",
        email: "palesa123@gmail.com",
        product: "Vacuum Cleaner",
        category: "small Appliances",
        price: 4000,
        orderDate: "10 September 2026",
    },
    {
        orderId : 10,
        customerName : "Mpho Mokoena",
        email: "mpho123@gmail.com",
        product: "Coffee Maker",
        category: "small Appliances",
        price: 7500,
        orderDate: "15 September 2026",
    },
    { //object with messy data
        orderId : 11,
        customerName : " lethabo zikode ",
        email: "mpho123gmail.com",
        product: "Kettle",
        category: "small Appliances",
        price: 500.887,
        orderDate: "25 September 2027",
    },
    { //object with messy data
        orderId : 12,
        customerName : " bonGani msibi ",
        email: "Bongani123gmail.com",
        product: "Coffee Maker",
        category: "small Appliances",
        price: 7500.887,
        orderDate: "19 September 2027",
    },
];

// creating an element, applying Tailwind classes, and sets its text safely.
// textContent treats values as plain text, so nothing is parsed as HTML.
function createEl(tag, classes, text = "") {
    const el = document.createElement(tag);
    el.className = classes;
    el.textContent = text;
    return el;
}

// Build one order card from one order object
function createOrderCard(order) {
    // Outer card: stacked on mobile, a row on medium+ screens
    const card = createEl(
    "div",
    "border border-gray-200 rounded-lg p-4 grid grid-cols-1 md:grid-cols-3 md:items-center gap-2"
    );

    // Left block: order ID, customer name and email
    const customerBlock = document.createElement("div");
    customerBlock.append(
        createEl("p", "text-xs text-gray-400", `Order #${order.orderId}`),
        createEl("p", "font-semibold", order.customerName),
        createEl("p", "text-sm text-gray-500", order.email)
    );

    // Middle block: product, category and order date
    const productBlock = document.createElement("div");
    productBlock.append(
        createEl("p", "font-medium", order.product),
        createEl("p", "text-sm text-gray-500", `${order.category} · ${order.orderDate}`)
    );

    // Right: price (shown as-is for now, cleaning comes in the Data Processing step)
    // Price: text-right pushes it to the right edge of the third column
    const priceEl = createEl("p", "font-bold text-blue-600 md:text-right", `R${order.price}`);

    // Put the three blocks inside the card
    card.append(customerBlock, productBlock, priceEl);
    return card;
}


// Render a list of orders into the Orders section
function renderOrders(orderList) {
    // This id must match the div in index.html
    const container = document.getElementById("orders-container");

    // Clear old content so re-rendering (e.g. after filtering) doesn't duplicate cards
    container.replaceChildren();

    // Friendly message if the list is empty
    if (orderList.length === 0) {
        container.append(createEl("p", "text-gray-500", "No orders found."));
        return;
    }

    // Create a card for every order and add it to the container
    orderList.forEach(order => container.append(createOrderCard(order)));
}



console.log("\n=========================================== CHALLENGE 1 =========================================== ");
console.log("\n======= TASK1 =======");
// CHALLENGE 1 
// TASK1 A FUNCTION TO REMOVE WHITE SPACES FROM the first and las part of the text

function removeSpaces(customerName, email ) {
    return {
        customerName: customerName.trim(),
        email: email.trim()
    }
};
// testing the function
console.log(removeSpaces(" lethabo zikode ", " mpho123gmail.commm "));
console.log("\n======= TASK1 =======");

console.log("\n======= TASK2 =======");
// TASK2
//  a function that formats every customer name consistently (for example, capitalising the first letter of each word)
function formatCustomerName(customerName){
    return {
        customerName: customerName
            .trim()  // " lesEdi modiKwe " -> "lesEdi modiKwe"
            .toLowerCase()  // "lesEdi modiKwe" -> "lesed modikwe"
            .split(" ")     // string -> array of words: ["lesedi", "modikwe"]
            .map(word => word.charAt(0).toUpperCase() + word.slice(1)) // capitalise first letter of a word slice separtes it
            .join(" "), // array -> string: "Lesedi Modikwe"
    }
};
// TO TEST THE FUNCTION
console.log(formatCustomerName(" lesEdi modiKwe "));
console.log("\n======= TASK2 =======");

console.log("\n======= TASK3 =======");
// TASK3 Convert text between uppercase and lowercase where appropriate .
function formatEmail(text) {
    return text
        .trim() // remove whitespace from the beginning and end
        .toLowerCase() // convert to lowercase
}
// TO TEST THE FUNCTION
console.log(formatEmail(" LETHABO123GMAIL.COMMM "));

// Example: "mpho123gmail.commm" -> "mpho123@gmail.commm"
function addMissingAt(email) {
    const cleanEmail = email.trim().toLowerCase();

    // Already has an "@", so leave it alone
    if (cleanEmail.includes("@")) {
        return cleanEmail;
    }

    // Find where "gmail" starts; -1 means it isn't in the text
    const gmailPosition = cleanEmail.indexOf("gmail");
    if (gmailPosition === -1) {
        return cleanEmail;   // can't guess where the "@" belongs
    }

    // Text before "gmail" + "@" + "gmail" and everything after
    return cleanEmail.slice(0, gmailPosition) + "@" + cleanEmail.slice(gmailPosition);
}

console.log(addMissingAt(" mpho123gmail.commm "));

// TASK4 Extract or manipulate parts of a string, such as a customer's first name or the domain of their email address.
// Returns the first name, capitalised. Example: " thabiso mokoena " -> "Thabiso"
function extractFirstName(customerName) {
    // trim, then split into words and take the first one
    const firstWord = customerName.trim().split(" ")[0];

    // capitalise the first letter and lowercase the rest
    const firstName = firstWord.charAt(0).toUpperCase() + firstWord.slice(1).toLowerCase();

    return { firstName };   // shorthand for { firstName: firstName }
}

console.log(extractFirstName(" thabiso mokoena "));  

// Returns the part after the "@", or "Invalid email" if there is no "@"
function extractEmailDomain(email) {
    const cleanEmail = email.trim().toLowerCase();

    // includes() checks the "@" exists before we try to split on it
    if (!cleanEmail.includes("@")) {
        return { domain: "Invalid email" };
    }

    return { domain: cleanEmail.split("@")[1] };
}

// TASK 5: build a cleaned copy of the orders and display it.
// map() runs the cleaning functions on every order and returns a NEW array,
// so the original messy "orders" array stays untouched.
const cleanedOrders = orders.map(order => {
    // Task 1: remove extra spaces from the name and email
    const trimmed = removeSpaces(order.customerName, order.email);

    return {
        ...order,   // copy every other field unchanged (orderId, product, price, etc.)

        // Task 2: capitalise each word. The function returns an object, so we take .customerName
        customerName: formatCustomerName(trimmed.customerName).customerName,

        email: addMissingAt(trimmed.email),
        domain: extractEmailDomain(addMissingAt(trimmed.email)).domain
    };
});

// Show the cleaned orders in the Orders section
renderOrders(cleanedOrders);

// Check orders 11 and 12 in the console, since they have the messy data
console.log(cleanedOrders[10]);
console.log(cleanedOrders[11]);

console.log(extractEmailDomain(" lethabo123gmail.commm "));  
console.log(extractEmailDomain(" lesedi123@gmail.com "));   
console.log("\n======= TASK3 =======");

console.log("\n=========================================== CHALLENGE 2 =========================================== ");
console.log("\n======= Step 1: price helpers and calculations =======");
// ---------- CHALLENGE 2: Calculate Prices ----------

// South African VAT rate (15%). Keeping it in one constant avoids hard-coding it everywhere.
const VAT_RATE = 0.15;

// Rounds money to 2 decimals. Math.round works on whole numbers, so we
// multiply by 100 (cents), round, then divide by 100 again.
function roundMoney(amount) {
    return Math.round(amount * 100) / 100;
}

// Formats a number as a price with exactly 2 decimals: 9000 -> "R9000.00"
function formatMoney(amount) {
    return "R" + amount.toFixed(2);
}

// TASK 1 + 5: build a new array with clean prices and VAT on every order
const pricedOrders = cleanedOrders.map(order => {
    // parseFloat converts text like "7500.887" to a number (numbers pass through unchanged),
    // then we round to cents so every price is a proper money value
    const price = roundMoney(parseFloat(order.price));

    // VAT amount and the total including VAT, both rounded to cents
    const vat = roundMoney(price * VAT_RATE);

    return {
        ...order,               // keep every field from the cleaned order
        price: price,           // 7500.887 -> 7500.89
        vat: vat,
        priceInclVat: roundMoney(price + vat)
    };
});

// TASKS 2, 3, 4: total, average, highest and lowest.
// It takes the list as a parameter, so the results stay correct if the dataset changes.
function calculatePriceStats(orderList) {
    // Avoid dividing by zero or calling Math.max on an empty list
    if (orderList.length === 0) {
        return null;
    }

    // Pull just the prices out into their own array
    const prices = orderList.map(order => order.price);

    // reduce adds the prices up one by one, starting from 0
    const total = prices.reduce((sum, price) => sum + price, 0);

    return {
        count: prices.length,
        total: roundMoney(total),
        average: roundMoney(total / prices.length),
        highest: Math.max(...prices),   // spread (...) turns the array into separate arguments
        lowest: Math.min(...prices)
    };
}

// Test in the console
console.log(calculatePriceStats(pricedOrders));

console.log("\n======= Step 2: show the price stats in the Statistics section =======");

// Fills the Statistics section with the price calculations
function renderPriceStats(orderList) {
    const container = document.getElementById("statistics-container");
    container.replaceChildren();   // clear old content so re-rendering doesn't duplicate rows

    const stats = calculatePriceStats(orderList);
    if (stats === null) {
        container.append(createEl("p", "text-gray-500", "No orders to analyse."));
        return;
    }

    // Each row is a [label, value] pair
    const rows = [
        ["Number of orders", stats.count],
        ["Total order value", formatMoney(stats.total)],
        ["Average order price", formatMoney(stats.average)],
        ["Highest order price", formatMoney(stats.highest)],
        ["Lowest order price", formatMoney(stats.lowest)],
        ["Total VAT (15%)", formatMoney(roundMoney(stats.total * VAT_RATE))]
    ];

    // Build one row per pair: label on the left, value on the right
    rows.forEach(([label, value]) => {
        const row = createEl("div", "flex justify-between border-b border-gray-100 py-2");
        row.append(
            createEl("span", "text-gray-600", label),
            createEl("span", "font-semibold", String(value))
        );
        container.append(row);
    });
}

// Replace your old renderOrders(cleanedOrders) call with these two
renderOrders(pricedOrders);
renderPriceStats(pricedOrders);