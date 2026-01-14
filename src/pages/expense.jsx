import React, { useState, useEffect, useContext } from "react";
import MainLayout from "../components/Layouts/MainLayout";
import CardExpenseComparison from "../components/Fragments/CardExpenseComparison";
import { expensesBreakdowns } from "../data";
import AppSnackbar from "../components/Elements/AppSnackbar";
import { AuthContext } from "../context/authContext";

function Expenses() {
    const { logout } = useContext(AuthContext);

    const [snackbar, setSnackbar] = useState({
        open: false,
        message: "",
        severity: "success",
    });

    const [comparisonData, setComparisonData] = useState([]);
    useEffect(() => {
        const timer = setTimeout(() => {
            setComparisonData(expensesBreakdowns);
        }, 1200);
        return () => clearTimeout(timer);
    }, []);

    const handleCloseSnackbar = () => {
        setSnackbar((prev) => ({ ...prev, open: false }));
    };

    return (
        <MainLayout>
            <div className="grid grid-cols-12 gap-6 ">
                <div className="col-span-12 h-full">
                    <CardExpenseComparison data={comparisonData} />
                </div>
            </div>
            <AppSnackbar
                open={snackbar.open}
                message={snackbar.message}
                severity={snackbar.severity}
                onClose={handleCloseSnackbar}
            />
        </MainLayout>
    );
}

export default Expenses;
