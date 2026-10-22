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

    // Left block: order ID, name, email and email domain
    const customerBlock = document.createElement("div");
    const domainClasses = order.domain === "Invalid email" ? "text-xs text-red-500" : "text-xs text-gray-400";
    customerBlock.append(
        createEl("p", "text-xs text-gray-400", `Order #${order.orderId}`),
        createEl("p", "font-semibold", order.customerName),
        createEl("p", "text-sm text-gray-500", order.email),
        createEl("p", domainClasses, `Domain: ${order.domain}`)
    );

    // Middle block: product, category, readable date, days ago and a status badge
    const productBlock = document.createElement("div");

    // Tailwind badge colours for each status
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
renderOrders(dateOrders);
renderSortControls();


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
    const categoryInput = createEl("input", inputClasses);
    categoryInput.placeholder = "Category (e.g. large)";
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

renderFilterControls();


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
console.log("\n======= Step ) =======");

console.log("\n=========================================== CHALLENGE 7 =========================================== ");
console.log("\n======= Step ) =======");

console.log("\n=========================================== CHALLENGE 8 =========================================== ");
console.log("\n======= Step ) =======");

console.log("\n=========================================== CHALLENGE 9 =========================================== ");
console.log("\n======= Step ) =======");

console.log("\n=========================================== CHALLENGE 10 =========================================== ");
console.log("\n======= Step ) =======");