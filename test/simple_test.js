
const driver = require('../index.js');

const bytes = Buffer.from(
        "cfd5e7600038950100d0f6e6601594010004000f000b00200005001d0054002d000f000a000a000000030003000900"
    //    "bfc7e7600028950100c0e8e660f79301001e0004000f000b00200005001d0054002d000f000a000a00000003000300"
    //    "04 ff8913   31 fd17   04 13   44 ff8913   44 13   4d 93   1e   20    62    01"
    //    "aeb9e760001c950100b0dae660e693010011001e0004000f000b00200005001d0054002d000f000a000a0000000300"
    //    "9eabe760001c950100a0cce660ae930100380011001e0004000f000b00200005001d0054002d000f000a000a000000"
    //    "0ea0355d302935000054c0345de7290000b800b900b800b800b800b900b800b800b800b800b800b800b900b900b900"
    , 'hex'
);
    
let decoded = driver.decodeUplink( { fPort: 100, bytes: bytes } );
// console.log(JSON.stringify(decoded, null, 2));
console.log(decoded);
console.log();
// console.log(JSON.stringify(driver.extractPoints({message: decoded}),null,2));
console.log(driver.extractPoints({message: decoded}));
