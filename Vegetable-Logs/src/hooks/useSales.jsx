import { useEffect, useState } from "react";
import salesService from "../services/sales-service";

const useSales = (uid) => {
    const [sales, setSales] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        setLoading(true);

        salesService.get(uid)
            .then((res) => {
                setSales(res.data);
                setLoading(false);
            })
            .catch((err) => {
                setError(err);
            })

    }, [uid]);

    return { sales, loading, error };
}

export default useSales;