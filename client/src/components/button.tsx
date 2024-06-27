import { Button } from "../../components/ui/button";

type TbuttonProps = {
  title: string;
  onClick?: () => void;
};

export default function CTAButton({ title, onClick }: TbuttonProps) {
  return (
    <Button
      asChild
      variant="outline"
      className="border-[#14a8e1] cursor-pointer dark:border-cornblue-500/80 text-[#14a8e1] hover:text-cornblue-500 group relative inline-flex rounded-full border font-semibold backdrop-blur hover:bg-zinc-50 dark:text-white dark:hover:bg-zinc-800 dark:hover:text-white"
    >
      <a onClick={onClick} className="font-semibold text-lg text-blue-500">
        {title}
      </a>
    </Button>
  );
}
