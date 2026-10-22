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
        email: "lethabo123mail.com",
        product: "Kettle",
        category: "small Appliances",
        price: 500.887,
        orderDate: "25 September 2027",
    },
    { //object with messy data
        orderId : 12,
        customerName : " bonGani msibi ",
        email: "Bongani123yahoo.com",
        product: "Coffee Maker",
        category: "small Appliances",
        price: 7500.887,
        orderDate: "19 September 2027",
    },
    {
    orderId: 13,
    customerName: "Test Customer",
    email: "test123@gmail.com",
    product: "Office Chair",
    category: "Furniture",
    price: 2500,
    orderDate: "10 October 2026",
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
    // Outer card: 3-column grid on medium+ screens so cards line up
    const card = createEl(
        "div",
        "border border-gray-200 rounded-lg p-4 grid grid-cols-1 md:grid-cols-3 md:items-center gap-2"
    );

    // Challenge 8: run the RegExp checks on this order
    const emailOk = isValidEmail(order.email);
    const idOk = isValidOrderId(String(order.orderId));

    // Tailwind badge colours for valid / invalid
    const validBadge = "bg-green-100 text-green-700";
    const invalidBadge = "bg-red-100 text-red-700";

    // Row of validation badges, shown under the email
    const validityRow = createEl("div", "flex flex-wrap gap-2 mt-1");
    validityRow.append(
        createEl("span", `text-xs font-medium px-2 py-0.5 rounded-full ${emailOk ? validBadge : invalidBadge}`, emailOk ? "Email valid" : "Email invalid"),
        createEl("span", `text-xs font-medium px-2 py-0.5 rounded-full ${idOk ? validBadge : invalidBadge}`, idOk ? "ID valid" : "ID invalid")
    );

    // Left block: order ID, name, email (red when invalid), domain and validation badges
    const customerBlock = document.createElement("div");
    const domainClasses = order.domain === "Invalid email" ? "text-xs text-red-500" : "text-xs text-gray-400";
    customerBlock.append(
        createEl("p", "text-xs text-gray-400", `Order #${order.orderId}`),
        createEl("p", "font-semibold", order.customerName),
        createEl("p", emailOk ? "text-sm text-gray-500" : "text-sm text-red-600 font-medium", order.email),
        createEl("p", domainClasses, `Domain: ${order.domain}`),
        validityRow
    );

    // Middle block: product, category, readable date, days ago and a status badge
    const productBlock = document.createElement("div");
    const badgeClasses = {
        Recent: "bg-green-100 text-green-700",
        Older: "bg-gray-100 text-gray-600",
        Upcoming: "bg-amber-100 text-amber-700",
        Invalid: "bg-red-100 text-red-700"
    };

    const dateRow = createEl("div", "flex flex-wrap items-center gap-2 mt-1");
    dateRow.append(
        createEl("span", `text-xs font-medium px-2 py-0.5 rounded-full ${badgeClasses[order.dateStatus]}`, order.dateStatus),
        createEl("span", "text-xs text-gray-400", order.daysAgoText)
    );

    productBlock.append(
        createEl("p", "font-medium", order.product),
        createEl("p", "text-sm text-gray-500", `${order.category} · ${order.displayDate}`),
        dateRow
    );

    // Right block: price to 2 decimals, with the VAT-inclusive total underneath
    const priceBlock = document.createElement("div");
    priceBlock.className = "md:text-right";
    priceBlock.append(
        createEl("p", "font-bold text-blue-600", formatMoney(order.price)),
        createEl("p", "text-xs text-gray-400", `Incl. VAT: ${formatMoney(order.priceInclVat)}`)
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
let dateOrders = pricedOrders.map(order => {
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
renderOrders(dateOrders);



console.log("\n=========================================== CHALLENGE 4 =========================================== ");
console.log("\n======= Step 1: the array-method functions (Tasks 1 to 7) =======");
// ---------- CHALLENGE 4: Search, Filter and Analyse Orders ----------

// TASK 1 (find): returns the FIRST order whose ID matches or whose name contains the text.
function findOrder(orderList, searchText) {
    const text = searchText.trim().toLowerCase();
    if (text === "") return undefined;   // empty text would match every name, so stop here

    return orderList.find(order =>
        String(order.orderId) === text ||                  // exact ID match
        order.customerName.toLowerCase().includes(text)    // partial, case-insensitive name match
    );
}

// TASK 2 (filter): keeps orders whose category contains the text. Empty text keeps everything.
function filterByCategory(orderList, categoryText) {
    const text = categoryText.trim().toLowerCase();
    if (text === "") return orderList;
    return orderList.filter(order => order.category.toLowerCase().includes(text));
}

// TASK 3 (filter): keeps orders whose price is between min and max (inclusive).
function filterByPriceRange(orderList, min, max) {
    return orderList.filter(order => order.price >= min && order.price <= max);
}

// TASK 4 (map): a transformed list of "Product: price incl. VAT" strings.
function getProductPriceList(orderList) {
    return orderList.map(order => `${order.product}: ${formatMoney(order.priceInclVat)}`);
}

// TASK 5 (some): is there at least one order above the limit?
function hasOrderOver(orderList, limit) {
    return orderList.some(order => order.price > limit);
}

// TASK 6 (every): do all orders have a valid, positive price?
function allPricesValid(orderList) {
    return orderList.every(order => Number.isFinite(order.price) && order.price > 0);
}

// TASK 7 (reduce): total value of a list of orders.
function totalValue(orderList) {
    return roundMoney(orderList.reduce((sum, order) => sum + order.price, 0));
}

// Quick console tests
console.log(findOrder(dateOrders, "3"));
console.log(filterByCategory(dateOrders, "large").length);       // 3
console.log(filterByPriceRange(dateOrders, 5000, 10000).length);
console.log(hasOrderOver(dateOrders, 10000), allPricesValid(dateOrders), totalValue(dateOrders));

console.log("\n======= Step 2: the Search / Filter interface (Task 8)) =======");
// Builds the search and filter controls and wires them to the functions above.
// It uses append (not replaceChildren), so the sort buttons from Challenge 3 stay in place.
function renderFilterControls() {
    const container = document.getElementById("search-filter-container");
    const panel = createEl("div", "mt-4 space-y-3");

    // Shared Tailwind classes
    const inputClasses = "border border-gray-300 rounded px-3 py-2 text-sm";
    const buttonClasses = "bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-3 py-2 rounded";
    const resetClasses = "bg-gray-200 hover:bg-gray-300 text-gray-800 text-sm font-medium px-3 py-2 rounded";

    // Message line that reports what is currently shown
    const message = createEl("p", "text-sm text-gray-600");

    // Shows how many orders are displayed and their total (uses reduce via totalValue)
    function showSummary(list) {
        message.textContent =
            `Showing ${list.length} of ${dateOrders.length} orders · Total ${formatMoney(totalValue(list))}`;
    }

    // ----- Row 1: find one order by ID or name -----
    const findRow = createEl("div", "flex flex-wrap gap-2");
    const findInput = createEl("input", inputClasses);
    findInput.placeholder = "Order ID or customer name";
    const findButton = createEl("button", buttonClasses, "Find order");

    findButton.addEventListener("click", () => {
        if (findInput.value.trim() === "") {
            message.textContent = "Type an order ID or customer name first.";
            return;
        }
        const found = findOrder(dateOrders, findInput.value);
        if (!found) {
            renderOrders([]);   // shows "No orders found."
            message.textContent = "No order matches that ID or name.";
            return;
        }
        renderOrders([found]);
        message.textContent = `Found order #${found.orderId}.`;
    });
    findRow.append(findInput, findButton);

    // ----- Row 2: filter by category and price range -----
    const filterRow = createEl("div", "flex flex-wrap gap-2");
    // Dropdown built from the Set, so it always matches the real data
    const categoryInput = createEl("select", inputClasses);
    populateCategoryDropdown(categoryInput, dateOrders);
    const minInput = createEl("input", inputClasses + " w-32");
    minInput.type = "number";
    minInput.placeholder = "Min price";
    const maxInput = createEl("input", inputClasses + " w-32");
    maxInput.type = "number";
    maxInput.placeholder = "Max price";
    const filterButton = createEl("button", buttonClasses, "Apply filters");
    const resetButton = createEl("button", resetClasses, "Reset");

    filterButton.addEventListener("click", () => {
        // Empty boxes mean "no limit": min becomes 0 and max becomes Infinity
        const min = minInput.value === "" ? 0 : parseFloat(minInput.value);
        const max = maxInput.value === "" ? Infinity : parseFloat(maxInput.value);

        // Chain the filters: category first, then price range
        let results = filterByCategory(dateOrders, categoryInput.value);
        results = filterByPriceRange(results, min, max);

        renderOrders(results);
        showSummary(results);
    });

    resetButton.addEventListener("click", () => {
        findInput.value = "";
        categoryInput.value = "";
        minInput.value = "";
        maxInput.value = "";
        renderOrders(dateOrders);
        showSummary(dateOrders);
    });
    filterRow.append(categoryInput, minInput, maxInput, filterButton, resetButton);

    // ----- Analysis lines using some(), every() and map() -----
    const analysis = createEl("div", "text-sm text-gray-600 space-y-1");
    analysis.append(
        createEl("p", "", `Any order over R10000? ${hasOrderOver(dateOrders, 10000) ? "Yes" : "No"}`),
        createEl("p", "", `All prices valid? ${allPricesValid(dateOrders) ? "Yes" : "No"}`)
    );

    // Collapsible list of product prices including VAT (map)
    const details = createEl("details", "text-sm text-gray-600");
    details.append(
        createEl("summary", "cursor-pointer font-medium", "Product prices incl. VAT"),
        createEl("p", "mt-1", getProductPriceList(dateOrders).join(" · "))
    );

    showSummary(dateOrders);
    panel.append(findRow, filterRow, message, analysis, details);
    container.append(panel);
}


console.log("\n=========================================== CHALLENGE 5 =========================================== ");
console.log("\n======= Step 1: the Set and the Categories section (Tasks 1 and 2)) =======");


// ---------- CHALLENGE 5: Unique Categories (Set) ----------

// TASK 1: a Set only keeps unique values, so duplicates disappear automatically.
// map() pulls out every category, and new Set() removes the repeats.
function getUniqueCategories(orderList) {
    return new Set(orderList.map(order => order.category.trim()));
}

// TASK 2: show each unique category once, with how many orders belong to it
function renderCategories(orderList) {
    const container = document.getElementById("categories-container");
    container.replaceChildren();   // clear old content so re-rendering doesn't duplicate

    const categories = getUniqueCategories(orderList);

    // .size is the number of unique values in the Set
    container.append(createEl("p", "text-sm text-gray-500 mb-3", `${categories.size} unique categories`));

    const list = createEl("div", "flex flex-wrap gap-2");
    categories.forEach(category => {
        // filter().length counts the orders in this category
        const count = orderList.filter(order => order.category.trim() === category).length;
        list.append(
            createEl("span", "bg-blue-100 text-blue-700 text-sm font-medium px-3 py-1 rounded-full", `${category} (${count})`)
        );
    });
    container.append(list);
}

// TASK 3 (part 1): fill a <select> dropdown from the Set instead of hard-coded options
function populateCategoryDropdown(select, orderList) {
    select.replaceChildren();

    // First option means "no category filter"
    const allOption = createEl("option", "", "All categories");
    allOption.value = "";
    select.append(allOption);

    // One option per unique category
    getUniqueCategories(orderList).forEach(category => {
        const option = createEl("option", "", category);
        option.value = category;
        select.append(option);
    });
}

// Show the categories when the page loads
renderCategories(dateOrders);
console.log(getUniqueCategories(dateOrders));   // Set(3) { 'Electronics', 'large Appliances', 'small Appliances' }


console.log("\n=========================================== CHALLENGE 6 =========================================== ");
console.log("\n======= Step 1: build the Map (Task 1) ) =======");

// ---------- CHALLENGE 6: Product Lookup (Map) ----------

// TASK 1: a Map stores key -> value pairs. Here the key is the product name
// (lowercase, so the search is case-insensitive) and the value is an object of details.
function buildProductMap(orderList) {
    const productMap = new Map();

    orderList.forEach(order => {
        const key = order.product.trim().toLowerCase();

        // has() checks whether the key already exists.
        // A product can appear in several orders (e.g. Coffee Maker), but a Map key must be unique,
        // so we keep the first entry and just count the extra orders.
        if (productMap.has(key)) {
            productMap.get(key).orderCount += 1;
            return;
        }

        // set() adds a new key with its details
        productMap.set(key, {
            name: order.product.trim(),        // original capitalisation for display
            price: order.price,
            priceInclVat: order.priceInclVat,
            category: order.category.trim(),
            orderCount: 1
        });
    });

    return productMap;
}

const productMap = buildProductMap(dateOrders);

// Quick console tests
console.log(productMap.size);                    // number of unique products
console.log(productMap.get("laptop"));           // the details object
console.log(productMap.has("sofa"));             // false
console.log([...productMap.keys()]);             // all the product keys

console.log("\n======= Step 2: the Product Lookup interface (Tasks 2 and 3) ) =======");

// Builds the lookup box and result area inside the Product Lookup section
function renderProductLookup(orderList) {
    const container = document.getElementById("product-lookup-container");
    container.replaceChildren();   // safe here: this section only holds the lookup

    const lookupMap = buildProductMap(orderList);

    // Shared Tailwind classes
    const inputClasses = "border border-gray-300 rounded px-3 py-2 text-sm";
    const buttonClasses = "bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-3 py-2 rounded";

    container.append(createEl("p", "text-sm text-gray-500 mb-3", `${lookupMap.size} products available`));

    // Text input with a <datalist>: the browser suggests product names as the user types
    const row = createEl("div", "flex flex-wrap gap-2");
    const input = createEl("input", inputClasses);
    input.placeholder = "Type a product name";
    input.setAttribute("list", "product-suggestions");

    const suggestions = createEl("datalist", "");
    suggestions.id = "product-suggestions";
    // values() gives the details objects, so we can show the original capitalisation
    lookupMap.forEach(details => {
        const option = createEl("option", "");
        option.value = details.name;
        suggestions.append(option);
    });

    const button = createEl("button", buttonClasses, "Look up");
    row.append(input, suggestions, button);

    // Area where the result or the "not found" message appears
    const result = createEl("div", "mt-4");

    function lookUp() {
        result.replaceChildren();
        const searchKey = input.value.trim().toLowerCase();

        // Nothing typed yet
        if (searchKey === "") {
            result.append(createEl("p", "text-gray-500", "Type or choose a product name first."));
            return;
        }

        // TASK 3: has() checks first, so an unknown product gives a message instead of an error
        if (!lookupMap.has(searchKey)) {
            result.append(
                createEl("p", "text-red-600", `No product called "${input.value.trim()}" was found. Check the spelling or pick one from the suggestions.`)
            );
            return;
        }

        // TASK 2: get() returns the details object for that key
        const details = lookupMap.get(searchKey);
        const card = createEl("div", "border border-gray-200 rounded-lg p-4 space-y-1");
        card.append(
            createEl("p", "font-semibold text-lg", details.name),
            createEl("p", "text-sm text-gray-500", `Category: ${details.category}`),
            createEl("p", "text-blue-600 font-bold", formatMoney(details.price)),
            createEl("p", "text-xs text-gray-400", `Incl. VAT: ${formatMoney(details.priceInclVat)}`),
            createEl("p", "text-xs text-gray-400", `Appears in ${details.orderCount} order${details.orderCount === 1 ? "" : "s"}`)
        );
        result.append(card);
    }

    button.addEventListener("click", lookUp);
    // Pressing Enter in the box also runs the lookup
    input.addEventListener("keydown", event => {
        if (event.key === "Enter") lookUp();
    });

    container.append(row, result);
}

renderProductLookup(dateOrders);


console.log("\n=========================================== CHALLENGE 7 =========================================== ");
console.log("\n======= Step 1: make the pipeline re-runnable ) =======");

// ---------- CHALLENGE 7: Export and Import Orders (JSON) ----------

// Runs the full pipeline (Challenges 1 to 3) on any raw order list, reusing  existing helpers.
// Because it takes a list as a parameter, imported orders get cleaned exactly like the originals.
function processOrders(rawList) {
    const todayDate = getToday();

    return rawList.map(order => {
        // Challenge 1: clean the text fields
        const trimmed = removeSpaces(order.customerName, order.email);
        const fixedEmail = addMissingAt(trimmed.email);

        // Challenge 2: price, VAT and price including VAT
        const price = roundMoney(parseFloat(order.price));
        const vat = roundMoney(price * VAT_RATE);

        // Challenge 3: Date object, readable date, days ago and status
        const dateObj = new Date(order.orderDate);
        const daysAgo = daysSince(dateObj, todayDate);

        return {
            ...order,
            customerName: formatCustomerName(trimmed.customerName).customerName,
            email: fixedEmail,
            domain: extractEmailDomain(fixedEmail).domain,
            price: price,
            vat: vat,
            priceInclVat: roundMoney(price + vat),
            dateObj: dateObj,
            displayDate: formatDate(dateObj),
            daysAgo: daysAgo,
            daysAgoText: describeDaysAgo(daysAgo),
            dateStatus: getDateStatus(daysAgo)
        };
    });
}

// Search / Filter holds the sort buttons (Challenge 3) and the filters (Challenge 4).
// Clearing it first means rebuilding doesn't duplicate the controls.
function renderSearchSection() {
    document.getElementById("search-filter-container").replaceChildren();
    renderSortControls();
    renderFilterControls();
}

// Re-processes the raw orders and refreshes EVERY section from the new data
function refreshApp() {
    dateOrders = processOrders(orders);   // "orders" is the raw array; dateOrders is rebuilt from it

    renderOrders(dateOrders);
    renderStatistics(dateOrders);
    renderCategories(dateOrders);
    renderProductLookup(dateOrders);
    renderSearchSection();

    // Keep the exported JSON text in sync (the box only exists once renderJsonTools has run)
    const exportBox = document.getElementById("export-box");
    if (exportBox) {
        exportBox.value = JSON.stringify(orders, null, 2);
    }
}

console.log("\n======= Step 2: validate imported data (Task 4) ) =======");
const REQUIRED_FIELDS = ["orderId", "customerName", "email", "product", "category", "price", "orderDate"];
const TEXT_FIELDS = ["customerName", "email", "product", "category", "orderDate"];

// Returns an error message (string) if the data is unusable, or null if it is fine
function validateImportedOrders(data) {
    if (!Array.isArray(data)) {
        return "The JSON must be an array of orders, like [ { ... }, { ... } ].";
    }
    if (data.length === 0) {
        return "The array is empty, so there are no orders to import.";
    }

    for (let i = 0; i < data.length; i++) {
        const item = data[i];

        if (typeof item !== "object" || item === null || Array.isArray(item)) {
            return `Item ${i + 1} is not an order object.`;
        }

        // Which required fields are missing or empty?
        const missing = REQUIRED_FIELDS.filter(field => item[field] === undefined || item[field] === null || item[field] === "");
        if (missing.length > 0) {
            return `Order ${i + 1} is missing: ${missing.join(", ")}.`;
        }

        // Text fields must be strings, or trim() and toLowerCase() would crash later
        const notText = TEXT_FIELDS.filter(field => typeof item[field] !== "string");
        if (notText.length > 0) {
            return `Order ${i + 1}: ${notText.join(", ")} must be text.`;
        }

        if (!Number.isFinite(parseFloat(item.price))) {
            return `Order ${i + 1}: price "${item.price}" is not a number.`;
        }
    }
    return null;   // no problems found
}

console.log("\n======= Step 3: the export and import interface (Tasks 1 to 3) =======");

// Builds the Export / Import tools inside the Data Processing section (called once)
function renderJsonTools() {
    const container = document.getElementById("data-processing-container");
    const wrapper = createEl("div", "space-y-6");

    // Shared Tailwind classes
    const boxClasses = "w-full h-48 border border-gray-300 rounded p-3 font-mono text-xs";
    const buttonClasses = "bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-3 py-2 rounded";
    const greyButtonClasses = "bg-gray-200 hover:bg-gray-300 text-gray-800 text-sm font-medium px-3 py-2 rounded";

    // ----- EXPORT (Task 1): JSON.stringify turns the array into text -----
    const exportBlock = createEl("div", "space-y-2");
    const exportBox = createEl("textarea", boxClasses);
    exportBox.id = "export-box";
    exportBox.readOnly = true;
    exportBox.value = JSON.stringify(orders, null, 2);   // null, 2 = pretty-print with 2-space indents
    exportBlock.append(createEl("h3", "font-semibold", "Export orders as JSON"), exportBox);

    // ----- IMPORT (Tasks 2 to 4): JSON.parse turns text back into objects -----
    const importBlock = createEl("div", "space-y-2");
    const importBox = createEl("textarea", boxClasses);
    importBox.placeholder = "Paste a JSON array of orders here";

    const message = createEl("p", "text-sm");   // success and error messages appear here

    function showMessage(text, isError) {
        message.textContent = text;
        message.className = isError ? "text-sm text-red-600" : "text-sm text-green-700";
    }

    // mode is "add" (append to the dataset) or "replace" (swap the whole dataset)
    function runImport(mode) {
        const text = importBox.value.trim();
        if (text === "") {
            showMessage("Paste some JSON first.", true);
            return;
        }

        // TASK 4: JSON.parse throws on bad syntax, so catch it and show a clear message
        let parsed;
        try {
            parsed = JSON.parse(text);
        } catch (error) {
            showMessage(`Invalid JSON: ${error.message}`, true);
            return;
        }

        // Valid JSON can still be the wrong shape, so check the structure too
        const problem = validateImportedOrders(parsed);
        if (problem) {
            showMessage(problem, true);
            return;
        }

        // TASK 3: use the parsed data
        if (mode === "replace") {
            orders = parsed;
            showMessage(`Replaced the dataset with ${parsed.length} orders.`, false);
        } else {
            // A Set of existing IDs lets us skip orders that are already in the dataset
            const existingIds = new Set(orders.map(order => String(order.orderId)));
            const newOrders = parsed.filter(order => !existingIds.has(String(order.orderId)));
            const skipped = parsed.length - newOrders.length;

            orders = [...orders, ...newOrders];
            showMessage(
                `Added ${newOrders.length} new order${newOrders.length === 1 ? "" : "s"}` +
                (skipped > 0 ? `, skipped ${skipped} with an orderId that already exists.` : "."),
                false
            );
        }

        refreshApp();   // every section updates from the new data
    }

    const addButton = createEl("button", buttonClasses, "Import and add to dataset");
    addButton.addEventListener("click", () => runImport("add"));

    const replaceButton = createEl("button", greyButtonClasses, "Import and replace dataset");
    replaceButton.addEventListener("click", () => runImport("replace"));

    // Handy for testing the edit-and-reimport flow: copies the export into the import box
    const copyButton = createEl("button", greyButtonClasses, "Copy export to import box");
    copyButton.addEventListener("click", () => {
        importBox.value = exportBox.value;
    });

    const buttonRow = createEl("div", "flex flex-wrap gap-2");
    buttonRow.append(addButton, replaceButton, copyButton);

    importBlock.append(createEl("h3", "font-semibold", "Import orders from JSON"), importBox, buttonRow, message);

    wrapper.append(exportBlock, importBlock);
    container.append(wrapper);   // append (not replaceChildren), so Challenge 8's tool can share this section
}

// Build the tools, then render everything from the data
renderJsonTools();
refreshApp();


console.log("\n=========================================== CHALLENGE 8 =========================================== ");
console.log("\n======= Step 2: the validators and the validation tool) =======");

// ---------- CHALLENGE 8: Validate With Patterns (RegExp) ----------

// TASK 1: email validator.
// ^           start of the text
// [^\s@]+     one or more characters that are NOT a space or "@" (the name part)
// @           exactly one "@"
// [^\s@]+     one or more characters that are not a space or "@" (the domain part)
// \.          a literal dot
// [a-z]{2,}   two or more letters (the ending, like com or co.za's "za")
// $           end of the text      i = ignore upper/lower case
// The pattern sits inside the function (not in a const) so cards can use it
// even though they are first drawn earlier in the file.
function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[a-z]{2,}$/i.test(email);   // test() returns true or false
}

// TASK 2: order ID validator.
// Accepts "ORD-" plus exactly 4 digits (ORD-0001), OR plain digits (12), which is what your data uses.
function isValidOrderId(orderId) {
    return /^(ORD-\d{4}|\d+)$/.test(orderId);
}

// Each entry is one field the tool can test. Add more here and the dropdown updates itself.
const VALIDATORS = [
    { label: "Email", check: isValidEmail, example: "name@example.com" },
    { label: "Order ID", check: isValidOrderId, example: "ORD-0001 or 12" }
];

// TASK 4: a tool where the user types a value and sees whether it passes
function renderValidationTool() {
    const container = document.getElementById("data-processing-container");

    const inputClasses = "border border-gray-300 rounded px-3 py-2 text-sm";
    const tool = createEl("div", "space-y-2 mt-6 border-t border-gray-200 pt-6");
    const row = createEl("div", "flex flex-wrap gap-2");

    // Dropdown built from the VALIDATORS list; the value is the index in the array
    const select = createEl("select", inputClasses);
    VALIDATORS.forEach((validator, index) => {
        const option = createEl("option", "", validator.label);
        option.value = String(index);
        select.append(option);
    });

    const input = createEl("input", inputClasses + " w-64");
    const result = createEl("p", "text-sm");

    function runCheck() {
        const validator = VALIDATORS[Number(select.value)];
        input.placeholder = `e.g. ${validator.example}`;
        const value = input.value.trim();

        if (value === "") {
            result.textContent = "Type a value to test it.";
            result.className = "text-sm text-gray-500";
        } else if (validator.check(value)) {
            result.textContent = `"${value}" is a valid ${validator.label.toLowerCase()}.`;
            result.className = "text-sm text-green-700 font-medium";
        } else {
            result.textContent = `"${value}" is NOT a valid ${validator.label.toLowerCase()}. Expected something like ${validator.example}.`;
            result.className = "text-sm text-red-600 font-medium";
        }
    }

    // The result updates as the user types or changes the field
    select.addEventListener("change", runCheck);
    input.addEventListener("input", runCheck);

    row.append(select, input);
    tool.append(createEl("h3", "font-semibold", "Validation tool"), row, result);
    container.append(tool);   // append, so the JSON tools above stay in place
    runCheck();
}

renderValidationTool();

// Console tests
console.log(isValidEmail("lesedi123@gmail.com"), isValidEmail("lesedi123gmail.com"), isValidEmail("a@b"));   // true false false
console.log(isValidOrderId("ORD-0001"), isValidOrderId("ORD-1"), isValidOrderId("12"), isValidOrderId("abc"));  // true false true false


console.log("\n=========================================== CHALLENGE 9 =========================================== ");
console.log("\n======= Step 1: the dashboard code ) =======");


// ---------- CHALLENGE 9: Statistics Dashboard ----------

// Gathers every statistic from one order list. It takes the list as a parameter,
// so the numbers stay correct whenever the dataset changes.
function calculateDashboardStats(orderList) {
    if (orderList.length === 0) {
        return null;   // nothing to analyse
    }

    // Number + Math + Array (Challenge 2): count, total, average, highest and lowest
    const priceStats = calculatePriceStats(orderList);

    // Array: find() locates the order that has the highest / lowest price
    const highestOrder = orderList.find(order => order.price === priceStats.highest);
    const lowestOrder = orderList.find(order => order.price === priceStats.lowest);

    // Map: number of orders per category (get() returns undefined for a new key, so ?? 0 starts the count)
    const ordersPerCategory = new Map();
    orderList.forEach(order => {
        const category = order.category.trim();
        ordersPerCategory.set(category, (ordersPerCategory.get(category) ?? 0) + 1);
    });

    // Set: unique categories (Challenge 5)
    const uniqueCategoryCount = getUniqueCategories(orderList).size;

    // RegExp: how many emails pass the Challenge 8 pattern
    const validEmails = orderList.filter(order => isValidEmail(order.email)).length;

    // Map + reduce: the product Map from Challenge 6, then reduce keeps the priciest product
    const products = [...buildProductMap(orderList).values()];
    const mostExpensiveProduct = products.reduce((best, product) => product.price > best.price ? product : best);

    // Date: orders marked "Recent" in Challenge 3
    const recentOrders = orderList.filter(order => order.dateStatus === "Recent").length;

    return {
        ...priceStats,                         // count, total, average, highest, lowest
        highestOrder,
        lowestOrder,
        ordersPerCategory,
        uniqueCategoryCount,
        validEmails,
        invalidEmails: orderList.length - validEmails,
        mostExpensiveProduct,
        recentOrders
    };
}

// Draws the dashboard into the Statistics section
function renderStatistics(orderList) {
    const container = document.getElementById("statistics-container");
    container.replaceChildren();   // clear old rows so re-rendering doesn't duplicate

    const stats = calculateDashboardStats(orderList);
    if (stats === null) {
        container.append(createEl("p", "text-gray-500", "No orders to analyse."));
        return;
    }

    // Each row is [label, value, optional Tailwind classes for the value]
    const rows = [
        ["Total number of orders", stats.count],
        ["Total order value", formatMoney(stats.total)],
        ["Average order value", formatMoney(stats.average)],
        ["Highest-priced order", `#${stats.highestOrder.orderId} · ${formatMoney(stats.highest)}`],
        ["Lowest-priced order", `#${stats.lowestOrder.orderId} · ${formatMoney(stats.lowest)}`],
        ["Most expensive product", `${stats.mostExpensiveProduct.name} · ${formatMoney(stats.mostExpensiveProduct.price)}`],
        ["Number of unique categories", stats.uniqueCategoryCount],
        ["Valid emails", stats.validEmails, "font-semibold text-green-700"],
        ["Invalid emails", stats.invalidEmails, stats.invalidEmails > 0 ? "font-semibold text-red-600" : "font-semibold"],
        [`Recent orders (last ${RECENT_DAYS} days)`, stats.recentOrders],
        [`Total VAT (${Math.round(VAT_RATE * 100)}%)`, formatMoney(roundMoney(stats.total * VAT_RATE))]
    ];

    rows.forEach(([label, value, valueClasses = "font-semibold"]) => {
        const row = createEl("div", "flex justify-between gap-4 border-b border-gray-100 py-2");
        row.append(
            createEl("span", "text-gray-600", label),
            createEl("span", valueClasses + " text-right", String(value))
        );
        container.append(row);
    });

    // Orders per category, one row per Map entry
    container.append(createEl("h3", "font-semibold mt-4 mb-1", "Orders per category"));
    stats.ordersPerCategory.forEach((count, category) => {
        const row = createEl("div", "flex justify-between border-b border-gray-100 py-2");
        row.append(
            createEl("span", "text-gray-600", category),
            createEl("span", "font-semibold", String(count))
        );
        container.append(row);
    });
}

renderStatistics(dateOrders);
console.log(calculateDashboardStats(dateOrders));





console.log("\n=========================================== CHALLENGE 10 =========================================== ");
console.log("\n======= Step ) =======");