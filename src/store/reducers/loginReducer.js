
const initLoginState = {
    config:{},
};
const loginReducer = (state = initLoginState , action) => {
    const {
        type ,
        payload ,
        error
    } = action ;
    switch (type) {
       
        default :
            return state ;
    }
};

export default loginReducer ;