import React from 'react';
import { PlusIcon, MinusIcon } from 'lucide-react';
const categories = [{
  id: 1,
  name: 'Food',
  type: 'expense'
}, {
  id: 2,
  name: 'Transportation',
  type: 'expense'
}, {
  id: 3,
  name: 'Housing',
  type: 'expense'
}, {
  id: 4,
  name: 'Utilities',
  type: 'expense'
}, {
  id: 5,
  name: 'Entertainment',
  type: 'expense'
}, {
  id: 6,
  name: 'Healthcare',
  type: 'expense'
}, {
  id: 7,
  name: 'Salary',
  type: 'income'
}, {
  id: 8,
  name: 'Investments',
  type: 'income'
}, {
  id: 9,
  name: 'Gifts',
  type: 'income'
}];
export const TransactionForm = () => {
  return <div className="bg-white border border-gray-300 rounded-md p-4">
      <h2 className="text-lg font-semibold mb-4 text-gray-800">
        Add New Transaction
      </h2>
      <form className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="transactionType" className="block text-sm font-medium text-gray-700 mb-1">
              Transaction Type
            </label>
            <div className="grid grid-cols-2 gap-3">
              <button type="button" className="flex items-center justify-center gap-1 px-4 py-2 border border-gray-300 rounded-md bg-white text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-500">
                <MinusIcon className="h-4 w-4" />
                Expense
              </button>
              <button type="button" className="flex items-center justify-center gap-1 px-4 py-2 border border-gray-300 rounded-md bg-white text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-500">
                <PlusIcon className="h-4 w-4" />
                Income
              </button>
            </div>
          </div>
          <div>
            <label htmlFor="amount" className="block text-sm font-medium text-gray-700 mb-1">
              Amount
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <span className="text-gray-500">$</span>
              </div>
              <input type="number" id="amount" className="w-full pl-7 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-400" placeholder="0.00" step="0.01" />
            </div>
          </div>
        </div>
        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
            Description
          </label>
          <input type="text" id="description" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-400" placeholder="What was this transaction for?" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
              Category
            </label>
            <select id="category" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-400">
              <option value="">Select a category</option>
              <optgroup label="Expenses">
                {categories.filter(category => category.type === 'expense').map(category => <option key={category.id} value={category.id}>
                      {category.name}
                    </option>)}
              </optgroup>
              <optgroup label="Income">
                {categories.filter(category => category.type === 'income').map(category => <option key={category.id} value={category.id}>
                      {category.name}
                    </option>)}
              </optgroup>
            </select>
          </div>
          <div>
            <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">
              Date
            </label>
            <input type="date" id="date" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-400" />
          </div>
        </div>
        <div>
          <label htmlFor="notes" className="block text-sm font-medium text-gray-700 mb-1">
            Notes (Optional)
          </label>
          <textarea id="notes" rows={3} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-400" placeholder="Add any additional details..."></textarea>
        </div>
        <div className="flex justify-end">
          <button type="button" className="mr-3 px-4 py-2 border border-gray-300 rounded-md bg-white text-gray-900 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-400">
            Cancel
          </button>
          <button type="submit" className="px-4 py-2 border border-emerald-500 rounded-md bg-emerald-500 text-white hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-400">
            Save Transaction
          </button>
        </div>
      </form>
    </div>;
};