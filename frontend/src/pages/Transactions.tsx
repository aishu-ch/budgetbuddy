import React, { useState } from 'react';
import { TransactionList } from '../components/transactions/TransactionList';
import { TransactionForm } from '../components/transactions/TransactionForm';
import { PlusIcon, XIcon } from 'lucide-react';
export const Transactions = () => {
  const [showForm, setShowForm] = useState(false);
  return <div className="space-y-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <h1 className="text-2xl font-bold text-gray-800">Transactions</h1>
        <button onClick={() => setShowForm(!showForm)} className="flex items-center gap-1 px-4 py-2 border border-emerald-500 rounded-md bg-emerald-500 text-white hover:bg-emerald-600">
          {showForm ? <>
              <XIcon className="h-4 w-4" />
              Cancel
            </> : <>
              <PlusIcon className="h-4 w-4" />
              Add Transaction
            </>}
        </button>
      </div>
      {showForm && <TransactionForm />}
      <TransactionList />
    </div>;
};