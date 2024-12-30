import PropTypes from "prop-types";
import { createContext, useState, useRef, useCallback,useMemo } from "react";
import PropTypes from 'prop-types';

const initialCtxValue = {
    snackbar: {
        open: false,
        message:'',
        type: 'info',
    },
    showSnackBar: ({message, type = 'info', timeOut = 5000}) =>{},
    hideSnackBar: () =>{},
};

export const SnackbarContext = createContext(initialCtxValue);

const SnackbarProvider  = ({children}) =>{
    const [snackbar, ssetSnackbar] = useState({
        open: false,
        message: '',
        type: 'info',
    });
    const timeoutRef = useRef()

    //preventing re renders 
    const contextValue =  useMemo(() =>{
        return {showSnackBar, hideSnackBar};
    },[showSnackBar, hideSnackBar]);

    return (
        <SnackbarContext.Provider value = {contextValue}>
            {children}
        </SnackbarContext.Provider>
    )
};

SnackbarProvider.propTypes = {
    children : PropTypes.any,
};

export default SnackbarProvider;