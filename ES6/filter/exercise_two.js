const channels = [
    {name: 'HBO', premium: true},
    {name: 'LIFE', premium: false},
    {name: 'Max', premium: true},
    {name: 'Cooking channel', premium: false},
    {name: 'WOBI', premium: false}
];
const user = {
    name: 'Francis',
    premium: true,
    premiumChannels: function () {
        // GET THE PREMIUM CHANNELS IS "PREMIUM" IS true
        return channels.filter(function (item) {
            return item.premium;
        });
    },
    channels: function () {
        // GET THE NON-PREMIUM CHANNELS
        return channels.filter(function (item) {
            return !item.premium;
        });
    }
};
console.log(user.premiumChannels());
// brings HBO and MAX
console.log(user.channels());
// brings LIFE, COOKING CHANNEL AND WOBI