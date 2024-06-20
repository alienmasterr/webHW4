
document.addEventListener('DOMContentLoaded', () => {

    const orders = JSON.parse(localStorage.getItem('orders')) || [];

    new WebDataRocks({
        container: "#pivot-container",
        toolbar: true,
        report: {
            dataSource: {
                data: orders
            },
            slice: {
                rows: [{ uniqueName: "pizzaName" }],
                columns: [{ uniqueName: "string" }],
                measures: [
                    { uniqueName: "pizzaPrice", aggregation: "sum", caption: "Total Price" },
                    { uniqueName: "quantity", aggregation: "sum", caption: "Total Quantity" }
                ],
                expands: {
                    expandAll: true
                }
            }
        }
    });
});