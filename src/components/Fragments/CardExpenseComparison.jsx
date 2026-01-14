import React from "react";
import CircularProgress from "@mui/material/CircularProgress";

function CardExpenseComparison({ data }) {
    const isLoading = !data || data.length === 0;

    return (
        <div className="h-full flex flex-col">
            <h2 className="text-2xl mb-6 text-gray-400 font-medium">
                Expenses Comparison
            </h2>

            <div className="flex-1 flex">
                {isLoading ? (
                    <div className="fixed inset-0 z-50 flex flex-col justify-center items-center text-primary">
                        <CircularProgress size={48} color="inherit" />
                        <span className="mt-3 text-sm">Loading Data...</span>
                    </div>
                ) : (
                    <div className="flex-1 grid md:grid-cols-3 gap-6 items-stretch">
                        {data.map((item) => (
                            <div
                                key={item.id}
                                className="h-full rounded-xl border border-gray-200 flex flex-col overflow-hidden"
                            >
                                <div className="bg-gray-100 p-4">
                                    <div className="flex justify-between">
                                        <div className="flex gap-3">
                                            <div className="bg-gray-200 p-3 rounded-lg text-gray-500">
                                                {item.icon}
                                            </div>

                                            <div>
                                                <div className="text-sm text-gray-500 font-bold">
                                                    {item.category}
                                                </div>
                                                <div className="font-bold text-lg text-black">
                                                    ${item.amount}
                                                </div>
                                            </div>
                                        </div>

                                        <div className="text-right">
                                            <div className="flex items-center justify-end gap-1 text-sm text-gray-700">
                                                <span>{item.percentage}%</span>
                                                <span>{item.arrow}</span>
                                            </div>
                                            <div className="text-xs text-gray-500">
                                                Compare to the last month
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-white flex-1 px-4 py-3 space-y-3 overflow-y-auto">
                                    {item.details.map((detail, idx) => (
                                        <div key={idx}>
                                            <div className="flex justify-between items-start text-sm">
                                                <span className="text-gray-700 font-bold">
                                                    {detail.name}
                                                </span>

                                                <div className="text-right">
                                                    <div className="font-bold text-gray-500">
                                                        ${detail.amount}
                                                    </div>
                                                    <div className="text-xs text-gray-500">
                                                        {detail.date}
                                                    </div>
                                                </div>
                                            </div>

                                            {idx !== item.details.length - 1 && (
                                                <div className="border-b border-gray-200 mt-3" />
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

export default CardExpenseComparison;
