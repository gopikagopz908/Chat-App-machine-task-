class CustomError extends Error{
    constructor(message,status){
        super(message)
        this.status=status
        Error.captureStackTrace(this,this.constructor)
    }
}
export default CustomError;