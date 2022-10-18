alert (converTobytes(5, "MB"));
function converTobytes( capacyty , from){
    
    switch(from){
        case "B":
            capacyty *= 1; 
            /*
            1_000_000_000
            1 * 10 ** 9
            1e9
            */
            break;
        case "KB":
            capacyty *= 1e3; 
            break;
        case "MB":
            capacyty *= 1e6; 
            break;
        case "GB":
            capacyty *= 1e9; 
            break;
        case "TB":
            capacyty *= 1e12; 
            break;
        case "PB":
            capacyty *= 1e15; 
            break;
        case "EB":
            capacyty *= 1e18; 
            break;
    }
    return capacyty;
}
