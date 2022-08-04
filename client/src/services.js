import format from "date-fns/format";

const locale = "en-US"
export const currency = (currencyItem) => new Intl.NumberFormat(locale, { style: 'currency', currency: 'USD' }).format(currencyItem);

export const itemDueDate = (transactionDate) => format(new Date(transactionDate), 'yyyy-MM-dd');
