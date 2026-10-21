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
        email: "mpho123gmail.commm",
        product: "Kettle",
        category: "small Appliances",
        price: 7500.887,
        orderDate: "25 September 2027",
    },
    { //object with messy data
        orderId : 12,
        customerName : " BonGani msibi ",
        email: "Bongani123gmail.comhm",
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
        "border border-gray-200 rounded-lg p-4 flex flex-col md:flex-row md:items-center md:justify-between gap-2"
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
    const priceEl = createEl("p", "font-bold text-blue-600", `R${order.price}`);

    // Put the three blocks inside the card
    card.append(customerBlock, productBlock, priceEl);
    return card;
}


