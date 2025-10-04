import React from "react";
import { getSubscriberRows } from "@/lib/sheets";

type SubscriptionRow = [string, string, string, string];

const Subscriptions = async () => {
  const rows: SubscriptionRow[] = (await getSubscriberRows().catch((error) => {
    console.error("Failed to fetch subscriptions directly:", error);
    return [];
  })) as SubscriptionRow[];

  return (
    <div className="flex-1 p-4 sm:p-6">
      <h1 className="text-2xl font-semibold mb-5">Email Subscriptions ({rows.length})</h1>
      <div className="relative max-w-[800px] overflow-x-auto border border-gray-400 scrollbar-hide">
        <table className="w-full text-sm text-left text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3">
                #
              </th>
              <th scope="col" className="px-6 py-3">
                Email
              </th>
              <th scope="col" className="px-6 py-3">
                Locale
              </th>
              <th scope="col" className="px-6 py-3">
                Subscription Date
              </th>
              <th scope="col" className="px-6 py-3">
                Source
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, index) => (
              <tr key={index} className="bg-white border-b">
                <td className="px-6 py-4">{index + 1}</td>
                <td className="px-6 py-4 font-medium text-gray-900">{row[0]}</td>
                <td className="px-6 py-4">{row[1] || 'N/A'}</td>
                <td className="px-6 py-4">{new Date(row[2]).toLocaleDateString()}</td>
                <td className="px-6 py-4">{row[3] || 'N/A'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Subscriptions;