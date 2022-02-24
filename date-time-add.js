const moment = require('moment');

function getDate(seconds, minutes, hours, days, months, years, format){
    let m = moment();
    m.add(seconds, 'seconds');
    m.add(minutes, 'minutes');
    m.add(hours, 'hours');
    m.add(days, 'days');
    m.add(months, 'months');
    m.add(years, 'years');
    return m.format(format);
}

module.exports.templateTags = [{
    name: 'DateTimeAdd',
    displayName: 'DateTimeAdd',
    description: 'Provides a formatted date with addition.',
    args: [
        {
            displayName: 'Seconds to add',
            description: 'The seconds to add to the date.',
            type: 'number',
            defaultValue: 0
        },
        {
            displayName: 'Minutes to add',
            description: 'The minutes to add to the date.',
            type: 'number',
            defaultValue: 0
        },
        {
            displayName: 'Hours to add',
            description: 'The hours to add to the date.',
            type: 'number',
            defaultValue: 0
        },
        {
            displayName: 'Days to add',
            description: 'The days to add to the date.',
            type: 'number',
            defaultValue: 0
        },
        {
            displayName: 'Months to add',
            description: 'The months to add to the date.',
            type: 'number',
            defaultValue: 0
        },
        {
            displayName: 'Years to add',
            description: 'The years to add to the date.',
            type: 'number',
            defaultValue: 0
        },
        {
            displayName: 'Format',
            description: 'The output format of the date.',
            type: 'string',
            defaultValue: "YYYY-MM-DDTHH:mm:ssZ"
        }
    ],
    async run (context, seconds, minutes, hours, days, months, years, format) {
        return getDate(seconds, minutes, hours, days, months, years, format);
    },
    liveDisplayName (context) {
        let values = context.map(c => c.value);
        return "DateTimeAdd (" + getDate(...values) + ")";
    }
}];
