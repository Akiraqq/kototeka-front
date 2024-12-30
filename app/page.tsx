import { FC } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

const Home: FC = () => {
  return (
    <main className="w-screen h-screen flex justify-center items-center bg-slate-600">
      <Card>
        <CardHeader>
          <CardTitle>Card!</CardTitle>
          <CardDescription>Card Description</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Card Content</p>
        </CardContent>
        <CardFooter>
          <p>Card Footer</p>
        </CardFooter>
      </Card>
    </main>
  );
};

export default Home;
