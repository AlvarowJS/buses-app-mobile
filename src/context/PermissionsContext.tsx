import React, { createContext } from 'react'
import { PermissionStatus } from 'react-native-permissions'

export interface PermissionState {
  locationStatus: PermissionStatus;
}

export const permissionInitState: PermissionState = {
    locationStatus: 'unavailable',
}

export const PermissionsContext = createContext({}); // que exporta

export const PermissionsProvider = ({children}: any) => {

    return(
        <PermissionsContext.Provider value={{

        }}>
            {children}
        </PermissionsContext.Provider>
    )
}