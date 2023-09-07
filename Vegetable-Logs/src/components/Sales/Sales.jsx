import useSales from "../../hooks/useSales";
import salesService from "../../services/sales-service";

const Sales = () => {
    // const { sales, loading, error } = useSales("64f9c8a175942fd862dd9d71"); => Takes User ID

    // salesService.update("64f9c99375942fd862dd9de7", "shipped") => Takes cart ID and status("paid" || "shipped" || "delivered")
    //     .then((res) => {
    //         console.log("res", res.data);
    //     })
    //     .catch((err) => {
    //         console.log("err", err);
    //     });

    

    return <h1>Sales</h1>
}

export default Sales;