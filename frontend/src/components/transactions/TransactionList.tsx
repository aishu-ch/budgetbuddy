import React from 'react';
import { ArrowUpIcon, ArrowDownIcon, SearchIcon } from 'lucide-react';
// Sample transaction data
const transactions = [{
  id: 1,
  date: '2023-05-01',
  description: 'Grocery Shopping',
  category: 'Food',
  amount: -120.5,
  type: 'expense'
}, {
  id: 2,
  date: '2023-05-02',
  description: 'Salary',
  category: 'Income',
  amount: 2500.0,
  type: 'income'
}, {
  id: 3,
  date: '2023-05-03',
  description: 'Electric Bill',
  category: 'Utilities',
  amount: -85.2,
  type: 'expense'
}, {
  id: 4,
  date: '2023-05-05',
  description: 'Restaurant',
  category: 'Food',
  amount: -45.8,
  type: 'expense'
}, {
  id: 5,
  date: '2023-05-10',
  description: 'Freelance Work',
  category: 'Income',
  amount: 350.0,
  type: 'income'
}];
export const TransactionList = () => {
  return <div className="bg-white border border-gray-300 rounded-md">
      <div className="p-4 border-b border-gray-300">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-3">
          <h2 className="text-lg font-semibold text-gray-800">
            Recent Transactions
          </h2>
          <div className="relative w-full sm:w-64">
            <input type="text" placeholder="Search transactions..." className="w-full px-3 py-2 pl-9 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-400" />
            <SearchIcon className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
          </div>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50 border-b border-gray-300">
            <tr>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Date
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Description
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Category
              </th>
              <th className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                Amount
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {transactions.map(transaction => <tr key={transaction.id} className="hover:bg-gray-50">
                <td className="px-4 py-3 text-sm text-gray-700">
                  {transaction.date}
                </td>
                <td className="px-4 py-3 text-sm text-gray-700">
                  {transaction.description}
                </td>
                <td className="px-4 py-3 text-sm">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                    {transaction.category}
                  </span>
                </td>
                <td className={`px-4 py-3 text-sm text-right font-medium ${transaction.type === 'income' ? 'text-gray-800' : 'text-gray-600'}`}>
                  <div className="flex items-center justify-end gap-1">
                    {transaction.type === 'income' ? <ArrowUpIcon className="h-3 w-3" /> : <ArrowDownIcon className="h-3 w-3" />}
                    {transaction.type === 'income' ? '+' : ''}$
                    {Math.abs(transaction.amount).toFixed(2)}
                  </div>
                </td>
              </tr>)}
          </tbody>
        </table>
      </div>
      <div className="bg-gray-50 px-4 py-3 border-t border-gray-300 flex items-center justify-between">
        <div className="text-sm text-gray-700">
          Showing <span className="font-medium">5</span> of{' '}
          <span className="font-medium">20</span> transactions
        </div>
        <div className="flex items-center space-x-2">
          <button className="px-3 py-1 border border-gray-300 rounded-md bg-white text-sm text-gray-700 hover:bg-gray-50">
            Previous
          </button>
          <button className="px-3 py-1 border border-gray-300 rounded-md bg-white text-sm text-gray-700 hover:bg-gray-50">
            Next
          </button>
        </div>
      </div>
    </div>;
};