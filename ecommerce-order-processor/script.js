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
    "border border-gray-200 rounded-lg p-4 grid grid-cols-1 md:grid-cols-3 md:items-center gap-2",
  );

  // Left block: order ID, customer name and email
  const customerBlock = document.createElement("div");
  customerBlock.append(
    createEl("p", "text-xs text-gray-400", `Order #${order.orderId}`),
    createEl("p", "font-semibold", order.customerName),
    createEl("p", "text-sm text-gray-500", order.email),
  );

  // Middle block: product, category and order date
  const productBlock = document.createElement("div");
  productBlock.append(
    createEl("p", "font-medium", order.product),
    createEl(
      "p",
      "text-sm text-gray-500",
      `${order.category} · ${order.orderDate}`,
    ),
  );

  // Right block: price to 2 decimals, with the VAT-inclusive total underneath
  const priceBlock = document.createElement("div");
  priceBlock.className = "md:text-right";
  priceBlock.append(
    createEl("p", "font-bold text-blue-600", formatMoney(order.price)),
    createEl(
      "p",
      "text-xs text-gray-400",
      `Incl. VAT: ${formatMoney(order.priceInclVat)}`,
    ),
  );

  
  card.append(customerBlock, productBlock, priceBlock);
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
    if (!Number.isFinite(amount)) {
        return "N/A";
    }
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
console.log("\n======= Step 1: price helpers and calculations =======");


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
console.log("\n======= Step 2: show the price stats in the Statistics section =======");


console.log("\n=========================================== CHALLENGE 3 =========================================== ");

console.log("\n======= Step 1: dates, days ago and recent/older status =======");
// ---------- CHALLENGE 3: Work With Order Dates ----------

const RECENT_DAYS = 30;                    // orders within this many days count as "recent"
const MS_PER_DAY = 1000 * 60 * 60 * 24;    // milliseconds in one day

// Today at midnight, so we compare whole days and ignore the time of day
function getToday() {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return today;
}

// TASK 2: readable format, e.g. "18 October 2026"
function formatDate(date) {
    // An invalid Date has a NaN time, so check before formatting
    if (Number.isNaN(date.getTime())) {
        return "Invalid date";
    }
    return date.toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });
}

// TASK 5: whole days between the order date and today (negative = date is in the future)
function daysSince(date, today) {
    return Math.round((today.getTime() - date.getTime()) / MS_PER_DAY);
}

// TASK 4: classify an order by how many days ago it was placed
function getDateStatus(daysAgo) {
    if (Number.isNaN(daysAgo)) return "Invalid";
    if (daysAgo < 0) return "Upcoming";          // dated after today
    if (daysAgo <= RECENT_DAYS) return "Recent";
    return "Older";
}

// Turns the number of days into friendly text
function describeDaysAgo(daysAgo) {
    if (Number.isNaN(daysAgo)) return "";
    if (daysAgo === 0) return "Today";
    if (daysAgo === 1) return "1 day ago";
    if (daysAgo > 1) return `${daysAgo} days ago`;
    return `In ${Math.abs(daysAgo)} days`;       // future dates
}

// TASK 1: build a Date object for every order and add the date fields
const today = getToday();
const dateOrders = pricedOrders.map(order => {
    const dateObj = new Date(order.orderDate);   // "18 October 2026" -> Date object
    const daysAgo = daysSince(dateObj, today);

    return {
        ...order,
        dateObj: dateObj,
        displayDate: formatDate(dateObj),
        daysAgo: daysAgo,
        daysAgoText: describeDaysAgo(daysAgo),
        dateStatus: getDateStatus(daysAgo)
    };
});

// TASK 3: sort by comparing the timestamps (getTime() gives milliseconds as a number).
// [...list] copies the array first, because sort() changes the array it is called on.
function sortByDateNewest(orderList) {
    return [...orderList].sort((a, b) => b.dateObj.getTime() - a.dateObj.getTime());
}
function sortByDateOldest(orderList) {
    return [...orderList].sort((a, b) => a.dateObj.getTime() - b.dateObj.getTime());
}

console.log(dateOrders.map(o => `#${o.orderId} ${o.displayDate} | ${o.daysAgoText} | ${o.dateStatus}`));

console.log("\n======= Step 2: sort buttons =======");
// Builds the sort buttons and a count of recent / older / upcoming orders
function renderSortControls() {
    const container = document.getElementById("search-filter-container");
    const bar = createEl("div", "flex flex-wrap items-center gap-2");

    // Shared Tailwind classes for the buttons
    const buttonClasses = "bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-3 py-2 rounded";

    // Each button re-renders the Orders section with a differently ordered list
    const newestButton = createEl("button", buttonClasses, "Newest first");
    newestButton.addEventListener("click", () => renderOrders(sortByDateNewest(dateOrders)));

    const oldestButton = createEl("button", buttonClasses, "Oldest first");
    oldestButton.addEventListener("click", () => renderOrders(sortByDateOldest(dateOrders)));

    const originalButton = createEl("button", buttonClasses, "Original order");
    originalButton.addEventListener("click", () => renderOrders(dateOrders));

    // filter().length counts how many orders have each status
    const countOf = status => dateOrders.filter(o => o.dateStatus === status).length;
    const summary = createEl(
        "p",
        "text-sm text-gray-500 w-full",
        `Recent (last ${RECENT_DAYS} days): ${countOf("Recent")} · Older: ${countOf("Older")} · Upcoming: ${countOf("Upcoming")}`
    );

    bar.append(newestButton, oldestButton, originalButton, summary);
    container.append(bar);
}

console.log("\n======= Step 3: show the date and a status badge on each card =======");