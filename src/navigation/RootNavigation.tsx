import * as React from 'react';
import { NavigationContainerRef } from '@react-navigation/native';

export const navigationRef = React.createRef<NavigationContainerRef>();
export const drawerNavigationRef = React.createRef()

/* eslint-disable */
export function navigate(name: string, params?: any) {
    /* eslint-enable */
    navigationRef.current?.navigate(name, params);
}

export function navigation() {
    throw new Error('Function not implemented.');
}
