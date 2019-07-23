var fs = require('fs');
var ogg = require('ogg');
var file = 'music.ogg';

var decoder = new ogg.Decoder();

decoder.on('stream', function (stream) {
    console.log('new "stream":', stream.serialno);

    // emitted for each `ogg_packet` instance in the stream.
    stream.on('data', function (packet) {
        console.log('got "packet":', packet.packetno);
    });

    // emitted after the last packet of the stream
    stream.on('end', function () {
        console.log('got "end":', stream.serialno);
    });
});

// pipe the ogg file to the Decoder
fs.createReadStream(file).pipe(decoder);// JavaScript source code
