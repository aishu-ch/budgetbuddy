import React from 'react';
import { PlusIcon, ArrowUpIcon, ArrowDownIcon, TrendingUpIcon, TrendingDownIcon } from 'lucide-react';
export const Dashboard = () => {
  return <div className="space-y-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
        <button className="flex items-center gap-1 px-4 py-2 border border-emerald-500 rounded-md bg-emerald-500 text-white hover:bg-emerald-600">
          <PlusIcon className="h-4 w-4" />
          Add Transaction
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="border border-gray-300 rounded-md p-4 bg-white">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-medium text-gray-500">
              Current Balance
            </h3>
          </div>
          <div className="mt-2">
            <p className="text-2xl font-bold text-gray-800">$2,450.25</p>
            <p className="flex items-center text-sm text-gray-600 mt-1">
              <TrendingUpIcon className="h-3 w-3 mr-1" />
              <span className="text-gray-800">+15%</span>
              <span className="mx-1">from last month</span>
            </p>
          </div>
        </div>
        <div className="border border-gray-300 rounded-md p-4 bg-white">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-medium text-gray-500">
              Monthly Income
            </h3>
          </div>
          <div className="mt-2">
            <p className="text-2xl font-bold text-gray-800">$4,250.00</p>
            <p className="flex items-center text-sm text-gray-600 mt-1">
              <ArrowUpIcon className="h-3 w-3 mr-1" />
              <span className="text-gray-800">$250.00</span>
              <span className="mx-1">from last month</span>
            </p>
          </div>
        </div>
        <div className="border border-gray-300 rounded-md p-4 bg-white">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-medium text-gray-500">
              Monthly Expenses
            </h3>
          </div>
          <div className="mt-2">
            <p className="text-2xl font-bold text-gray-800">$1,800.75</p>
            <p className="flex items-center text-sm text-gray-600 mt-1">
              <TrendingDownIcon className="h-3 w-3 mr-1" />
              <span className="text-gray-800">-8%</span>
              <span className="mx-1">from last month</span>
            </p>
          </div>
        </div>
        <div className="border border-gray-300 rounded-md p-4 bg-white">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-medium text-gray-500">Savings Rate</h3>
          </div>
          <div className="mt-2">
            <p className="text-2xl font-bold text-gray-800">42%</p>
            <p className="flex items-center text-sm text-gray-600 mt-1">
              <ArrowUpIcon className="h-3 w-3 mr-1" />
              <span className="text-gray-800">+5%</span>
              <span className="mx-1">from last month</span>
            </p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="border border-gray-300 rounded-md bg-white">
          <div className="p-4 border-b border-gray-300">
            <h2 className="text-lg font-semibold text-gray-800">
              Expense Breakdown
            </h2>
          </div>
          <div className="p-4 flex flex-col items-center justify-center h-64">
            <div className="relative h-40 w-40 border-4 border-gray-200 rounded-full">
              <div className="absolute top-0 left-0 h-40 w-40 border-4 border-t-gray-800 border-r-gray-800 border-b-transparent border-l-transparent rounded-full"></div>
              <div className="absolute top-0 left-0 h-40 w-40 border-4 border-t-transparent border-r-transparent border-b-gray-400 border-l-gray-400 rounded-full"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-sm text-gray-500">Chart</span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-4">
              <div className="flex items-center">
                <span className="h-3 w-3 bg-gray-800 rounded-full mr-2"></span>
                <span className="text-sm text-gray-600">Housing (40%)</span>
              </div>
              <div className="flex items-center">
                <span className="h-3 w-3 bg-gray-400 rounded-full mr-2"></span>
                <span className="text-sm text-gray-600">Food (25%)</span>
              </div>
              <div className="flex items-center">
                <span className="h-3 w-3 bg-gray-600 rounded-full mr-2"></span>
                <span className="text-sm text-gray-600">Transport (15%)</span>
              </div>
              <div className="flex items-center">
                <span className="h-3 w-3 bg-gray-300 rounded-full mr-2"></span>
                <span className="text-sm text-gray-600">Others (20%)</span>
              </div>
            </div>
          </div>
        </div>
        <div className="border border-gray-300 rounded-md bg-white">
          <div className="p-4 border-b border-gray-300">
            <h2 className="text-lg font-semibold text-gray-800">
              Monthly Trend
            </h2>
          </div>
          <div className="p-4 flex items-center justify-center h-64">
            <div className="w-full h-48 flex items-end justify-between gap-2">
              <div className="flex flex-col items-center">
                <div className="w-8 bg-gray-300 rounded-t-sm" style={{
                height: '30%'
              }}></div>
                <span className="text-xs text-gray-500 mt-1">Jan</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-8 bg-gray-300 rounded-t-sm" style={{
                height: '45%'
              }}></div>
                <span className="text-xs text-gray-500 mt-1">Feb</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-8 bg-gray-300 rounded-t-sm" style={{
                height: '60%'
              }}></div>
                <span className="text-xs text-gray-500 mt-1">Mar</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-8 bg-gray-300 rounded-t-sm" style={{
                height: '40%'
              }}></div>
                <span className="text-xs text-gray-500 mt-1">Apr</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-8 bg-gray-300 rounded-t-sm" style={{
                height: '75%'
              }}></div>
                <span className="text-xs text-gray-500 mt-1">May</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-8 bg-gray-800 rounded-t-sm" style={{
                height: '90%'
              }}></div>
                <span className="text-xs text-gray-500 mt-1">Jun</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border border-gray-300 rounded-md bg-white">
        <div className="p-4 border-b border-gray-300">
          <h2 className="text-lg font-semibold text-gray-800">
            Recent Transactions
          </h2>
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
              <tr className="hover:bg-gray-50">
                <td className="px-4 py-3 text-sm text-gray-700">2023-05-01</td>
                <td className="px-4 py-3 text-sm text-gray-700">
                  Grocery Shopping
                </td>
                <td className="px-4 py-3 text-sm">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                    Food
                  </span>
                </td>
                <td className="px-4 py-3 text-sm text-right font-medium text-gray-600">
                  <div className="flex items-center justify-end gap-1">
                    <ArrowDownIcon className="h-3 w-3" />
                    $120.50
                  </div>
                </td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-4 py-3 text-sm text-gray-700">2023-05-02</td>
                <td className="px-4 py-3 text-sm text-gray-700">Salary</td>
                <td className="px-4 py-3 text-sm">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                    Income
                  </span>
                </td>
                <td className="px-4 py-3 text-sm text-right font-medium text-gray-800">
                  <div className="flex items-center justify-end gap-1">
                    <ArrowUpIcon className="h-3 w-3" />
                    +$2,500.00
                  </div>
                </td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-4 py-3 text-sm text-gray-700">2023-05-03</td>
                <td className="px-4 py-3 text-sm text-gray-700">
                  Electric Bill
                </td>
                <td className="px-4 py-3 text-sm">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                    Utilities
                  </span>
                </td>
                <td className="px-4 py-3 text-sm text-right font-medium text-gray-600">
                  <div className="flex items-center justify-end gap-1">
                    <ArrowDownIcon className="h-3 w-3" />
                    $85.20
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="p-4 border-t border-gray-300 text-center">
          <a href="#" className="text-sm font-medium text-gray-800 hover:underline">
            View all transactions
          </a>
        </div>
      </div>
    </div>;
};