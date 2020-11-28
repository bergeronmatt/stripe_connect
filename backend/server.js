// install stripe dependency and set secret key
// be sure to remove sk before uploading to github
const stripe = require('stripe')('sk');

const account = await stripe.accounts.create({
    type: 'express',
});

const accountLinks = await stripe.accountLinks.create({
    account: 'acct_1032D82eZvKYlo2C',
    refresh_url: 'https://example.com/reauth',
    return_url: 'https://example.com/return',
    type: 'account_onboarding',
});

