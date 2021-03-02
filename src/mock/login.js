export default {
    /*登录成功*/
    login:(config)=>{
        return({
            code: 200,
            data:{
                success: true,
                message: '成功了',
                token: "fdasfdsafdsafdas"
            } 
        })
    }
}
