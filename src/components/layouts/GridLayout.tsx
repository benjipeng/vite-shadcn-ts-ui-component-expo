import React, { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface GridItemProps {
  title: string;
  children: React.ReactNode;
  component: React.ReactNode;
}

const GridItem: React.FC<GridItemProps> = ({ title, children, component }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Card className="bg-card text-card-foreground cursor-pointer hover:shadow-md transition-shadow">
          <CardHeader>
            <CardTitle>{title}</CardTitle>
          </CardHeader>
          <CardContent>{children}</CardContent>
        </Card>
      </DialogTrigger>
      <DialogContent className="w-11/12 max-w-full h-[90vh] max-h-screen flex flex-col">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>
        <div className="flex-grow overflow-y-auto mt-4 pr-4">{component}</div>
      </DialogContent>
    </Dialog>
  );
};

interface GridLayoutProps {
  items: {
    title: string;
    content: React.ReactNode;
    component: React.ReactNode;
  }[];
}

const GridLayout: React.FC<GridLayoutProps> = ({ items }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {items.map((item, index) => (
        <GridItem key={index} title={item.title} component={item.component}>
          {item.content}
        </GridItem>
      ))}
    </div>
  );
};

export default GridLayout;
