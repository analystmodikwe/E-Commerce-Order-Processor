# E-Commerce Order Processor

## Project Description
The E-Commerce Order Processor is a browser-based tool that helps a small business clean, analyse and report on its orders. It takes messy order data and:

- cleans customer names and emails (extra spaces, inconsistent capitalisation, missing `@`)
- formats prices to two decimals and calculates totals, averages, VAT and the highest and lowest prices
- turns date strings into readable dates, sorts orders by date and marks recent, older and upcoming orders
- lets the user find, filter and analyse orders from the interface
- lists unique product categories and drives the category filter from the data
- looks up product details by name
- exports orders as JSON and imports them back, handling invalid JSON with a clear message
- validates emails and order IDs with regular expressions and flags invalid entries
- shows a live statistics dashboard that updates whenever the data changes

Everything runs in the browser. There is no backend and no database.

## Technologies
- HTML
- Tailwind CSS (Play CDN, used for all styling; no custom CSS files)
- JavaScript

## Built-In Objects Used

| Built-in object | Where it was used |
|---|---|
| **String** | `trim()`, `toLowerCase()`, `split()`, `slice()`, `charAt()`, `toUpperCase()`, `includes()` and `indexOf()` clean names and emails, capitalise each word, insert a missing `@`, and extract first names and email domains. |
| **Number** | `parseFloat()` reads prices, `toFixed(2)` displays money, and `Number.isFinite()` / `Number.isNaN()` guard against bad values. |
| **Math** | `Math.round()` rounds money to cents, `Math.max()` and `Math.min()` find the highest and lowest prices, and `Math.abs()` handles future-dated orders. |
| **Date** | `new Date()` parses order dates, `getTime()` compares and sorts them, `setHours()` compares whole days, and `toLocaleDateString()` formats them. Used for days-ago and recent / older / upcoming status. |
| **Array** | `map()`, `filter()`, `find()`, `some()`, `every()`, `reduce()`, `sort()` and `forEach()` power searching, filtering, transforming, sorting and the statistics. |
| **Set** | Builds the unique categories for the Categories section and the filter dropdown, and detects duplicate order IDs on import. |
| **Map** | Product lookup (product name to details) and the count of orders per category. |
| **JSON** | `JSON.stringify()` exports the orders and `JSON.parse()` imports them, with `try/catch` for invalid input. |
| **RegExp** | Email and order ID patterns checked with `test()`, applied to every order and in the validation tool. |

## How to Run
1. Download or clone the repository.
2. Open the `ecommerce-order-processor` folder.
3. Open `index.html` in a browser, or in VS Code right-click `index.html` and choose **Open with Live Server**.
4. An internet connection is required because Tailwind CSS loads from a CDN.

## Screenshots

**Orders displayed**
![Orders displayed](assets/orders.png)

**Searching and filtering**
![Searching and filtering](assets/search-filter.png)

**Calculated statistics**
![Calculated statistics](assets/statistics.png)

**Unique categories**
![Unique categories](assets/categories.png)

**Product lookup**
![Product lookup](assets/product-lookup.png)

**Date processing**
![Date processing](assets/dates.png)

**JSON processing**
![JSON processing](assets/json.png)

**Validation**
![Validation](assets/validation.png)

## Reflection
*(Answer the four reflection questions from the brief here.)*
1 .map()

2 Challenge 4

3 Saves you from hard coding everything

4 **Stricter validation.** My email pattern checks the shape of an email, but it still accepts typos like `.commm`. I would tighten the pattern or suggest a correction, and add validation when a single order is entered.