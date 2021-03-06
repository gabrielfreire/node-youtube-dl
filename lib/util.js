// Arguments we dont want users to use with youtube-dl
// because they will break the module.
var badArgs = [
    '-h', '--help',
    '-v', '--version',
    '-U', '--update',
    '-q', '--quiet',
    '-s', '--simulate',
    '-g', '--get-url',
    '-e', '--get-title',
    '--get-id',
    '--get-thumbnail',
    '--get-description',
    '--get-duration',
    '--get-filename',
    '--get-format',
    '-j', '--dump-json',
    '--newline',
    '--no-progress',
    '--console-title',
    '-v', '--verbose',
    '--dump-intermediate-pages',
    '--write-pages',
    '--print-traffic',
];

/**
 * Helps parse options used in youtube-dl command.
 *
 * @param {Array.<String>}
 * @return {Array.<String>}
 */
exports.parseOpts = function(args) {
    var pos;
    for (var i = 0, len = badArgs.length; i < len; i++) {
        if ((pos = args.indexOf(badArgs[i])) !== -1) {
            args.splice(pos, 1);
        }
    }
    return args;
};


/**
 * Converts seconds to format hh:mm:ss
 *
 * @param {Number} seconds
 * @return {String}
 */
exports.formatDuration = function(seconds) {
    var parts = [];
    parts.push((seconds % 60).toString().length === 1 ? "0" + seconds % 60 : seconds % 60);
    var minutes = Math.floor(seconds / 60);
    if (minutes > 0) {
        parts.push(minutes % 60);
        var hours = Math.floor(minutes / 60);
        if (hours > 0) {
            parts.push(hours);
        }
    }
    return parts.reverse().join(':');
};