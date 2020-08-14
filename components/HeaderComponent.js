import React from 'react';
import { Text, View } from 'react-native';

import { HeaderButton } from 'react-navigation-header-buttons'
import Icons from 'react-native-vector-icons/Ionicons';

const HeaderComponent = props => {
    return (
        <HeaderButton 
        {...props}
        IconComponent={Icons}
        iconSize={23}
        color={'black'}>

        </HeaderButton>
    )
};

export default HeaderComponent;