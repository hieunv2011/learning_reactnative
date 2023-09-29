/**
 * @format
 */

import {AppRegistry} from 'react-native'
import {name as appName} from './app.json'
import React from 'react';
import { FoodList, WelcomeScreen, login } from './screens';

let fakeProduct=[
    {
        product: 'iphone 13',
        year: 2012
    },
    {
        product: 'iphone 14',
        year: 2014
    },
    {
        product: 'iphone 15',
        year: 2015
    }
]
/*
AppRegistry.registerComponent(appName,
     () => () => < 
                    WelcomeScreen x={5} y={10}
                    person={{ //ben trong la 1 object
                        name: 'Nguyen Viet Hieu',
                        age:18,

                    }}
                    products={fakeProduct}
                    />);
*/
AppRegistry.registerComponent(appName,() => FoodList);
/* Doi Text thanh Ham`*/