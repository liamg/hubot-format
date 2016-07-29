module.exports = function(robot) {
    if(robot.adapterName === 'slack') {
        robot.hear(/.*\s{4,}.*/i, function (res) {
            if (res.message.text.indexOf('`') === -1) {
                var input = res.message.text.replace(/<https?:\/\/[^\s|]*\|([^>]*)>/g, '$1');
                res.send("Let me format that for you.");
                res.send("```\n" + input + "\n```");
            }
        });
    }
};