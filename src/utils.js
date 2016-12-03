export function parseCis(cis) {
    const cisIsValid = cis.slice(0, 3) === "%1D";

    if (cisIsValid) {
        const result = {};
    
        result.id = cis.slice(3, 6);
        result.aggreement = cis.slice(6, 19);
        result.year_bad = cis.slice(21, 23);
        result.month_bad = cis.slice(23, 25);
        result.lot_number = cis.slice(29, cis.length);

        return result;
    }
};
