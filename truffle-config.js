require('babel-register');
require('babel-polyfill');


module.exports = {
    networks:{
        development:{
            host:  '127.0.0.1',
            port:  '7545',
            network_id: '*',// * connect to any network or '5777',
        }
    },
    contacts_directory : './src/contracts',
    contacts_build_directory : './src/truffle_abis',
    compilers:{
        solc:{
            version:'^0.7.0',
            optimizer:{
                enabled : true,
                runs:200
            }
        }
    }
}