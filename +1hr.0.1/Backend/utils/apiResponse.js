class ApiResponse{
    constructor(
        statusCode,
        message="request successful",
        data,
    ){
        this.statusCode=statusCode;
        this.data=data;
        this.message=message;
        this.success=statusCode < 400;
    }
};