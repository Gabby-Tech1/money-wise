import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Transaction } from "@/types/transaction";

interface TransactionsModalProps {
  isOpen: boolean;
  onClose: () => void;
  transactions: Transaction[];
}

export function TransactionsModal({ isOpen, onClose, transactions }: TransactionsModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>All Transactions</DialogTitle>
        </DialogHeader>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Merchant</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Time</TableHead>
              <TableHead className="text-right">Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {transactions.map((transaction) => (
              <TableRow key={transaction.id}>
                <TableCell className="font-medium">{transaction.merchant}</TableCell>
                <TableCell>{transaction.category}</TableCell>
                <TableCell>{transaction.date}</TableCell>
                <TableCell>{transaction.time}</TableCell>
                <TableCell className={`text-right font-medium ${
                  transaction.amount > 0 ? "text-finance-success" : ""
                }`}>
                  {transaction.amount > 0 ? "+" : ""}${Math.abs(transaction.amount).toFixed(2)}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </DialogContent>
    </Dialog>
  );
}
