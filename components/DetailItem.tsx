export interface DetailProps {
  children: React.ReactNode;
  styles: string;
}

export const DetailItem = ({ children, styles }: DetailProps) => (
  <li className={`text-sm text-center flex flex-col justify-center md:px-4 px-2  mx-0 ${styles}`}>
    {children}
  </li>
);

export default DetailItem;
